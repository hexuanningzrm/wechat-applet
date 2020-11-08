<template>
    <div>
        <div class="Index" v-if="isAuth">
            <!--首页搜索输入框组件-->
            <HomeSearchBar
                v-bind:disabled="true"
                v-bind:hot-search="hotSearch"
                v-on:onClick="goToSearchBarClick"
            >
            </HomeSearchBar>
            <!--首页图书卡片组件-->
            <HomeCart
                v-bind:data="homeCart"
                v-on:onBookClick="onHomeBookClick"
            >
            </HomeCart>
            <!--首页banner组件-->
            <HomeBanner
                img="http://www.youbaobao.xyz/book/res/bg.jpg"
                title="Banner"
                subTitle="立即体验"
                v-on:onClick="onBannerClick"
            >
            </HomeBanner>
            <!--图书热门推荐组件-->
            <div v-bind:style="{marginTop: '23px'}">
                <HomeBook
                    title="热门推荐"
                    v-bind:row="1"
                    v-bind:col="3"
                    v-bind:data="recommend"
                    mode="col"
                    btnText="换一批"
                    v-on:onMoreClick="recommendChange('recommend')"
                    v-on:onBookClick="onHomeBookClick"
                >
                </HomeBook>
            </div>
            <!--图书免费阅读组件-->
            <div v-bind:style="{marginTop: '23px'}">
                <HomeBook
                    title="免费阅读"
                    v-bind:row="4"
                    v-bind:col="2"
                    v-bind:data="freeRead"
                    mode="row"
                    btnText="换一批"
                    v-on:onMoreClick="recommendChange('freeRead')"
                    v-on:onBookClick="onHomeBookClick"
                >
                </HomeBook>
            </div>
            <!--首页图书分类组件-->
            <div v-bind:style="{marginTop: '23px'}">
                <HomeBook
                    title="分类推荐"
                    v-bind:row="4"
                    v-bind:col="2"
                    v-bind:data="category"
                    mode="category"
                    btnText="查看全部"
                    v-on:onMoreClick="goToCategoryList"
                    v-on:onBookClick="onCategoryClick"
                >
                </HomeBook>
            </div>
        </div>
        <!--用户获取授权信息组件-->
        <Auth v-if="!isAuth" v-on:getUserInfo="init"></Auth>
    </div>
</template>

<script>
    import Auth from '../../component/base/Auth'
    import HomeSearchBar from '../../component/home/HomeSearchBar'
    import HomeCart from '../../component/home/HomeCart'
    import HomeBanner from '../../component/home/HomeBanner'
    import HomeBook from '../../component/home/HomeBook'
    import { freeRead, getHomeData, recommend, register } from '../../api/index'
    import { getSetting, getStorageSync, getUserInfo, getUserOpenId, setStorageSync } from '../../api/wechat'

    export default {
        /**
         * 组件名称
         */
        name: 'Index',

        /**
         * 配置局部注册组件
         */
        components: {
            Auth,
            HomeSearchBar,
            HomeCart,
            HomeBanner,
            HomeBook
        },

        /**
         * 接收父组件的数据
         */
        props: {},

        /**
         * 数据对象
         */
        data() {
            return {
                // 是否显示授权弹窗
                isAuth: true,
                // 首页搜索关键字
                hotSearch: '',
                // 图书卡片
                homeCart: {},
                // Banner
                banner: {},
                // 图书热门推荐
                recommend: [],
                // 图书免费阅读
                freeRead: [],
                // 图书当前最热
                hotBook: [],
                // 图书分类
                category: []
            }
        },

        /**
         * 方法
         */
        methods:{
            // 点击搜索事件
            goToSearchBarClick() {
                // 跳到到搜索页
                this.$router.push({
                    path: '/pages/search/main',
                    query: {
                        hotSearch: this.hotSearch
                    }
                })
            },
            // 点击Banner事件
            onBannerClick(){
                console.log('onBannerClick')
            },
            // 点击换一批按钮事件
            onBookMoreClick() {
                console.log('morebook click')
            },
            // 点击图书推荐事件
            onHomeBookClick(book) {
                this.$router.push({
                    path: '/pages/detail/main',
                    query: {
                        fileName: book.fileName
                    }
                })
            },
            // 点击图书分类事件
            onCategoryClick(category) {
                this.$router.push({
                    path: '/pages/list/main',
                    query: {
                        key: 'categoryId',
                        text: category.category,
                        title: category.categoryText
                    }
                })
            },
            // 点击查看全部事件
            goToCategoryList(){
                mpvue.switchTab({
                    url: "/pages/categoryList/main"
                })
            },
            // 获取用户的当前设置
            getSetting() {
                getSetting('userInfo',
                    () => {
                        this.isAuth = true
                        this.getUserInfo()
                    }, () => {
                        this.isAuth = false
                    }
                )
            },
            // 获取微信用户信息API
            getUserInfo() {
                const onOpenIdComplete = (openId, userInfo) => {
                    this.getHomeData(openId, userInfo)
                    // 获取微信用户注册API
                    register(openId, userInfo)
                }
                getUserInfo(
                    (userInfo) => {
                        // 设置微信本地存储同步API
                        setStorageSync('userInfo', userInfo)
                        const openId = getStorageSync('openId')
                        if (!openId || openId.length === 0) {
                            // 获取微信用户openId的API
                            getUserOpenId(openId => onOpenIdComplete(openId, userInfo))
                        } else {
                            onOpenIdComplete(openId, userInfo)
                        }
                    }, () => {
                        console.log('failed...') // 获取用户信息抛出异常
                    }
                )
            },
            // 优化getSetting方法
            init() {
                this.getSetting()
            },
            // 获取首页API
            getHomeData(openId, userInfo) {
                getHomeData({ openId }).then(response => {
                    const {
                        data: {
                            hotSearch: {
                                keyword
                            },
                            shelf,
                            banner,
                            recommend,
                            freeRead,
                            hotBook,
                            category,
                            shelfCount
                        }
                    } = response.data
                    this.hotSearch = keyword
                    this.banner = banner
                    this.recommend = recommend
                    this.freeRead = freeRead
                    this.hotBook = hotBook
                    this.category = category
                    this.homeCart = {
                        bookList: shelf,
                        num: shelfCount,
                        userInfo
                    }
                })
            },
            // 获取图书推荐&分类API
            recommendChange(key) {
                switch (key) {
                    case 'recommend':
                        recommend().then(response => {
                            this.recommend = response.data.data
                        })
                        break
                    case 'freeRead':
                        freeRead().then(response => {
                            this.freeRead = response.data.data
                        })
                        break
                }
            }
        },

        /**
         * 业务逻辑
         */
        mounted() {
            this.init()
            this.getHomeData()
        },

        /**
         * 计算属性
         */
        computed: {}
    }
</script>

<style lang="scss">

</style>
