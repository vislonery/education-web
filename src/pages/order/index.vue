<template>
    <div>订单
        <div @click="handleDetail">订单1</div>
    </div>
</template>

<script>
	export default {
		name: "order",
		methods: {
			handleDetail() {
				this.$router.push('/order/detail/1')
			}
		}
	}
</script>

<style scoped>

</style>
