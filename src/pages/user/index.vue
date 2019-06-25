<template>
    <div>
        <div>用户</div>
        <van-cell title="地址" value="内容" />
        <van-cell-group title="分组1">
            <van-cell title="地址" value="内容" />
            <van-cell title="课程表" value="内容" label="描述信息" />
        </van-cell-group>
        <van-cell value="内容" icon="shop-o" is-link>
            <template slot="title">
                <span class="custom-text">单元格</span>
                <van-tag type="danger">标签</van-tag>
            </template>
        </van-cell>
        <van-cell title="单元格">
            <van-icon slot="right-icon" name="search" class="custom-icon" />
        </van-cell>
    </div>
</template>

<script>
	export default {
		name: "user"
	}
</script>

<style scoped>

</style>
