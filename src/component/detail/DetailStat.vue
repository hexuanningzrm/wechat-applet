<!--图书详情评分统计&访问人数-->
<template>
    <div class="DetailStat">
        <!--评分点评-->
        <div class="detail-score-l">
            <div class="score-wrapper">
                <!--综合评分-->
                <span class="score-rate">{{rankAvg}}</span>
                <!--星星图标-->
                <div v-bind:value="rankAvg" >
                    <van-rate :size="16" color="#717882" void-color="#55AB68"
                              void-icon="star" readonly>
                    </van-rate>
                </div>
            </div>
            <!--总点评人数-->
            <div class="score-hint">{{rankNum}}人点评</div>
        </div>
        <!--访问人数-->
        <div class="detail-access-r">
            <div class="access-wrapper">
                <!--总访问人数-->
                <span class="access-num">{{readerNum}}</span>人在此读书
            </div>
            <!--访问读者-->
            <div class="access-readers">
                <!--读者头像-->
                <div class="access-readers-image" v-for="(reader, index) in readers" v-bind:key="index">
                    <img v-bind:src="reader.avatarUrl" alt="">
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
            // 访问读者
            readers: Array,
            // 总访问人数
            readerNum: Number,
            // 总点评人数
            rankNum: Number,
            // 综合评分
            rankAvg: Number
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
    .DetailStat {
        display: flex;
        padding: 10px 15px;
        /*评分点评*/
        .detail-score-l {
            flex: 0 0 50%;
            width: 50%;
            .score-wrapper {
                display: flex;
                align-items: center;
                /*综合评分*/
                .score-rate {
                    font-size: 24px;
                    color: #5E5E5E;
                    margin-right: 10px;
                }
            }
            /*总点评人数*/
            .score-hint {
                margin-top: 5px;
                font-size: 11px;
                color: #99A0AA;
            }
        }
        /*访问人数*/
        .detail-access-r {
            flex: 0 0 50%;
            width: 50%;
            .access-wrapper {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: #868686;
                /*总访问人数*/
                .access-num {
                    font-size: 24px;
                    color: #5E5E5E;
                    margin-right: 5px;
                }
            }
            /*访问读者*/
            .access-readers {
                display: flex;
                font-size: 12px;
                color: #909090;
                /*读者头像*/
                .access-readers-image {
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                    width: 25px;
                    height: 25px;
                    margin-left: -8px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                    box-shadow: 0 4px 4px rgba(0, 0, 0, .3);
                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
</style>
