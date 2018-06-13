<template>

 <div class="disclosure">
 <Header></Header>
 <div class="bigBox">
 <div class="box clearfix">
   <div class="banner">
      <img src="/static/images/youqufen/title.png" alt="">
   </div>
 </div>
  <div class="house clearfix">
     <div class="texts">
      <h2 style="font-weight: normal;">积极响应国家监管 全面升级金融资产业务</h2>
       <p>2016年10月13日发布的《互联网金融风险专项整治工作实施方案》中进一步明确全国各网贷平台本着“合规经营、控制风险、普惠金融服务”的原则。</p>
       <p>立诚贷从金融资产业务合规，控制系统性风险，服务用户的多维度，为用户精选新场景、新消费及结合大数据所需的多样化金融产品，全面开启迭代升级。</p>
       <p>基于对各项政策和网贷行业的深刻理解，信广立诚贷积极响应监管要求，持续升级业务模式，并充分结合自身优势，重点打造出“消费场景”和“数据场景”两大“点对点穿透”新金融产品。</p>

     </div>
     <div class="imgs">
       <img src="/static/images/youqufen/right.png" />
     </div>

  </div>
 <div class="youshi clearfix">
   <div class="title">
     <img src="/static/images/youqufen/title1.png" alt="">
   </div>
 <div class="text">
    <p>长期以来，信广立诚贷始终将发展“场景化金融”作为打造自身特色与核心竞争力的重点，持续围绕“金融融入生活”的核心理念，通过吃、穿、住、行、用、娱等生活化场景接触潜在用户。</p>
    <p>此次推出的“消费场景”产品是对原有“场景化金融”产品的重新定义和全面升级。该产品从房产消费生态环境出发，依托线下房屋租赁场景，并通过多层大数据计算能力与风控模型的结合，建立了完整的风险识别体系。</p>
    <p>对于出借人而言，“消费场景”产品实现了资金的“点对点穿透”。明确的资金用途，出借人的资金使用情况更加透明；同时，依托大数据风险识别，出借人也进一步降低了潜在风险，使出借资金更加安全可控。</p>
 </div>
        <img style="margin-top: 320px" src="/static/images/youqufen/1.png" />
</div>
<div class="liucheng clearfix">
   <div class="title">
       <img style="width: 469px;" src="/static/images/youqufen/title2.png" alt="">
    </div>
  <div class="text" style="height: 210px">
      <p style="line-height: 30px;">信用是现代经济的基石。近年来，伴随我国征信体系的逐步完善，以个人信用为基础的经济活动日益频繁，并有效地推动了经济发展。</p>
      <p style="line-height: 30px;">信广立诚贷于2016年，与中诚信征信、同盾科技、数美科技、致诚信用、百融金服达成战略合作，共建征信生态圈，而此次全新推出的“数据场景”产品，通过大数据抓取系统、反欺诈系统、信用评级系统和基于信用评级的风险定价模型等手段，识别筛选出低风险的优质项目，推荐给出借人。</p>
      <p style="line-height: 30px;">作为网贷行业的经典业务模式之一，“数据场景”产品同样以“点对点”的债权债务关系为特点，同时兼具小额、分散的优势，是全新监管体系下，网贷行业优质合规业务的代表。</p>
   </div>
        <img style="margin-top: 284px" src="/static/images/youqufen/2.png" />

</div>
</div>
<Footer></Footer>
</div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {

  data () {
    return {
     items:{},

    }
  },
  components:{
    Header,Footer
  },
  mounted:function(){

    },
  methods:{
   }
}

</script>
<style scoped>
.bigBox{
    width: 100%;
    text-align: center;
   }
   .clearfix{
    clear: both;
        display: block;
    content: "";

   }
       .box{
        width: 100%;
        height: 400px;
       }
       .banner{
        position: relative;
        width: 1920px;
        height: 400px;
        margin: 0 auto;
        background: url(/static/images/youqufen/banner.jpg) no-repeat top center;
        background-size:100% 100%;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/static/images/youqufen/banner.jpg',sizingMethod='scale');
       }
       .banner img{
        position: absolute;
        top: 120px;
        left: 506px;
        width: 900px;
        height: 160px;
       }
       .house{
        padding: 50px 0 50px 0;
        margin: 0 auto;
        width: 1232px;
        height: 310px;
        background-color: #fff;
       }
       .texts{
        width: 827px;
        float: left;
       }
       .texts h2{
        margin-top: -10px;
        font-size: 24px;
        text-align: left;
        line-height: 60px;
       }
       .texts p{
         text-indent: 2em;
         color: #666;
         font-size: 18px;
         font-family: "微软雅黑";
         line-height: 35px;
         text-align: left;
       }
       .imgs{
        width: 342px;
        height: 262px;
        float: right;
        margin-right: 5px;
        margin-top: 11px;
       }
       .youshi{
        width: 100%;
        height: 708px;
        position: relative;
        z-index: 2;
        background: url(/static/images/youqufen/banner2.png) no-repeat top center;
        background-size:100% 100%;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/static/images/youqufen/banner2.png',sizingMethod='scale')

       }
       .liucheng{
        position: relative;
        width: 100%;
        height: 775px;
        background: url(/static/images/youqufen/banner3.png) no-repeat top center;
        background-size:100% 100%;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/static/images/youqufen/banner3.png',sizingMethod='scale')
       }
       .text{
        position: absolute;
        padding-top: 25px;
        top: 80px;
        left: 50%;
        width: 1232px;
        margin: 0 auto;
        margin: 0 0 0 -616px;
        height: 235px;
       }
       .text p{
        color: #fff;
         text-indent: 2em;
         font-size: 18px;
         font-family: "微软雅黑";
         line-height: 35px;
         text-align: left;
       }
       .title{
        width: 1232px;
        margin: 0 auto;
        position: relative;

       }
       .title img{
        width: 380px;
        height: 70px;
        position: absolute;
        left: 0;
        top: -4px;
       }
</style>
