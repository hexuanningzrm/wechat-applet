<!--热门搜索-->
<template>
    <div class="TagGroup">
        <!--标题-->
        <div class="tag-group-header">
            <div class="header-text">{{headerText}}</div>
            <div class="header-btn" v-on:click="onBtnClick">{{btnText}}</div>
        </div>
        <!--关键字-->
        <div class="tag-group">
            <div class="tag-group-inner" v-for="(text, index) in value" v-bind:key="index">
                <!--搜索关键字组件-->
                <Tag v-bind:text="text" v-on:onClick="onTagClick(text, index)"></Tag>
            </div>
        </div>
    </div>
</template>

<script>
    import Tag from './Tag'

    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components: {
            Tag
        },

        /**
         * 接收父组件的数据
         */
        props: {
            // 标题文本
            headerText: String,
            // 按钮文本
            btnText: String,
            // 标签数据
            value: Array
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
            // 点击标签事件
            onTagClick(text, index) {
                this.$emit('onTagClick', text, index)
            },
            // 点击按钮事件
            onBtnClick() {
                this.$emit('onBtnClick')
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
    .TagGroup {
        margin-top: 35px;
        width: 100%;
        padding-bottom: 10px;
        /*标题*/
        .tag-group-header {
            padding: 0 16px;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            line-height: 20px;
            /*热门搜索文字*/
            .header-text {
                color: #333333;
            }
            /*换一批按钮*/
            .header-btn {
                color: #3696ef;
            }
        }
        /*关键字*/
        .tag-group {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-flow: row wrap;
            padding: 4px 10px 0 10px;
            .tag-group-inner {
                max-width: 100%;
                box-sizing: border-box;
                padding: 12px 6px 0 6px;
            }
        }
    }
</style>


