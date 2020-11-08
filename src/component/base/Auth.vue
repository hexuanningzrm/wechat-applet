<!--微信授权弹窗-->
<template>
    <!--遮罩-->
    <div class="Auth">
        <!--授权窗口-->
        <div class="auth-window">
            <!--授权信息-->
            <div class="auth-info">
                <!--logo-->
                <div class="auth-img">
                    <img src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" alt="">
                </div>
                <!--小程序名称-->
                <div class="sub-title">登录小程序</div>
                <!--副标题-->
                <div class='title'>全球好书免费读</div>
            </div>
            <!--授权按钮-->
            <button class="auth-btn" open-type="getUserInfo" v-on:getuserinfo="getUserInfo">授权登录</button>
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
        props: {},

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
            // 点击授权登录事件
            getUserInfo() {
                this.$emit('getUserInfo')
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
        computed: {}
    }
</script>

<style lang="scss" scoped>
    /*遮罩*/
    .Auth {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #999999;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        /*授权窗口*/
        .auth-window {
            width: 270px;
            height: 248px;
            background: #f5f5f5;
            border-radius: 18px;
            position: relative;
            /*授权信息*/
            .auth-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 30px;
                /*logo*/
                .auth-img {
                    img {
                        width: 74px;
                        height: 74px;
                        border-radius: 50%;
                    }
                }
                /*小程序名称*/
                .sub-title {
                    font-size: 13px;
                    color: #999999;
                    line-height: 18.5px;
                    margin-top: 18px;
                }
                /*副标题*/
                .title {
                    font-size: 16.5px;
                    color: #333333;
                    line-height: 22.5px;
                    font-weight: 400;
                    margin-top: 3.5px;
                }
            }
            /*授权按钮*/
            .auth-btn {
                background-image: linear-gradient(90deg, #1EA3F5 0%, #55AB68 100%);
                border-radius: 0 0 18px 18px;
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 49px;
                line-height: 49px;
                font-size: 15px;
                color: #ffffff;
            }
        }
    }
</style>

