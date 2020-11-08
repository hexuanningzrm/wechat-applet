<!--搜索列表整合-->
<template>
    <div class="SearchList">
        <!--搜索分类组件-->
        <SearchItem
            icon="apps-o"
            v-bind:title="category"
            subTitle="Category"
            v-on:onClick="showList(category, 'category')"
            v-if="category"
        >
        </SearchItem>
        <SearchItem
            icon="user-o"
            v-bind:title="author"
            subTitle="Author"
            v-on:onClick="showList(author, 'author')"
            v-if="author"
        >
        </SearchItem>
        <SearchItem
            icon="newspaper-o"
            v-bind:title="publisher"
            subTitle="Publisher"
            v-on:onClick="showList(publisher, 'publisher')"
            v-if="publisher"
        >
        </SearchItem>
        <!--搜索图书列表组件-->
        <SearchTable
            v-bind:data="data.book"
            v-on:onClick="onBookClick"
        >
        </SearchTable>
    </div>
</template>

<script>
    import SearchItem from './SearchItem'
    import SearchTable from './SearchTable'

    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components: {
            SearchItem,
            SearchTable
        },

        /**
         * 接收父组件的数据
         */
        props: {
            // 列表数据
            data: Object
        },

        /**
         * 数据对象
         */
        data() {
            return {}
        },

        /**
         * 方法
         */
        methods: {
            // 展示分类点击后的列表事件
            showList(text, key) {
                console.log(text, key)
                this.$router.push({
                    path: '/pages/list/main',
                    query: {
                        text,
                        key,
                        title: text
                    }
                })
            },
            // 点击图书列表事件
            onBookClick(book) {
                console.log(book)
            }
        },

        /**
         * 钩子函数
         */
        mounted() {
        },

        /**
         * 计算属性
         */
        computed: {
            // 动态将data的数据取出来
            category() {
                if (this.data && this.data.category && this.data.category.length > 0) {
                    return this.data.category[0].categoryText
                } else {
                    return null
                }
            },
            author() {
                if (this.data && this.data.author && this.data.author.length > 0) {
                    return this.data.author[0].author
                } else {
                    return null
                }
            },
            publisher() {
                if (this.data && this.data.publisher && this.data.publisher.length > 0) {
                    return this.data.publisher[0].publisher
                } else {
                    return null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

