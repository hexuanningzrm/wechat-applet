<!--图书分类-->
<template>
    <div>
        <!--图书分类组件-->
        <HomeBook
            v-bind:row="category.length / 2"
            v-bind:col="2"
            v-bind:data="category"
            mode="category"
            v-bind:show-btn="false"
            v-bind:show-title="false"
            v-on:onBookClick="onCategoryClick"
        >
        </HomeBook>
    </div>
</template>

<script>
    import HomeBook from '../../component/home/HomeBook'
    import { categoryList } from '../../api'
    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components:{
            HomeBook
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
                // 图书全部分类
                category: []
            }
        },

        /**
         * 方法
         */
        methods:{
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
            }
        },

        /**
         * 钩子函数
         */
        mounted(){
            // 获取图书分类API
            categoryList().then(response => {
                this.category = response.data.data
            })
        },

        /**
         * 计算属性
         */
        computed:{}
    }
</script>

<style lang="scss" scoped>

</style>

