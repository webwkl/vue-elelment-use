<template>

 <div class="disclosure">
 <Header></Header>
    <div class="banner01"></div>
    <div class="duanluo">
       <h2>信息披露，行业发展的客观需要</h2>
        <p>自2007年网络借贷进入中国，信息披露曾一度成为行业“盲点”。一方面，各家平台对于信息披露的态度大相径庭；另一方面，进行信息披露的平台所采用的标准更是无从参考，无法统一。 </p>
        <p>作为网贷行业安全性与可持续发展的内在需求，信息披露透明度的提高，不仅有助于加强平台的合规度和自律性，更有利于降低借、贷双方的信息不对称性，化解市场风险，避免公众损失。 </p>


    </div>
    <div class="banner02 duanluo2">
        <h2>政策指引，保证信披工作有的放矢</h2>
        <p> 2017年8月24日，中国银监会根据《网络借贷信息中介机构业务活动管理暂行办法》关于建立网络借贷信息中介机构信息披露制度的工作部署和要求，研究制定的《网络借贷信息中介机构业务活动信息披露指引》正式发布。 </p>
        <p>在此基础之上，2017年10月17日，中国互金协会继续下发《互联网金融信息披露个体网络借贷》团体标准。自此，网贷行业逐步形成严格而全面的信息披露框架，各家平台也开始依照标准，加快推进信息披露工作。 </p>
    </div>
    <div class="duanluo">
       <h2>积极合规，打造全新信披体系</h2>
        <p>作为“拥抱监管，积极合规”的实力网贷平台之一，信广立诚贷在行业内始终保持着较高的合规领先程度，在《信披指引》出台后，更是高度重视，深入研究，认真落实，持续推进。 </p>
        <p>在经过全面、细致的准备工作之后，2018年1月23日，信广立诚贷全新信息披露体系正式上线。</p>


    </div>
    <div class="banner03 duanluo2">
        <h2>践行信披，引领行业合规发展</h2>
        <p> 信广立诚贷此次上线的全新信息披露体系，共分为六个部分，包括机构备案信息披露、机构组织信息披露、收费标准信息披露、安全保障、其他重要信息披露、资质与荣誉，从不同维度对平台信息进行了详尽的描述和呈现。 </p>
        <p>未来，信广立诚贷还将保持与监管要求的高度同步，不断完善信息披露范围，持续更新信息披露内容，并将以此作为合规工作的重要组成部分，保持自身在行业内的“合规标杆”地位。 </p>
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
 .banner01 {
    min-width: 1200px;
    height: 391px;
    background: url(/static/images/disclosure/banner.jpg) no-repeat top center;
    position: relative;
}

.banner02 {
    min-width: 1200px;
    height: 318px;
    background: url(/static/images/disclosure/a1.jpg) no-repeat top center;
    position: relative;
}

.banner03 {
    min-width: 1200px;
    height: 588px;
    background: url(/static/images/disclosure/a2.jpg) no-repeat top center;
    position: relative;
}
.duanluo {
    width: 100%;
    background: #fff;
    height: 333px;
}
.duanluo h2 {
    font-size: 30px;
    line-height: 70px;
    text-align: center;
    color: #162c51;
    padding-top: 30px;
}
.duanluo p {
    color: #162c51;
    width: 1100px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 38px;
    text-indent: 40px;
}
.duanluo2 p {
    color: #fff;
    width: 1100px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 38px;
    text-indent: 40px;
}


.duanluo2 h2 {
    font-size: 30px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    padding-top: 30px;
}
</style>
