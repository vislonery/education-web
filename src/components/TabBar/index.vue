<template>
    <div>
        <!--<van-nav-bar class="title" title="标题" left-text="返回" left-arrow>-->
        <!--<van-icon name="search" slot="right" />-->
        <!--</van-nav-bar>-->

        <router-view></router-view>
        <div class="icon-contain">
            <van-icon @click="handleShowChoose" class="publish" name="plus" size="26px" />
        </div>
        <van-tabbar route class="tab" v-model="active" :fixed="true">
            <van-tabbar-item replace v-for="item in TabData" :key="item.key" :to="item.route" :icon="item.icon">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
        <van-action-sheet v-model="showChoose">
            <div class="choose-contain">
                <div @click="handlePublish">我要找老师</div>
                <div>我要找学生</div>
                <p>发帖子</p>
            </div>
            <p>内容</p>
            <p>关闭</p>
        </van-action-sheet>
    </div>
</template>

<script>
	/* eslint-disable no-console */


	const TabData = [
		{ name: '首页', icon: 'gem-o', key: 'index', route: '/' },
		{ name: '订单', icon: 'newspaper-o', key: 'order', route: '/order' },
		{ name: '', icon: '', key: 'publish', route: '' },
		{ name: '消息', icon: 'chat-o', key: 'message', route: '/message' },
		{ name: '我的', icon: 'user-o', key: 'user', route: '/user' }];

	export default {
		name: "TabBar",
		created() {
			console.log('===')
			const { name } = this.$router.history.current;
			const currentKey = TabData.findIndex((item) => item.key === name)
			console.log(name, currentKey)
			this.active = currentKey

		},
		components: {
			// HelloWorld
		},
		props: {
			// TabData: {
			// 	type: Array
			// }
		},
		data: () => ({
			active: 0,
			username: '',
			password: '',
			showChoose: false,
			TabData,
		}),
		methods: {
			onClickLeft() {
			},
			onClickRight() {
			},
			handleShowChoose() {
				console.log('show')
				this.showChoose = true
			},
			handlePublish() {
				this.$router.push('/publish')
			}
		},
		computed: {
			// ...mapGetters(['userInfo'])
		}
	}
</script>

<style scoped lang="less">
    .icon-contain {
        padding: 4px;
        border: 1px solid #ebebeb;
        position: absolute;
        bottom: 25px;
        left: calc(50% - 18px);
        z-index: 100;
        border-radius: 23px;
    }

    .choose-contain {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .title {
        position: absolute;
        top: 0;
        width: 100%;
    }

    .publish {

        color: #a7a7a7;
        background-color: #1989fa;
        /*font-size: 36px;*/
        border-radius: 20px;
        padding: 6px;
        /*width: 36px;*/
    }

    .tab {
        position: absolute;
        bottom: 0;
        z-index: 2008;
    }
</style>
