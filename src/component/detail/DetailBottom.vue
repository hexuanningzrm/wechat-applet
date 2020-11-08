<!--图书详情底部按钮-->
<template>
    <div class="DetailBottom">
        <!--书架-->
        <div class="btn-wrapper">
            <van-button v-bind:custom-class="isInShelf ? 'btn-remove' : 'btn-shelf'" round
                        v-on:click="handleShelf">
                {{isInShelf ? '移出书架' : '加入书架'}}
            </van-button>
        </div>
        <!--阅读-->
        <div class="btn-wrapper">
            <van-button custom-class="btn-read" round v-on:click="() => readBook()">阅读</van-button>
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
            // 显示加入/移出书架
            isInShelf: Boolean
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
            // 点击书架事件
            handleShelf() {
                this.$emit('handleShelf')
                console.log('handleShelf')
            },
            // 点击阅读事件
            readBook() {
                this.$emit('readBook')
                console.log('readBook')
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

<style lang="scss">
    .DetailBottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 60px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 15px;
        border-top: 1px solid #eee;
        box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, .1);

        .btn-wrapper {
            flex: 1;
        }
    }
</style>

<style lang="scss">
    .DetailBottom {
        /*阅读*/
        .btn-read {
            width: 100%;
            border: none;
            color: #fff;
            background: #55AB68;
            margin-left: 7.5px;
        }
        /*加入书架*/
        .btn-shelf {
            width: 100%;
            color: #55AB68;
            background: #fff;
            border: 1px solid #55AB68;
            margin-right: 7.5px;
        }
        /*移出书架*/
        .btn-remove {
            width: 100%;
            color: #F96128;
            background: rgba(255, 175, 155, .3);
            border: 1px solid #FFAF9B;
            margin-right: 7.5px;
        }
    }
</style>
