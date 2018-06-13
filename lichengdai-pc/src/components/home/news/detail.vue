<template>
<div class="detail">
	<Header></Header>
	<commonPlatform></commonPlatform>
	<div class="mb" style="padding-top: 30px;margin: 0 auto; width:995px; ">
		<a href="/news">首页</a>&nbsp;&gt;<span v-html="typeN"></span>&nbsp;&gt;&nbsp;{{content.title}}		</div>
	<div id="news_con">
		<h2>{{content.title}}<a href="/news" class="back_list">返回列表&gt;&gt;</a></h2>
		<p class="time">{{content.art_time}}</p>
		<div class="news_content" v-html="content.art_content">
		</div>
		<div class="nc_fy">
			<p v-if="prev.id ">
				<span ><a :href="'/News/detail?id=' + prev.id ">上一篇：</a></span>
				<a :href="'/News/detail?id=' + prev.id ">{{prev.title}}</a>
				
			</p><span v-else></span>
		    <p v-if="next.id">
				<span><a href="/News/detail">下一篇：</a></span>
				<a :href="'/News/detail?id=' + next.id ">{{next.title}}</a>
			</p>
			<span v-else></span>
			<p>
				<span>来    源：</span>
				<span v-if="content.art_resource !=''">{{content.art_resource}}</span>
				<span v-else>
					信广立诚贷
				</span>
			</p>
			<div class="xgwztj">
				<h3>推荐文章：</h3>
				<ul>
					<li v-for = "(lists ,index) in art_list" class="clearfix">
						<a class="wztj fl" :href="'/News/detail?id=' + lists.id ">{{lists.title}}</a>
						<span class="fr">{{lists.art_time}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<Footer></Footer>
</div>
</template>
<script>
import commonPlatform from "../../common/commonPlatform.vue"
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default{

	name:"dynamic",
	data() {
		return{
			id:"",
			content:{},
			prev:{},
			next:{},
			art_list:{},
			typeN:'',

		}
	},
	components:{
		commonPlatform,
		Header,
		Footer
	},
	mounted(){
    	this.id=this.$route.query.id;
    	this.fetchDate();
    },
    methods: {
    	fetchDate() {
		    this.get('/V1/news/detail',{
		    	params:{
                  id:this.id
                }
		    })
	        .then(res => {
	        	console.log(res.data.con_list.art_resource)
	        	this.content = res.data.con_list;
	        	this.prev = res.data.con_s;
	        	this.next = res.data.con_x;
	        	this.art_list = res.data.art_list;
	        	this.typeN = res.data.typeN;

	        	

	        })
  		}
    },
}
</script>
<style scoped lang="less">
p{
	color: #838383;
	line-height: 24px;
}
#news_con {
    width: 990px;
    margin: 0 auto;
    height: auto;
    border: 1px solid #ddd;
    margin-top: 40px;
    margin-bottom: 80px;
    padding-bottom: 20px;
    min-height: 400px;
	h2 {
	    font-size: 20px;
	    height: 44px;
	    line-height: 44px;
	    border-bottom: 1px solid #ddd;
	    margin: 10px 44px;
	    font-weight: normal;
	    padding-left: 76px;
	    text-align: center;
	    .back_list {
		    float: right;
		    color: #e95b05;
		}
	}
	p.time {
	    font-size: 14px;
	    text-align: center;
	    color: #838383;
	    width: 100%;
	}
	.news_content,
	.nc_fy {
	    width: 830px;
	    margin: 0 auto;
	    font-size: 14px;
	    color: #999;
	    line-height: 28px;
	}
	.nc_fy{
		.xgwztj {
		    margin-top: 10px;
		    margin-bottom: 20px;
		    padding: 10px 0;
		    border-top: 1px dashed #DCDCDC;
		}
		h3 {
		    color: #000;
		    font-size: 16px;
		    font-weight: 600;
		    line-height: 28px;
		    margin-bottom: 5px;
		}
		ul {
		    padding: 10px 44px;
		    li {
			    background-position: 20px!important;
			    height: 44px;
			    line-height: 44px;
			    border:1px solid #fff;
			    border-bottom: 1px solid #ddd;
			    padding: 0 36px;
			    overflow: hidden;
			    background: url(/static/img/news/icon_gonggao_01.png) no-repeat left center;
			    a{
			    	color: #666;
			    }
			    span {
				    white-space: pre;
				    color: #999;
				    padding: 0 20px;
				}
			}
			li:hover {
			    background: url(/static/img/news/icon_gonggao.png) no-repeat left center;
			    background-position: 20px;
			    line-height: 44px;
				a{
					color: #ff6769;
				}
			}
		}
	}
}
</style>