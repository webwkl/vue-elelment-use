<template>
  <div class="content">
      <div class="title-page">
             <span>公安机关核发网站备案</span>
           </div>
            <div class="content-page">
                    <div class="img-box">
                        <img src="/static/images/pilou/1.png" alt="">
                    </div>
                    <div class="text-box">
                        备案号：<span class="yellow" style="color:#ff6769">11010502033694号</span><br>
                        全国公安机关互联网网站安全服务平台：<a href="http://www.beian.gov.cn/portal/index" target="_blank">http://www.beian.gov.cn/portal/index</a><br>
                        备案查询指引：进入网站后 - 公共查询 - 选择任意项即可查询（备案号为上述）。
                    </div>
         </div>
                <div class="title-page" style="margin-bottom: 30px;">
                   <span>资金存管信息</span>
                 </div>
                 <div class="content-page">
                   <div class="text-box">
                        资金存管银行全称：徽商银行股份有限公司
                        <br>
                        存管签约时间：
                        <br>
                        全量业务资金存管上线时间：2016年11月
                        <br>
                        可信网站认证：<img src="/static/images/pilou/11.png" alt="">
                        <p style="font-size: 16px;color: #666666;margin-top: 20px;">诚信网站认证：<img src="/static/images/pilou/12.png" alt=""></p>

                    </div>
                 </div>

                 <div class="title-page" style="margin-bottom: 30px;">
                   <span>电信业务经营许可证</span>
                 </div>
                 <p style="padding-left: 25px;font-size: 16px;color: #666666;margin-bottom: 80px">经营许可证编号：京ICP证161169号</p>
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

 .title-page {text-align: left;margin-bottom: 50px;}
 .title-page span {display: inline-block;margin-left: 25px;margin-top: 25px;font-size: 30px;padding-bottom: 18px;border-bottom: 2px solid #001c35;color: #001c35;}
 .content-page {padding-left: 25px;}
 .img-box {padding-bottom: 28px;}
 .img-box img {width: 100%;}
 .text-box {line-height: 36px;padding-bottom: 65px; font-family: '微软雅黑';font-size: 16px; color: #666666}
.img-replace{
  overflow: hidden;
}
.img-replace a{
  width: 50%;
  float: left;
}
.yellow{
    padding-left: 25px;
    background: url(/static/images/pilou/beian.png) no-repeat left center;
  }
  .text-box img{
    margin-left: 10px;
  }
  .text-box{
    padding-bottom: 40px;
  }
</style>
