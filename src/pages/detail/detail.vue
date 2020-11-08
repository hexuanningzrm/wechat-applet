<!--图书详情-->
<template>
    <div>
        <div>
            <!--图书详情封面组件-->
            <DetailBook
                v-bind:book="book"
            >
            </DetailBook>
            <!--图书详情评分统计&访问人数组件-->
            <DetailStat
                v-bind:readers="book.readers"
                v-bind:readerNum="book.readerNum"
                v-bind:rankNum="book.rankNum"
                v-bind:rankAvg="book.rankAvg"
            >
            </DetailStat>
            <!--图书详情评分组件-->
            <DetailRate
                v-bind:rate-value="book.rateValue"
                v-on:onRateChange="onRateChange"
            >
            </DetailRate>
            <!--图书详情目录组件-->
            <DetailContent
                v-bind:contents="contents"
                v-on:readBook="readBook"
            >
            </DetailContent>
            <!--图书详情底部按钮组件-->
            <DetailBottom
                v-bind:isInShelf="isInShelf"
                v-on:handleShelf="handleShelf"
                v-on:readBook="readBook"
            >
            </DetailBottom>
        </div>
        <!--Toast 轻提示-->
        <van-toast id="van-toast"></van-toast>
    </div>
</template>

<script>
    import DetailBook from '../../component/detail/DetailBook'
    import DetailStat from '../../component/detail/DetailStat'
    import DetailRate from '../../component/detail/DetailRate'
    import DetailContent from '../../component/detail/DetailContent'
    import DetailBottom from '../../component/detail/DetailBottom'
    import Toast from 'vant-weapp/dist/toast/toast'
    import { bookContents, bookDetail, bookIsInShelf, bookRanSave, bookShelfRemove, bookShelfSave } from '../../api'
    import { getStorageSync } from '../../api/wechat'

    export default {
        /**
         * 名称
         */
        name: "",

        /**
         * 配置局部注册组件
         */
        components: {
            DetailBook,
            DetailStat,
            DetailRate,
            DetailContent,
            DetailBottom
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
                // 图书封面
                book: {},
                // 图书目录
                contents: [],
                // 显示加入/移出书架
                isInShelf: false
            }
        },

        /**
         * 方法
         */
        methods: {
            // 点击轻点评分事件
            onRateChange(value) {
                const openId = getStorageSync('openId')
                const { fileName } = this.$route.query
                // 获取图书评分API
                bookRanSave({ openId, fileName, rank: value }).then(() => {
                    // 保存评分成功刷新页面数据
                    this.getBookDetail()
                })

            },
            // 点击加入/移出书架事件
            handleShelf() {
                // 加入书架
                const openId = getStorageSync('openId')
                const { fileName } = this.$route.query
                if (!this.isInShelf) {
                    bookShelfSave({ openId, fileName }).then(() => {
                        this.getBookIsInShelf()
                        Toast.success('加入成功')
                    })

                } else {
                    // 移出书架
                    const vue = this
                    mpvue.showModal({
                        title: '提示',
                        content: `是否确认将《${this.book.title}》移出书架？`,
                        success(res) {
                            if (res.confirm) {
                                bookShelfRemove({ openId, fileName }).then(() => {
                                    vue.getBookIsInShelf()
                                })
                            }
                        }
                    })
                }
            },
            // 点击图书目录列表内容、阅读事件
            readBook(href) {
                const query = {
                    fileName: this.book.fileName,
                    opf: this.book.opf
                }
                if (href) {
                    const index = href.indexOf('/')
                    if (index >= 0) {
                        query.navigation = href.slice(index + 1)
                    } else {
                        query.navigation = href
                    }
                }
                if (this.book && this.book.fileName) {
                    this.$router.push({
                        path: '/pages/read/main',
                        query
                    })
                }
            },
            // 图书详情封面
            getBookDetail() {
                const openId = getStorageSync('openId')
                const { fileName } = this.$route.query
                if (openId && fileName) {
                    // 获取图书详情API
                    bookDetail({ openId, fileName }).then(response => {
                        this.book = response.data.data
                    })
                }
            },
            // 图书详情目录
            getBookContents() {
                const { fileName } = this.$route.query
                if (fileName) {
                    // 获取图书目录数据API
                    bookContents({ fileName }).then(response => {
                        this.contents = response.data.data
                    })
                }
            },
            // 图书详情加入/移出按钮
            getBookIsInShelf() {
                const openId = getStorageSync('openId')
                const { fileName } = this.$route.query
                if (openId && fileName) {
                    bookIsInShelf({ openId, fileName }).then(response => {
                        const { data } = response.data
                        data.length === 0 ? this.isInShelf = false : this.isInShelf = true
                    })
                }
            }
        },

        /**
         * 钩子函数
         */
        mounted() {
            this.getBookDetail()
            this.getBookContents()
            this.getBookIsInShelf()
        },

        /**
         * 计算属性
         */
        computed: {}
    };
</script>

<style lang="scss" scoped>

</style>
