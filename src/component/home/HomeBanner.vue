<!--首页Banner-->
<template>
    <div class="HomeBanner" v-on:click="onClick">
        <!--banner图片-->
        <div class="bg-img" v-bind:style="{backgroundImage: bgImage}">
            <!--标题-->
            <div class="title">{{title}}</div>
            <!--副标题-->
            <div class="sub-title">{{subTitle}}</div>
        </div>
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
        components: {},

        /**
         * 接收父组件的数据
         */
        props: {
            // 标题
            title: String,
            // 副标题
            subTitle: String,
            // banner图片
            img: String
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
            // 点击banner事件
            onClick() {
                this.$emit('onClick')
                this.$router.push({
                    path: '/pages/shelf/main'
                })
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
            // 通过计算属性动态绑定banner图，解决渲染层网络层错误bug
            bgImage() {
                return "url(" + this.img + ")"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .HomeBanner {
        margin-top: 20px;
        padding: 0 20px;
        /*banner图片*/
        .bg-img {
            height: 125px;
            border-radius: 10px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /*标题*/
            .title {
                font-size: 18px;
                color: #ffffff;
                font-weight: 500;
            }
            /*副标题*/
            .sub-title {
                margin-top: 10px;
                font-size: 14px;
                color: #ffffff;
                padding: 5px 15px;
                background: #4585ff;
                border: 1px solid #cccccc;
                border-radius: 50px;
            }
        }
    }
</style>
