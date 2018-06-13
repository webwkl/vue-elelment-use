<template>
  <div class="about_cjwt01_right">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="1、如何更换已经认证的手机号？" name="1">
        <div>为了保障出借人账户的安全，如出借人需修改已经认证的手机号码，需致电立诚贷客服，经客服人工审核通过后方可修改。客服电话：400-151-3456。</div>
      </el-collapse-item>
      <el-collapse-item title="2、注册立诚贷账户时手机收不到短信验证码，如何处理？" name="2">
        <div>
        （1）若手机安装了拦截软件，可以通过拦截记录/垃圾短信找回；
                    <br>
                    （2）短信运营商通道可能会出现阻塞，短信出现下发延时或者失败的情况，您可以稍作等待；
                    <br>
                    （3）若没有收到验证码短信，倒计时结束后，可以点击语音验证码接听语音验证电话；
                    <br>
                    （4）如以上方案未能解决您的问题，请联系立诚贷客服。客服电话：400-151-3456。
          </div>
      </el-collapse-item>
      <el-collapse-item title="3、注册后需完成哪些认证？如何操作？" name="3">
        <div>
          您在首次充值前需完成个人身份信息的验证。您可在“我的账户——账户管理——账户安全”页面完成开通银行存管账户操作，详情如下:
                    <br>
                    （1）手机认证：在注册账户时，手机认证已经认证了，无需再认证；
                    <br>
                    （2）银行存管：<br>
                    <span style="margin-left: 35px;display: block;">a.开户授权：填写用户真实姓名、身份证号码、手机号（须与即将绑定的银行卡预留手机号一致）完成开户授权  ;</span>

                    <span style="margin-left: 35px;display: block;">b.绑定银行卡：填写银行卡号信息，银行卡须为本人名下的有效期内的借记卡。（此步骤在徽商银行页面完成绑卡操作）</span>

        </div>

      </el-collapse-item>
      <el-collapse-item title="4、注册个人账户时需要进行实名认证吗？" name="4">
        <div>
        注册立诚贷账户时不需要对用户进行实名认证。但当用户开通银行存管账户时，需对用户进行实名身份认证，且需与您在绑定的银行卡所预留的信息一致。用户真实身份在该平台一经核实，不能修改。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
<style >
.el-collapse-item__header{
     font-size: 14px;
    padding-left:25px;
    cursor: pointer;
 }
 .el-collapse-item__header:hover{
  color:#ff7800
 }
.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    color:#ff7800;
}
 .el-collapse-item__content{
  font-size: 14px;
  padding: 25px 40px 20px 40px;
    color: #838383;
 }
</style>
