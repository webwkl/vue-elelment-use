<template>
	<article class="Honor">
		<div class="honor_content">
			<h1 class="title"></h1>
			<ul class="honor_ul clearfix">
				<li class="honor_li fl" v-for="(n, index) in imageList" v-fancybox-thumbnail="[n.width, n.height]" :data-index="index">
					<img @click="open($event)" :src="n.url" alt="" class="img">
			        <p class="honor_title" >{{n.title}}</p>
			    </li>
			</ul>
			<h1 class="title1"></h1>
			<ul class="honor_ul clearfix">
				<li class="honor_li fl" v-for="(s,index) in honor_lcds" v-fancybox-thumbnail="[s.width, s.height]" :data-index="index">
						<img @click="opentwo($event)" :src="s.url" alt="" class="img">
					<p class="honor_title">{{s.honor_lcd_title}}</p>
				</li>
			</ul>
		</div>
	</article>
</template>
<script>
import fancyBox from 'vue-fancybox';
	export default {
		name:'Honor',
		data () {
			return {
				honor_lcds:[
					{
						width:1654,
						height:2340,
						url:'/static/img/about/honor/lcd_02.jpg',
						honor_lcd_title:'立诚贷营业执照',
					},
					{
						width:1123,
						height:794,
						url:'/static/img/about/honor/lcd_04.jpg',
						honor_lcd_title:'立诚贷开户许可证',
					},
					{
						width:1123,
						height:794,
						url:'/static/img/about/honor/lcd_40.jpg',
						honor_lcd_title:'立诚贷信息系统安全等级保护备案证明',
					},
				],
				imageList: [
			        {
			        	width: 1028,
			        	height: 676,
			        	url: '/static/img/about/honor/ryzz1_1.jpg',
			        	title:'互联网金融行业诚信龙头单位'
			        },
			        {
			        	width: 833,
			        	height: 2003,
			        	url: '/static/img/about/honor/23.png',
			        	title:'互联网金融行业实名龙头网站认证',
			        },
			        {
			        	width: 800,
			        	height: 554,
			        	url: '/static/img/about/honor/ryzz3_1.jpg',
			        	title:'2016年度互联网金融诚信企业奖',
			        },
			        {
			        	width: 1000,
			        	height: 701,
			        	url: '/static/img/about/honor/ryzz5_1.jpg',
			        	title:'消费者权益保护工作示范单位',
			        },
			        {
			        	width: 1000,
			        	height: 617,
			        	url: '/static/img/about/honor/ryzz6_1.jpg',
			        	title:'中国电子商务协会电子商务中心会员',
			        },
			        {
			        	width: 1000,
			        	height: 722,
			        	url: '/static/img/about/honor/PC-3A.jpg',
			        	title:'企业信用等级认证',
			        },
			        {
			        	width: 1000,
			        	height: 706,
			        	url: '/static/img/about/honor/zizhi03.jpg',
			        	title:'互联网金融理财公众满意十佳典范品牌奖',
			        },
			        {
			        	width: 1000,
			        	height: 692,
			        	url: '/static/img/about/honor/zizhi04.jpg',
			        	title:'中国互联网投资理财最佳诚信平台',
			        },
			        {
			        	width: 1000,
			        	height: 701,
			        	url: '/static/img/about/honor/zizhi01.jpg',
			        	title:'最具投资价值诚信金融品牌',
			        },
			        {
			        	width: 1000,
			        	height: 756,
			        	url: '/static/img/about/honor/zizhi06.jpg',
			        	title:'中国电子商务协会颁发的诚信网站奖',
			        },
			        {
			        	width: 3856,
			        	height: 2829,
			        	url: '/static/img/about/honor/jianb.jpg',
			        	title:'2015年度互联网金融责任品牌',
			        },
			        {
			        	width:853,
			        	height:550,
			        	url:'/static/img/about/honor/certificate01.jpg',
			        	title:'全国互联网金融十大最佳风控平台',
			        },
			        {
			        	width:854,
			        	height:556,
			        	url:'/static/img/about/honor/certificate03.jpg',
			        	title:'中国互联网金融行业最具影响力品牌',
			        },
			        {
			        	width:1124,
			        	height:794,
			        	url:'/static/img/about/honor/feng.jpg',
			        	title:'2015年度互联网金融杰出风控奖',
			        },
			        {
			        	width:800,
			        	height:604,
			        	url:'/static/img/about/honor/xin.jpg',
			        	title:'中国金融理财十大杰出创新新锐人物',
			        },
			        {
			        	width:730,
			        	height:950,
			        	url:'/static/img/about/honor/ryzz9_1.jpg',
			        	title:'2016年最佳金融创新大奖',
			        },
			        {
			        	width:800,
			        	height:566,
			        	url:'/static/img/about/honor/ryzz10_1.jpg',
			        	title:'中国电子商务协会反欺诈系统接入单位证书',
			        },
			        {
			        	width:1000,
			        	height:773,
			        	url:'/static/img/about/honor/22.jpg',
			        	title:'亚洲中金联盟会员证书',
			        },

			    ]

			}
		},
		methods:{
		    open (e) {
		      fancyBox(e.target, this.imageList);
		    },
		    opentwo (e) {
		      fancyBox(e.target, this.honor_lcds);
		    }
		}
	}
</script>
<style scoped lang="less">
.Honor{
	width: 100%;
}
.honor_content{
	width: 1200px;
	min-width: 1200px;
	margin: 0 auto;
}
.title{
	width: 1200px;
    height: 75px;
    margin: 20px auto;
    background: url(/static/img/about/title6.png) no-repeat;
}
.title1{
	width: 1200px;
    height: 75px;
    margin: 20px auto;
    background: url(/static/img/about/title6_1.png) no-repeat;
}
.honor_ul{
	padding-top: 30px;
	.honor_li{
		width: 25%;
		text-align: center;
		padding-bottom: 16px;
			background: url(/static/img/about/honor/zzry_border.png) top center no-repeat;
			margin: 0 auto;
			.img{
				width: 225px;
				height: 145px;
				margin: 16px auto 20px;
				opacity: 0.6;
				cursor: pointer;
			}
			img:hover{
				opacity: 1;
			}
		.honor_title{
			font-size: 14px;
		    line-height: 28px;
		    color: #838383;
		}
	}
}

</style>