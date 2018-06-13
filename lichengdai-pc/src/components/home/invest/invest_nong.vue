<template>
<div class="invest_nong">
	 <Header></Header>
    <div style="width: 100%;background: #fff;">
    	<div class="bigBox">
            <div class="box3 common_box clearfix" v-if="borrowtype==13">
      			<div class="bRisk">
      				<img src="/static/img/invest/advertising.png">
      			</div>
    		   </div>
           <div class="box common_box clearfix" v-else-if="borrowtype==12">
            <div class="bRisk">
              <img src="/static/img/invest/advertising.png">
            </div>
           </div>
           <div class="boxx common_box clearfix" v-else-if='borrowtype==11'>
            <div class="bRisk">
              <img src="/static/img/invest/advertising.png">
            </div>
           </div>
        </div>
    </div>
    <div class="select">
      <div class="select_content" v-if="borrowtype==13">
          <p class="p_cursor p_title">
          	<span style="margin-left: 0;">
          		<a href="javascript:;" class="text_title_current">三农计划</a>
          	</span>
          </p>
          <p class="p_cursor">项目状态：
          	<span  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
          </p>
      	 <p class="p_cursor">还款方式：
      		<span class="choused">先息后本</span>
      	</p>
       </div>
       <div class="select_content" v-if="borrowtype==12">
          <p class="p_cursor">项目状态：
            <span  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
          </p>
         <p class="p_cursor">还款方式：
          <span class="choused">先息后本</span>
        </p>
       </div>
      <div class="select_content" v-else-if='borrowtype==11'>
        <p class="p_cursor p_title">
            <span  v-for="(item,index) in chouseList.ProjectTypes" :key="index" :class="{text_title_current:Types==item.value}" @click="chouseProjecttype(item.value)">{{item.label}}</span>
          </p>
          <p class="p_cursor" v-if="!Returnshow && Types==15">
            项目时间：
            <span v-for="(item,index) in chouseList.TimeList1" :key="index" :class="{choused:TimeChouse==item.value}" @click="chouseTime(item.value)">{{item.label}}</span>
          </p>
          <p class="p_cursor">项目状态：
            <span  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
          </p>

         <p class="p_cursor" v-if="Returnshow">还款方式：
          <span v-for="(item,index) in chouseList.ReturnList1" :key="index" :class="{choused:ReturnChouse==item.value}" @click="chousereturn(item.value)">{{item.label}}</span>
        </p>
        <p class="p_cursor" v-if="!Returnshow">还款方式：
          <span class=" choused" v-if='Types==15'>先息后本</span>
         <span class=" choused" v-if='Types==11'>等额本息</span>
        </p>
      </div>
    </div>
    <div class="investcontent" v-show='nullShow' >
            <ul class="clearBoth JanuaryOne donghua" v-if='debtShow' v-for="(item, index) in items" >
              <li class="li_icon">
                <!-- vip -->
                 <img src="/static/img/toppage1/VIP.png" alt="" v-if="item.new_hand==='3'">
                 <!-- 专享 -->
                 <img src="/static/img/toppage1/xiang.png" v-else-if="item.new_hand==='1'" alt="">
                 <!-- 新手 -->
                 <img src="/static/img/toppage1/xinshou.png" alt="" v-else-if="item.new_hand==='1' && exclusive==1">
              </li>
              <li class="JanuaryLiOne">
                <p class="JanuaryPOne" style="line-height:110px">
                <a class="a_hover" :id="item.id" :title="item.borrow_name" style="font-size: 16px" href="javascript:;" @click='toDetail(item.id,item.tpl,item.borrow_type)'>{{item.borrow_name}}</a></p>
              </li>
              <li style="position: relative;">
                <p class="number">
                {{item.borrow_interest_rate}}%
                </p>
              <span class="two" style="margin-top: -16px;">目标年化利率</span>
              <span class="span_icon" v-if="item.hike > 0">+2%</span>
              <li>
                  <p class="JanuaryPOne" v-if='item.is_week==="0"'>
                    {{item.borrow_duration}}个月
                  </p>
                  <p class="JanuaryPOne" v-else-if='item.is_week==="1"'>
                    {{item.borrow_duration}}周
                  </p>
                  <p class="JanuaryPOne" v-else-if='item.is_week==="2"'>
                    {{item.borrow_duration}}天
                  </p>
                  <span class="two">项目期限</span>
              </li>
              <li>
                  <p class="JanuaryPOne">
                          {{item.shengyu}}
                          元
                  </p>
                <span class="two">剩余金额</span>
              </li>

              <li class="JanuaryLiFive" style="width: 210px;margin-right: 0;">
                <div class="progress">
                        <i :style="{width:item.progress + '%' }"></i>
                         <span>{{item.progress}}%</span>
                </div>
              </li>
              <li style="margin-left:80px;margin-right: 0">
                <p class="rush JanuaryPOne">
                   <button  class=" button_a hovera" :disabled="disabled"  :id="item.id" @click='toDetail(item.id,item.tpl,item.borrow_type)' v-if="item.can_auto_time >startTime">
                     <countdown :endTime='item.can_auto_time'  :callback="callback" endText="立即加入"></countdown>
                   </button>
                    <img  src="/static/img/toppage1/over4.jpg" v-else-if="item.borrow_status==='7'">
                    <img  src="/static/img/toppage1/over3.jpg" v-else-if="item.borrow_status==='6'">
                     <a href="javascript:;" :id="item.id" style="border-color:#ccc ;color: #999" v-else-if='item.borrow_status!="3" && item.progress===100 ' @click='toDetail(item.id,item.tpl,item.borrow_type)'>复审中</a>
                    <a class="hovera" href="javascript:;" :id="item.id" :title="item.title" v-else @click='toDetail(item.id,item.tpl,item.borrow_type)'>立即加入</a>
                </p>
              </li>
            </ul>
    </div>
    <div class="page" v-show='nullShow'>
           <el-pagination
            background
             @current-change ="handleCurrentChange"
            @size-change="handleSizeChange"
            :page-size="pagesize"
            :total="totalCount"
            :current-page.sync = "page"
            layout="prev, pager, next"
            >
          </el-pagination>
        </div>
        <div class="no_list" v-show='!nullShow'>
          <p class="no_list_p">
          很抱歉，出借列表中暂无符合您的出借需求，请重新调整您的筛选条件！
          </p>
        </div>
 <Footer ></Footer>

</div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import countdown from "../../common/time.vue"
	export default {
		components:{
			Header,
      Footer,
      countdown
		},
    data(){
      return{
        borrowtype:'',
        Returnshow:true,
        Types:'0',
        Projects:"0",//项目状态选择结果
        TimeChouse:"0",//时间状态结果
       ReturnChouse:'0',//还款方式结果
       Types:'0',//项目类型结果
       Type:'4',//项目类型结果
       nullShow:false,
       items:[],
       page:1,
       pagesize:8,
       totalCount:0,
        chouseList:{
              // 项目状态选项
        Projects:[{label:"全部",value:"0"},{label:"撮合中",value:"2"},{label:"复审中",value:"4"},{label:"还款中",value:"6"},{label:"已完成",value:"7"}],
        ReturnList:[{label:"全部",value:"0"},{label:"先息后本",value:"4"},{label:"等额本息",value:"6"},{label:"一次性还清",value:"5"}],
        //项目类型
        ProjectTypes:[{label:"全部",value:"0"},{label:"周计划",value:"11"},{label:"精英计划",value:"15"}],
        //消费场景还款方式筛选
        ReturnList1:[{label:"全部",value:"0"},{label:"先息后本",value:"4"},{label:"等额本息",value:"6"}],
        //时间筛选
        TimeList1:[{label:"全部",value:"0"},{label:"3个月",value:"3"},{label:"6个月",value:"6"}],
        },
        getData:{},//筛选条件那个对象
      }
    },
     mounted:function(){
      this.borrowtype=this.$route.query.borrow_type;
       this.clickChouse();
  },
  methods:{
    clickChouse(data){
      this.get('/V1/Investinfo/show',data)
        .then(res => {
          if(res.data.status==1){
            this.startTime=res.data.now_time;
             this.items=res.data.list;
          this.pages=res.data.page;
            this.totalCount=res.data.number;
            this.nullShow=true
          }else{
            this.nullShow=false
          }
          })
    },
    // 选择项目状态
      chouseProjects(val){
        this.Projects = val;
        this.getData['borrow_status'] = this.Projects;//将来优化可以用this.getData['borrow_status']来完全代替this.Projects
        this.getData['p'] = 1;//将来优化可以用this.getData['borrow_status']来完全代替this.Projects
        this.page=1;
        this.clickChouse(this.getData)
      },
      chouseTime(val){
        this.TimeChouse = val;
        this.getData['borrow_duration'] = this.TimeChouse;
        this.getData['p'] = 1;//将来优化可以用this.getData['borrow_duration']来完全代替this.TimeChouse
        this.page=1;
        this.clickChouse(this.getData)
      },
      //还款方式
      chousereturn(val){
        this.ReturnChouse=val;
        this.getData['repayment_type'] = this.ReturnChouse;
        this.getData['p'] = 1;//将来优化可以用this.getData['borrow_duration']来完全代替this.TimeChouse
        this.page=1;
        this.clickChouse(this.getData)
      },
      //项目类型
      chouseProjecttype(val){
        if(val==11 || val==15){
          this.Returnshow=false
        }else{
          this.Returnshow=true
        }
        this.Types=val;
        this.getData['borrow_type'] = this.Types;
        this.getData['p'] = 1;//将来优化可以用this.getData['borrow_duration']来完全代替this.TimeChouse
        this.page=1;
        this.clickChouse(this.getData)
      },
     handleCurrentChange(val){
         document.documentElement.scrollTop = 0;
         this.getData['p'] = val;
          document.documentElement.scrollTop = 0;

          this.get('/V1/Investinfo/show',this.getData)
          .then(res => {
            if(res.data.status==1){
               this.items=res.data.list;
               this.startTime=res.data.now_time;
              this.nullShow=true;
            }else{
              this.nullShow=false
            }
            })
     },
     toDetail(id,val,type){
        if(val!='detail4'){
          this.$router.push({
          path: '/invest/detail',
          query: {
            id: id,
            type:type
          }
        })
        }else{
          this.$router.push({
          path: '/invest/info',
          query: {
            id: id,
            type:type
          }
        })
      }
     },
     callback(){
      this.disabled=false
       //document.getElementById("button_a").disabled=false;
     }
    },
 filters:{
　　　　//债转还款方式的转换
         Repayment:function(val){
　　　　　　if(val==4){
               return val='先息后本'
             }else if(val==5){
                return val='一次性还清'
             }else if(val==6){
                return val='等额本息'
             }else{
                return val='先息后本'
             }
　　　　}

　　}

	}
</script>
<style scoped lang="less">
body{
 background: #f0f0f0
}
.bigBox {
    width: 100%;
    text-align: center;
    .common_box {
	    min-width: 1200px;
	    height: 288px;
	    background: url(/static/img/invest/sannong.png) no-repeat top center;
	    margin: 0 auto;
	    position: relative;
      .bRisk{
              width: 160px;
          height: 15px;
          position: absolute;
          bottom: 20px;
          left: 61%;
          margin-left: 110px;
          z-index: 99;
      }
	}
  .box {
    background: url(/static/img/invest/rong.jpg) no-repeat top center;
  }
  .boxx {
    background: url(/static/img/invest/yong.jpg) no-repeat top center;
}
}
.select {
    width: 100%;
    height: auto;
    padding-top: 25px;
    background: #f3f3f3;
    .select_content {
	    width: 1200px;
	    padding-left: 30px;
	    margin: 0 auto;
	    height: 100%;
	    background: #fff;
	    border: 1px solid #ddd;
	    padding-top: 10px;
	    .select_content .p_title {
		    font-size: 16px;
		    line-height: 40px;
		    border-bottom: 1px solid #ddd;
		    margin-left: -30px;
		    padding-left: 30px;

		}
	}
  .p_cursor span {
            cursor: pointer;
              font-family: '微软雅黑';
              margin-left: 25px;
              font-size: 14px;
              color: #666666;
      }
       .text_title_current {
            color: #ff6769;
            border-bottom: 2px solid #ff6769;
            padding-right: 10px;
            padding-left: 10px;
            line-height: 40px;
            display: inline-block;
        }
       .p_cursor .choused{
          color: #ff6769;
        }
	p {
	    text-align: left;
	    margin-bottom: 20px;
	    color: #666;
	    .text_current {
		    color: #ff6769;
		}
	}
}
.no_list {
    width: 1198px;
    margin: 0 auto;
    height: 423px;
    border: 1px solid #ddd;
    background: #fff;
    margin-bottom: 25px;
    margin-top: 25px;
}
.no_list_p {
    width: 286px;
    margin: 0 auto;
    height: 60px;
    margin-top: 180px;
    padding-left: 75px;
    background: url(/static/img/toppage1/1.png) left center no-repeat;
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    text-align: left;
}
.invest_nong{
  background: #f3f3f3;
}
</style>
