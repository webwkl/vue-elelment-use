<template>
  <div class="yearend">
  <Header></Header>
  <div class="banner01"></div>
    <div class="banner02"></div>
    <div class="banner03"></div>
    <div class="banner04"></div>
    <div class="banner05"></div>
    <div class="banner06"></div>
    <div class="banner07"></div>
    <div class="banner08"></div>
    <div class="banner09 ">
        <div class="ban_p ban_p1" style="bottom:0">
            <p>2016年1月9日受邀出席中国互联网金融消费者权益保护颁奖盛典并荣获“消费者权益保护工作示范单位”</p>
            <p>立诚贷携手CFCA网站安全认证正式上线</p>
            <p>2016年3月25日中国互联网创新金融CEO峰会立诚贷荣获“互联网金融杰出风控奖”</p>
            <p>2016年3月28日立诚贷获评“中国互联网金融行业AAA级信用企业”</p>
            <p>2016年5月26日，立诚贷正式加入互联网金融研究院，并成为互联网金融研究院委员单位</p>
            <p>2016年5月27日，立诚贷荣获中国电子商务协会颁发的“企业信用评价AAA级信用企业”</p>
            <p>2016年７月8日经工信部、商务部、国资委、发改委联合评定，中国电子商务协会进行认证，立诚贷获“互联网金融
                <br>行业诚信龙头单位”及“互联网金融行业实名龙头网站认证”双荣誉，此两项荣誉具有国家级的权威性</p>
            <p>2016年8月29日，立诚贷与CFCA合作再升级，引入CFCA电子签章系统——安心签，为立诚贷平台所有电子合同的安
                <br>全性、合法性加码</p>
        </div>

    </div>
    <div class="banner10">
        <div class="ban_p ban_p2" style="top:0">
            <p>2016年9月19日，立诚贷响应国家监管政策，率先取得ICP经营许可证资质</p>
            <p>2016年10月27日-10月30日立诚贷亮相第12届北京国际金融博览会</p>
            <p>2016年12月2日，立诚贷成功对接中国电子商务协会反欺诈系统并正式上线</p>
            <p>2016年12月，立诚贷银行存管系统正式上线</p>
            <p>2016年12月15日 获得知名金融媒体《投资有道》颁发的2016年最佳金融创新大奖</p>
            <p>2016年12月20日，参加由中国电子商务协会举办的大数据金融发展高峰论坛，并获得由中国电子商务协会金融研究院
                <br>颁发的2016年度互联网金融诚信企业奖</p>

            <p></p>
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
    }

  },
  components:{
    Header,Footer
  }
}
</script>
<style scoped>
 .banner01 {
            min-width: 1200px;
            height: 428px;
            background: url(/static/images/yearend/a1.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner02 {
            min-width: 1200px;
            height: 472px;
            background: url(/static/images/yearend/a2.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner03 {
            min-width: 1200px;
            height: 691px;
            background: url(/static/images/yearend/a3.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner04 {
            min-width: 1200px;
            height: 575px;
            background: url(/static/images/yearend/a4.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner05 {
            min-width: 1200px;
            height: 546px;
            background: url(/static/images/yearend/a5.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner06 {
            min-width: 1200px;
            height: 468px;
            background: url(/static/images/yearend/a6.png) no-repeat top center;
            background-size: auto 100%;
        }

        .banner07 {
            min-width: 1200px;
            height: 566px;
            background: url(/static/images/yearend/a7.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner08 {
            min-width: 1200px;
            height: 577px;
            background: url(/static/images/yearend/a8.jpg) no-repeat top center;
            background-size: auto 100%;
        }

        .banner09 {
            min-width: 1200px;
            height: 674px;
            background: url(/static/images/yearend/a9.png) no-repeat top center;
            background-size: auto 100%;
            position: relative
        }

        .banner10 {
            min-width: 1200px;
            height: 572px;
            background: url(/static/images/yearend/a10.png) no-repeat top center;
            background-size: auto 100%;
            position: relative
        }

        .ban_p {
            width: 935px;
            position: absolute;
            left: 50%;
            margin-left: -390px;
        }

        .ban_p1 p {
            font-size: 18px;
            color: #fff;
            line-height: 45px;
            padding-top:15px;
        }
        .ban_p2 p {
            font-size: 18px;
            color: #fff;
            line-height: 47px;
            padding-bottom:15px;
        }
</style>
