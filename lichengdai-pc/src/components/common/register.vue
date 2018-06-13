<template>
	<div class="register">
  <Header></Header>
    	<div id="shiming">
        <div class="shi_in">
            <div id="main">
                 <!--<p class="hsz">徽商银行资金存管保障资金安全</p>-->
                 <h4>注册新账号</h4>
                    <div class="main_in">

                        <div class="main_content">
                          <form name="form1">
                        <div class="form_top">

                            <div class="mc_bd">

                                <div for="login" id="input01" style="clear: both">
                                    <p class="inp_p" >手机号</p>
                                    <input placeholder="请输入手机号" class="sjj" type="text" name="mobile" id="login" v-model="pamars.mobile"   />
                                    <p id="spphone"></p>
                                </div>
                                <div for="reg" id="input02" style="clear: both">
                                    <div class="pos">

                                        <div id="box">
                                            <p class="inp_p" >登录密码</p>
                                            <input placeholder="请输入密码"  class="mima" id="pw_one" type="password"  name="pwd" v-model="pamars.pwd"   >
                                            <p id="sppw_one"></p>
                                        </div>
                                    </div>

                                </div>
                                <!--验证码 图文-->
                                <div id="twyz">
                                  <p class="inp_p" >图形验证码</p>
                                    <p class="yz_ia" style="display:block;height:50px;">
                                        <input placeholder="请输入验证码" style="width: 247px!important;" type="text" name="verify" id="verify" class="test_yzm" v-model="pamars.verify" @blur='yanzheng' >
                                        <img onclick="this.src=this.src+'?t='+Math.random()" id="imVcode" alt="点击换一个校验码" style="width:153px;margin:0; height:45px;float:left" src="/static/images/reg/verify.png">
                                    </p>
                                    <p id="verifyTop" class="verifyTop" style=""></p>
                                </div>

                                <div id="duanxininput" class="dijihou" style="height: 45px;">
                                   <p class="inp_p" >短信验证码</p>
                                    <p class="yz_ia" style="display:block;height:45px;">

                                        <!--短息-->
                                        <input style="width:248px!important;" type="text" name="yzm" id="yfdxinput" class="test_yzm" placeholder="请输入验证码" :disabled="disabled" v-model="pamars.yzm" @blur='yanzheng' >
                                         <a id="fsz"  class="dxyfs" disabled="disabled" v-show='!show'>短信已发送（ {{count}}s ）</a>
                                         <a id="hyzm" class="dxyfs" v-show='show'  @click="getCode">发送短信验证码</a>

                                    </p>

                                    <p class="verifyTop2" style="display:block;line-height:24px;margin-top:-5px;"></p>

                                </div>
                                <div class="tj_h" style="clear: both;">
                                       <p class="inp_p" >推荐人手机</p>
                                        <input style="padding-left: 100px;width:100%" class="tui" placeholder="请输入推荐人手机号"  />
                                        <p id="sptjr"></p>
                                    </div>

                                <input type="hidden" id="otc" value="">
                                <span class="auto_login">
                                <input type="checkbox" name="fukuang" checked="checked"/>
                                <span>我已阅读并同意<a href="javascript:;" @click="isshowModal()" class="lcd">《信广立诚贷网站服务协议》</a><br><a href="javascript:;" class="lcd2" @click="isjfshowModal()" >《信广金服网站服务协议》</a></span>
                                    </span>
                                <a href="javascript:;"  class="denglureg">立即注册</a>
                                <p class="yydl">
                                    已有账户？<a href="/login" style="color: #ff751b;font-size:16px">登录</a>
                                </p>
                            </div>
                        </div>
                         </form>

                        </div>
                    </div>
                    <p class="js_p">市场有风险，出借需谨慎</p>
            </div>
        </div>
      </div>
      <div class="logo_new_years">
          <p>© 2014-2018 信广立诚贷 All rights reserved | 信广立诚贷（北京）科技有限公司 | 京ICP证 161169号 | 京ICP备14048944号</p>
      </div>
      <div class="modal" v-show="showmodal">
          <transition name="slide-fade">
           <Xieyi v-show="showmodal"></Xieyi>
         </transition>
      </div>
      <div class="modal" v-show="jfshowmodal">
          <transition name="slide-fade">
           <jfxieyi v-show="jfshowmodal"></jfxieyi>
         </transition>
      </div>
       <div class="l_box" v-show='tishi'>
            <h4 class="hong">特别提示</h4>
            <p>1、请确认您填写的手机号码是否正确；</p>
            <p>2、若手机所处环境较差，请调整至网络信号较强的地域接收短信；</p>
            <p>3、若手机安装拦截软件，请查询拦截记录或垃圾短信进行找回；</p>
            <p>4、若仍未收到验证码短信，倒计时结束后，可点击验证码重新发送；</p>
            <p>5、如以上方案仍未能解决您的问题，请联系立诚贷客服。客服电话：400-151-3456.</p>
            <span class="l_yes" @click='colse'>确定</span>
        </div>

  <Footer></Footer>
	</div>
</template>

<script>
import Xieyi from "./lcdxieyi.vue"
import jfxieyi from "./jfxieyi.vue"
import Header from '@/components/common/Header'

import Footer from '@/components/common/Footer'
  export default{
    data() {
      return {
        disabled:true,
        show:true,
        tishi:false,
         pamars:{
          verify:'',
          yzm:'',
          mobile:'',
          pwd:'',
         },
         count:''
      }
    },
    computed: {
      showmodal() {
        return this.$store.state.isModal
      },
      jfshowmodal() {
        return this.$store.state.jfModal
      }
    },
    components:{
      Xieyi,
      jfxieyi,
      Header,
      Footer
    },
    methods:{
        isshowModal(){
          this.$store.commit('muShowprotocolBombBox', true)
        },
        isjfshowModal(){
          this.$store.commit('jfShowprotocolBombBox', true)
        },
       getCode(){
             const TIME_COUNT = 60;
             if (!this.timer) {
             this.count = TIME_COUNT;
             this.show = false;
             this.disabled=false;
             this.timer = setInterval(() => {
             if (this.count > 0 && this.count <= TIME_COUNT) {
               this.count--;
              } else {
               this.show = true;
               clearInterval(this.timer);
               this.timer = null;
              }
             }, 1000)
            }
      },
      yanzheng(){
        this.tishi=true;
        this.disabled=false
      },
      colse(){
        this.tishi=false;
      }

    }
  }
</script>
<style scoped>
 #shiming {
  min-width: 1200px;
  height: 738px;
  margin: 0 auto;
    background: #FFFFFF url(/static/images/reg/reg.png) no-repeat top center;
}
.shi_in{
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
#main {
    width: 440px;
    height: 595px;
    float: right;
    background: #fff;
    margin-top: 90px;
    overflow: hidden;
    position: relative;
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0,0.1);
    -moz-box-shadow: 1px 1px 8px rgba(0,0,0,0.1);
    box-shadow: 1px 1px 8px rgba(0,0,0,0.1);
}
#main h4 {
    font-size: 24px;
    color: #ff7800;
    line-height: 70px;
    padding-left: 25px;
}
#main .main_in {
    /* margin: 0 auto; */
    width: 440px;
}
.form_top {
    display: block;
    }
.mc_bd {
    width: 400px;
    margin: auto;
}
#main .main_in .main_content form .mc_bd div {
    display: block;
    font-size: 16px;
    margin-bottom: 20px;
    position: relative;
    height: 45px;
    position: relative;
    width: 400px;
    border-radius: 5px;
}
#main .main_in .main_content form .mc_bd div .inp_p {
    width: 93px;
    font-size: 16px;
    color: #333;
    text-align: center;
    line-height: 45px;
    position: absolute;
    left: 0;
    top: 0;
    border-right: 1px dashed #ccc;
}
#main .main_in .main_content form .mc_bd div input {
    border: 1px solid #ccc;
    height: 45px!important;
    line-height: 45px;
    width: 400px;
    width: 400px\9;
    font-size: 14px;
    padding-left: 100px;
    color: #999;
    outline: none;
    box-sizing: border-box;
}
#spphone, #sppw_one, #verifyTop, #idcardErr, #realnameErr {
    width: 300px;
    position: absolute;
    left: 96px;
    bottom: -18px
}
#verifyTop {
  display:block;
  line-height:24px;
}
.yz_ia img {
    display: inline-block;
    position: absolute;
    right: 0;
}

.dxyfs {
    width: 150px!important;
    height: 45px!important;
    line-height: 43px;
    border: 1px solid #ff751b;
    background-color: #d7d5d4;
    color: #646262;
    display: inline-block;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    float: right;
margin-right: 2px;
}
.denglureg {
    height: 43px!important;
    height: 45px;
    line-height: 45px;
    display: block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #ff7800;
    margin: 0 auto;
    border: 1px solid #fa5f02;
    width: 100%;
    border-radius: 5px;
}
.yydl {
    color: #333;
    font-size: 16px;
    text-align: right;
    line-height: 40px;
    margin-top: 10px;
}
.auto_login span a {
    color: #1a95d4;
    font-size: 16px;
}
.lcd2 {
    padding-left: 130px;
}
.yz_ia img {
    display: inline-block;
    position: absolute;
    right: 0;
}
.js_p {
        width: 440px;
    color: #999;
    font-size: 16px;
    position: relative;
    left: 4px;
    text-align: center;
    top: 10px;
    margin: 0 auto;
}
.logo_new_years {
    width: 990px;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
}
.logo_new_years{
  line-height: 100px;
  text-align: center;
  color: #999;
}
.modal{
   width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.l_box {
    width: 300px;
    height: 400px;
    padding: 30px;
    position: fixed;
    border: 1px solid #ccc;
    left: 50%;
    top: 50%;
    margin-left: -151px;
    margin-top: -201px;
    background: #fff;
}
.l_box .hong {
    color: #e24747;
    text-indent: 20px;
    line-height: 40px;
}
.l_box p {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    color: #666;
}
.l_yes {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: block;
    color: #fff;
    background: #e24747;
    margin-left: 70px;
    cursor: pointer;
}
</style>
