<template>
<div class="problems">
  <div class="about_cjwt01_right">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="1、什么是银行存管？为什么要开通银行存管？" name="1">
        <div>
        资金存管是指互联网金融平台在银行金融机构开设独立账户，用于存放用户的交易资金，银行业金融机构根据用户的指令、合同内容，对用户的交易与资金流水进行划拨与簿记。<br>
        应《网络借贷信息中介机构业务活动管理暂行办法》以下简称《办法》要求及让出借者更加放心，信广立诚贷完成银行存管升级。
        </div>
      </el-collapse-item>
      <el-collapse-item title=" 2、开通银行存管账户有什么作用？" name="2">
        <div>
        立诚贷用户开通银行存管账户，用于存放用户的交易资金，记录每个用户的资金及交易信息，实现了客户与客户的账户隔离，客户与平台的账户隔离，单独分账管理，资金和交易更加清晰准确。
          </div>
      </el-collapse-item>
      <el-collapse-item title="3、新用户、老用户如何开通银行存管账户？" name="3">
        <div>
          （1）新用户：立诚贷新用户直接通过注册页面注册，并通过开户引导指引用户开通银行存管账户。<br>
         （2）老用户：未开通银行存管账户的老用户登录立诚贷网站后，会提示用户开通银行存管账户，开户流程同新用户。<br>
       （3）老用户：已开通银行存管账户的老用户登录立诚贷网站后，会提示用户需重新绑定银行卡和设置交易密码的操作。

        </div>

      </el-collapse-item>
      <el-collapse-item title="4、什么是银行电子交易账户？" name="4">
        <div>
       银行电子交易账户， 是立诚贷为每位用户在银行免费开通的第三方银行资金存管账户，用户的每一笔资金流水都可以在银行系统中查询，真正实现了用户资金存管，提高了用户资金的安全性。
        </div>
      </el-collapse-item>
      <el-collapse-item title=" 5、在立诚贷平台注册后，可以不开立银行存管账户就进行出借吗？ " name="5">
        <div>
        不可以，银行存管账户用于分账管理客户的交易与资金信息，如不开立，无法进行后续的操作。
        </div>
      </el-collapse-item>
      <el-collapse-item title="6、银行电子交易账户可以办理实体卡吗？" name="6">
        <div>
        电子交易账户暂时无法办理实体卡。
        </div>
      </el-collapse-item>
      <el-collapse-item title=" 7、开通银行存管账户后，如何设置和修改交易密码？" name="7">
        <div>
        在用户开通银行存管账户后，在用户出借、提现时会引导用户设置交易密码，此密码将做为用户出借、 提现时的支付密码。若用户需要修改交易密码，需要进入平台‘账户管理——账户安全’页面，修改交易密码。
        </div>
      </el-collapse-item>
      <el-collapse-item title="8、如何绑定银行卡？" name="8">
        <div>
              新用户需开通银行存管账户：
                <br>
                （1）开户授权：填写用户真实姓名、身份证号码、手机号（须与即将绑定的银行卡预留手机号一致） ；
                <br>
                （2）绑定银行卡：填写银行卡号信息，银行卡须为本人名下的有效期内的借记卡。
        </div>
      </el-collapse-item>
      <el-collapse-item title="9、一个用户可以绑定几张银行卡？" name="9">
        <div>
              每位用户同一时段在立诚贷平台仅可绑定一张银行卡。如果需要变更绑定的银行卡，需要保证您在立诚贷平台的待收金额和账户余额均为零。
        </div>
      </el-collapse-item>
      <el-collapse-item title=" 10、绑定银行卡时的注意事项？" name="10">
        <div>
      （1）添加您本人名下的有效借记卡（即储蓄卡）；<br>
    （2）用户绑定的银行卡将用于银行账户充值、提现等业务处理。
        </div>
      </el-collapse-item>
      <el-collapse-item title="11、如何更换已绑定的银行卡？" name="11">
        <div>
              若遇银行卡丢失或销毁等需换绑银行卡的情况，用户需持银行出具的“本人销户回执单”及本人清晰正面半身照（同时手持新卡正面和身份证正面）联系立诚贷客服400-151-3456，由客服向银行提交并进行处理。<br>
              特别提醒：更换已绑定的银行卡需确保待收余额和账户余额是否都为0，若两者为0时即可联系客服更换绑定的银行卡；若其中一方不为0时，则不能更换银行卡；特殊情况，请联系立诚贷客服：400-151-3456。
        </div>
      </el-collapse-item>
      <el-collapse-item title="12、银行存管2.0升级后，提现多长时间可到账？" name="12">
        <div>
              （1）实时提现： 支持单笔5万元及以下，单日20万元及以下提现实时到账；<br>
           （2）大额提现： 超过5万元限额为大额提现，提现处理时间工作日：8:30--16:30，到账时间为30分钟左右，依据发卡行不同，可能稍有差异。请注意您的提现处理时间，以免影响您的资金使用。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
  <p class="message">最终解释权归信广立诚贷所有</p>
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
.problems{
   height: auto;
}
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
 .problems .about_cjwt01_right {
    width: 740px;
    border: 1px solid #e3e3e3;
    float: right;
    height: auto;
    padding: 8px 25px 30px 25px;
    overflow: hidden;
    /* padding-bottom: 30px; */
}
.message{
  font-size: 14px;
  width: 740px;
  float: right;
  text-align: right;
  padding-right:55px;
  margin-top: 20px;
  color: #999;
}
</style>


