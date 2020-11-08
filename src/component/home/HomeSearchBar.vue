<!--首页搜索输入框-->
<template>
    <div class="HomeSearchBar">
        <div class="wrapper" v-on:click="onSearchBarClick">
            <!--搜索图标-->
            <van-icon
                class="search"
                name="search"
                size="16px"
            >
            </van-icon>
            <!--搜索输入框-->
            <input class="search-input" type="text" placeholder=""
                   v-bind:focus="focus"
                   v-bind:disabled="disabled"
                   v-bind:maxlength="limit"
                   v-bind:placeholder="hotSearch.length === 0 ? '搜索' : hotSearch"
                   v-model="searchWord"
                   v-on:input="onChange"
                   confirm-type="search"
                   v-on:confirm="onConfirm"
                   placeholder-style="color: #adb4be"
            >
            <!--清除图标-->
            <van-icon class="clear" name="clear" size="16px" color="#cccccc "
                      v-on:click="onClearClick"
                      v-if="searchWord.length > 0"
            >
            </van-icon>
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
            // 是否获得焦点
            focus: {
                type: Boolean,
                default: true
            },
            // 是否禁用输入框
            disabled: {
                type: Boolean,
                default: false
            },
            // 最大输入长度
            limit: {
                type: Number,
                default: 50
            },
            // 热门搜索词
            hotSearch: {
                type: String,
                default: ''
            }
        },

        /**
         * 数据对象
         */
        data() {
            return {
                // 搜索关键字
                searchWord: ''
            }
        },

        /**
         * 方法
         */
        methods: {
            // 点击搜索事件
            onSearchBarClick() {
                this.$emit('onClick')
            },
            // 点击清空事件
            onClearClick() {
                this.searchWord = ''
                this.$emit('onClear')
            },
            // 输入监听事件
            onChange(e) {
                const { value } = e.mp.detail
                this.$emit('onChange', value)
            },
            // 点击虚拟键盘监听事件
            onConfirm(e) {
                const { value } = e.mp.detail
                this.$emit('onConfirm', value)
            },
            // 对输入框关键字赋值
            setValue(v) {
                this.searchWord = v
            },
            // 获取输入框的关键字
            getValue() {
                return this.searchWord
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
    .HomeSearchBar {
        padding: 15px 15.5px;
        .wrapper {
            display: flex;
            align-items: center;
            background: #f5f7f9;
            border-radius: 20px;
            padding: 12px 17px;
            height: 40px;
            box-sizing: border-box;
            .search, .clear {
                height: 100%;
                display: flex;
                align-items: center;
            }
            /*搜索输入框*/
            .search-input {
                flex: 1;
                margin: 0 8px;
                font-size: 14px;
            }
            .clear {

            }
        }
    }
</style>


