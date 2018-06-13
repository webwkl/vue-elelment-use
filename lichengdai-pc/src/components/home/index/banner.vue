<template>
    <div class="block" >
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <!-- <el-carousel trigger="click" height="345px">
        <el-carousel-item v-for="(val,o) in girls" :key="o" >
          <img :src=val.image  @click=tab(val.href) alt="">
        </el-carousel-item>
      </el-carousel> -->
      <swiper class="banner clearfix " :options="swiperOptionthree" ref="mySwiper">
        <swiper-slide class="loop" v-for="(val,o) in girls" :key="o">
          <img class="img1" :src=val.image alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div class="regst_in inin">
          <p style="text-align: center;line-height: 80px;font-size:30px;">安全、便捷、透明</p>

          <p class="nhsy" style="padding-bottom:20px;"><span>6</span>%<span style="font-size:20px"> - </span><span>12</span>%</p>
          <p style="text-align:center;line-height:50px;font-size:16px;">目标年化利率
          </p>
          
          <a href="/register" class="zhuche" style="background-color: #ff6769"><span>注册</span></a>
                      
      </div>
    </div>
</template>
<script>
  export default {
    props:{
      girls:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data() {
      return {
        name:"banner",
        aGirls:[],
        swiperOptionthree: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            clickableClass : 'my-pagination-clickable',
          },
          loop:true,


        },
      }
    },

    methods:{
      tab:function ( e ) {
        window.location.href= e;
      }
    },
    mounted:function(){

    }
  }
</script>
<style scoped lang="less">

  .block{
    width: 100%;
    height: 375px;
    text-align: center;
    position: relative;
    .banner{
      height: 375px;
      .img1{
        height: 375px;
      }
      .swiper-container-horizontal  .swiper-pagination-bullets .swiper-pagination-bullet{
          width: 12px;
          height: 12px;
          cursor: pointer;
      }
    }
    .regst_in {
        width: 300px;
        height: 310px;
        position: absolute;
        z-index: 888;
        /* margin: 40px 0; */
        right: 20%;
        top: 17px;
        font-size: 12px;
        border-radius: 8px;
        color: #fff;
        background: url(/static/img/toppage/tmbg.png) repeat;
    }
    .nhsy {
        text-align: center;
        font-size: 30px;
        padding-top: 40px;
        padding-bottom: 40px;
        span{
            font-size: 36px;
          }
    }
    .regst_in a.zhuche {
        /* background-color: #f93603; */
        /* padding: 0 20px; */
        width: 265px;
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        text-align: center;
        display: block;
        color: #fff;
        margin: 0 auto;
        border-radius: 3px;
        margin-top: 5px;
        background-color: #ff6769;
        span{
          display: block;
        }
    }
    .inin {
        -webkit-animation: moveFromBottom 3s ease;
        -moz-animation: moveFromBottom 3s ease;
        -ms-animation: moveFromBottom 3s ease;
    }

    @-webkit-keyframes moveFromBottom {
        0% {
            -webkit-transform: translateY(-500px);
            opacity: 0;
        }
        60% {
            -webkit-transform: translateY(30px);
            opacity: 1;
        }
        70% {
            -webkit-transform: translateY(0);
            opacity: 1;
        }
        80% {
            -webkit-transform: translateY(10px);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateY(0);
            opacity: 1;
        }
    }

    @-moz-keyframes moveFromBottom {
        0% {
            -moz-transform: translateY(-500px);
            opacity: 0;
        }
        60% {
            -moz-transform: translateY(30px);
            opacity: 1;
        }
        70% {
            -moz-transform: translateY(0);
            opacity: 1;
        }
        80% {
            -moz-transform: translateY(30px);
            opacity: 1;
        }
        100% {
            -moz-transform: translateY(0);
            opacity: 1;
        }
    }

    @-ms-keyframes moveFromBottom {
        0% {
            -ms-transform: translateY(-500px);
            opacity: 0;
        }
        60% {
            -ms-transform: translateY(30px);
            opacity: 1;
        }
        70% {
            -ms-transform: translateY(0);
            opacity: 1;
        }
        80% {
            -ms-transform: translateY(30px);
            opacity: 1;
        }
        100% {
            -ms-transform: translateY(0);
            opacity: 1;
        }
}

  }
</style>
