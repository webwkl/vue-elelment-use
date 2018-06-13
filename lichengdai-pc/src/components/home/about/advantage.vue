<template>
	<article class="advantage">
		<div class="advantage_content">
			<h1 class="title"></h1>
			<div class="box">
				<ul class="clearfix">
					<li class="fl" v-for="advant in advants">
						<img :src=advant.img alt="">
						<p class="p1">{{advant.p1}}</p>
						<p class="p2">{{advant.p2}}</p>
					</li>
				</ul>
				<ol class="clearfix">
					<li class="fl" v-for="list in advantages">
						<img :src=list.img alt="">
						<p class="p1">{{list.p1}}</p>
						<p class="p2">{{list.p2}}</p>
					</li>
					
				</ol>
			</div>
			<p class="invest">风险提示：市场有风险，出借需谨慎。</p>
		</div>
	</article>
</template>
<script>
	export default {
		name:'advantage',
		data () {
			return {
				advants:[
					{
						img:'/static/img/about/house.png',
						p1:'背景雄厚',
						p2:'集团雄厚实力 助力平台发展'
					},
					{
						img:'/static/img/about/seach.png',
						p1:'项目透明',
						p2:'甄选优质项目 项目信息透明'
					},
					{
						img:'/static/img/about/san.png',
						p1:'资金存管',
						p2:'银行存管 资金安全保障'
					}
				],
				advantages:[
					{
						'img':'/static/img/about/text.png',
						'p1':'信息加密',
						'p2':'采用先进技术 保障信息私密'
					},
					{
						'img':'/static/img/about/ping.png',
						'p1':'合法公开',
						'p2':'严格遵守法规 详尽披露信息'
					},
					{
						'img':'/static/img/about/phone.png',
						'p1':'方便快捷',
						'p2':'四季足不出户 一键轻松出借'
					},
					{
						'img':'/static/img/about/gift.png',
						'p1':'平台福利',
						'p2':'多种增值服务 尊享专属权益'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.advantage_content{
		width: 1200px;
	    margin: 0 auto;
	}
	.title{
		width: 1200px;
	    height: 75px;
	    margin: 20px auto;
	    background: url(/static/img/about/title2.png) no-repeat;
	}
	.box {
	    
	    padding: 30px 0;
	}
	.box ul li{
		width: 33.333%;
    	text-align: center;
	}
	.box ol {
	    padding-top: 30px;
	}
	.box ol li {
	    width: 25%;
	    text-align: center;
	}
	.p1 {
	    color: #f6813e;
	    font-size: 22px;
	    line-height: 40px;
	}
	.p2 {
	    color: #666;
	    font-size: 16px;
	    line-height: 24px;
	}
	.invest{
		text-align: center;
	    line-height: 40px;
	    color: #999;
	    font-size: 14px;
	    margin-bottom: 50px;
	}
</style>