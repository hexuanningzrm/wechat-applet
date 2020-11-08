<!--搜索关键字-->
<template>
    <div class="Tag" v-on:click="onClick">
        <!--文字-->
        <div class="text">{{text}}</div>
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
            // 搜索关键字
            text: {
                type: String,
                default: ''
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
            // 点击搜索关键字事件
            onClick(){
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
    .Tag{
        background: #f7f7f9;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        padding: 6px 17px;
        /*文字*/
        .text{
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 14px;
            color: #272e37;
        }
    }
</style>

