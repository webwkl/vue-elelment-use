<template>
  <div class="reporttwo">
  <Header></Header>
  <div class="box">
   <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in items" :key="index">
        <div class="l_one1">
          <img :src="item.src" alt="" :style='item.style' :height="item.height">
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
          src:'/static/images/spring/a1.png',
          style:'padding-top:200px;',

        },
        {
          src:'/static/images/spring/a2.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a3.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a4.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a5.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a6.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a7.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/8j.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a8.png',
          style:'padding-top:50px;',
          height:'500',
        },
         {
          src:'/static/images/spring/a9.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a10.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a11.png',
          style:'padding-top:50px;',
          height:'500',
        },
         {
          src:'/static/images/spring/a12.png',
          style:'padding-top:50px;',
          height:'500',
        },
        {
          src:'/static/images/spring/a13.png',
          style:'padding-top:0;',
          height:'600',
        },
        {
          src:'/static/images/spring/a14.png',
          style:'padding-top:100px;',
          height:'400',
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
    background: url(/static//images/spring/bj.jpg);

}
.box .l_one1 {
    width: 1200px;
    height: 600px;
    background: rgba(116, 156, 232, 0.1) url(/static/images/spring/cai.jpg) no-repeat bottom left;
    text-align: center;
    margin: 0 auto;
    margin-top: 10%;
    }
    .box .l_one img{
      height: 100%;

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
    background: url(/static/images/spring/report_1.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(2){
    background: url(/static/images/spring/report_2.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(3),.box .swiper-slide:nth-child(5),.box .swiper-slide:nth-child(7),.box .swiper-slide:nth-child(9){
    background: url(/static/images/spring/report_3.png) no-repeat top center;
  }
  .box .swiper-slide:nth-child(4),.box .swiper-slide:nth-child(6),.box .swiper-slide:nth-child(8),.box .swiper-slide:nth-child(10){
    background: url(/static/images/spring/report_2.png) no-repeat top center;
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
