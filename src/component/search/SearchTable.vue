<!--搜索图书列表-->
<template>
    <div class="SearchTable">
        <div class="table-inner">
            <!--图书列表循环-->
            <div class="table-book" v-for="(book, index) in data" v-bind:key="index" v-on:click="onClick(book)">
                <!--图书封面-->
                <div class="book-img-wrapper">
                    <div class="book-img">
                        <img v-bind:src="book.cover" alt="">
                    </div>
                </div>
                <!--图书内容-->
                <div class="book-info-wrapper">
                    <!--标题-->
                    <div class="book-title">{{book.title}}</div>
                    <!--作者-->
                    <div class="book-author">{{book.author}}</div>
                    <!--类别-->
                    <div class="book-category">{{book.categoryText}}</div>
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
            // 列表数据
            data: Array
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
            // 图书点击事件
            onClick(book) {
                this.$emit('onClick', book)
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
    .SearchTable {
        padding: 0 16px;
        .table-inner {
            /*图书列表循环*/
            .table-book {
                display: flex;
                align-items: center;
                margin: 14.5px 0;
                /*图书封面*/
                .book-img-wrapper {
                    .book-img {
                        img {
                            width: 47px;
                            height: 68.5px;
                        }
                    }
                }
                /*图书内容*/
                .book-info-wrapper {
                    margin-left: 15.5px;
                    width: 70%;
                    /*标题*/
                    .book-title {
                        color: #333333;
                        font-size: 16px;
                        line-height: 22.5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 100%;
                        font-weight: 500;
                    }
                    /*作者*/
                    .book-author {
                        color: rgba(0, 0, 0, .65);
                        font-size: 13px;
                        line-height: 18px;
                        margin-top: 5px;
                    }
                    /*类别*/
                    .book-category {
                        color: rgba(0, 0, 0, .45);
                        font-size: 13px;
                        line-height: 18px;
                        font-weight: 500;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>


