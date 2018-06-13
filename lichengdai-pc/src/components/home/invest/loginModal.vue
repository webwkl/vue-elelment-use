<template>
 <div class="modal">
     <div class="xl_in2">
        <h3>登录</h3>
        <input class="taxtys" placeholder="请输入手机号" type="text" v-model="username">
        <input class="taxtys" placeholder="请输入登录密码" type="password" v-model="password" >
        <a href="javascript:;" class="xltk_btn" @click="login()">登录</a>
        <a href="javascript:;" class="xltk_cha" @click="closeModal()"></a>
     </div>
 </div>
</template>
<script>
import {setCookie,getCookie} from '@/util/util';
 export default {
   data(){
    return{
      password:'',
      username:'',
    }
   },

   methods:{
    login(){
        var account={
        user_name:this.username,
        user_pass:this.password,
        };
        if(this.username==''){
          alert('用户名不能为空')
        }else if(this.password==''){
          alert('密码不能为空')
        }else{
           this.post('/V1/login/enter',account).then(res => {
            if(res.data.status==1){
              //setCookie('username',this.username,1000*60);
              this.$store.commit('loginModalshow', false);
              location.reload()
             }else if(res.data.status==0){
                  alert(res.data.message)
             }

             });
        }
    },
    closeModal(){
      this.$store.commit('loginModalshow', false)
    }
   }
 }
</script>
<style scoped>
.modal{
     position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        overflow: scroll;
        z-index: 9999;
}
.xl_in2 {
    width: 390px;
    height: 320px;
    margin: 250px auto;
    background: #fff;
    border: 1px solid #000;
    padding-top: 20px;
    text-align: center;
    position: relative;
}
.xl_in2 h3 {
    text-align: center;
    font-size: 25px;
    color: #000;
    line-height: 70px;
}
.xl_in2 .taxtys {
    width: 310px;
    height: 45px;
    line-height: 45px;
    background: #fff;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin: 0 auto;
    margin-bottom: 15px;
}
.xltk_btn {
    color: #fff;
    display: block;
    width: 220px;
    height: 40px;
    background: #f79035;
    margin: 50px auto;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    border-radius: 5px;
}
.xltk_cha{

    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    width: 30px;
    height: 30px;
    background: url(/static/images/xltkt/cha.jpg) top center no-repeat;
    cursor: pointer;
}
</style>
