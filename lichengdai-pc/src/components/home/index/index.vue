<template>
<section class="topPage">
  <Header></Header>

    <banner :girls="aGirls"></banner>
    <div id="notices">
        <div class="notices_in">
            <span>
              <a href="javascript:;">最新公告：</a>
            </span>
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for= "(notice_val,index) in Article" :key = "index">
                <a href="javascript:;" @click="toNews(notice_val.id)" class="clearfix">
                  <span class="fl">{{notice_val.title}}</span>
                  <span class="fr">{{notice_val.art_time}}</span>
                </a>
              </swiper-slide>
            </swiper>
            <!-- <a href="/newsone/9" class="look">查看全部</a> -->
            <router-link :to="{name:'newsone',params:{id:9}}" class="look" >查看全部</router-link>
        </div>
    </div>
    <!--notices-->
    <div class="top">
        <div class="topw">
            <div class="top_top clearfix"><transition name="fade">
            <p class="">

                <img @mouseover="move(0)" @mouseout = "leave()" :class="{move:moveindex==0}" class="a4" src="/static/img/newindex/4.png" alt="">

                <router-link to="/xsyd">
                    <span class="p2">新手引导<br>
                      <em>立即开启财富之旅</em>
                    </span>
                </router-link>
              </p></transition>
              <p>
                <img @mouseover="move(1)" @mouseout = "leave()" :class="{move:moveindex==1}" class="a1" src="/static/img/newindex/1.png" alt="">
                <router-link to="/onemin">
                    <span class="p2">一分钟了解立诚贷<br>
                      <em>背景雄厚 方便快捷</em>
                    </span>
                </router-link>
              </p>
              <p class="">
                <img @mouseover="move(2)" @mouseout = "leave()" :class="{move:moveindex==2}" class="a2" src="/static/img/newindex/2.png" alt="">
                <router-link to="/Safety">
                    <span class="p2">
                        安全保障
                        <br>
                        <em>银行存管 专业风控</em>
                    </span>
                </router-link>
              </p>
              <p class="">
              <img @mouseover="move(3)" @mouseout = "leave()" :class="{move:moveindex==3}" class="a3" src="/static/img/newindex/3.png" alt="">
                <a href="/RunReport">
                    <span class="p2">运营报告<br>
                      <em>安全 便捷 透明</em>
                    </span>
                </a>
              </p>
            </div>
            <div class="top_b">
                <p>安全运营：<span>{{capital.year}} 年 {{capital.data}} 天</span></p>
                <p>累计撮合金额：<span>{{capital.yi}} 亿 {{capital.wan}} 万 {{capital.yuan}} 元</span></p>
                <p>为出借人赚取：<span>{{capital.syyy}} 亿 {{capital.sywan}} 万 {{capital.syyuan}} 元</span></p>
                <p>注册人数：<span>{{capital.wanren}} 万 {{capital.danren}} 人</span></p>
            </div>
        </div>
    </div>
    <div class="xiaofei">
        <ul>
          <li @mouseover ="move1(0)" @mouseout="leave1()" :class="{move1:moveindex1==0}">
            <p class="li_p3" >
              <a href="/invest/invest_nong?borrow_type=13">立即加入</a>
            </p>
          </li>
          <li class="li_bg" @mouseover="move1(1)" @mouseout="leave1()" :class="{move1:moveindex1==1}">
            <p class="li_p3 ">
              <router-link to="/invest/invest_nong?borrow_type=11">立即加入</router-link>
            </p>
          </li>
          <li class="li_bg1" @mouseover="move1(2)" @mouseout="leave1()" :class="{move1:moveindex1==2}">
             <p class="li_p3 ">
              <a href="/invest/invest_nong?borrow_type=12">立即加入</a>
            </p>
          </li>
        </ul>
    </div>
    <div class="xiangmu">
      <div class="w">
        <div class="biaoti">
            <span class="biao_line1"></span>
            <span class="biao_text">优选项目</span>
            <span class="biao_line2"></span>
        </div>
        <div class="content" @mouseover ="move(0)" @mouseout="leave()" :class="{move1:moveindex==0}">
          <p class="c_title">
            <span>
              <a href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>{{content_list.borrow_name}}</a>
            </span>
          </p>
          <div class="contents clearfix">
            <div>
              <p class="color">{{content_list.borrow_interest_rate}}<span>%</span></p>
              <span>目标年化利率</span>
            </div>
            <div>
              <p>{{content_list.borrow_duration}}个月</p>
                <span>项目期限</span>
            </div>
            <div>
              <p>{{content_list.borrow_money}}元</p>
                <span>项目金额</span>
            </div>
            <p class="butn">
            <button  class=" button_a hovera" :disabled="disabled"   @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)' v-if="content_list.can_auto_time >startTime">
                     <countdown :endTime='content_list.can_auto_time'  :callback="callback" endText="立即加入"></countdown>
            </button>
            <a href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)' v-else>立即加入</a>
            </p>
          </div>
          <div class="progress2">
            <i :style="{width:content_list.progress+'%'}"></i>
            <span>{{content_list.progress}}%</span>
          </div>
        </div>
        <div class="content" @mouseover ="move(1)" @mouseout="leave()" :class="{move1:moveindex==1}">
          <p class="c_title">
            <span>
              <a href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>{{content_list_two.borrow_name}}</a>
            </span>
          </p>
          <div class="contents clearfix">
            <div>
              <p class="color">{{content_list_two.borrow_interest_rate}}<span>%</span></p>
              <span>目标年化利率</span>
            </div>
            <div>
              <p>{{content_list_two.borrow_duration}}个月</p>
                <span>项目期限</span>
            </div>
            <div>
              <p>{{content_list_two.borrow_money}}元</p>
                <span>项目金额</span>
            </div>
            <p class="butn">
              <a id="time_show_12704" class="time_val" for="12704"  href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>立即加入</a>
            </p>
          </div>
          <div class="progress2">
            <i :style="{width:content_list_two.progress+'%'}"></i>
            <span>{{content_list_two.progress}}%</span>
          </div>
        </div>
        <div class="content" @mouseover ="move(2)" @mouseout="leave()" :class="{move1:moveindex==2}">
          <p class="c_title">
            <span>
              <a href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>{{content_list_three.borrow_name}}</a>
            </span>
          </p>
          <div class="contents clearfix">
            <div>
              <p class="color">{{content_list_three.borrow_interest_rate}}<span>%</span></p>
              <span>目标年化利率</span>
            </div>
            <div>
              <p>{{content_list_three.borrow_duration}}个月</p>
                <span>项目期限</span>
            </div>
            <div>
              <p>{{content_list_three.borrow_money}}元</p>
                <span>项目金额</span>
            </div>
            <p class="butn">
              <a id="time_show_12704" class="time_val" href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>立即加入</a>
            </p>
          </div>
          <div class="progress2">
            <i :style="{width:content_list_three.progress+'%'}"></i>
            <span>{{content_list_three.progress}}%</span>
          </div>
        </div>
        <div class="content" @mouseover ="move(3)" @mouseout="leave()" :class="{move1:moveindex==3}">
          <p class="c_title">
            <span>
              <a href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>{{content_list_four.borrow_name}}</a>
            </span>
          </p>
          <div class="contents clearfix">
            <div>
              <p class="color">{{content_list_four.borrow_interest_rate}}<span>%</span></p>
              <span>目标年化利率</span>
            </div>
            <div>
              <p>{{content_list_four.borrow_duration}}个月</p>
                <span>项目期限</span>
            </div>
            <div>
              <p>{{content_list_four.borrow_money}}元</p>
                <span>项目金额</span>
            </div>
            <p class="butn">
              <a id="time_show_12704" class="time_val" href="javascript:;" @click='toDetail(content_list.id,content_list.tpl,content_list.borrow_type)'>立即加入</a>
            </p>
          </div>
          <div class="progress2">
            <i :style="{width:content_list_four.progress+'%'}"></i>
            <span>{{content_list_four.progress}}%</span>
          </div>
        </div>
        <a href="/invest" class="xiangmu_a">查看更多&gt;&gt;</a>
      </div>
  </div>
  <div class="news3">
    <div class="w">
      <h2 class="gh">新闻中心</h2>
      <div class="new_box">
        <div class="report">
          <div class="new_top clearfix">
              <div class="new_title">平台动态</div>
              <div class="new_more">
                  <router-link :to="{name:'newsone',params:{id:9}}" class="" >平台动态</router-link>
              </div>
          </div>
          <div class="new_content">
              <ul>
                <li v-for="(news_val,index) in news.pingtai" class="clearfix">
                  <span class="yuan fl"></span>
                  <a target="_blank" class="fl" href="javascript:;" @click="toNews(news_val.id)" :title="news_val.title">{{news_val.title}}</a>
                  <span class="fr">{{news_val.art_time}}</span>
                </li>
              </ul>
          </div>
        </div>
      <!-- 媒体报道 -->
        <div class="report">
          <div class="new_top">
            <div class="new_title">媒体报道</div>
            <div class="new_more">
              <!-- <a href="/newstwo">more</a> -->
              <router-link :to="{name:'newstwo',params:{id:30}}" class="">媒体报道</router-link>
            </div>
          </div>
          <div class="new_content">
            <ul>
              <li v-for="(news_val,index) in news.meiti" class="clearfix">
                  <span class="yuan fl"></span>
                  <a target="_blank" class="fl" href="javascript:;" @click="toNews(news_val.id)" :title="news_val.title">{{news_val.title}}</a>
                  <span class="fr">{{news_val.art_time}}</span>
                </li>
            </ul>
          </div>
        </div>
        <div class="report">
          <div class="new_top">
            <div class="new_title">行业动态</div>
            <div class="new_more">
              <!-- <a href="/newsthree">more</a> -->
              <router-link :to="{name:'newsfive',params:{id:34}}"  class="">行业动态</router-link>
            </div>
          </div>
          <div class="new_content">
            <ul style="margin-top: 10px">
              <li v-for="(news_val,index) in news.dynamic" class="clearfix">
                  <span class="yuan fl"></span>
                  <a target="_blank" class="fl"href="javascript:;" @click="toNews(news_val.id)" :title="news_val.title">{{news_val.title}}</a>
                  <span class="fr">{{news_val.art_time}}</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    <!--资讯报告-->
    </div>
  </div>
  <div class="pic_in">
    <h2 class="gh2">合作伙伴</h2>
      <swiper class="partner clearfix " :options="swiperOptiontwo" ref="mySwiper">
        <swiper-slide class="loop" v-for="(img,index) in imgs" :key="index">
          <img class="img1" :src=img.src alt="">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</div>
<Footer></Footer>
<router-view></router-view>
</section>
</template>
<script>
import Banner from "./banner.vue"
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import countdown from "../../common/time.vue"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    components:{
      Banner,
      swiper,
      swiperSlide,
      Header,
      Footer,
      countdown
    },
    data() {
      return {
        moveindex:null,
        moveindex1:null,
        moveindex2:null,
        show:true,
        disabled:true,
        startTime:'',
        aGirls:[],
        Article:[],
        capital:[],
        news:{},
        content_list:{},
        content_list_two:[],
        content_list_three:[],
        content_list_four:[],
        imgs:[
          {
            src:'/static/img/panter/1.png',
          },
          {
            src:'/static/img/panter/2.png',
          },
          {
            src:'/static/img/panter/3.png',
          },
          {
            src:'/static/img/panter/4.png',
          },
          {
            src:'/static/img/panter/5.png',
          },
          {
            src:'/static/img/panter/6.png',
          },
          {
            src:'/static/img/panter/7.png',
          },
          {
            src:'/static/img/panter/8.png',
          },
          {
            src:'/static/img/panter/9.jpg',
          },
        ],
        swiperOption: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          direction : 'vertical',
          loop:true,
        },
        swiperOptiontwo: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 5,
          // spaceBetween: 30,
          slidesPerGroup: 1,
          hideOnClick: false,
          loop:true,

        }
      }
    },
    mounted:function(){
      this.ajax();
      this.List();
      window.addEventListener('scroll', this.handleScroll);

    },
    methods:{
      callback(){
      this.disabled=false
       //document.getElementById("button_a").disabled=false;
     },
      ajax(){
        this.get('/V1/Index/show')
        .then(res => {

            this.Article = res.data.Article;

            this.capital = res.data.capital;
            this.aGirls = res.data.advertisement_lists;
            this.news = res.data;

          })
      },
      List(){
        var params={
          id:this.id,
          type:this.borrow_type
        }
        this.get('V1/Investinfo/investinforong',params).then(res => {
          console.log(res.status)
        })
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('.xiangmu').offsetTop
        if (scrollTop > offsetTop-700) {
        // alert(1)
          this.get('/V1/Index/mark')
          .then(res => {
            this.content_list = res.data.optOneRet.list[0];
            this.content_list_two = res.data.optThrRet.list[0];
            this.content_list_three = res.data.optSixRet.list[0];
            this.content_list_four = res.data.optYearRet.list[0];

          })
        }

      },
      //进入详情页
      toNews(id){
        this.$router.push({
          path: '/news/detail',
          query: {
            id: id
          }
        })
      },
      toList(id,type){
        this.$router.push({
          path:'/invest',
          query:{
            id:id,
            type:type,
          }
        })
      },
      move(index){
        this.moveindex = index;
      },
      leave(){
        this.moveindex = null;
      },
      move1(index){
        this.moveindex1 = index;
      },
      leave1(){
        this.moveindex1 = null;
      },
      move2(index){
        this.moveindex2 = index;
      },
      leave2(){
        this.moveindex2 = null;
      },
      toDetail(id,val,type){
        if(val!='detail4'){
          this.$router.push({
          path: '/invest/detail',
          query: {
            id:id,
            type:type
          }
        })
        }else{
          //alert(val)
          this.$router.push({
          path: '/invest/info',
          query: {
            id:id,
            type:type
          }
        })
      }
       //this.$router.push('?id=id')
     },

    }
  }
</script>
<style scoped lang="less">
body{
  background: #f8f8f8;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s linear;
    transform: translate3d(0, 0, 0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   transform: translate3d(100%, 0, 0);
}
.move{
  transform: scale(1.2);
  transition-duration: 1.5s;
  -moz-transition-duration: 1.5s; /* Firefox 4 */
  -webkit-transition-duration: 1.5s; /* Safari 和 Chrome */
  -o-transition-duration: 1.5s; /* Opera */
}
.move1{
  transform: translateY(-6px);
  transition-duration: 0.5s;
  -moz-transition-duration: 0.5s; /* Firefox 4 */
  -webkit-transition-duration: 0.5s; /* Safari 和 Chrome */
  -o-transition-duration: 0.5s; /* Opera */
  box-shadow: rgba(0, 0, 0, 0.22) 5px 5px 5px;
}
#notices {
  width: 100%;
  height: 46px;
  background:#fff;
  border-bottom:1px solid #eee;
  border-top: 1px solid #eee;
  overflow: hidden;
  .notices_in {
    width: 1200px;
    height: 45px;
    color: #666;
    line-height: 45px;
    text-align: left;
    text-indent: 30px;
    background: url(/static/img/toppage/nose.png) no-repeat;
    vertical-align: middle;
    padding-right: 0;
    margin: 0 auto;
    position: relative;
    a{
      color: #666;
    }
    span{
      display: inline-block;
      vertical-align: top;
    }
    .noticTipTxt {
      width: 950px;
      height: 46px;
      line-height: 46px;
      overflow: hidden;
      position: absolute;
      left: 100px;
      top: 0;
      li{
        height: 46px;
        line-height: 46px;

      }
    }
    .look {
      float: right;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      height: 30px;
      line-height: 30px;
      padding: 0 25px;
      margin-top: 7px;
      color: #666;
      text-indent: 0;
    }
    .swiper-container{
      width: 70%;
      height: 46px;
      display: inline-block;

    }
  }
}
.top{
    width: 1200px;
    margin: 30px auto 40px;
    height: 183px;
    border: 1px solid #fff;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    .topw {
        width: 1145px;
        margin: 0 auto;
        .top_top {
            padding: 30px 0;
            border-bottom: 1px solid #dddddd;
            span {
                font-size: 18px;
                line-height: 28px;
                font-family: '微软雅黑';
                text-align: left;
            }
            p {
                float: left;
                width: 286px;
                .a4 {
                    float: left;
                    width: 53px;
                    height: 60px;
                    margin-right: 20px;
                }
                .a1 {
                    float: left;
                    width: 53px;
                    height: 60px;
                    margin-right: 20px;
                }
                .a2 {
                    float: left;
                    width: 53px;
                    height: 60px;
                    margin-right: 20px;
                }
                .a3 {
                    float: left;
                    width: 53px;
                    height: 60px;
                    margin-right: 20px;
                }
                a {
                    color: #555;
                    text-decoration: none;
                }
            }
        }
        .top_b {
          width: 1150px;
          margin: 0 auto;
          height: 50px;
          line-height: 50px;
          p {
              float: left;
              text-align: left;
              color: #666666;
              margin-right: 70px;
              span {
                  color: #e21616;
              }
          }
          p:first-child{
            margin-right: 50px;
          }
          p:last-child{
            margin-right: 0;
          }
      }
    }
}
.xiaofei {
    width: 100%;
    height: 490px;
    background: url(/static/img/newindex/bj.jpg) no-repeat top center;
    background-size: 100% 100%;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/Style/images/newindex/bj.jpg',sizingMethod='scale');
    ul {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        height: 490px;
        padding: 50px 0;
        li{
          float: left;
          width: 360px;
          height: 385px;
          margin-right: 40px;
          background: #fff;
          border-radius: 2px;
          padding: 0 25px;
          box-shadow: 5px 5px 5px rgba(0,0,0,0.05);
          background: url(/static/img/newindex/a1.png) no-repeat;
          .li_p3{
            margin-top: 309px;
            a {
              display: block;
              height: 43px;
              text-align: center;
              line-height: 43px;
              width: 100%;
              color: #fff;
              background: #fd6a61;
              border-radius: 4px;
            }
          }

        }
        .li_bg{
          background: url(/static/img/newindex/a2.png) no-repeat;
        }
        .li_bg1{
          background: url(/static/img/newindex/a3.png) no-repeat;
        }
    }
}
.xiangmu {
    width: 100%;
    height: 535px;
    padding: 50px 0;
    background: #f1f1f1;
    .w {
        width: 1200px;
        margin: 0 auto;
    }
    .biaoti {
        margin-bottom: 30px;
        .biao_line1 {
          width: 526px;
          display: inline-block;
          border-bottom: 1px solid #dddddd;
        }
        .biao_text {
          width: 138px;
          display: inline-block;
          text-align: center;
          font-size: 20px;
          line-height: 20px;
        }
        .biao_line2 {
          width: 526px;
          display: inline-block;
          border-bottom: 1px solid #dddddd;
        }
    }
    .content {
        display: inline-block;
        width: 575px;
        height: 175px;
        background: #fff;
        padding-top: 25px;
        border-radius: 2px;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.05);
        margin-right: 20px;
        margin-bottom: 20px;
        .c_title {
            padding-left: 30px;
            margin-bottom: 20px;
            a{
              color: #666;
            }
        }
        .contents {
            padding-left: 30px;
            div {
                float: left;
                width: 142px;
                height: 50px;
                .color{
                    font-size: 24px;
                    color: #ff5555;
                    padding-left: 20px;
                }
                span{
                  text-align: left;
                  color: #999999;
                }
                p{
                  line-height: 28px;
                }
            }
            .butn {
                float: left;
                width: 100px;
                height: 30px;
                a,button {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background: #ff6769;
                    color: #fff;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 2px;
                }

            }
        }
        .progress2 {
            margin-left: 30px;
            width: 318px;
            margin-top: 30px;
            height: 3px;
            background: #dddddd;
            position: relative;
            i {
                position: absolute;
                left: 0;
                top: 0;
                height: 3px;
                background-color: #ff6769;
            }
            span {
                font-size: 16px;
                position: absolute;
                left: 338px;
                bottom: -9px;
            }
        }
    }
    .xiangmu_a {
        font-size: 14px;
        color: #999999;
        font-family: "微软雅黑";
        margin: 0 auto;
        display: block;
        width: 85px;
        text-align: center;
        clear: both;
        height: 20px;
        line-height: 20px;
    }
}
.news3 {
    width: 100%;
    height: 270px;
    background: #fff;
    .w {
        width: 1200px;
        margin: 0 auto;
        .gh {
            font-family: "微软雅黑";
            /* width: 100%; */
            text-align: center;
            font-size: 26px;
            line-height: 50px;
            padding-top: 30px;
            font-weight: 100;
        }
        .new_box {
            padding-top: 25px;
            padding-left: 30px;
            width: 1200px;
            margin: 0 auto;
            height: 153px;
            border: 1px solid #dddddd;
            margin-top: 8px;
            .report {
                width: 350px;
                height: 100%;
                float: left;
                margin-right: 40px;
            }
            .report:last-child{
              margin-right: 0;
            }
            .new_title {
                float: left;
                width: 117px;
                height: 31px;
                font-size: 16px;
                font-family: "微软雅黑";
                padding-bottom: 13px;
                border-bottom: 1px solid #ff6769;
            }
             .new_more {
                float: left;
                text-align: right;
                width: 232px;
                height: 31px;
                font-size: 16px;
                font-family: "微软雅黑";
                padding-bottom: 13px;
                border-bottom: 1px solid #999999;
                a{
                  font-size: 14px;
                  color: #999999;
                }
            }
            .new_content{
              ul{
                margin-top: 10px;
                li{
                  line-height: 28px;
                  .yuan {
                      display: inline-block;
                      height: 10px;
                      width: 10px;
                      border-radius: 50%;
                      background: #eeeeee;
                      margin-right: 10px;
                      margin-top: 9px;
                  }
                  span{
                    color: #666;
                  }
                  a{
                    color: #555;

                  }
                }
              }
            }
        }
    }
}
.pic_in {
    width: 1200px;
    margin: 0 auto 20px;
    .gh2 {
        color: #000;
        width: 100%;
        text-align: center;
        font-size: 26px;
        line-height: 50px;
        padding-top: 30px;
        font-weight: 100;
    }
    .partner{
        .loop{
          margin: 0 auto;
          height: 105px;
          text-align: center;
          position: relative;
          line-height: 105px;
          img{
            vertical-align: middle;
          }
        }
        .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
          left: 0;
          right: auto;
        }
    }
}
</style>
