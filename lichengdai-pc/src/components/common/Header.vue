<template>
  <nav class="Header">
    <article class="headTop">
      <div class="topContent clearfix">
        <ul class="c_servive fl">
            <li>客服热线：400-151-3456
            </li>
            <li>服务时间：9:00-18:00
            </li>
            <li class="navli">关注我们
                <span class="sy_sjb" @mouseover="showJinfu()" @mouseout="showJinfu()" v-if="theShow"></span>
                <span class="sy_sjb1" @mouseover="showJinfu()" @mouseout="showJinfu()" v-else></span>
                <div class="topapp" v-show="theShow">
                    <img src="/static/img/topapp.png"  alt="金服二维码">
                </div>
            </li>
        </ul>
        <ul class="fr">
          <li class="dlddhovers" v-show="beforlogin">
            <router-link to="/register" >注册</router-link>
            <span >丨</span>
            <router-link to="/login" >登录</router-link>
          </li>
          <li class="dlddhovers" v-show="!beforlogin">
            <a href="javascript:;">{{username}}</a>
            <a href="javascript:;" @click="tuichu()">退出</a>
          </li>
          <!--新手引导-->
          <li class="dlddhovers">
            <router-link  to="/xsyd">新手引导</router-link>
          </li>
          <li class="dlddhovers">
            <router-link to="/Problems">常见问题</router-link>
          </li>
          <li class="dlddhovers">
            <a class=" jf_cla" target="_blank" href="http://www.xinguangjf.com">信广金服</a>
          </li>
        </ul>
      </div>
    </article>
    <article class="headbottom">
      <div class="minWidth clearfix">
        <div class="fl">
          <img src="/static/img/logo.jpg"  alt="信广立诚贷" class="logo">
        </div>
        <div class="fr">
          <router-link to="/" class="linkGo" exact>首页</router-link>
          <router-link to="/invest" class="linkGo">我要出借</router-link>
          <a href="http://shxy.lichengdai.com" target="_blank"  class="linkGo">信广商学院</a>
          <router-link to="/Publishs" class="linkGo">信息披露</router-link>
          <router-link to="/About" class="linkGo">关于我们</router-link>
          <router-link to="/overview/pandect" class="linkGo">账户中心</router-link>
        </div>

      </div>
    </article>

  </nav>
</template>
<script>
import {delCookie,getCookie} from '@/util/util';
export default {
  name: 'Header',
  data () {
    return {
      theShow:false,
      beforlogin:false,
      username:'',
      token:'',
      uid:''
    }
  },
   mounted() {
    //console.log(getCookie('u_user_name'));
    if(getCookie('u_user_name')){
                this.beforlogin=false;
                 this.username=getCookie('u_user_name');
               }else{
                this.beforlogin=true;
        }
    },
  methods:{
    showJinfu:function(){
      this.theShow = !this.theShow;
    },
    tuichu(){
       var params={'token': this.token,'uid':this.uid}
          this.post('/V1/login/quit',params)
          .then(res=>{
              //delCookie('u_user_name');
             this.beforlogin=true;
             this.$router.push('/')
             location.reload()
            //iconsole.log(res.data);

          })
    }
  },
  watch: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.Header{
  background: #fff;
}
  .headTop{
    width: 100%;
    height: 35px;
    color: #fff;
    border-bottom: 1px solid #e9e9e9;
    background: #313131;
  }
  .topContent{
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;

  }
  .c_servive li {
    float: left;
    height: 35px;
    line-height: 35px;
    margin-right: 20px;
    font-size: 12px;
  }
  .navli {
    position: relative;
    cursor: pointer;
  }
  .sy_sjb {
    display: inline-block;
    width: 23px;
    height: 15px;
    background: url(/static/img/weixin.png) left center no-repeat;
    padding-left: 30px;
    cursor: pointer;
    vertical-align: middle;
  }
  .sy_sjb1{
    display: inline-block;
    width: 23px;
    height: 15px;
    background: url(/static/img/weix.png) left center no-repeat;
    padding-left: 30px;
    cursor: pointer;
    vertical-align: middle;
  }
  .topapp {
    background-color: #313131;
    width: 594px;
    height: 196px;
    position: absolute;
    top: 34px;
    left: -277px;
    z-index: 1111;
  }
  .topapp img{
    width: 100%;
    height: 100%;
  }
  .dlddhovers{
    display: inline-block;
    margin-right: 20px;
    height: 35px;
    line-height: 35px;
    float: left;
    font-size: 12px;
    color: #fff;
  }
  .jf_cla{
    background: #d2a36b;
    height: 25px;
    margin-top: 4px;
    line-height: 25px;
    padding: 4px 8px;
  }
  .headbottom{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  .minWidth{
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    font-size: 0;
  }
  .logo{
    width: 421px;
    height: 70px;
    margin-top: 10px;
  }
  .linkGo{
    font-size: 16px;
    color: #333;
    line-height: 16px;
    padding:  42px 30px;
    display: inline-block;
  }
  .minWidth .router-link-active{
    border-bottom: 2px solid #ff6769;
    color: #ff6769;
    padding: 40px 30px;
  }
</style>
