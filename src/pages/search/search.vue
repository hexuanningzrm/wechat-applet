<!--搜索-->
<template>
    <div>
        <!--搜索输入框组件-->
        <HomeSearchBar
            v-bind:focus="searchFocus"
            v-bind:hotSearch="hotSearchkeyword"
            v-on:onChange="onChange"
            v-on:onClick="onClear"
            v-on:onConfirm="onConfirm"
            ref="searchBar"
        >
        </HomeSearchBar>
        <!--搜索热门关键字组件-->
        <TagGroup
            headerText="热门搜索"
            btnText="换一批"
            v-bind:value="hotSearchArray"
            v-on:onBtnClick="changeHotSearch"
            v-on:onTagClick="showBookDetail"
            v-if="hotSearchArray.length > 0 && !showList"
        >
        </TagGroup>
        <!--搜索历史组件-->
        <TagGroup
            headerText="历史搜索"
            btnText="清空"
            v-bind:value="historySearch"
            v-on:onBtnClick="clearHistorySearch"
            v-on:onTagClick="searchKeyWord"
            v-if="historySearch.length > 0 && !showList"
        >
        </TagGroup>
        <!--搜索图书列表组件-->
        <SearchList
            v-bind:data="searchList"
            v-if="showList"
        >
        </SearchList>
    </div>
</template>

<script>
    import HomeSearchBar from '../../component/home/HomeSearchBar'
    import TagGroup from '../../component/base/TagGroup'
    import SearchList from '../../component/search/SearchList'
    import { getStorageSync, setStorageSync, showToast } from '../../api/wechat'
    import { hotSearch, search } from '../../api'

    export default {
        /**
         * 名称
         */
        name: "",

        /**
         * 配置局部注册组件
         */
        components: {
            HomeSearchBar,
            TagGroup,
            SearchList
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
                // 热门搜索
                hotSearch: [],
                // 热门搜索关键字
                hotSearchkeyword: '',
                // 历史搜索
                historySearch: [],
                // 搜索图书列表
                searchList: {},
                // 搜索输入框焦点默认显示
                searchFocus: true,
                // openId默认为空
                openId: '',
                // 搜索页数默认第一页
                page: 1
            };
        },

        /**
         * 方法
         */
        methods: {
            // 点击热门搜索换一批事件
            changeHotSearch() {
                hotSearch().then(response => {
                    this.hotSearch = response.data.data
                })
            },
            // 点击图书详情事件
            showBookDetail(text, index) {
                console.log('show book detail', index)
            },
            // 点击清空历史搜索事件
            clearHistorySearch() {
                this.historySearch = []
                // 清空Storage缓存
                setStorageSync('KEY_HISTORY_SEARCH', [])
            },
            // 点击虚拟键盘监听事件
            onConfirm(keyword) {
                console.log('123')
                // 判断是否有搜索关键词，如果没有获取热门搜索词发起请求，否则使用搜索关键词发起请求
                if (!keyword || keyword.trim().length === 0) {
                    keyword = this.hotSearchkeyword
                    this.$refs.searchBar.setValue(keyword)
                } else {

                }
                this.onSearch(keyword)
                // 将搜索结果写入历史搜索
                if (!this.historySearch.includes(keyword)) {
                    this.historySearch.push(keyword)
                    setStorageSync('KEY_HISTORY_SEARCH', this.historySearch)
                }
                // 将搜索框失去焦点
                // this.searchFocus = false
            },
            // 输入搜索内容的事件
            onChange(keyword) {
                // trim()  去除字符串的头尾空格
                if (!keyword || keyword.trim().length === 0) {
                    this.searchList = {}
                    return
                }
                this.onSearch(keyword)
            },
            // 搜索关键字API传参
            onSearch(keyword) {
                search({
                    keyword,
                    openId: this.openId,
                    page: this.page
                }).then(response => {
                    this.searchList = response.data.data
                })
            },
            // 点击清空输入框搜索结果数据
            onClear() {
                this.searchList = {}
            },
            // 点击历史搜索关键字事件
            searchKeyWord(text) {
                // 点击传入文本到输入框
                this.$refs.searchBar.setValue(text)
                // 文本自动查询
                this.onSearch(text)
            }
        },

        /**
         * 钩子函数
         */
        mounted() {
            // 获取openId
            this.openId = getStorageSync('openId')
            // 获取热门搜索关键词
            hotSearch().then(response => {
                this.hotSearch = response.data.data
            })
            this.page = 1
            // 展示输入框搜索关键字
            this.hotSearchkeyword = this.$route.query.hotSearch
            // 展示历史搜索默认数据
            this.historySearch = getStorageSync('KEY_HISTORY_SEARCH') || []
        },

        /**
         * 计算属性
         */
        computed: {
            showList() {
                const keys = Object.keys(this.searchList)
                return keys.length > 0
            },
            hotSearchArray() {
                const _hotSearch = []
                this.hotSearch.forEach(o => _hotSearch.push(o.title))
                return _hotSearch
            }
        },

        /**
         * 监测屏幕的位置
         */
        onPageScroll() {
            if (this.searchFocus) {
                // this.searchFocus = false
            }
        },

        /**
         * 监测页面上拉触底
         */
        onReachBottom() {
            if (this.showList) {
                this.page++
                const searchWord = this.$refs.searchBar.getValue()
                search({
                    keyword: searchWord,
                    openId: this.openId,
                    page: this.page
                }).then(response => {
                    const { book } = response.data.data
                    if (book && book.length > 0) {
                        this.searchList.book.push(...book)
                    } else {
                        showToast('没有更多数据了')
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
