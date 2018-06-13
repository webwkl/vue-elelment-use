<template>
  <div class="bank">
    <div id="shiming">

        <h2 class="b_tit">绑定银行卡</h2>
        <div id="main">
        <form action="" v-model='formdata'>
            <p><span>真实姓名 :</span>
                <input  placeholder="真实姓名 ( 必填 )" type="text" id="real_name"  v-model="formdata.real_name"> </p>
            <p><span>身份证号 :</span>
                <input maxlength="18" placeholder="最后一位存在X的情况，请大写 ( 必填 )" type="text"  id="idcard"   v-model="formdata.idcard"> </p>
            <p><span>手机号 :</span>
                <input maxlength="11" placeholder="您的手机号需要与开卡手机号一致" type="text" id="phone"  v-model="formdata.user_phone"> </p>
            <p><span>选择银行 :</span>
                <el-select v-model="value" placeholder="选择银行" >
                                      <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.bank_name"
                                        :value="item.bank_name"
                                        >
                                      </el-option>
                                    </el-select>
             </p>
            <p><span>借记卡 :</span>
                <input maxlength="19" placeholder="借记卡号（必填）" type="text" id="yhkh"  v-model="formdata.bank_num" > </p>
            <p> <a class="a_tj" @click="show()">查看推荐银行</a></p>
           <!-- <span class="auto_login">
                 <input type="checkbox" name="fukuang" checked="checked">
                 <span>我同意<a href="javascript:;" class="lcd">《徽商银行网络交易资金账户服务三方协议》</a></span>
            </span>-->
            <p style=" margin-top: 30px"> <a href="javascript:;" class="a_left" @click="tijiao()">立即开通</a><a href="/invest" class="a_right">再看看</a></p>
            </form>


            <div class="main_a" v-show='isshow'>
                <ul>
                    <li style="line-height: 50px;margin-top:10px;"><span style="color:#000">渠道银行</span><span style="color:#000">单笔/单日</span></li>
                </ul>
                <ul class="main_scol">
                    <li><span>工商银行</span><span>5万/5万</span></li>
                    <li><span>农业银行</span><span>5万/20万</span></li>
                    <li><span>中国银行</span><span>5万/5万</span></li>
                    <li><span>建设银行</span><span>5万/5万</span></li>
                    <li><span>交通银行</span><span>5万/5万</span></li>
                    <li><span>招商银行</span><span>5万/5万</span></li>
                    <li><span>浦发银行</span><span>5万/5万</span></li>
                    <li><span>光大银行</span><span>5万/20万</span></li>
                    <li><span>民生银行</span><span>5万/20万</span></li>
                    <li><span>中信银行</span><span>0.5万/2万</span></li>
                    <li><span>广发银行</span><span>5万/20万</span></li>
                    <li><span>平安银行</span><span>5万/20万</span></li>
                    <li><span>兴业银行</span><span>5万/5万</span></li>

                </ul>
                <p>*注：以上推荐银行为支持绑卡且支持快捷充值的银行；<br>除个别银行，立诚贷目前支持全国所有银行绑卡。</p>
            </div>
        </div>


<div class="iknow" v-if='iserror==1'>
    <div class="iknow_icon">
        <p style="padding-top:130px;">恭喜，您绑卡成功</p>
        <p><a style="background: #ff7800; color: #fff;" class="t_ws">去设置交易密码</a><a href="/member/Overview.html" style="float:right" class="t_cha">充值</a></p>
        <a href="/overview/index" class="iknow_cha" @click="close"><img src="/static/images/bank_icon/Accountsecurity/cha.png" ></a>
    </div>
</div>
<div class="iknow2" v-else-if='iserror==2'>
    <div class="iknow_icon">
        <p id="konw_html" style="padding-top:120px;width:470px;text-align: left;line-height: 30px;">{{errormsg}}</p>

        <a href="javascript:;" class="iknow_cha" @click="close"><img src="/static/images/bank_icon/Accountsecurity/cha.png" ></a>
    </div>
</div>
        <div class="reg_bottom"></div>
    </div>
  </div>
</template>
<script>
 export default {
  data(){
    return{
       isshow:false,
       iserror:0,
       formdata:{},
       errormsg:'您绑卡失败，请检查您输入的信息是否正确<br>或者拨打客服热线：400-151-3456 协助绑卡',
       options: [
        {
            value: '工商银行',
            label: '工商银行'
          }, {
            value: '农业银行',
            label: '农业银行'
          }, {
            value: '建设银行',
            label: '建设银行'
          }, {
            value: '中国银行',
            label: '中国银行'
          }],
        value: '',
    }
  },
  mounted:function(){
      this.getData();
  },
  methods:{
    getData(){
      this.get('/V1/open/bank')
      .then(res=>{
        if(res.data.status==1){
          this.formdata=res.data.list;
          this.options=res.data.bank_list
        }
      })
    },
    tijiao(){
      console.log(this.value);
       if(this.formdata.real_name==''){
         this.iserror=2;
         this.errormsg='您的真实姓名不能为空';
       }else if(this.formdata.idcard==''){
              this.iserror=2;
         this.errormsg='您的身份证号不能为空';
       }else if(this.formdata.user_phone==null){
           this.iserror=2;
         this.errormsg='您的手机号码不能为空';
       }else if(this.formdata.bank_num==null){
          this.iserror=2;
         this.errormsg='您的借记卡号不能为空';
       }
       // else if(this.value==''){
       // this.iserror=2;
       //   this.errormsg='您的身份证号不能为空';
       // }

    },
    show(){
      this.isshow=!this.isshow;
    },
    close(){
      this.iserror=0
    }
  }
 }
</script>
<style scoped>
.el-select{
  margin-left: 12px;
}
#shiming {
    background: #fff;
    width: 1200px;
    height: 700px;
    margin: 40px auto;
    border-top: 2px #ff7800 solid;
    background: #fff;
}

#shiming .shi_in {
    width: 1200px;
    margin: 0 auto;
}

input {
    border: none;
}

.b_tit {
    color: #333;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    margin-top: 30px;
}

#main {
    width: 440px;
    height: 624px;
    margin: 0 auto;
    background: #fff;
    position: relative
}

#main p {
    height: 50px;
    margin-bottom: 20px;
}

#main p span {
    width: 80px;
    text-align: right;
    display: inline-block;
}

#main p input {
    padding-left: 10px;
    margin-left: 10px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    width: 335px;
    background: #f8f8f8;
}

.a_tj {
    color: #5699ff;
    float: right;
    line-height: 50px;
    cursor: pointer;
}

.auto_login {
    width: 380px;
    padding-left: 30px;
}

.auto_login span a {
    color: #1a95d4;
    font-size: 16px;
}

.a_left {
    float: left;
    width: 165px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    background: #ff7800;
    border: #ff7800 1px solid;
    border-radius: 3px;
    margin-left: 30px;
    cursor: pointer;
}

.a_right {
    float: right;
    width: 165px;
    height: 40px;
    text-align: center;
    color: #ff7800;
    font-size: 18px;
    line-height: 40px;
    background: #fff;
    border: #ff7800 1px solid;
    border-radius: 3px;
    margin-right: 30px;
    cursor: pointer;
}

.main_a {
    position: absolute;
    right: -372px;
    top: 96px;
    width: 370px;
    height: 415px;
    background: url(/static/images/bank_icon/Accountsecurity/bjbj.png) no-repeat center center;
}

.main_a ul {
    width: 295px;
    margin-left: 50px;
}

.main_a ul li span {
    width: 50%;
    text-align: left;
    font-size: 14px;
    color: #666;
    display: inline-block;
    line-height: 30px;
}

.main_scol {
    height: 270px;
    overflow-y: auto;
}

.main_a p {
    font-size: 12px;
    color: #666;
    width: 295px;
    margin-left: 50px;
    margin-top: 20px;
}

.iknow {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.iknow div {
    position: relative;
    top: 200px;
    left: 50%;
    margin-left: -325px;
    width: 650px;
    height: 365px;
    background: url(/static/images/bank_icon/Accountsecurity/kx.png) no-repeat center top;
    background-color: #fff;
    border-radius: 10px;
}

.iknow_icon p {
    text-align: center;
    font-size: 18px;
    color: #666;
    width: 400px;
    margin: 0 auto;
}

.iknow_icon p a {
    display: block;
    width: 170px;
    height: 40px;
    float: left;
    background: #fff;
    border: 1px #ff7800 solid;
    line-height: 40px;
    border-radius: 5px;
    font-size: 18px;
    color: #ff7800;
    cursor: pointer;
    margin-top: 130px;
}

.iknow_icon .iknow_cha {
    clear: both;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}

.iknow2 {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.iknow2 div {
    position: relative;
    top: 200px;
    left: 50%;
    margin-left: -325px;
    width: 650px;
    height: 340px;
    background: url(/static/images/bank_icon/Accountsecurity/kx2.png) no-repeat center top;
    background-color: #fff;
    border-radius: 10px;
}
</style>
