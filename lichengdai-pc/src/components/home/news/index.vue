<template>
<div class="dynamic">
	<Header></Header>
	<router-view></router-view>
	<Footer></Footer>
</div>
</template>
<script>
import commonPlatform from "../../common/commonPlatform.vue"
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
// import Newsdetial from "./detail.vue"
export default{

	name:"dynamic",
	data() {
		return{
			id:'',
			list:{},
			count:0,
		}
	},
	components:{
		commonPlatform,
		// Newsdetial
	},
}
</script>
<style scoped lang="less">

</style>