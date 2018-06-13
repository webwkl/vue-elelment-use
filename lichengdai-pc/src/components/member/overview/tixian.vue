<template>
 <div class="tixian">
  <div class="wdzh_cz">
           <div class="me_zichan_h">
                <h2>
                    账户提现
                </h2>
            </div>
            <div class="wdzh_right_contop">
                   <p style="margin-top:30px;height: 73px;"><span style="height: 58px;line-height: 58px;">提现银行卡：</span><a class="bank_icon" href="javascript:;"><i></i>11<br>11</a></p>
                    <p><span>可用余额：</span><span id="mymon" style="width:80px">0</span>元</p>
                    <input type="hidden" value="" id="currentMoeny"/>
                    <!--<h3>可用余额</h3>-->

                    <p>
                        <span><b style="color:#f10000;">*</b>提现金额：</span>
                        <input type="text" class="cz_money" name="Amount" id="Amount" value="" />
                    </p>
                     <p>
                        <span><b style="color:#f10000;">*</b>验证码</span>
                        <input type="text" class="cz_money" name="yzmval" id="yzmval" placeholder="请输入手机验证码"  />
                        <input type="button"  value="获取验证码" class="get l_send"/>
                    </p>
                    <div class="de_q" style="display:none">
                        <p>
                           <span><b style="color:#f10000;">*</b>开户行支行</span>
                           <input type="text" name="" id="kaihu_zh" class="cz_money">
                           <span class="hand" >查询</span>
                           <span class="hand hand1">手动填写<i>如果您在以上查询地址中仍没查询到您的开户行及联行号，请拨打银行客服电话查询并手动填写</i></span>
                        </p>
                        <p>
                            <span><b style="color:#f10000;">*</b>开户银行联行号：</span>
                            <input maxlength="12" id="kaihu" type="text" class="cz_money" value="" name="bankyl"  placeholder="请正确填写您的开户银行联行号" />

                        </p>
                        <p style="padding-left:145px;"><i style="padding-left:0">大额提现注意事项：</i><br>大额提现需填写正确的联行号，如联行号填写错误将会导致提现失败。请点击<a style="color:#0b9ae6;cursor: pointer;" >查询联行号</a>或致电客服400-151-3456进行查询，服务时间：9:00-18:00。</p>

                    </div>
                    <p>
                        <span>手续费：</span><i>0.00</i>

                    </p>

                    <input type="submit" class="my_anniu btn_icon" value="确认提现" @click="tixian">
                    <!--<p>
                        <span>交易密码</span>
                        <input type="password" class="cz_money"/>
                    </p>        -->
                </div>
            <div class="wdzh_right_conbottom">
                    <h3>温馨提示</h3>
                    <div class="wrc_con">
                       <!-- <p>1、VIP1及以上会员，每日不限提现次数；</p>
                       <p>2、有出借记录的普通会员每日可提现3次；</p> -->
                       <!-- <p>1、无出借记录的新用户每日可提现1次；</p> -->
                       <p>1、开通银行存管账户、设置交易密码，才能进行提现操作；</p>
                       <p>2、立诚贷目前使用的银行存管系统在每日的<i style="color:#ff7800">23点-凌晨1点</i>不定期进行系统升级，提现请尽量避开此期间；</p>
                       <p>3、银行电子交易账户采用原卡进出设置，资金只能提现至您本人充值的银行卡，提现无需支付任何手续费；</p>
                       <p>4、实时提现：支持单笔5万元及以下，单日20万元及以下实时提现到账；</p>
                       <p>5、大额提现：超过5万元限额为大额提现，提现处理时间工作日：8:30--16:30，到账时间为30分钟左右，依据发卡行不同可能稍有差异。请注意您的提现时间，以免影响您的资金使用；</p>
                       <p>6、请确认开户行支行是否正确，如果不正确则无法成功提现；</p>
                       <p>7、如果不确定开户行支行名称，可打电话到所在地银行的营业网点询问或网上查询。</p>
                       <p>8、如果您在成功提交提现申请后2小时资金未到账，请致电立诚贷官方客服电话：400-151-3456，我们将会在T+3工作日完成处理。</p>
                       <p>9、大额提现处理时间工作日：8:30--16:30，在16:30以后提交的提现申请银行暂不处理，请在次日的8:30以后重新提交提现申请，给您带来不便，敬请谅解。</p>

                    </div>
                </div>
  </div>
 </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      tixian(){

      }
    }
  }
</script>
<style scoped>
 .wdzh_cz {
    width: 1038px!important;
    width: 1040px;
    border-top: 2px solid #ff7800;
    float: right;
    height: auto;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding: 30px 0 0 20px;
    margin-bottom: 80px;
}
.me_zichan_h {
    height: 25px;
    border-left: 3px solid #ff7800;
    overflow: hidden;
}
 .wdzh_cz h2 {
    height: 25px;
    padding-left: 20px;
    font-weight: normal;
    position: relative;
    height: 50px;
     font-size: 16px;
    line-height: 25px;
    color: #424242;
}
.wdzh_right_contop .bank_icon {
    width: 368px;
    height: 73px;
    background: url(/static/images/bank_icon/bank_bj.png) no-repeat;
    display: inline-block;
    position: relative;
    padding-left: 100px;
    color: #666;
    font-size: 14px;
    padding-top: 15px;
    margin-bottom: 30px;
}
.bank_icon i {
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    top: 13px;
    left: 25px;
    background: url(/static/images/bank_icon/bank_c/cmb.png) no-repeat;
}
 .wdzh_right_contop p,  .wdzh_right_contop .yanzhengma {
    margin-bottom: 18px;
}
.cz_money {
    width: 348px;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
}
.l_send {
    width: 150px;
    height: 44px;
    border: 1px solid #e3e3e3;
    background: #ff7800;
    color: #fff;
}
.btn_icon {
    color: #FFFFFF;
    padding: 4px 40px;
    background-color: #ff7800;
    font-size: 14px;
    margin-left: 80px;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    height: 40px;
}
.wdzh_right_contop p i {
    color: #ff7800 !important;
    padding-left: 5px;
    font-style: normal;
}
.wdzh_right_contop {
    padding: 0 34px 30px 48px;
}
 .wdzh_right_contop h3 {
    font-weight: normal;
    margin-bottom: 35px;
}
 .wdzh_right_contop h3 span {
    padding: 0 5px;
    color: #ff7800;
}
 .wdzh_right_contop p span,  .wdzh_right_contop .yanzhengma span, .select_box span {
    padding-right: 10px;
    text-align: left;
    width: 130px;
    display: inline-block;
    color: #000;
}
.wdzh_right_conbottom {
    margin-left: 0;
    width: 1000px;
    margin-top: 30px;
    height: auto;
    padding-bottom: 30px;
    background-color: #efefef;
}
.wdzh_right_conbottom h3 {
    padding: 11px 0 20px 41px;
    color: #ff7800;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    background: url(/static/images/bank_icon/wxts.png) no-repeat 18px 16px;
}
.wdzh_right_conbottom .wrc_con {
    padding-left: 60px;
}
.wdzh_right_conbottom .wrc_con p {
    font-size: 12px;
    line-height: 24px;
    padding-left: 15px;
}
</style>
