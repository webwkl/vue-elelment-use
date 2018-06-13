<template>
	<article class="CorporateCulture">
  <div class="content">
		<div class="about_banner">
    <img src="/static/img/culture/title3.png"  />
  </div>
  <div class="qabout">
        <p class="qp">致力于成为国内<span>  安全  </span><span>便捷  </span><span>透明  </span> 的网络借贷信息中介机构</p>
        <p class="qp1">为中小微企业与个人提供简单高效 灵活普惠 成本合理的信息发布服务</p>
        <p class="qp1">为出借人提供公平透明 安全可靠 利息合理的信息对接服务</p>
    </div>
  <div class="about_banner">
        <img src="/static/img/culture/title3_1.png"  />
    </div>
    <div class="qlogo">
        <div class="posi" style="width:340px;left:125px">
            <p class="qp2">服务为本</p>
            <p class="qp3">提供优质的基础信息服务</p>
            <p class="qp3">增加丰富的增值服务</p>
            <p class="qp3">着力打造成为业内一流的网络借贷信息中介机构</p>
        </div>
        <img src="/static/img/culture/qlogo.png" alt="" />
        <div class="posi1">
            <p class="qp4">安全第一</p>
            <p class="qp3">保护出借人资金安全是信广立诚贷所有业务的核心底线，为此我们建立了健全的风控管理体系，严格执行尽职调查和业务审核，拒绝风险漏洞。</p>
        </div>
    </div>
    <div class="bottom">
        <p class="qp5">合作共赢</p>
        <p class="qp3">努力做到借款人、出借人合理条件下的利益最大化，携手并进、互惠互利。</p>
    </div>

    <div class="about_banner">
        <img src="/static/img/culture/title3_2.png"  />
    </div>

    <div class="qjob clearfix">
        <div class="qleft fl">
            <img src="/static/img/culture/office1.png" alt="" />
            <img src="/static/img/culture/office2.png" alt="" />
            <img src="/static/img/culture/office3.png" alt="" class="qimg"/>
            <img src="/static/img/culture/office4.png" alt="" class="qimg"style="margin-top:18px;"/>
        </div>
        <div class="fl">
            <img src="/static/img/culture/office5.png" alt="" />
        </div>
    </div>
    <p class="invest"style="margin-top:30px;">风险提示：市场有风险，出借需谨慎。</p>
    </div>
	</article>
</template>
<script>
	export default {
		name:'CorporateCulture',
		data () {
			return {

			}
		}
	}
</script>
<style scoped>
/*.content{
  width: 1200px;
  height: auto;
  margin: 0 auto;
}*/
.about_banner{
  width: 1200px;
  height: 75px;
  border: 0;
  margin:30px auto 0;
}
.about_banner img{
  width: 100%;
}
.qabout{
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
}
.qp{
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  color: #666;
}
.qp span{
  color: #ff7900;
  font-size: 26px;
}
.qp1{
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  color: #666;
}
.qjob{
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
}
.qleft{
  width: 804px;
  font-size: 0;
}

.qleft img{
  display: block;
  float: left;
  margin-right: 20px;
}
.qleft .qimg{
  margin-right: 15px;
}
.qlogo{
  width: 1200px;
  margin:0 auto;
  text-align: center;
  padding-top: 30px;
  position: relative;
}
.posi{
  width: 320px;
  height: 140px;
  position: absolute;
  left:140px ;
  top:100px ;
  text-align: right;
}
.posi1{
  width: 320px;
  height: 140px;
  position: absolute;
  right:140px ;
  top:70px ;
  text-align: left;
}
.qp2{
  color: #f6813e;
  font-size: 20px;
  line-height: 40px;
}
.qp3{
  font-size: 16px;
  color: #666;
  line-height: 24px;
}
.qp4{
  color: #106795;
  font-size: 20px;
  line-height: 40px;
}
.bottom{
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
}
.qp5{
  font-size: 20px;
  color: #07783b;
  line-height: 40px;
}
.invest {
    text-align: center;
    line-height: 40px;
    color: #999;
    font-size: 14px;
    margin-bottom: 50px;
}
</style>
