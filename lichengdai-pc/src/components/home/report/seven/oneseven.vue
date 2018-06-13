<template>
  <div class="yearend">
  <Header></Header>
   <div class="wrap">
     <div class="slideTxtBox1">
                          <ul class="hd_ul1">
                          </ul>
            <div class="bd1">
                 <swiper :options="swiperOption" ref="mySwiper1" >
                    <swiper-slide style='background:none'><img  src="/static/images/oneseven/a1.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/oneseven/a2.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/oneseven/a3.png"></swiper-slide>
                    <swiper-slide> <img  src="/static/images/oneseven/a4.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/oneseven/a5.png"></swiper-slide>
                    <swiper-slide> <img src="/static/images/oneseven/a6.png"  ></swiper-slide>
                    <swiper-slide><img  src="/static/images/oneseven/a7.png"></swiper-slide>
                    <swiper-slide><img  src="/static/images/oneseven/a8.png"></swiper-slide>
                    <swiper-slide><img src="/static/images/oneseven/a9.png"></swiper-slide>
               </swiper>
                  <img src="/static/images/oneseven/left.png"   id="prev" class="prev" slot="button-prev">
                  <img src="/static/images/oneseven/right.png"   id="next" class="next" slot="button-next">
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
                  case 1:index='数据总览';break;
                  case 2:index='出借金额';break;
                  case 3:index='出借金额';break;
                  case 4:index='出借笔数';break;
                  case 5:index='注册人数';break;
                  case 6:index='项目分布';break;
                  case 7:index='客户端分布';break;
                  case 8:index='排行榜';break;
                  case 9:index='谢谢阅读';break;
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
  background: url(/static/images/oneseven/bj.jpg) no-repeat;
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
    width: 76px;
    height: 76px;
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
    background: url(/static/images/oneseven/no.png);
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
    background: url(/static/images/oneseven/topon.png) no-repeat top center ;

}
/*.swiper-pagination-bullet:nth-child(1):.swiper-pagination-bullet-active{
    background: url(/static/images/oneseven/topon.png) no-repeat top center ;
}*/
.hd_ul1 .swiper-pagination-bullet:nth-child(2){
  left: 0;
  top: 245px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(3){
  right: 0;
  top: 310px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(4){
  left: 0;
  top: 375px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(5){
  right: 0;
  top: 440px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(6){
  left: 0;
  top: 504px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(7){
  right: 0;
  top: 570px;
  padding-left: 15px;
  padding-right: 15px;

}
.hd_ul1 .swiper-pagination-bullet:nth-child(8){
  left: 0;
  top: 635px

}
.hd_ul1 .swiper-pagination-bullet:nth-child(9){
  right: 0;
  top: 700px;

}
.bd1 .swiper-slide{
  text-align: center;
  background:url(/static/images/oneseven/bjx.jpg);
   width: 1000px;
   height: 600px;
}
.hd_ul1 .swiper-pagination-bullet-active{
  background: url(/static/images/oneseven/on.png);
  color: #fff
}

</style>
