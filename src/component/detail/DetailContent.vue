<!--图书详情目录-->
<template>
    <div class="DetailContents">
        <!--目录标题-->
        <div class="contents-title">目录</div>
        <!--目录列表内容-->
        <div class="contents" v-for="(item, index) in contents" v-bind:key="index"
             v-on:click="() => readBook(item.href)">
            <div class="contents-label" v-bind:style="{marginLeft: (15 * item.level) + 'px'}">{{item.label}}</div>
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
            // 目录列表内容
            contents: Array
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
            // 点击图书目录内容事件
            readBook(nav) {
                this.$emit('readBook', nav)
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
    .DetailContents {
        padding: 0 0 60px 15px;
        margin-top: 15px;
        /*目录标题*/
        .contents-title {
            font-size: 22px;
            color: #333333;
        }
        /*目录列表内容*/
        .contents {
            padding: 20px 15px 20px 0;
            border-bottom: 1px solid #EBEBEB;
            &:last-child {
                border-bottom: none;
            }
            .contents-label {
                font-size: 15px;
                color: #868686;
                line-height: 18px;
                max-height: 18px;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-top: 32px;
            }
        }
    }
</style>

