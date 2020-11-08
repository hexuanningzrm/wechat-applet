<!--书架-->
<template>
    <div>
        <!--书架用户信息组件-->
        <ShelfUserInfo
            v-bind:user-info="userInfo"
            v-bind:read-day="readDay"
            v-bind:num="shelfList.length"
        >
        </ShelfUserInfo>
        <!--书架图书列表组件-->
        <ShelfList
            v-bind:shelf-list="shelfList"
        >
        </ShelfList>
    </div>
</template>

<script>
    import ShelfUserInfo from '../../component/shelf/ShelfUserInfo'
    import ShelfList from '../../component/shelf/ShelfList'
    import { getStorageSync } from '../../api/wechat'
    import { bookIsInShelf, userDay } from '../../api'

    export default {
        /**
         * 名称
         */
        name: '',

        /**
         * 配置局部注册组件
         */
        components: {
            ShelfUserInfo,
            ShelfList
        },

        /**
         * 接收父组件的数据
         */
        props: {},

        /**
         * 数据对象
         */
        data() {
            return {
                // 用户信息
                userInfo: {},
                // 读书天数默认0天
                readDay: 0,
                // 书架数量
                shelfList: []
            }
        },

        /**
         * 方法
         */
        methods: {},

        /**
         * 钩子函数
         */
        mounted() {
            // 获取用户信息
            this.userInfo = getStorageSync('userInfo')
            // 获取读书天数
            const openId = getStorageSync('openId')
            userDay({ openId }).then(response => {
                this.readDay = response.data.data.day
            })
            // 获取书架数量
            bookIsInShelf({ openId }).then(response => {
                this.shelfList = response.data.data
                this.shelfList.push({})
            })
        },

        /**
         * 计算属性
         */
        computed: {}
    }
</script>

<style lang="scss" scoped>

</style>
