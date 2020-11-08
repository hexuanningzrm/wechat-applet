<!--图书详情封面-->
<template>
    <div class="DetailBook">
        <!--图书图片-->
        <div class="detail-info-l">
            <div class="book-img">
                <img v-bind:src="book && book.cover" alt="">
            </div>
        </div>
        <!--图书内容-->
        <div class="detail-info-r">
            <!--标题-->
            <div class="book-title">{{(book && book.title) || ''}}</div>
            <!--作者-->
            <div class="book-author">{{(book && book.author) || ''}}</div>
            <!--副标题-->
            <div class="book-vice-title">{{(book && book.categoryText) || ''}}</div>
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
            // 图书信息
            book: Object
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
    .DetailBook {
        display: flex;
        padding: 10px 15px;
        /*图书图片*/
        .detail-info-l {
            padding-right: 15px;
            .book-img {
                img {
                    width: 108px;
                    height: 157px;
                }
            }
        }
        /*图书内容*/
        .detail-info-r {
            flex: 1;
            overflow: hidden;
            /*标题*/
            .book-title {
                font-size: 18px;
                line-height: 22px;
                max-height: 66px;
                font-weight: 500;
                overflow: hidden;
                color: #000000;
                text-overflow: clip;
                margin-top: 15px;
            }
            /*作者*/
            .book-author {
                margin-top: 15px;
                font-size: 16px;
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                color: #333333;
                text-overflow: clip;
            }
            /*副标题*/
            .book-vice-title {
                margin-top: 10px;
                font-size: 14px;
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                color: #868686;
                text-overflow: clip;
            }
        }
    }
</style>
