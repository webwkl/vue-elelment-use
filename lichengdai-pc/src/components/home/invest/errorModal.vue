<template>
  <div class="error">
     <div id="fadet5" class="bleter">
          <div id="mydiv5" class="pament" v-if='message.show==1'>
            <div class="pemher">
                <h2>{{message.title}}</h2>
                <span @click="closediv()"><img src="/static/images/ites2.png" /></span>
            </div>
            <div class="pewenz">
               <p id="tishi" align="center">{{message.content}}</p>
            </div>
            <div class="paytr">
               <a href="javascript:;" @click="closediv()">{{message.btn}}</a>
            </div>
            <div class="rgter">
            </div>
          </div>

          <div class="modal-data" v-else-if='message.show==2'>
            <!--<a class="chac" onclick="overlay()" ><img src="/static/images/xltkt/chac.png"> </a>-->
            <div class="mod_con1">
               <img src="/static/images/xltkt/anx.png">

               <p>立诚贷携手安心签(CFCA)致力于为广大出借人提供一个高效、安全的电子合同解决方案，以数字签名和加密存储为核心，提供签署主体身份认证、在线传输、第三方存储、合同验真服务。</p>
               <p><i class="chk"></i>我已经阅读并接受<a href="https://www.anxinsign.com/Web/duty/use_agreement.html" target= _blank>《安心签平台服务协议》</a><a href="https://www.anxinsign.com/Web/duty/use_agreement.html#certServiceProtocol" target= _blank>《CFCA数字证书服务协议》</a><a href="https://www.anxinsign.com/Web/duty/privacy_policy.html" target= _blank>《隐私声明》</a></p>
               <a class="mod_btn mod1">立即开通</a>
            </div>
            <div class="mod_con2">
                  <img src="/static/images/xltkt/ax2.jpg">
                  <a  style="background:#fca41f;margin-top:80px" class="mod_btn">确定</a>
            </div>
            <div class="mod_con3">
                <p class="con3_p">请您先进行实名认证</p>
                <a href="/Accountsecurity" style="background:#fca41f;margin-top:80px" class="mod_btn">确定</a>
            </div>
            <div class="mod_con4">
                <p class="con3_p" id="error"></p>
                <a href="javascript:;"  style="background:#fca41f;margin-top:80px" class="mod_btn">确定</a>
            </div>

          </div>
          <div class="xl_in1 cl1" v-else>
            <a class="xltkt_btn" href="/pandect"></a>
            <a @click="closediv()" class="xltkt_cha"></a>
          </div>
     </div>
  </div>
</template>
<script>
  export default {
    props:{
      message:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    data(){
      return{

      }
    },
    methods:{
      closediv(){
      if(this.message.btn=='立即评估'){
        this.$store.commit('errorModalshow', false);
        this.$store.commit('assessmentModalshow', true)
      }else{
        this.$store.commit('errorModalshow', false)
      }
      }
    }
  }
</script>

<style scoped>
 .bleter {
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0;
    right: 0;
    width: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 1001;
}
.pament {
    width: 525px;
    position: absolute;
    top: 200px;
    left: 33%;
    background: #FFF;
    z-index: 1002;
}
.pemher {
    width: 440px;
    float: left;
    border-bottom: 1px solid #d9d9d9;
    margin-left: 52px;
    margin-top: 15px;
}
.pemher h2 {
    width: 400px;
    float: left;
    font-size: 18px;
    color: #333;
    font-weight: normal;
    line-height: 50px;
    text-align: center;
}
.pemher span {
    float: right;
    width: 23px;
    height: 23px;
    margin-top: 8px;
    cursor: pointer;
}
.pewenz {
    width: 440px;
    float: left;
    margin-left: 52px;
    margin-top: 15px;
    height: 133px;
}
.pewenz p {
    line-height: 35px;
    font-size: 16px;
    color: #333;
    overflow: hidden;
}
.paytr {
    float: left;
    width: 200px;
    height: 45px;
    background: #ffa422;
    line-height: 45px;
    text-align: center;
    border: 1px solid #ffa422;
    border-radius: 5px;
    margin-left: 162px;
    margin-bottom: 21px;
}
.paytr a {
    text-decoration: none;
    line-height: 45px;
    color: #FFF;
    font-size: 18px;
    display: block;
    width: 200px;
}
.xl_in1 {
        width: 709px;
        height: 400px;
        margin: 250px auto;
        background:url(/static/images/xltkt/hsbj.png) top center no-repeat;
        text-align: center;
        position: relative;
    }

    .xl_in1 p {
        width: 380px;
        margin: 0 auto;
        font-size: 14px;
        color: #666;
        line-height: 32px;
        text-align: left;
        padding-top: 80px;
    }

    .xl_in1 p span {
        font-size: 16px;
        color: #000;
        line-height: 50px;
    }


    .xltkt_btn {
        color: #fff;
        display: block;
        width:54%;
        height: 54px;
        position: absolute;
        bottom: 74px;
        left: 23%;
        cursor: pointer;

    }

    .xltkt_cha {
        position: absolute;
        top: 17px;
        right: 17px;
        display: block;
        width: 23px;
        height: 23px;
        background: url(/static/images/xltkt/hscha.png) top center no-repeat;
        cursor: pointer;
    }
     .modal-data{
        width:710px;
        height: 460px;
        margin: 150px auto;
        background:url(/static/images/xltkt/tanc.png);
        background-size: 100% 100%;
        position: relative;
    }
    .chac{
        position: absolute;
        top: 20px;
        right: 25px;
        cursor: pointer;
    }
    .mod_con1{ width: 580px;margin: 0 auto;padding-top: 130px;}
    .mod_con2{ width: 580px;margin: 0 auto;padding-top: 130px;display: none;}
    .mod_con3{ width: 580px;margin: 0 auto;padding-top: 130px;display: none;}
    .mod_con4{ width: 580px;margin: 0 auto;padding-top: 130px;display: none;}
    .mod_con1 p{padding-top: 25px;color: #767676;font-size: 14px;line-height: 25px;position: relative;}
    .mod_con1 p a{color:#135e9e;cursor: pointer;}
    .mod_con1 p i{display:inline-block;width: 15px;height: 15px;border: 2px solid #ccc;position: absolute;top:28px;left: 0;cursor: pointer;}
    .mod_btn{ width: 250px;margin: 0 auto;display: block;height: 60px;background:#ccc;border-radius: 5px;color: #fff;font-size:24px;line-height: 60px;margin-top: 30px;cursor: pointer;text-align: center;}
</style>
