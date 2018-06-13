<template>
  <div class="yearend">
  <Header></Header>
   <div class="wrap">
     <div class="slideTxtBox1">
                          <ul class="hd_ul1">
                          </ul>
            <div class="bd1">
                 <swiper :options="swiperOption" ref="mySwiper1" >
                    <swiper-slide><img  src="/static/images/report_autumn/a1.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/report_autumn/a2.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a3.png"></swiper-slide>
                    <swiper-slide> <img  src="/static/images/report_autumn/a4.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/report_autumn/a5.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a6.png"  ></swiper-slide>
                    <swiper-slide><img  src="/static/images/report_autumn/a7.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/report_autumn/a8.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a9.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a10.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a11.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a12.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/report_autumn/a13.png"></swiper-slide>
               </swiper>
                  <img src="/static/images/report_autumn/left.png"   id="prev" class="prev" slot="button-prev">
                  <img src="/static/images/report_autumn/right.png"   id="next" class="next" slot="button-next">
            </div>
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
      swiperOption: {
          slidesOffsetAfter:0,
           //autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
            navigation: {
            nextEl: '.next',
            prevEl: '.prev',
          },
          pagination: {
            el: '.hd_ul1',
            clickable: true,
            renderBullet: function (index, className) {
                switch(index){
                  case 0:index='';break;
                  case 1:index='撮合总额';break;
                  case 2:index='撮合总额';break;
                  case 3:index='出借笔数';break;
                  case 4:index='出借笔数';break;
                  case 5:index='累计赚取';break;
                  case 6:index='项目分布';break;
                  case 7:index='注册人数';break;
                  case 8:index='注册人数';break;
                  case 9:index='客户端分布';break;
                  case 10:index='排行榜';break;
                  case 11:index='大事记录';break;
                  case 12:index='谢谢阅读';break;
                }
                return '<span class="' + className + '">' + index + '</span>';
              },
          }
        }
    }

  },
  components:{
   Header,Footer
  }
}
</script>
<style scoped>
.wrap{
  width: 100%;
  height:1198px;
  background: #1e40e3;
  background-size: 100% 100%;
}
.slideTxtBox1 {
    width: 100%;
    height: 754px;
}
.hd_ul1 {
    width: 110px;
    height: 670px;
    font-weight: normal;
    position: fixed;
    right: 30px;
    top: 0;
}
.bd1{
    position: relative;
    margin: 0 auto;
    width: 1000px;
    height: 600px;
    padding-top: 150px;
  }
#prev,
#next {
    position: absolute;
    width: 49px;
    height: 104px;
    top: 50%;
    z-index: 20;
    cursor: pointer;
    opacity: 1;
    /*filter: alpha(opacity=70);*/
    margin-top: 60px;
}

#prev {
    left: -95px;
}

#next {
    right: -95px;
}
.bd1 .swiper-slide img{
  margin-top: 45px;
}

</style>
<style>
  .hd_ul1 .swiper-pagination-bullet{
    display: block;
    width: 76px;
    height: 76px;
    background: url(/static/images/report_autumn/no.png);
    text-align: center;
    padding-top: 20px;
    position: absolute;
    color: #333;
    opacity: 1;
    border-radius: 0;
    padding-right: 20px;
    padding-left: 20px;
}
.hd_ul1 .swiper-pagination-bullet:nth-child(1){
  position: fixed;
    width: 35px;
    height: 177px;
    top: 35px;
    right: 48px;
    background: url(/static/images/report_autumn/topon.png) no-repeat top center ;

}
/*.swiper-pagination-bullet:nth-child(1):.swiper-pagination-bullet-active{
    background: url(/static/images/report_autumn/topon.png) no-repeat top center ;
}*/
.hd_ul1 .swiper-pagination-bullet:nth-child(2){
  left: 0;
  top: 245px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(3){
  left: 0;
  top: 245px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(4){
  right: 0;
  top: 310px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(5){
  right: 0;
  top: 310px;
}
.hd_ul1 .swiper-pagination-bullet:nth-child(6){
  left: 0;
  top: 375px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(7){
  right: 0;
  top: 440px
}
.hd_ul1 .swiper-pagination-bullet:nth-child(8){
  left: 0;
  top: 510px;
}
.hd_ul1 .swiper-pagination-bullet:nth-child(9){
  left: 0;
  top: 510px;
}
.hd_ul1 .swiper-pagination-bullet:nth-child(10){
  right: 0;
  top: 580px;
  padding-left: 15px;
  padding-right: 15px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(11){
  left: 0;
  top: 645px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(12){
  right: 0;
  top: 710px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(13){
  left: 0;
  top: 775px;

}
.bd1 .swiper-slide{
  text-align: center;
  /*//background:url(/static/images/report_autumn/bjx.jpg);*/
   width: 1000px;
   height: 600px;
   background: #4868ff
}
.hd_ul1 .swiper-pagination-bullet-active{
  background: url(/static/images/report_autumn/on.png);
  color: #fff;
  z-index: 888
}
</style>
