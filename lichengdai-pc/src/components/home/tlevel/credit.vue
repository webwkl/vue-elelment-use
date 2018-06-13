<template>

 <div class="credit">
 <Header></Header>
  <section class="wrap banner"></section>
    <section class="wrap2 wrap_bg">
        <h4 class="title" >行业权威认证</h4>
        <p>2018年3月13日，信广立诚贷获得权威第三方评价机构iTrust互联网信用评价中心授予的iTrust企业信用等级AAA级信用认证。</p>
        <p>iTrust企业信用等级是iTrust互联网信用评价中心为企业提供的网站信用认证服务， 是对企业在履行商业协议、兑现服务许诺、确保网站信息真实性和安全性等方面的能力、意愿和行为的可信度评价。其评价标准依据GB/T 23794-2009等企业信用评价国家标准和通过商务部、国资委行业信用评价专家组评审的互联网信用评价行业标准，同时参考银行信贷信用评级指标和标准，因此该项信用评价和认证得到了政府、企业和社会的广泛认可。</p>
        <p>iTrust互联网信用评价中心为信广立诚贷打出了90分的信用分值，为此次评级中获得高分的互联网信息机构。获得此AAA级信用认证的企业还包括陆金所、爱钱进等优质平台。</p>
    </section>
    <div style="width:100%;background:#f5f5f5;padding:40px 0;">
        <section class="wrap1">
            <h5 class="title_h5">企业信用背书</h5>
            <p class="gg_p">能够在评级标准的严格审核下，顺利通过多项综合考验，获得AAA企业信用认证，意味着企业商业信誉好，信用能力强，交易风险小。该信用评价和认证工作得到了政府、企业和社会的广泛肯定，已成为监管部门对互联网信息平台监管的参照标准之一，也是行业内各大平台争取的信用背书之一。</p>
        </section>
    </div>
    <section class="wrap_width">
        <article class="wrap_minWidth">
            <h5 class="title_h5" >行业认证  出借更放心 </h5>
            <p class="width820">对用户而言，挑选可靠、值得信任的互联网信息平台格外重要，平台的信用评级认证能够帮助用户更加准确地甄别平台资质和信用能力，降低出借风险，保护用户权益；对于规范平台而言，客观的信用资质认证有利于获客及拓展市场。信广立诚贷获得第三方权威信用机构的客观评级，对两者起到了积极的促进和监督作用。</p>
            <img src="/static/images/credit/bg.png" alt="" class="position_img">
        </article>
    </section>
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
      this.ajax();

    },
  methods:{
    ajax(){

      this.get('/V1/Index/capital')
      .then( res => {
        this.items=res.data.capital
      })
    }

  }
}

</script>
<style scoped>
 .wrap {
    width: 100%;
    min-width: 1200px;
    height: 425px;
    background: url(/atatic/images/tlevel/a1.jpg) top center no-repeat;
}

.wrap01 {
    width: 100%;
    height: 70px;
    min-width: 1200px;
    background: url(/atatic/images/tlevel/a2.jpg) top center no-repeat;
    margin-top: 70px;
}

.gg_p {
    font-size: 22px;
    color: #666;
    width: 1200px;
    margin: 0 auto;
    line-height: 40px;
    text-indent: 50px;
}

.wrap1 {
    width: 100%;
    height: 190px;
    min-width: 1200px;
}

.wrap02 {
    width: 100%;
    height: 620px;
    min-width: 1200px;
    background: url(/atatic/images/tlevel/a4.jpg) top center no-repeat;
}

.wrap03 {
    width: 100%;
    height: 120px;
    min-width: 1200px;
    background: url(/atatic/images/tlevel/a3.jpg) top center no-repeat;
}

.wrap04 {
    width: 100%;
    height: 120px;
    min-width: 1200px;
    background: url(/atatic/images/tlevel/a6.jpg) top center no-repeat;
}

.wrap2 {
    width: 100%;
    height: 455px;
    width: 1200px;
    background: url(/atatic/images/tlevel/a5.jpg) top left no-repeat;
    margin: 0 auto;
}

.wrap2 p {
    font-size: 18px;
    color: #666;
    line-height: 36px;
    padding-top: 10px;
    text-indent: 36px;
}
.banner{
    height: 300px;
    background: url(/static/images/credit/banner.jpg) top center no-repeat;
}
.wrap_bg{
    height: 100%;
    background: url(/static/images/credit/credit.jpg) no-repeat;
    background-position: 0 70px;
    padding-left: 480px;
    padding-bottom: 70px;
}
.wrap_bg .title{
    font-size: 26px;
    height: 70px;
    line-height: 70px;
    color: #0b2062;
    margin-top: 30px;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#0b2062), to(#8ca4ec));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.wrap1{
    width: 1200px;
    margin: 0 auto;
}
 .title_h5{
  font-size: 26px;
  color: #0b2062;
  font-weight: bold;
  line-height: 70px;
  background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#0b2062), to(#8ca4ec));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.wrap1 .gg_p,
.wrap_minWidth p{
    font-size: 18px;
    color: #666;
    line-height: 40px;
    text-indent: 36px;
}
.wrap_width{
    width: 100%;
}
.wrap_minWidth{
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0 60px;
    position: relative;

}
.wrap_minWidth .width820{
    width: 820px;
}
.position_img{
    width: 357px;
    height: 233px;
    position: absolute;
    right: 0;
    top: 45px;
    z-index: 111;
}
</style>
