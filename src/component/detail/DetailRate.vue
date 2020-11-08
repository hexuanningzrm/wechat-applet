<!--图书详情评分-->
<template>
    <div class="DetailRate">
        <!--标题-->
        <span class="rate-text">轻点评分</span>
        <!--评分-->
        <div class="rate-wrapper">
            <!--星星图标-->
            <div v-bind:value="rateValue">
                <van-rate v-bind:size="25" color="#55AB68" void-color="#c7c7c7"
                          void-icon="star" v-on:change="onRateChange"
                ></van-rate>
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
            // 评分数1-5
            rateValue: Number
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
            // 点击轻点评分事件
            onRateChange(e) {
                this.$emit('onRateChange', e.mp.detail)
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
    .DetailRate {
        display: flex;
        padding: 10px 0;
        margin: 0 15px;
        align-items: center;
        border-bottom: 1px solid #EBEBEB;
        /*标题*/
        .rate-text {
            font-size: 14px;
            color: #909090;
        }
        /*评分*/
        .rate-wrapper {
            flex: 1;
            text-align: right;
        }
    }
</style>

