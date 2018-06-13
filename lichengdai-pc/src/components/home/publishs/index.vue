<template>
<div>
<Header></Header>
  <div id="Publishs">
  
  <Commonpublish></Commonpublish>
  <router-view></router-view>
  <div style="clear:both"></div>
  
</div>
<Footer></Footer>
</div>
	
</template>

<script>
import Commonpublish from '../../common/publish.vue'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
	export default {
		name:'Publishs',
		data () {
			return{
				msg:"信息披露"
			}
		},
    components:{
    Commonpublish,Header,Footer
  },
	}
</script>
<style scoped>
  #Publishs{
    width: 1200px;
    margin: 0 auto;
  }
  .content{
    padding-top: 45px;
    float: left;
    width: 934px;
  }
</style>
