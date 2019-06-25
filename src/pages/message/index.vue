<template>
    <div>
        <div>消息中心</div>
        <van-cell title="聊天室1" value="内容" @click="handleGoChatRoom" />
    </div>
</template>

<script>
	export default {
		name: "message",
		methods: {
			handleGoChatRoom() {
				this.$route.push('/message/chatRoom')
			}
		}
	}
</script>

<style scoped>

</style>
