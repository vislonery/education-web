<template>
    <div id="app">
        <div @click="fetchData">请求</div>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    import HelloWorld from './components/HelloWorld.vue'

    import fetch from './utils/fetch'
    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        methods: {
            fetchData:async ()=>{
                const data = await fetch('http://39.105.35.189:3000/order')
                console.info(data)
            }
        },
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
