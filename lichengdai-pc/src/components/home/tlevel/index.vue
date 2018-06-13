<template>

 <div class="credit">
 <Header></Header>
  <section class="wrap"></section>
    <section class="wrap01"></section>
    <section class="wrap1">
        <p class="gg_p"> 2017年8月20日，信广立诚贷按照《网络借贷信息中介机构业务活动管理暂行办法》要求，对信息系统安全等级保护进行检测评估，并获得了国家公安部门颁发认证的“信息系统安全等级保护”三级认证。该认证是国家级信息系统安全等级认证，三级认证也是针对非银行机构的最高级认证。立诚贷获得该等级保护认证象征着立诚贷在信息系统安全保护方面更上一层楼，已经达到了国家监管要求的信息安全等级。</p>
    </section>
    <section class="wrap02"></section>
    <div style="width:100%;background:#f5f5f5;padding-top:40px;margin-bottom:50px">
        <section class="wrap03"></section>
        <section class="wrap1">
            <p class="gg_p">信息系统安全等级保护是实施信息安全等级保护的基本方法。信息安全技术和信息安全管理是实现信息系统安全的基础。进行信息安全等级三级认证是网络信息借贷中介平台进行信息系统安全等级保护的需要，也是对信息安全技术和信息安全管理进行规范化的需要，是积极合规拥抱监管的重要环节。</p>
        </section>
    </div>
    <section class="wrap2" style="width:1200px;min-width:1200px;">
        <p style="float:right;width:48%;padding-top:60px;">信广立诚贷完成了信息系统定级备案和等级测试，顺利完成国家信息安全等级三级认证备案，说明了信广立诚贷具有完善的防火墙、入侵检测、数据加密以及灾难恢复等网络安全设施和管理制度，并且接受国家或行业主管部门的信息安全检查和审计。信广立诚贷会采取完善的管理控制措施和技术手段保障信息系统安全稳健运行，保护出借人与借款人的信息安全。</p>
    </section>
    <div style="width:100%;background:#f5f5f5;padding-top:40px;">
        <section class="wrap04"></section>
        <section class="wrap1">
            <p class="gg_p">自2016年8月24日以来，互金监管政策已正式落地一周年，在过去的一年内，信广立诚贷积极合规，拥抱监管，不仅完成并上线了银行直接存管系统，而且顺利通过了国家信息安全等级三级认证并完成备案，信广立诚贷未来必将严格执行监管政策，致力于打造一个安全健康的互联网金融环境，信广立诚贷期待与您共同成长！</p>
        </section>
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
    background: url(/static/images/tlevel/a1.jpg) top center no-repeat;
}

.wrap01 {
    width: 100%;
    height: 70px;
    min-width: 1200px;
    background: url(/static/images/tlevel/a2.jpg) top center no-repeat;
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
    background: url(/static/images/tlevel/a4.jpg) top center no-repeat;
}

.wrap03 {
    width: 100%;
    height: 120px;
    min-width: 1200px;
    background: url(/static/images/tlevel/a3.jpg) top center no-repeat;
}

.wrap04 {
    width: 100%;
    height: 120px;
    min-width: 1200px;
    background: url(/static/images/tlevel/a6.jpg) top center no-repeat;
}

.wrap2 {
    width: 100%;
    height: 455px;
    width: 720px;
    background: url(/static/images/tlevel/a5.jpg) top left no-repeat;
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
    background: url(/static/img/credit/banner.jpg) top center no-repeat;
}
.wrap_bg{
    height: 100%;
    background: url(/static/img/credit/credit.jpg) no-repeat;
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
