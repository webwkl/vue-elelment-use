<template>
  <div class="yearend">
  <Header></Header>
  <div class="box">
   <div class="banner">
     <img style="margin-left: -74px" src="/static/images/sevenyearend/banner.png" alt="">
     </div>
     <div class="banner1">
     </div>
     <div class="banner2">
     </div>
     <div class="banner3">
     </div>
     <div class="banner4">
     </div>
     <div class="banner5">
     </div>
     <div class="banner6">
     </div>
     <div class="banner7">
     </div>
     <div class="banner8">
     </div>
  </div>
  <Footer></Footer>
  </div>
</template>
<script>
  import Header from '@/components/common/Header'
  import Footer from '@/components/common/Footer'
  export default {
  data () {
    return {
    }

  },
  components:{
   Header,Footer
  }
}
</script>
<style scoped>
.box{
      width: 100%;
      padding-top: 55px;
      text-align: center;
      background: url(/static/images/sevenyearend/bj.png) no-repeat;
      background-size: 100% 100%;
    }
    .banner{
      margin: 0 auto;
      min-width: 1024px;
      height: 424px;
    }

    .banner1{
      position: relative;
    margin-top: -77px;
    min-width: 1250px;
    height: 464px;
    background: url(/static/images/sevenyearend/1.png) no-repeat top center;
    background-size: auto 100%;
    z-index: 2;
    }
    .banner2{
      margin-top: -13px;
      min-width: 1250px;
      height:753px;
    background: url(/static/images/sevenyearend/2.png) no-repeat top center;
    background-size: auto 100%;
    }
    .banner3{
      min-width: 1250px;
      height: 753px;
    background: url(/static/images/sevenyearend/3.png) no-repeat top center;
    background-size: auto 100%;
    margin-top: -13px;
    }
    .banner4{
      min-width: 1250px;
      height: 753px;
    background: url(/static/images/sevenyearend/4.png) no-repeat top center;
    background-size: auto 100%;
    margin-top: -13px;
    }
    .banner5{
      margin-top: -13px;
      min-width: 1250px;
      height: 662px;
    background: url(/static/images/sevenyearend/5.png) no-repeat top center;
    background-size: auto 100%;
    }
    .banner6{
      margin-top: -13px;
      min-width: 1250px;
      height: 535px;
    background: url(/static/images/sevenyearend/6.png) no-repeat top center;
    background-size: auto 100%;
    }
    .banner7{
      margin-top: -13px;
      min-width: 1250px;
      height: 398px;
    background: url(/static/images/sevenyearend/7.png) no-repeat top center;
    background-size: auto 100%;
    }
    .banner8{
      margin-top: -13px;
      min-width: 1250px;
      height: 750px;
    background: url(/static/images/sevenyearend/8.png) no-repeat top center;
    background-size: auto 100%;
    }
</style>
