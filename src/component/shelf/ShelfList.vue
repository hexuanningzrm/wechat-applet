<!--书架图书列表-->
<template>
    <div class="ShelfList">
        <div class="shelf-list-inner">
            <div class="shelf-book" v-for="(book, index) in shelfList" v-bind:key="index">
                <!--图书封面-->
                <div class="shelf-book-cover" v-if="book && book.cover" v-on:click="() => gotoBookDetail(book)">
                    <img v-bind:src="book.cover" alt="">
                </div>
                <!--图书标题-->
                <div class="shelf-book-title" v-if="book && book.title">{{book.title}}</div>
                <!--添加图书-->
                <div class="shelf-book-add" v-if="!book.title" v-on:click="gotoHome">
                    <div class="shelf-book-add-wrapper">
                        <div class="shelf-book-add-x"></div>
                        <div class="shelf-book-add-y"></div>
                    </div>
                </div>
            </div>
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
            // 书架图书列表
            shelfList: Array
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
            // 点击添加图书事件
            gotoHome() {
                mpvue.switchTab({
                    url: "/pages/index/main"
                })
            },
            // 点击图书事件
            gotoBookDetail(book) {
                this.$router.push({
                    path: '/pages/detail/main',
                    query: {
                        fileName: book.fileName
                    }
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
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .ShelfList {
        padding: 0 12.5px 20px 12.5px;
        .shelf-list-inner {
            display: flex;
            flex-flow: row wrap;
            .shelf-book {
                flex: 0 0 33.33%;
                width: 33.33%;
                padding: 20px 12.5px 0 15px;
                box-sizing: border-box;
                /*图书封面*/
                .shelf-book-cover {
                    width: 100%;
                    height: 130px;
                    img {
                        width: 89px;
                        height: 128px;
                    }
                }
                /*图书标题*/
                .shelf-book-title {
                    width: 100%;
                    font-size: 12px;
                    color: #333;
                    overflow: hidden;
                    text-overflow: clip;
                    line-height: 14px;
                    max-height: 28px;
                    margin-top: 10px;
                }
                /*添加图书*/
                .shelf-book-add {
                    width: 100%;
                    height: 130px;
                    border: 1px solid #CBCBCB;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .shelf-book-add-wrapper {
                        position: relative;
                        width: 30px;
                        height: 30px;
                        .shelf-book-add-x {
                            position: absolute;
                            top: 50%;
                            width: 30px;
                            height: 2px;
                            margin-top: -1px;
                            background: #CACACA;
                        }
                        .shelf-book-add-y {
                            position: absolute;
                            left: 50%;
                            width: 2px;
                            height: 30px;
                            background: #CACACA;
                        }
                    }
                }
            }
        }
    }
</style>
