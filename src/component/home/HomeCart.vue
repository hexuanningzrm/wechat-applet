<!--首页图书卡片-->
<template>
    <div class="HomeCart">
        <div class="card-inner">
            <!--用户信息-->
            <div class="user-info">
                <!--logo-->
                <div class="avatar-wrapper">
                    <img class="user-avatar" v-bind:src="avatar" alt="">
                </div>
                <!--用户名称-->
                <div class="nick-name">{{nickname}}</div>
                <!--书架数量-->
                <div class="shelf-text">书架共有{{data.num}}本好书</div>
                <!--圆点-->
                <div class="round-item"></div>
                <!--特别精选-->
                <div class="shelf-text">特别精选</div>
            </div>
            <!--图书列表-->
            <div class="book-list">
                <!--图书本-->
                <div class="book-wrapper">
                    <div class="book-img-wrapper"
                         v-for="(item, index) in bookList" v-bind:key="index"
                         v-on:click="onBookClick(item)"
                    >
                        <img v-bind:src="item.cover" alt="">
                    </div>
                </div>
                <!--书架-->
                <div class="shelf-wrapper" v-on:click="goToShelf">
                    <div class="shelf-text">书架</div>
                    <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
                </div>
            </div>
            <!--问题反馈-->
            <div class="feedback-wrapper">
                <span v-on:click="onFeedBackClick">反馈</span>
            </div>
        </div>
        <!--Dialog 弹出框-->
        <van-dialog id="van-dialog"></van-dialog>
    </div>
</template>

<script>
    import Dialog from 'vant-weapp/dist/dialog/dialog'

    export default {
        /**
         * 名称
         */
        name: "",

        /**
         * 配置局部注册组件
         */
        components: {},

        /**
         * 接收父组件的数据
         */
        props: {
            // 界面需要展示的数据
            data: Object,
        },

        /**
         * 数据对象
         */
        data() {
            return {
            }
        },

        /**
         * 方法
         */
        methods: {
            // 点击书架事件
            goToShelf() {
                mpvue.switchTab({
                    url: "/pages/shelf/main"
                })
            },
            // 点击图书事件
            onBookClick(item) {
                this.$emit('onBookClick', item)
            },
            // 点击提交反馈信息事件
            onFeedBackClick() {
                Dialog.confirm({
                    title: '反馈',
                    message: '您是否确认提交反馈信息',
                    confirmButtonText: "是",
                    cancelButtonText: "否"
                }).then(() => {
                    console.log('点击是之后的事件')
                }).catch(() => {
                    console.log('点击否之后的事件')
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
            // 判断data存在并且data.userInfo也存在，返回data.userInfo.avatar
            avatar() {
                return (this.data && this.data.userInfo && this.data.userInfo.avatarUrl) || ''
            },
            // 判断data存在并且data.userInfo也存在，返回data.userInfo.nickname
            nickname() {
                return (this.data && this.data.userInfo && this.data.userInfo.nickName) || ''
            },
            // 判断data下是否存在bookList，如果不存在返回一个空数组
            bookList() {
                return (this.data && this.data.bookList) || []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .HomeCart {
        background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
        border-radius: 15px;
        margin: 22px 20px 0;
        .card-inner {
            padding: 21.5px 17px 20px 20px;
            box-sizing: border-box;
            position: relative;
            /*用户信息*/
            .user-info {
                display: flex;
                align-items: center;
                /*logo*/
                .avatar-wrapper {
                    margin: 4px 0 0 10px;
                    box-sizing: border-box;
                    img {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                    }
                }
                /*用户名称*/
                .nick-name {
                    margin: 0 8.5px;
                }
                /*用户名称、书架数量*/
                .nick-name, .shelf-text {
                    font-size: 12px;
                    color: #ffffff;
                }
                /*圆点*/
                .round-item {
                    width: 4px;
                    height: 4px;
                    background: #a2a2a2;
                    border-radius: 50%;
                    margin: 0 8px;
                }
                /*特别精选*/
                .shelf-text {
                    opacity: 0.7;
                }
            }
            /*图书列表*/
            .book-list {
                display: flex;
                margin-top: 16.5px;
                /*图书本*/
                .book-wrapper {
                    display: flex;
                    flex: 1;
                    justify-content: space-around;
                    .book-img-wrapper {
                        img {
                            width: 72px;
                            height: 101px;
                        }
                    }
                }
                /*书架*/
                .shelf-wrapper {
                    display: flex;
                    align-items: center;
                    .shelf-text {
                        font-size: 11px;
                        width: 11px;
                        color: #ffffff;
                        word-break: break-word;
                        opacity: 0.8;
                    }
                }
            }
            /*问题反馈*/
            .feedback-wrapper {
                width: 44.5px;
                height: 23.5px;
                line-height: 23.5px;
                text-align: center;
                background: #707070;
                border-radius: 100px 0 0 100px;
                position: absolute;
                right: 0;
                top: 19.5px;
                z-index: 1;
                span {
                    color: #ffffff;
                    font-size: 11px;
                }
            }
        }
    }
</style>
