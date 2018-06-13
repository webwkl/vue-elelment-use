<template>
  <div id="problem">
  <Header></Header>
  <div class="bj"></div>
  <div id="wdzh">

     <Commonproblem></Commonproblem>
       <router-view></router-view>


  </div>

  <div style="clear:both"></div>
  <Footer></Footer>
</div>
</template>

<script>
import Commonproblem from '../../common/problem.vue'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
  export default {
    name:'problem',
    data () {
      return{
        show:false
      }
    },

    components:{
    Commonproblem,Header,Footer
     },
      created() {
      },
  }
</script>
<style scoped>

.bj{
  min-width: 1200px;
  height:300px;
  margin: 0 auto;
  background: url(/static/images/cjwt.jpg) no-repeat top center;
}
#wdzh {
    width: 993px;
    margin: 0 auto;
    height: auto;
    overflow: hidden;
    margin-top: 60px;
    margin-bottom: 80px;
    padding-left: 3px;
}
#wdzh .about_cjwt01_right {
    width: 740px;
    border: 1px solid #e3e3e3;
    float: right;
    height: auto;
    padding: 8px 25px 30px 25px;
    overflow: hidden;
    /* padding-bottom: 30px; */
}

</style>
