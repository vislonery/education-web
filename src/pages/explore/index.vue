<template>
    <div>
        <div>index</div>
        <div @click="fetchData">请求</div>
    </div>
</template>

<script>
	/* eslint-disable no-unused-vars */

	export default {
		name: 'explore',
		components: {
			// HelloWorld
		},
		data: () => ({
		}),
		methods: {
			async fetchData() {
				const data = await fetch('api/order');
			},

		},
		computed: {}
	}
</script>

<style scoped>

</style>
