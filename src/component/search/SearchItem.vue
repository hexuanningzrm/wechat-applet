<!--搜索分类-->
<template>
    <div class="SearchItem" v-on:click="onClick">
        <!--搜索分类图标-->
        <div class="search-item-icon">
            <!--图标-->
            <div class="icon-wrapper">
                <van-icon v-bind:name="icon" color="rgba(0, 0, 0, .5)"
                          v-bind:style="{width: '14px', height: '16px'}"></van-icon>
            </div>
        </div>
        <!--搜索分类内容-->
        <div class="search-item-info">
            <!--标题-->
            <div class="item-title">{{title}}</div>
            <!--分类名称-->
            <div class="item-sub-title">{{subTitle}}</div>
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
            // 标题文本
            title: String,
            // 副标题文本
            subTitle: String,
            // 图标类型
            icon: String
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
            // 点击搜索分类事件
            onClick() {
                this.$emit('onClick')
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
    .SearchItem {
        padding: 15px;
        height: 36.5px;
        display: flex;
        align-items: center;
        /*搜索分类图标*/
        .search-item-icon {
            /*图标*/
            .icon-wrapper {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #f7f7f9;
            }
        }
        /*搜索分类内容*/
        .search-item-info {
            margin-left: 10px;
            /*标题*/
            .item-title {
                color: #333333;
                font-size: 14px;
                line-height: 20px;

            }
            /*分类名称*/
            .item-sub-title {
                color: rgba(0, 0, 0, .45);
                font-size: 12px;
                line-height: 16.5px;
            }
        }
    }
</style>


