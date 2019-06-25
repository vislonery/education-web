<template>
    <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            :thumb="imageURL"
            origin-price="10.00"
    >
        <div slot="footer">
            <!--<van-button size="mini">按钮</van-button>-->
            <!--<van-button size="mini">按钮</van-button>-->
        </div>
    </van-card>
</template>

<script>
	export default {
		name: "Card"
	}
</script>

<style scoped>

</style>
