<template>
  <div class="content">
     <div class="title-page">
             <span>立诚贷收费标准信息披露</span>
           </div>
           <div class="content_page5" style="padding-left:40px;margin-top:-15px;">
                      <div class="table">
                          <p class="item" style="background:#f2f2f2;font-size:16px;color:#333333">
                           <span class="item1">业务类型</span>
                            <span class="item2">资费标准</span>
                          </p>
                          <p class="item"><span class="item1">用户注册</span>
                            <span class="item2">免费</span></p>
                          <p class="item">
                            <span class="item1">开通存管账户</span>
                            <span class="item2">免费</span>
                            </p>
                           <p class="item" style="height:100px">
                            <span class="item1" style="height:100px">
                              <span class="item_left">出借</span>
                              <span class="item_right">
                                <span class="i_top">直投项目</span>
                                <span class="i_bottom">债权转让项目</span>
                              </span>
                            </span>
                            <span class="item2">
                                <i>免费</i>
                                <i style="border:none;height:49px;">免费</i>
                            </span>
                            </p>
                          <p class="item">
                            <span class="item1">回款账户</span>
                            <span class="item2">免费</span>
                            </p>
                          <p class="item">
                            <span class="item1">
                              债权转让
                            </span>
                            <span class="item2">每笔债权转让成功后平台将收取转让方转让金额（本金+红包）的2%作为手续费</span>
                            </p>
                          <p class="item">
                          <span class="item1">
                            充值直存账户
                          </span>
                            <span class="item2">免费（充值费率0.1%-0.2%，第三方收取，目前立诚贷为用户承担）</span>
                            </p>
                          <p class="item" style="border:none;height:45px;line-height:45px;">
                            <span class="item1" style="height:45px;line-height:45px;">
                              提现至绑定银行卡
                            </span>
                            <span class="item2" style="border:none;height:45px;line-height:45px;">免费（2.0元/笔，第三方收取，目前立诚贷为用户承担）</span>
                          </p>
                      </div>
           </div>
  </div>
</template>
<script>
  export default{
     data(){
      return{

      }
     }
  }
</script>
<style scoped>
  .content-page5{
  padding-left: 25px;
  margin-bottom: 80px;
}
.table{
  width: 905px;
  height: 452px;
  margin: 0 auto;
  border: 1px solid #cccccc;
}
.table .item{
 width: 100%;
 height: 50px;
 border-bottom: 1px solid #cccccc;
 line-height: 50px;
}
.item1{
  float: left;
  width: 300px;
  height: 50px;
  border-right: 1px solid #cccccc;
   text-align: center;
 line-height: 50px;
 font-size:16px;
  color:#666666;
}
.item2{
  height: 50px;
  display: inline-block;
  width: 599px;
   text-align: center;
   font-size:16px;
  color:#666666
}
.item_left{
  float: left;
  width: 143px;
  height: 100px;
line-height: 100px;
font-size:16px;
  color:#666666
}
.item_right{
  display: inline-block;
  width: 143px;
  height: 100px;
  border-left: 1px solid #ccc;
  font-size:16px;
  color:#666666
}
.i_top{
  display:block;
  height: 50px;
  width: 156px;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  font-size:16px;
  color:#666666
 }
 .i_bottom{
  display:block;
  height: 49px;
  width: 153px;
  line-height: 49px;
  font-size:16px;
  color:#666666
 }
 .item2 i{
  display: block;
   height: 50px;
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  font-size:16px;
  color:#666666
 }

</style>
