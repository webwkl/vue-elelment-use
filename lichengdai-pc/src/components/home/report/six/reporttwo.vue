<template>
  <div class="reporttwo">
  <Header></Header>
  <div class="box">
   <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in items" :key="index">
        <div class="l_one">
          <img :src="item.src" alt="">
        </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
       swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 300,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
           effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
        },
        items:[
        {
          src:'/static/images/report_img/l_report1.png'
        },
        {
          src:'/static/images/report_img/l_report2.png'
        },
        {
          src:'/static/images/report_img/l_report3.png'
        },
        {
          src:'/static/images/report_img/l_report4.png'
        },
        {
          src:'/static/images/report_img/l_report5.png'
        },
        {
          src:'/static/images/report_img/l_report6.png'
        },
        {
          src:'/static/images/report_img/l_report7.png'
        },
        {
          src:'/static/images/report_img/l_report8.png'
        },
         {
          src:'/static/images/report_img/l_report9.png'
        },
        {
          src:'/static/images/report_img/l_report10.png'
        },
        {
          src:'/static/images/report_img/l_report11.png'
        },
        ]

    }

  },
  components:{
   Header,Footer
  }
}
</script>
<style scoped>
.box{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2000;
    font-size: 16px;
    visibility: visible;
    overflow: hidden;
    background: #000e2a;

}
.box .l_one {
    width: 1200px;
    height: 600px;
    margin: 10% auto 0;
    background: rgba(255,255,255,.2);
    text-align: center;
    }
    .box .l_one img{
    margin: 0 auto;
    display: block;
    }
</style>
<style>
 .box .swiper-slide{
  position: relative;
    width: 100%;
    height: 100%;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    line-height: 2em;
    color: white;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    z-index: 1000;
    background: url(/static/images/report_img/report_1.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(2){
    background: url(/static/images/report_img/report_2.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(3),.box .swiper-slide:nth-child(5),.box .swiper-slide:nth-child(7),.box .swiper-slide:nth-child(9){
    background: url(/static/images/report_img/report_3.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(4),.box .swiper-slide:nth-child(6),.box .swiper-slide:nth-child(8),.box .swiper-slide:nth-child(10){
    background: url(/static/images/report_img/report_2.png) no-repeat top center;
  }
 .box .swiper-container-vertical > .swiper-pagination-bullets{
      list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 400px;
    right: 20px;
    transform: translateY(-50%);
  }
  .box .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    display: block;
    border-radius: 100%;
    background: #fff;
    opacity: 0.5;
    margin-bottom: 16px;
}
.box .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet-active{
  opacity: 1
}
</style>
