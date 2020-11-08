<!--书架用户信息-->
<template>
    <div class="ShelfUserInfo">
        <!--用户信息-->
        <div class="user-info">
            <!--用户名称-->
            <div class="user-nick-name">{{userInfo.nickName}}</div>
            <!--阅读天数-->
            <div class="user-read-time">您已经加入声临其境读书{{readDay}}天</div>
            <div class="user-avatar-wrapper">
                <!--用户头像-->
                <img class="user-avatar" v-bind:src="userInfo.avatarUrl">
            </div>
        </div>
        <!--书架数量-->
        <div class="user-extra">
            <div class="user-extra-text">您的书架中共有{{num}}本好书</div>
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
            // 图书数量
            num: Number,
            // 阅读天数
            readDay: Number,
            // 用户信息
            userInfo: Object
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
        methods: {},

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
    .ShelfUserInfo {
        margin: 15px 25px;
        background: #F8F9FB;
        border-radius: 12px;
        padding: 15px 20px;
        border: 1px solid #E0E1E2;
        /*用户信息*/
        .user-info {
            position: relative;
            height: 60px;
            border-bottom: 1px solid #E9E9E9;
            /*用户名称*/
            .user-nick-name {
                font-size: 17px;
                font-weight: 500;
                color: #333;
            }
            /*阅读天数*/
            .user-read-time {
                font-size: 12px;
                color: #868686;
            }
            .user-avatar-wrapper {
                position: absolute;
                right: 0;
                top: 0;
                /*用户头像*/
                .user-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                }
            }
        }
        /*书架数量*/
        .user-extra {
            margin-top: 15px;

            .user-extra-text {
                font-size: 12px;
                color: #666;
                font-weight: 500;
            }
        }
    }
</style>

