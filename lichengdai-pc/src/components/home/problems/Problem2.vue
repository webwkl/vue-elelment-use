<template>
  <div class="about_cjwt01_right">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="1、在立诚贷如何进行充值？" name="1">
        <div>
        登录账户，点击充值按钮——输入充值金额——跳转到银行资金存管平台交易页面——输入交易密码并确认——跳转到立诚贷账户充值页面获取验证码——填写验证码——确认充值，显示充值成功。（充值前提是用户成功设置交易密码）
        <br>
        您可以通过"资金管理"查看充值的金额及历史记录。如充值失败，请联系立诚贷客服，客服电话：400-151-3456。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2、为什么网上银行充值成功，但是立诚贷账户里的余额却没有增加？" name="2">
        <div>
        由于在同一时间使用同一个银行存管充值账户端口充值的人可能较多，在某些时候会造成网银显示与立诚贷账户金额显示不同步的情况。如遇到这种情况，您可将网银付款成功的页面截图，然后刷新立诚贷账户页面。如果刷新未能解决问题，可致电立诚贷客服400-151-3456进行解决。
          </div>
      </el-collapse-item>
      <el-collapse-item title="3、用户如何提现？" name="3">
        <div>
          在您开户成功后，并且余额内有资金时，您点击个人中心的‘提现’按钮——点击获取短信验证码——输入手机验证码——跳转到银行资金存管平台交易页面输入交易密码——点击‘确认’完成提现。

        </div>

      </el-collapse-item>
      <el-collapse-item title="4、用户提现是否有限额？" name="4">
        <div>
       出借用户提现没有上限。
        </div>
      </el-collapse-item>
      <el-collapse-item title=" 5、平台充值、提现手续费是多少？" name="5">
        <div>
        目前，用户在平台充值、提现产生的手续费由平台垫付，暂时不向用户收取该项费用。若后期费用变动，我们将会以公告、站内信、短信等形式进行通知。
        </div>
      </el-collapse-item>
      <el-collapse-item title="6、充值或提现后资金未到账如何处理？" name="6">
        <div>
        若您成功充值或提现后2小时资金未到账，请拨打立诚贷客户服务热线400-151-3456，我们会有专业的客服协助您解决问题。
        </div>
      </el-collapse-item>
      <el-collapse-item title="7、绑卡时提示信息校验失败如何解决？" name="7">
        <div>
        信息校验失败是由于用户提交的绑卡信息和银行卡号相关信息不匹配导致的。请检查您手机号、实名的姓名和证件号码，是否和卡开户信息一致。如果您确定一致仍信息校验失败，请联系立诚贷客服帮您解决，客服电话：400-151-3456。
        </div>
      </el-collapse-item>
      <el-collapse-item title="8、在立诚贷充值是否能够使用信用卡？" name="8">
        <div>
        立诚贷禁止使用信用卡，禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。
        </div>
      </el-collapse-item>
      <el-collapse-item title="9、用户提现后资金多久到账？" name="9">
        <div>
              平台直接存管升级后，提现分实时提现和大额提现，提现到账时间如下：
                <br>
                实时提现：支持单笔5万元及以下，单日20万元及以下提现实时到账；
                <br>
                大额提现： 超过5万元限额为大额提现，提现处理时间工作日：8:30--16:30，到账时间为30分钟左右，依据发卡行不同，可能稍有差异。
                <br>
                <span style="color:#ff7800">备注:双休日及法定节假日暂不处理大额提现，请注意您的大额提现时间，以免影响您的资金使用。</span>
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

    padding-left:25px;
    cursor: pointer;
    font-size: 14px;
 }
.el-collapse-item__header:hover{
  color:#ff7800
 }
.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    color:#ff7800;
}
 .el-collapse-item__content{
  padding: 25px 40px 20px 40px;
    color: #838383;
    font-size: 14px;
 }
</style>

