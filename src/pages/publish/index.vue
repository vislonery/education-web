<template>
    <div>发布
        <van-cell-group>
            <van-field v-model="name" placeholder="请输入用户名" />
            <van-field
                    v-model="message"
                    label="留言"
                    type="textarea"
                    placeholder="请输入留言"
                    rows="1"
                    autosize
            />
        </van-cell-group>
    </div>
</template>

<script>
	export default {
		name: "publish",
		data: () => ({
			name: '',
			message: ''
		})
	}
</script>

<style scoped>

</style>
