<!--阅读详情-->
<template>
    <div>
        <!--微信承载网页的容器-->
        <web-view v-bind:src="url"></web-view>
    </div>
</template>

<script>
    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components:{},

        /**
         * 接收父组件的数据
         */
        props:{},

        /**
         * 数据对象
         */
        data(){
            return {
                // 图书目录地址
                url: ''
            }
        },

        /**
         * 方法
         */
        methods:{},

        /**
         * 钩子函数
         */
        mounted(){},

        /**
         * 计算属性
         */
        computed: {},

        /**
         * 生命周期函数--监听页面显示
         */
        onShow() {
            const { query } = this.$route
            let _url = 'http://www.youbaobao.xyz/book/#/ebook'
            if (query.fileName) {
                _url = `${_url}/${query.fileName}`
                if (query.opf) {
                    _url = `${_url}?opf=${query.opf}`
                }
                if (query.navigation && query.opf) {
                    _url = `${_url}&navigation=${query.navigation}`
                } else if (query.navigation) {
                    _url = `${_url}?navigation=${query.navigation}`
                }
                this.url = _url
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

