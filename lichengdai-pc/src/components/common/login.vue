<template>
  <div class="register">
  <Header></Header>
      <div id="main" class="denglu_years" style="background: url(/static/images/reg/jf_bj.jpg) no-repeat center top;">
        <div class="main_in" >
         <div class="main_content login">
          <form id="" name="form" ref="AccountFrom">
              <h3>
                 <a href="login.html" class="login">登录</a>
                 <span class="float_r" style="padding-top:10px;">
                     <span class="myzh color_jiu">没有帐号？</span>
                     <a href="/register" class="mfzc">免费注册</a>
                 </span>
                </h3>
                <div class="mc_bd">
                   <input type="hidden" id="nameaa" value="" name="">
                    <label for="login">
                      <input class="bg_inputo" type="text"  name="username" v-model="username"  value=""  id="login" placeholder="输入用户名" />
                      <p id='spuser_name' v-show='showname'>{{errmsg}}</p>
                    </label>
                    <label for="reg">
                      <input class="bg_inputt" type="password" name="password" v-model="password" value="" id="reg"  placeholder="输入密码" />
                      <p id='sp_pwd' v-show='showpwd'>{{errpwd}}</p>
                    </label>
                    <input type="hidden" value="" id="param"/>
                     <p class="auto denglu_p">
                      <span class="auto_login">
                            <input type="checkbox" name="jizhu" v-model="jizhu" value="1"/>
                            <span>记住用户名</span>
                        </span>
                      <a class="wangjimima color_jiu color_jiu float_r lost" href="#" style="width: 60px; padding-right: 0;">忘记密码</a>
                    </p>
                    <a href="#" class="denglua" @click="handleLogin()">登录</a>
                </div>
            </form>
        </div>
    </div>
       <p class="js_p" style="">[广告]市场有风险，出借需谨慎</p>
  </div>
    <div class="logo_new_years">
    <p>© 2014-2018 信广立诚贷 All rights reserved | 信广立诚贷（北京）科技有限公司 | 京ICP证 161169号 | 京ICP备14048944号</p>
  </div>
  <Footer></Footer>
  </div>
</template>
<script>
import {setCookie,getCookie} from '@/util/util';
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import qs from 'qs';
  export default {
    name:'register',
    data () {
      return{
        username:'',
        password:'',
        jizhu:'',
        errpwd:'',
        showpwd:false,
        showname:false,
        errmsg:'',

      }
    },
    components:{
      Header,
      Footer
    },
    mounted() {
         /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      // if(getCo('username')){
      //   this.$router.push('/overview/index')

      //  }else{
      //   this.$router.push('/Login')
      //  }
      console.log(getCookie('PHPSESSID'))
    },
    methods:{
      handleLogin() {
        var account={
        user_name:this.username,
        user_pass:this.password,
        jizhu:this.jizhu,
        };
        if(this.username==''){
          this.showname=true;
          this.errmsg='用户名不能为空!';
        }else if(this.password==''){
          this.showpwd=true;
          this.errpwd='密码不能为空!';
        }else{
           this.post('/V1/login/enter',account).then(res => {
            if(res.data.status==1){
              //setCookie('username',this.username,1000*60);
              localStorage.setItem("token",res.data.token);
              localStorage.setItem("uid",res.data.uid);
              this.$router.push('/overview/index'); //跳转用户中心页

             }else if(res.data.status==0){
                  alert(res.data.message)
             }

             });
        }

   }
}
  }
</script>
<style scoped>
.denglu_years{
  min-width: 1200px;
  height:748px;
  position: relative;
  margin:0 auto;
  position: relative;
}
#main .main_in {
    width: 1200px;
    height: 425px;
    margin: 0 auto;
    padding: 155px 15px 105px 20px;
    padding-top: 100px;
}
#main .main_in .login {
    height: 440px;
  }
  #main .main_in .main_content form {
    display: block;
    height: 460px;
    width: 400px;
    float: right;
    padding: 40px 30px;
    background: #fff;
    overflow: hidden;
}
#main .main_in .main_content form h3 {
    height: 40px;
    font-size: 14px;
    font-weight: normal;
}
#main .main_in .main_content form h3 a.login {
    font-size: 24px;
    color: #ff751b;
    float: left;
    background-image: none;
    height: 39px;
}
.float_r {
    float: right;
}
.color_jiu {
    color: #cbcbcb;
}
#main .main_in .main_content form h3 a.mfzc {
    color: #ff751b;
}
#main .main_in .main_content form .mc_bd {
    padding-top: 27px;
    /* width: 340px; */
    margin: auto;
    overflow: hidden;
}
#main .main_in .main_content form .mc_bd label {
    display: block;
    height: 65px;
    line-height: 50px;
    font-size: 16px;
    margin-bottom: 20px;
    position: relative;
}
#main .main_in .main_content form .mc_bd label input {
    border: 1px solid #cccccc;
    height: 44px;
    line-height: 44px;
    width: 100%;
    font-size: 14px;
    border-radius: 3px;
    color: #999;
    box-sizing: border-box;
}
#main .main_in .main_content form .mc_bd p {
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    color: #cbcbcb;
}
#spuser_name ,#sp_pwd {
    text-align: left;
    height: 19px;
    display: block;
    line-height: 19px;
    margin-top: -1px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding-left: 77px;
    color: #EC7173;
}
.bg_inputo {
    background: #fff url(/static/images/reg/grey1.png) no-repeat left center;
    padding-left: 85px;
}
.bg_inputt {
    background: #fff url(/static/images/reg/grey2.png) no-repeat left center;
    padding-left: 85px;
}
#main .main_in .main_content form .wangjimima {
    margin-right: 10px;
}
#main .main_in .main_content form .mc_bd a.lost {
    margin-left: auto;
    display: block;
    color: #1a95d4;
    width: 320px;
    text-align: right;
    font-size: 14px;
}

#main .main_in .main_content form .mc_bd a.denglua {
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #ff751b;
    /* margin: 0 auto; */
    margin-top: 45px;
    border-radius: 3px;
     background: rgb(255, 117, 27);
}
.js_p {
    width: 400px;
    color: #999;
    font-size: 16px;
    position: absolute;
    left: 50%;
    text-align: center;
    margin-left: 205px;
    bottom: 210px;
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
</style>
