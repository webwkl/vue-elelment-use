<template>
  <div class="xsyd">
  <Header></Header>
  <div class="banner"></div>
  <h3 class="ban_h1">
       <div class="zhuanshou1">
         新手引导流程
       </div>
  </h3>
  <div class="banner2"></div>
  <h3 class="ban_h">
       <div class="zhuanshou">
         实时播报
       </div>
  </h3>
  <div class="ban_slo">
  <div class="slo_di">
    <div class="left">
     <swiper :options="swiperOption1" ref="mySwiper2" class="bd">
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
     </swiper>
   </div>
   <div class="right">
      <swiper :options="swiperOption2" ref="mySwiper1" class="bd">
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <swiper-slide><span>11111111</span><span>222222222</span><span>3333333</span></swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
     </swiper>
   </div>
  </div>
  </div>
  <div class="div_hb">
   <a href="/invest" class="btn_one">立即出借</a>
  </div>
 <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
   data() {
      return {
        swiperOption1: {
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction : 'vertical',
          loop:true,
          slidesPerView: 4,
        },
        swiperOption2: {
          autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction : 'vertical',
          loop:true,
          slidesPerView: 4,
        }
      }
    },
  components:{
    Header,Footer
  },
}
</script>
<style scoped>
.banner{
  min-width: 1200px;
  height: 345px;
  background: url('/static/images/xsyd/banner_new.png') no-repeat top center;
  position: relative;
  margin: 0 auto;
}
.ban_h1 {
    background: url(/static/images/xsyd/banner2.png) no-repeat center center;
    width: 1200px;
    color: #fff3df;
    font-size: 24px;
    text-align: center;
    margin: auto;
    margin-top: 38px;
    padding-top: 76px;
    font-weight: 100;
    cursor: pointer;
}
.zhuanshou1 {
    color: #b57339;
    font-size: 24px;
    margin-top: -51px;
}
.ban_h {
    width: 1200px;
    color: #fff3df;
    font-size: 24px;
    height: 142px;
    background: url(/static/images/xsyd/banner2.png) no-repeat center center;
    text-align: center;
    margin: auto;
    padding-top: 82px;
    font-weight: 100;
    cursor: pointer;
}
.zhuanshou {
    color: #b57339;
    font-size: 24px;
    margin-top: -24px;
}
.banner2{
    min-width: 1200px;
    height: 1623px;
    background: url(/static/images/xsyd/a2_new.png) no-repeat top center;
    position: relative;
    margin: 0 auto;
    margin-top: 5px;
}
.ban_slo {
    width: 1145px;
    height: 200px;
    border: 1px solid #d2a36b;
    margin: 0 auto;
    margin-bottom: 50px;
    background: url(/static/images/xsyd/slo_bj.jpg) no-repeat center center;
}
.slo_di{
  width: 100%;
  height: 150px;
  margin-top: 25px;
}
.div_hb{
  margin-bottom: 101px;
}
.btn_one {
    display: block;
    background: url(/static/images/xsyd/tiaobiao1.png) no-repeat center center;
    width: 600px;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
  .ban_slo .right{
   float: right;
   width: 572px;
   height: 100%;
  }
  .ban_slo .left{
   float: left;
   width: 570px;
   height: 100%
  }
  .swiper-container{
    height: 100%;
  }
  .swiper-slide{
    padding-left: 70px;
  }
  .swiper-slide span{
      color: #666;
      margin-right: 30px;
      line-height: 36px
  }
</style>
<style>

</style>
