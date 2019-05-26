<template>
    <div id="app">
        <div @click="fetchData">请求</div>
        <van-tabbar v-model="active" :fixed="true" :change="switchTab">
            <van-tabbar-item v-for="item in TabData" :key="item.key" :icon="item.icon">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    /* eslint-disable no-console,no-unused-vars */

    import fetch from './utils/fetch'

    const TabData = [
        { name: '首页', icon: 'gem-o', key: 'index', route: '/' },
        { name: '发现', icon: 'newspaper-o', key: 'discovery', route: '/discovery' },
        { name: '发布', icon: 'records', key: 'public', route: '/public' },
        { name: '消息', icon: 'chat-o', key: 'message', route: '/message' },
        { name: '我的', icon: 'user-o', key: 'user', route: '/user' }];
    export default {
        name: 'app',
        components: {
            // HelloWorld
        },
        data: () => ({
            active: '0',
            TabData,
        }),
        methods: {
            async fetchData() {
                const data = await fetch('api/order');
            },
            switchTab(flag) {
                this.active = flag;
            },
        },
        computed: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
