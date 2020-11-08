<!--首页图书推荐-->
<template>
    <div class="HomeBook">
        <!--图书推荐标题-->
        <div class="home-book-header">{{title}}</div>
        <!--图书推荐内容-->
        <div class="home-book-content">
            <!--图书行数循环-->
            <div class="book-content-row" v-for="(item, i) in bookData" v-bind:key="i">
                <!--图书列数循环-->
                <div class="book-content-col" v-for="(book, j) in item" v-bind:key="j"
                     v-bind:style="{flex: '0 0' + (100 / col) + '%'}"
                >
                    <!--图书推荐容器-->
                    <div class="book-wrapper"
                         v-on:click="onBookClick(book)"
                         v-bind:style="{flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row'}"
                         v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW"
                    >
                        <!--图片-->
                        <img v-bind:class="{'img1': mode === HOME_BOOK_MODE.COL, 'img2': mode === HOME_BOOK_MODE.ROW}"
                             v-bind:src="book.cover" alt="">

                        <!--图书列数容器-->
                        <div class="book-title-wrapper book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
                            <!--列标题-->
                            <div class="book-title">{{book.title}}</div>
                        </div>

                        <!--图书行数容器-->
                        <div class="book-title-wrapper book-title-row" v-else>
                            <!--行标题-->
                            <div class="book-title">{{book.title}}</div>
                            <div class="book-title-author-wrapper">
                                <!--作者-->
                                <div class="book-title book-author">{{book.author}}</div>
                                <!--类别-->
                                <div class="book-title book-category">{{book.categoryText}}</div>
                            </div>
                        </div>
                    </div>
                    <!--图书分类容器-->
                    <div class="category-wrapper" v-else v-on:click="onBookClick(book)">
                        <!--分类名称-->
                        <div class="category-text">{{book.categoryText}}</div>
                        <!--书本数量-->
                        <div class="category-num">{{book.num}}本书</div>
                        <!--分类图片容器-->
                        <div class="category-img-wrapper">
                            <!--图1-->
                            <div class="category-img-one">
                                <img v-bind:src="book.cover" alt="">
                            </div>
                            <!--图2-->
                            <div class="category-img-tow">
                                <img v-bind:src="book.cover" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--图书推荐按钮-->
        <div class="home-book-footer" v-if="showBtn" v-on:click="onMoreClick">
            <!--文字-->
            <van-button round custom-class="book-btn">{{btnText}}</van-button>
        </div>
    </div>
</template>

<script>
    import { HOME_BOOK_MODE } from '../../utils/const'

    export default {
        /**
         * 组件名称
         */
        name: 'HomeBook',

        /**
         * 配置局部注册组件
         */
        components: {},

        /**
         * 接收父组件的数据
         */
        props: {
            // 标题栏
            title: String,
            // 图书列表
            data: {
                type: Array,
                default: []
            },
            // 按钮文本
            btnText: String,
            // 行数默认0
            row: {
                type: Number,
                default: 0
            },
            // 列数默认1
            col: {
                type: Number,
                default: 1
            },
            // 显示模式，默认行数
            mode: {
                type: String,
                // 动态模式取const.js
                default: HOME_BOOK_MODE.ROW
            },
            // 是否显示标题
            showTitle: {
                type: Boolean,
                default: true
            },
            // 是否显示按钮
            showBtn: {
                type: Boolean,
                default: true
            },
            // 是否显示背景
            linearBg: {
                type: Boolean,
                default: false
            }
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
            // 点击换一批按钮事件
            onMoreClick() {
                this.$emit('onMoreClick')
            },
            // 图书推荐点击事件
            onBookClick(book) {
                this.$emit('onBookClick', book)
            }
        },

        /**
         * 业务逻辑
         */
        mounted() {
        },

        /**
         * 计算属性
         */
        computed: {
            bookData() {
                const { data, row, col } = this
                if (data && data.length > 0) {
                    const number = row * col
                    const _bookData = data.slice(0, number)
                    const _bookDataRow = []
                    let _row = 0
                    while (_row < row) {
                        // 0 * 2 = 0, 2
                        // 1 * 2 = 2, 4
                        _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
                        _row++
                    }
                    return _bookDataRow
                } else {
                    return []
                }
            },
            HOME_BOOK_MODE() {
                return HOME_BOOK_MODE
            }
        }
    }
</script>

<style lang="scss">
    .HomeBook {
        /*图书推荐标题*/
        .home-book-header {
            padding: 13px 0 0 20.5px;
        }
        /*图书推荐内容*/
        .home-book-content {
            padding: 0 12px;
            margin-top: 10.5px;
            /*图书行数循环*/
            .book-content-row {
                display: flex;
                flex-flow: row nowrap;
                margin-top: 12px;
                /*图书列数循环*/
                .book-content-col {
                    padding: 0 8px;
                    box-sizing: border-box;
                    width: 100%;
                    /*图书推荐容器*/
                    .book-wrapper {
                        display: flex;
                        .img1 {
                            width: 101px;
                            height: 147px;
                        }
                        .img2 {
                            width: 64.5px;
                            height: 88px;
                        }
                        .book-title-wrapper {
                            /*图书列数容器*/
                            &.book-title-col {
                                width: 50px;
                                /*列标题*/
                                .book-title {
                                    width: 200%;
                                    font-size: 12px;
                                    color: #212731;
                                    line-height: 16.5px;
                                    max-height: 33px;
                                    font-weight: 500;
                                    overflow: hidden;
                                    word-break: break-word;
                                    margin-top: 5px;
                                }
                            }
                            /*图书行数容器*/
                            &.book-title-row {
                                flex: 0 0 50%;
                                padding: 10px;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                /*行标题*/
                                .book-title {
                                    font-size: 14px;
                                    color: #1f1f1f;
                                    line-height: 18px;
                                    max-height: 36px;
                                    overflow: hidden;
                                    word-break: break-word;
                                }
                                /*作者、类别*/
                                .book-author, .book-category {
                                    font-size: 12px;
                                    color: #868686;
                                    line-height: 14px;
                                    max-height: 14px;
                                }
                                .book-author, .book-category {
                                    margin-top: 5px;
                                }
                                .book-category {
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                    /*图书分类容器*/
                    .category-wrapper {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        background: #f8f9fb;
                        border-radius: 10px;
                        height: 96px;
                        padding: 13px 0 14.5px 16px;
                        box-sizing: border-box;
                        justify-content: space-between;
                        /*分类名称*/
                        .category-text {
                            color: #212832;
                            font-size: 16px;
                            width: 75px;
                            height: 45px;
                            line-height: 22.5px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        /*书本数量*/
                        .category-num {
                            color: #868686;
                            font-size: 12px;
                        }
                        /*分类图片容器*/
                        .category-img-wrapper {
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            /*图1*/
                            .category-img-one {
                                position: absolute;
                                right: 0;
                                bottom: -5px;
                                z-index: 100;
                                width: 48px;
                                img {
                                    width: 100%;
                                    height: 70px;
                                }
                            }
                            /*图2*/
                            .category-img-tow {
                                position: absolute;
                                right: 30px;
                                bottom: -5px;
                                z-index: 90;
                                width: 36px;
                                img {
                                    width: 100%;
                                    height: 50px
                                }
                            }
                        }
                    }
                }
            }
        }
        /*图书推荐按钮*/
        .home-book-footer {
            padding: 12px 20px 20px;
        }
    }
</style>

<!--修改组件库样式需全局样式-->
<style lang="scss">
    /*图书推荐按钮*/
    .home-book-footer {
        .book-btn {
            width: 100%;
            font-size: 14px;
            color: #3696ef;
            border: 1px solid #edeeee;
        }
    }

    /*图1*/
    .category-img-one {
        .image {
            border-radius: 0 0 10px 0;
        }
    }
</style>
