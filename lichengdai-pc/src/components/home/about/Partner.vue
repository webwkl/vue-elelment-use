<template>
	<article class="Partner">
		<div class="partner_content">
			<h1 class="title"></h1>
			<div class="phto_hzhb">
				<ul class="clearfix">
					<li v-for="partner_list in partners">
						<div class="hleft fl">
							<img :src = partner_list.img alt="">
						</div>
						<div class="hright fl">
							<h4>{{partner_list.title}}</h4>
							<p class="">{{partner_list.text}}</p>
						</div>
					</li>
				</ul>
			</div>
			<p class="invest">风险提示：市场有风险，出借需谨慎。</p>
		</div>
	</article>
</template>
<script>
	export default {
		name:'Partner',
		data () {
			return {
				partners:[
					{
						img:'/static/img/partner/l_ceca.png',
						title:'中国电子商务协会',
						text:'中国电子商务协会（英文名称：China Electronic Commerce Association.英文缩写CECA）是由信息产业部申请，经国务院批准，国家民政部核准登记注册的全国性社团组织，其业务活动受信息产业部的指导和国家民政部的监督管理。',
					},
					{
						img:'/static/img/partner/ancun.jpg',
						title:'安存',
						text:'杭州安存网络科技有限公司创建于2008年，“打造诚信信息世界”是安存的愿景，“瞬间证明虚拟世界的真实性”是安存的任务。凭借20年中国法律服务及信息安全领域专业研发经验沉淀，安存致力于服务全球电子数据存证领域。',
					},
					{
						img:'/static/img/partner/td.jpg',
						title:'同盾科技',
						text:'同盾科技有限公司成立于2013年，是国内专业的第三方智能风险管理服务提供商。同盾科技智能风控云服务，依托大数据分析技术，精准预测信贷、银行保险、电商等领域的信用及欺诈风险，有效降低企业风控成本。同盾将人工智能与风险管理深度结合，为非银行信贷、银行、保险、基金理财、三方支付、航旅、电商、O2O、游戏、社交平台等多个行业客户提供高效智能的风险管理整体解决方案。 ',
					},
					{
						img:'/static/img/partner/nt.jpg',
						title:'GeoTrust',
						text:'GeoTrust是全球第二大数字证书颁发机构(CA)，GeoTrust&nbsp;公司提供的&nbsp;Web&nbsp;服务器&nbsp;SSL&nbsp;数字证书可以确保网站与用户之间安全的信息传输，为用户提供非常卓越的和无懈可击的从浏览器到服务器的访问保护和欺骗预防。&nbsp;地址栏“https”开头的页面能保证网站用户在线交易等机密信息在网络传输过程中不会被查看、窃取和修改。',
					},
					{
						img:'/static/img/partner/t_cfca.jpg',
						title:'中国金融认证中心',
						text:'中国金融认证中心（China Financial Certification Authority，简称CFCA）是经中国人民银行和国家信息安全管理机构批准成立的国家级权威安全认证机构，是国家重要的金融信息安全基础设施之一。在《中华人民共和国电子签名法》颁布后，CFCA成为首批获得电子认证服务许可的电子认证服务机构之一。',
					},

					{
						img:'/static/img/partner/zcx.jpg',
						title:'中诚信征信',
						text:'中诚信征信有限公司（以下简称中诚信征信）是由中国诚信信用管理有限公司的全资子公司，为专业化、全方位的信用服务机构。中诚信征信是目前中国营业网点最多、信用产品最全、信用风险管理经验最丰富、数据库最庞大的全国性信用风险管理机构之一。',
					},
					{
						img:'/static/img/partner/br.jpg',
						title:'百融金服',
						text:'百融金融信息服务股份有限公司，是一家利用大数据技术为金融行业提供客户全生命周期管理产品和服务的高科技公司。百融金服依托大数据技术及来自互联网、金融机构、线下零售、社交、媒体、航空、教育、运营商、品牌商等多维数据源，创新性地为信贷，保险，投资理财等行业企业提供获客引流、精准营销、客群分析、风控管理、反欺诈、贷前信审、贷后管理等服务，提升金融行业整体运营管理水平。',
					},
					{
						img:'/static/img/partner/11.png',
						title:'北京数美时代科技有限公司',
						text:'北京数美时代科技有限公司成立于2015年8月，是一家致力于利用人工智能技术和海量数据解决金融、互联网等领域广泛存在的欺诈问题，为互联网企业提供专业、可信赖的反欺诈解决方案。',
					},
					{
						img:'/static/img/partner/8.png',
						title:'北京宜信致诚信用评估有限公司',
						text:'北京宜信致诚信用管理有限公司（以下简称“致诚信用”）是拥有中国人民银行颁发企业征信业务经营备案的第三方独立机构，专业从事信用信息征集与咨询、信用数据整合与分析、信用风险评估等企业信用风险管理及其它科技服务。致诚信用基于成熟的信用风险管理经验及数据研发处理和建模能力，矢志构建现代化新型信用体系，提供公正、客观、全面的信用信息咨询，以及专业、先进的信用产品及服务，为用户提供完善的风险管理解决方案，建立和管理信用，防控金融风险，释放信用价值。',
					},
					{
						img:'/static/img/partner/13.jpg',
						title:'北京蓝汛通信技术有限责任公司',
						text:'蓝汛集团成立于1998年，是中国专业的互联网基础服务提供商，致力于为客户提供高速、稳定的互联网服务，率先在业界构建并推出了数据中心，中立的互联网交换中心，内容分发网络三层架构体系。秉承着“互联网改变生活，我们改变互联网”的信念，筑就中国互联网上最具规模的内容及应用分发平台，打造中国CDN领域第一品牌，全力支撑中国互联网的发展。',
					},
					{
						img:'/static/img/partner/yxdb.png',
						title:'北京银翔投资担保有限公司',
						text:'北京银翔投资担保有限公司成立于2008年10月，公司凭借着雄厚的实力、专业的团队和领先的服务意识，为不同需求的客户制定个性化担保方案。银翔有着优质的业务渠道和丰富的人脉网络，立志成为业内的典范，成为您的首选！为更多的个人与企业提供安全、有效的资金解决方案！',
					},
					{
						img:'/static/img/partner/DING.png',
						title:'黑龙江省鼎坤担保有限公司',
						text:'黑龙江省鼎坤担保有限公司成立于2012年01月，注册资本3000万，公司凭借着雄厚的实力、专业的团队和领先的服务意识，为不同需求的客户制定个性化担保方案。鼎坤珍惜客户的每一次托付，始终用心提供优质信贷服务，努力降低客户融资成本，逐步提高客户融资便利。我们希望通过自身的专注努力和不断进步，能够树立服务个人与企业的典范，获取客户与社会最广泛的认可与尊重。',
					},

				]
			}
		}
	}
</script>
<style scoped>
	.partner_content{
		width: 1200px;
	    margin: 0 auto;
	}
	.title{
		width: 1200px;
	    height: 75px;
	    margin: 20px auto;
	    background: url(/static/img/about/title5.png) no-repeat;
	}
	ul li {
	    width: 100%;
	    border: 0;
	    float: left;
	    border-bottom: 1px dashed #ddd;
	}
	ul li .hleft {
	    width: 314px;
	    height: 222px;
	    text-align: center;
	}
	ul li img {
	    width: 262px;
	    height: 78px;
	    margin: 74px 26px;
	    border: 1px solid #ddd;
	}
	ul li .hright {
	    width: 856px;
	    height: 192px;
	    padding-top: 30px;
	    padding-left: 30px;
	}
	.hright h4 {
	    font-weight: bold;
	    font-size: 20px;
	    line-height: 40px;
	    text-align: center;
	}
	.hright p{
		font-size: 14px;
		color: #666;
		text-indent: 28px;
		line-height: 28px;
	}
	ul li:nth-of-type(9) img,
	ul li:nth-of-type(10) img
	{
		width: 92px;
		height: 92px;
		border:0;
	}
	.invest{
		text-align: center;
	    line-height: 40px;
	    color: #999;
	    font-size: 14px;
	    margin:  50px 0;
	}
</style>