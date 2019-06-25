<template>
    <div class="contain">
        <van-tabs class="tab" v-model="activeTab">
            <van-tab :title="item.name" v-for="item in TopTabData" :key="item.key">内容 1</van-tab>
        </van-tabs>
        <div class="content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <p>刷新次数: {{ count }}</p>
                <Card v-for="item in productCard" :key="item.id" />

            </van-pull-refresh>
        </div>
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                shape="round"
                label="城市"
                @click="onSearch"
        >
        </van-search>
    </div>
</template>

<script>
	/* eslint-disable no-unused-vars,no-console */

	import Card from "./Card";

	const TopTabData = [
		{ name: '小学', icon: 'gem-o', key: 'primary', route: '/primary' },
		{ name: '初中', icon: 'newspaper-o', key: 'primary', route: '/primary' },
		{ name: '高中', icon: 'records', key: 'publish', route: '/publish' },
		{ name: '兴趣', icon: 'chat-o', key: 'message', route: '/message' },
		{ name: '英语', icon: 'chat-o', key: 'message', route: '/message' },
		{ name: '其他', icon: 'user-o', key: 'user', route: '/user' }];
	const productCard = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
	export default {
		name: 'index',
		created() {
			console.log('create')
		},
		components: {
			Card,
			// HelloWorld
		},
		data: () => ({
			productCard,
			activeTab: 0,
			TopTabData,
			count: 0,
			isLoading: false
		}),
		methods: {
			async fetchData() {
				const data = await fetch('api/order');
			},
			onSearch() {
				console.log('search')
				this.$router.push('/search')
			},
			onRefresh() {
				setTimeout(() => {
					// this.$toast('刷新成功');
					this.isLoading = false;
					this.count++;
				}, 500);
			}

		},
		computed: {}
	}
</script>

<style scoped lang="less">
    .contain {
        display: flex;
        flex-direction: column;
        height: calc(100% - 50px);

        .tab {
            margin-top: 10px;
        }

        .content {
            /*margin-top: 54px;*/
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .van-pull-refresh {
            flex: 1;
            overflow: auto;
            padding-bottom: 10px;
        }

        .van-search {
            width: 100%;
            position: absolute;
            top: 0;
        }
    }


</style>
