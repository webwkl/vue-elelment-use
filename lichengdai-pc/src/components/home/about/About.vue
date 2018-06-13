<template>
<div id="About">
  <Header></Header>
  <Commonabout></Commonabout>
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>

<script>
import Commonabout from '../../common/about.vue'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  name: 'About',
  data () {
    return {
      msg: '这是关于我们'
    }

  },
  components:{
    Commonabout,Header,Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
