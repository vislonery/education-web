<template>
    <div id="app">
        <router-view class="contain"></router-view>
    </div>
</template>

<script>

	export default {
		name: 'app',
	}
</script>

<style>
    html {
        height: 100%;
        width: 100%;
    }

    .contain {
        height: 100vh;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/

    }
</style>
