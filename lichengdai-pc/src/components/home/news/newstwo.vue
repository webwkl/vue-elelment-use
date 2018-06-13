<template>
<div class="dynamic">
	<Header></Header>
	<commonPlatform></commonPlatform>
	<img src="static/img/news/New_banner9.jpg" alt="" class="topimg">
	<div id="news_con">
		<ul>
			<li v-for="(lists,index) in list">
				<a :href="'/news/detail?id=' +lists.id">{{lists.title}} </a>
				<span>{{lists.art_time}}</span>
			</li>
			
		</ul>
		<el-pagination
		  background
		  @current-change ="handleCurrentChange"
          @size-change="handleSizeChange"
		  layout=" pager"
		  :total="count">
		</el-pagination>
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
			id:'',
			list:{},
			count:0,


		}
	},
	components:{
		commonPlatform,
		Header,
		Footer
	},
	mounted(){
    	this.id=this.$route.params.id;
    	// alert(this.id)
    	this.fetchDate();
    },
	
	methods: {
    	fetchDate() {
		    this.get('/V1/News/show',{
		    	params:{
                  id:this.id
                }
		    })
	        .then(res => {
	        	console.log(res.data) 
	        	this.list = res.data.con_list; 
	        	this.count = res.data.count;	
	        })
  		},
  		handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	    },
	    handleCurrentChange(val) {
        	document.documentElement.scrollTop = 0;
        	this.get('/V1/News/show',{
                params:{
                	id:this.id,
                	p:val,

                }
        	})
        	.then(res => {
	            this.list = res.data.con_list;
            })
	        console.log(`当前页: ${val}`);
	    }

    },
}
</script>
<style scoped lang="less">
.dynamic{
	.topimg{
		margin-top: 5px;
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
			    a {
				    float: left;
				    color: #666;
				    font-size: 14px;
				}
				span {
				    float: right;
				    color: #999;
				}
			}
			li:hover {
			    background: url(/static/img/news/icon_gonggao.png) no-repeat left center;
			    border: 1px solid #edb17c;
			    background-color: #fef8ec;
			    background-position: 20px;
			    line-height: 44px;
			}
		}
	}
	.el-pagination{
		text-align: center;
	}
	.el-pagination.is-background .el-pager li.active{
		background: #ff6769;
	}
}
</style>