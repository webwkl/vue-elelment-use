<template>
	<article class="ContactUs">
		<div class="contactUs_content">
			<h1 class="title"></h1>
			<Maps></Maps>
			<router-view></router-view>
			<el-row>
			  <el-col :span="6" :offset="1">
			  	<div class="grid-content bg-purple">
			  		<h2>信广立诚贷</h2>
                    <span>地址：北京市朝阳区西大望路甲3号</span><span style="text-indent:43px;">蓝堡国际Ⅱ座10层</span>
                    <span>电话：400-151-3456</span>
			  	</div>
			  </el-col>
			  <el-col :span="14" :offset="2">
			  	<div class="grid-content bg-purple-light">
			  		<h2>信息追踪</h2>
			  		<div class="clearfix">
			  			<img src="/static/img/about/code.jpg" class="fl" />
	                    <span class="fl">温馨提示：</span>
	                    <span class="fl">扫描二维码关注信广立诚贷</span>
	                    <span class="fl">获取信广立诚贷最新新闻动态</span>
			  		</div>
                    
			  	</div>
			  </el-col>
			</el-row>
			<el-row>
			  <el-col :span="6" :offset="1">
			  	<div class="grid-content bg-purple">
			  		<h2>客服服务</h2>
                    <span>客服电话：<em>400-151-3456</em></span>
                    <span>工作时间：9:00-18:00</span>
                    <span>客服邮箱：<em>kefu@lichengdai.cn</em></span>
			  	</div>
			  </el-col>
			  <el-col :span="6" :offset="2">
			  	<div class="grid-content bg-purple-light">
			  		<h2>商务合作</h2>
                    <span>商务电话：<em>010-85999887</em></span>
                    <span>商务传真：010-85999097</span>
                    <span>商务邮箱：<em>shangwu@lichengdai.cn</em></span>
			  	</div>
			  </el-col>
			  <el-col :span="6" :offset="2">
			  	<div class="grid-content bg-purple">
			  		<h2>媒体采访</h2>
                    <span>工作时间：9:00-18:00</span>
                    <span>采访邮箱：<em>meiti@lichengdai.cn</em></span>
			  	</div>
			  </el-col>
			</el-row>
		</div>
	</article>
</template>

<script>
import Maps from '../about/Maps.vue'
	export default {
		name:'ContactUs',
		data () {
			return {

			}
		},
		components:{
			Maps
		}
	}
</script>
<style scoped lang="less">
.ContactUs{
	width: 100%;
	.contactUs_content{
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
		.el-row {
		    margin-bottom: 45px;
		  }
		  .el-col {
		    border-radius: 4px;
		    // margin-left: 40px;
		  }
		  .bg-purple-dark {
		    // background: #99a9bf;
		  }
		  .bg-purple {
		    // background: #d3dce6;
		  }
		  .bg-purple-light {
		    // background: #e5e9f2;
		  }
		  .grid-content {
		    // border-radius: 4px;
		    min-height: 149px;
		    border:1px solid #ccc;
		    padding-left: 15px;
		    h2{
		    	font-weight: normal;
			    height: 40px;
			    font-size: 24px;
			    color: #666;
			    line-height: 40px;
			    margin-top: 10px;

		    }
		    div{
		    	span{
		    		width: 70%;
		    	}
		    }
		    span{
		    	width: 100%;
			    font-weight: normal;
			    font-size: 14px;
			    color: #838383;
			    height: 25px;
			    line-height: 25px;
			    display: block;
			    em{
			    	color: #2F9EDD;
			    }
		    }
		    img{
		    	width: 88px;
		    	height: 88px;
		    	margin-right: 20px;
		    }
		  }
		  .row-bg {
		    padding: 10px 0;
		    background-color: #f9fafc;
		  }
	}
	.title{
		width: 1200px;
	    height: 75px;
	    margin: 20px auto;
	    background: url(/static/img/about/title8.png) no-repeat;
	}

}
</style>