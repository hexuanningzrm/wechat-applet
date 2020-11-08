<!--图书列表-->
<template>
    <div>
        <!--搜索图书列表组件-->
        <SearchTable
            v-bind:data="data"
            v-on:onClick="onBookClick"
        >
        </SearchTable>
    </div>
</template>

<script>
    import SearchTable from '../../component/search/SearchTable'
    import { setNavigationBarTitle, showToast } from '../../api/wechat'
    import { searchList } from '../../api'

    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components: {
            SearchTable
        },

        /**
         * 接收父组件的数据
         */
        props:{},

        /**
         * 数据对象
         */
        data(){
            return {
                // 图书信息
                data: [],
                // 默认第一页
                page: 1
            }
        },

        /**
         * 方法
         */
        methods: {
            // 点击图书列表事件
            onBookClick(book) {
                this.$router.push({
                    path: '/pages/detail/main',
                    query: {
                        fileName: book.fileName
                    }
                })
            },
            // 获取图书列表API
            getSearchList() {
                const { key, text } = this.$route.query
                const params = {}
                if (key && text) {
                    params[key] = text
                }
                params.page = this.page
                searchList(params).then(response => {
                    const { data } = response.data
                    if (data.length > 0) {
                        this.data.push(...data)
                    } else {
                        showToast('没有更多数据了')
                    }

                })
            }
        },

        /**
         * 钩子函数
         */
        mounted() {
            // 每次进入图书列表初始化为第一页
            this.page = 1
            const { title } = this.$route.query
            // 动态设置当前页面的标题API
            setNavigationBarTitle(title)
            this.getSearchList()
        },

        /**
         * 计算属性
         */
        computed: {},

        /**
         * 监测页面上拉触底
         */
        onReachBottom() {
            this.page++
            this.getSearchList()
        }
    }
</script>

<style lang="scss" scoped>

</style>

