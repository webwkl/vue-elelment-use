<template>
	<article class="AboutUs">
	<!-- <Header></Header> -->
		<div class="aboutUs_content">
			<h1 class="title"></h1>
			<div class="about_introduce">
	            <p>信广立诚贷隶属于信广投资管理集团有限责任公司，是集团旗下8家子公司之一。信广立诚贷成立于2014年8月，公司办公地点位于北京CBD核心商业区，实缴注册资本5000万元。管理团队由国内知名金融、互联网、风控、法律等人才组成，平均从业经验10年以上。</p>
	            <p>信广立诚贷致力于打造安全、便捷、透明的网络借贷信息中介机构。通过互联网方式对企业及个人的借贷项目信息进行风控核查并汇总发布，让广大出借者更加清晰、便捷的获取更多出借资讯，让出借者在合理的利息下获得闲置资金的不断增值。</p>
	            <p>信广立诚贷严格按照国家相关法律法规与行业规定，保持信息中介平台属性，不设立资金池；不触碰出借者资金；不公布虚拟借款项目；不允许借款企业借新还旧；不为借款企业担保；保证项目信息与出借资金去向的透明化；平台信息披露的透明化。</p>
	            </p>
	        </div>
	        <p class="invest">风险提示：市场有风险，出借需谨慎。</p>
		</div>
	<!-- <Footer></Footer> -->
	</article>
</template>
<script>
// import Header from '@/components/common/Header'
// import Footer from '@/components/common/Footer'
export default {
	name:'AboutUs',
	data () {
		return {

		}
	}
}
</script>
<style scoped>
	.AboutUs{
		width: 100%;
	}
	.aboutUs_content{
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
	}
	.title{
		width: 1200px;
	    height: 75px;
	    margin: 20px auto;
	    background: url(/static/img/about/title.png) no-repeat;
	}
	.about_introduce p{
		font-size: 16px;
	    color: #666;
	    line-height: 36px;
	    text-indent: 32px;
	    margin:10px 0 30px;
	}
	.invest{
		text-align: center;
	    line-height: 40px;
	    color: #999;
	    font-size: 14px;
	    margin-bottom: 50px;
	}
</style>