<template>
  <div class="zhaizhuan">
        <div class="wdzh_right">
      <div class="zaizhuan_content">
        <div class="me_zichan_h">
                    <h2>转让债权</h2>
                </div>
        <div class="wdzh_right_btm">
          <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                      <tbody>
                          <tr>
                              <th>转让的债权 </th>
                              <th><input type="text" style="border:1px  solid #ccc " disabled="disabled"  class="disabled" :value="items.borrow_name">&nbsp;&nbsp;&nbsp;</th>
                          </tr>
                           <tr>
                              <th>最高转让价格 </th>
                              <th><input type="text" id="gao" style="border:1px  solid #ccc " disabled="disabled"  class="disabled" :value="this.money">&nbsp;&nbsp;&nbsp;</th>
                          </tr>
                           <tr>
                              <th>转让手续费 </th>
                              <th><input type="text" style="border:1px  solid #ccc " disabled="disabled" id="fee" value="￥0" class="disabled">&nbsp;&nbsp;&nbsp;</th>
                          </tr>
                           <tr>
                             <input type="hidden" name="invest_id" id="invest_id" :value="items.invest_id" >
                              <th>转让价格 </th>
                              <th><input type="text"  style="border:1px  solid #ccc " name="moneys" id="moneys" value="0">元</th>

                                 <input type="hidden" id="total_period" />
                                 <input type="hidden" id="period" />
                                 <input type="hidden" id="borrow_interest_rate" value=""/>
                                 <input type="hidden" id="investor_capital" />
                          </tr>
                          <tr>
                            <th colspan="2">
                              <a class="qrzr" href="javascript:;" id="dosubmit" >
                                确认转让
                              </a>
                            </th>
                          </tr>
                      </tbody>
                  </table>
                        <h3 class="zz_h3" >债权转让规则：</h3>
                        <p class="zz_p" ><i>1.</i>2015年8月6日最高人民法院发布《最高人民法院关于审理民间借贷案件适用法律若干问题的规定》第26条第1款：借贷双方约定的利率未超过年利率24%，出借人请求借款人按照约定的利率支付利息的，人民法院应予支持；</p>
                     <p class="zz_p" ><i>2.</i>债权转让时间说明<br>
                         2.1、债权持有人可以在每日的10:30将满足转让条件的债权申请转让（周六日支持债权转让）；<br>
                         2.2、平台可出借债权转让标的数量为5笔，若待转让数量小于5笔，则允许用户再次申请债权转让 ；</p>
                    <p class="zz_p" ><i>3.</i>债权转让条件说明<br>
                        3.1、一月标转让金额不可低于2000元；<br>
                        3.2、用户已购买债权不可进行二次转让；</p>
                    <p class="zz_p" ><i>4.</i>债权转让手续费相关<br>
                        每笔债权转让成功后平台将收取转让方转让金额（本金+红包）的2%作为手续费；</p>
                    <p class="zz_p" ><i>5.</i>债权转让撤销相关<br>
                        5.1、转让方申请债权转让后，未有人购买该转让债权时，转让方可撤回该债权转让申请；<br>
                        5.2、转让方申请债权转让后，7个工作日未转让成功，则视为该次债权转让失败，将自动撤回； </p>
                    <p class="zz_p" ><i>6.</i>债权转让规则解释权最终归信广立诚贷所有。<br><br><br><br><br></p>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:'',
      money:0,
      items:{}
    }
  },
  mounted:function(){
   this.id=this.$route.query.id;
   this.ajax()
  },
  methods:{
    ajax(){
      var data={'id':this.id}
      this.get('/V1/Membersdebt/zhaizhuan',data)
      .then(res=>{
        if(res.data.status==302 || res.data.status==500){
          this.$router.push('/login')
        }else{
           this.items=res.data;
           this.money=Number(res.data.info.interest) + Number(res.data.info.capital)
        }
      })
    },

  }
}
</script>
<style scoped>
.zaizhuan_content {
    width: 1018px!important;
    width: 1045px;
    overflow: hidden;
    border-top: 2px solid #ff7800;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding-top: 30px;
    padding-left: 20px;
    float: right;
    height: auto;
    min-height: 600px;
}

.zhaizhuan dl dd.current {
    display: block;
}
.zhaizhuan dl dd{
    display: none;
}
.zz_h3{
  width: 800px;
  padding-top: 30px;
  font-weight:100;
  line-height: 26px;
  color:#999;
}
.zz_p{
  width: 800px;
  font-weight:100;
  line-height: 26px;
  color:#999;
  padding-left:25px;
  position:relative
}
.zz_p i{
left:0;
top:0;
position: absolute
}
.zhaizhuan{
  margin-top: 40px;
  overflow: hidden;
  padding-bottom: 30px;
}
.wdzh_right_btm{
  margin-top: 20px;
  float: left;
}
.wdzh_right_btm table{
  width: 800px;
  margin: auto;
  border-left: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
.wdzh_right_btm table tr th{
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
    text-align: center;
    height: 36px;
    line-height: 36px;
    font-weight: normal;
    font-size: 12px;
    padding: 0 5px;
}
.qrzr{
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    width: 86px;
    color: #FFFFFF!important;
    border-radius: 5px;
    background-color: #ff7800;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size:15px
}
</style>
