<template>
  <div >
  <Header ></Header>
    <div id="wdzh">
       <div class="wdzh_right wytz_all">
        <div class="h2">
          <div class="h2_title">
            <h2 class="fl">
            <a href="/invest?borrow_type=0" :class='{active: borrowType == 0}'>全部项目</a>
            <a href="/invest?borrow_type=13" :class='{active: borrowType == 13}'>三农场景</a>
            <a href="/invest?borrow_type=6" :class='{active: borrowType == 6}'>数据场景</a>
            <a href="/invest?borrow_type=5" :class='{active: borrowType == 5}'>消费场景</a>
            <a href="/invest?borrow_type=4" :class='{active: borrowType == 4}'>优选项目</a>
            <a href="/invest?borrow_type=9" :class='{active: borrowType == 9}'>债权转让</a>
              </h2>
          </div>
          <div class="l_title clearfix"style="1200px;">
              <ul class="ul fl" v-if='borrowType==0'>
                   <li class="l_list fl">
                        <p class="l_tit fl">项目状态：</p>
                        <span class="fl l_span zhao"  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
                    </li>
                    <li class="l_list fl">
                        <p class="l_tit fl">项目时间：</p>
                        <span class="fl l_span zhao" v-for="(item,index) in chouseList.TimeList" :key="index" :class="{choused:TimeChouse==item.value}" @click="chouseTime(item.value)">{{item.label}}</span>
                    </li>
                    <li class="l_list fl">
                        <p class="l_tit fl">还款方式：</p>
                        <span class="fl l_span zhao" v-for="(item,index) in chouseList.ReturnList" :key="index" :class="{choused:ReturnChouse==item.value}" @click="chousereturn(item.value)">{{item.label}}</span>
                    </li>
                   </ul>
                   <ul class="ul fl" v-else-if='borrowType==13'>
                   <li class="l_list fl">
                        <p class="l_tit fl">项目状态：</p>
                        <span class="fl l_span zhao"  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
                    </li>
                    <li class="l_list fl">
                        <p class="l_tit fl">还款方式：</p>
                        <span class="fl l_span zhao choused">先息后本</span>
                    </li>
                   </ul>
                   <ul class="ul fl" v-else-if='borrowType==6'>
                       <li class="l_list fl">
                            <p class="l_tit fl">项目类型：</p>
                            <span class="fl l_span zhao"  v-for="(item,index) in chouseList.ProjectTypes" :key="index" :class="{choused:Types==item.value}" @click="chouseProjecttype(item.value)">{{item.label}}</span>
                        </li>
                        <li class="l_list fl">
                            <p class="l_tit fl">项目状态：</p>
                            <span class="fl l_span zhao"  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
                        </li>
                        <li class="l_list fl" v-if="!Returnshow && Types==15">
                          <p class="l_tit fl">项目时间：</p>
                          <span class="fl l_span zhao" v-for="(item,index) in chouseList.TimeList1" :key="index" :class="{choused:TimeChouse==item.value}" @click="chouseTime(item.value)">{{item.label}}</span>
                        </li>
                         <li class="l_list fl" v-if="Returnshow">
                            <p class="l_tit fl">还款方式：</p>
                            <span class="fl l_span zhao" v-for="(item,index) in chouseList.ReturnList1" :key="index" :class="{choused:ReturnChouse==item.value}" @click="chousereturn(item.value)">{{item.label}}</span>
                        </li>

                        <li class="l_list fl" v-if="!Returnshow">
                                <p class="l_tit fl">还款方式：</p>
                                <span class="fl l_span zhao choused" v-if='Types==15'>先息后本</span>
                                <span class="fl l_span zhao choused" v-if='Types==11'>等额本息</span>
                          </li>
                   </ul>
                   <ul class="ul fl" v-else-if='borrowType==5'>
                       <li class="l_list fl">
                            <p class="l_tit fl">项目状态：</p>
                            <span class="fl l_span zhao"  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
                        </li>
                        <li class="l_list fl">
                            <p class="l_tit fl">还款方式：</p>
                            <span class="fl l_span zhao choused">先息后本</span>
                        </li>
                   </ul>
                   <ul class="ul fl" v-else-if='borrowType==4'>
                         <li class="l_list fl">
                              <p class="l_tit fl">项目类型：</p>
                              <span class="fl l_span zhao"  v-for="(item,index) in chouseList.ProjectType1" :key="index" :class="{choused:Type==item.value}" @click="chouseProjecttype1(item.value)">{{item.label}}</span>
                          </li>
                            <li class="l_list fl">
                              <p class="l_tit fl">项目状态：</p>
                              <span class="fl l_span zhao"  v-for="(item,index) in chouseList.Projects" :key="index" :class="{choused:Projects==item.value}" @click="chouseProjects(item.value)">{{item.label}}</span>
                           </li>
                          <li class="l_list fl">
                          <p class="l_tit fl">项目时间：</p>
                          <span class="fl l_span zhao" v-for="(item,index) in chouseList.TimeList" :key="index" :class="{choused:TimeChouse==item.value}" @click="chouseTime(item.value)">{{item.label}}</span>
                        </li>
                        <li class="l_list fl">
                        <p class="l_tit fl">还款方式：</p>
                        <span class="fl l_span zhao" v-for="(item,index) in chouseList.ReturnList" :key="index" :class="{choused:ReturnChouse==item.value}" @click="chousereturn(item.value)">{{item.label}}</span>
                    </li>
                   </ul>
                   <ul class="ul fl" v-else>
                         <li class="l_list fl">
                              <p class="l_tit fl">目标年化利率：</p>
                              <span class="fl l_span zhao" v-for="(item,index) in chouseList.TargetRate" :key="index" :class="{choused:TargetChouse==item.value}" @click="chouseTarget(item.value)">{{item.label}}</span>
                          </li>
                          <li class="l_list fl">
                              <p class="l_tit fl">转让金额：</p>
                              <span class="fl l_span zhao" v-for="(item,index) in chouseList.AmountList" :key="index" :class="{choused:AmountChouse==item.value}" @click="chouseAmount(item.value)">{{item.label}}</span>
                          </li>
                   </ul>
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
             <div class="wytz_biao" >
               <div class="b_wytz" >
                  <div class="biao_in" v-if='!debtShow' v-for="(debtitem, index) in debtitems" >
                     <div class="b_xmqx">
                         <div class="b_rtsr" style="font-size:20px;margin-left:100px;width:100%;">
                           {{debtitem.borrow_name}}
                         </div>
                          <div class="inx_ol" style="margin-left:100px;width:100%;">
                             <div class="b_rtin2">
                                 <p>转让期数</p>
                                 <span>{{debtitem.period}}期/{{debtitem.total_period}}期</span>
                             </div>
                             <div class="b_rtin2">
                               <p>还款方式</p>
                               <span>{{debtitem.repayment_type | Repayment }}</span>
                              </div>
                             <div class="b_rtin2">
                                 <p>债权总额</p>
                                 <span>{{debtitem.money}}元</span>
                             </div>
                             <div class="b_rtin2">
                                 <p>债权金额</p>
                                 <span>{{debtitem.transfer_price}}元</span>
                             </div>
                             <div class="b_rtin2">
                                 <p>预期收益</p>
                                 <span>{{debtitem.accounts}}元</span>
                             </div>
                         </div>
                     </div>
                     <div class="b_rtnu">
                       <img style="padding-top:30px" src="/static/img/toppage1/over.jpg" v-if="debtitem.status==='1'">
                         <a href="javascript:;" v-else @click='zz(debtitem.invest_id)'>立即购买</a>
                      </div>
                  </div>

            </div>

            </div>

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
      </div>
    </div>
    <zzmodal :getdata='getdata' v-show='zzshow'></zzmodal>
    <Footer ></Footer>
  </div>

</template>

<script>
import countdown from "../../common/time.vue"
import zzmodal from './zzmodal.vue';
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  name: 'invest',
  data () {

    return {
      msg: '这是投资首页',
      startTime:'',
      activeName: 'first',
      disabled:true,
      page:1,
      tabid:'',
      pagesize:8,
      totalCount:0,
      Returnshow:true,
      debtShow:true,//债转的显示
      nullShow:true,//没有记录的显示和隐藏
      Projects:"0",//项目状态选择结果
      TimeChouse:"0",//时间状态结果
      ReturnChouse:'0',//还款方式结果
      TargetChouse:'1',//债转目标年化利率
      AmountChouse:'1',//债转债转金额
      Types:'0',//项目类型结果
      Type:'4',//项目类型结果
      chouseList:{// 众多选项
        // 项目状态选项
        Projects:[{label:"全部",value:"0"},{label:"撮合中",value:"2"},{label:"复审中",value:"4"},{label:"还款中",value:"6"},{label:"已完成",value:"7"}],
        //时间筛选
        TimeList:[{label:"全部",value:"0"},{label:"3个月以内",value:"3"},{label:"3-6个月",value:"6"},{label:"6-12个月",value:"12"}],
        //时间筛选
        TimeList1:[{label:"全部",value:"0"},{label:"3个月",value:"3"},{label:"6个月",value:"6"}],
        ReturnList:[{label:"全部",value:"0"},{label:"先息后本",value:"4"},{label:"等额本息",value:"6"},{label:"一次性还清",value:"5"}],
        //消费场景还款方式筛选
        ReturnList1:[{label:"全部",value:"0"},{label:"先息后本",value:"4"},{label:"等额本息",value:"6"}],
        //项目类型
        ProjectTypes:[{label:"全部",value:"0"},{label:"周计划",value:"11"},{label:"精英计划",value:"15"}],
        //优选项目的项目类型
        ProjectType1:[{label:"全部",value:"4"},{label:"抵押",value:"1"},{label:"质（实）押",value:"2"},{label:"担保",value:"3"}],
        //债转
        TargetRate:[{label:"不限",value:"1"},{label:"11%及以下",value:"2"},{label:"12%-13%",value:"3"},{label:"14%及以上",value:"4"}],
        //债转金额
        AmountList:[{label:"不限",value:"1"},{label:"1000-5000",value:"2"},{label:"5000-10000",value:"3"},{label:"10000-50000",value:"4"},{label:'50000及以上',value:'5'}],
      },
      getData:{},//筛选条件那个对象
      getdebtData:{},//债转筛选条件那个对象

      items:[],
      debtitems:[],
      borrowType:0,
      getdata:{}

    }

  },
  components: {
      countdown,
      zzmodal,
      Header,
      Footer
  },
  computed: {
    zzshow(){
      return this.$store.state.zzModal
    }
    },
  mounted:function(){
      //this.invest();
      this.borrowType=this.$route.query.borrow_type;
       this.borrowtype();
  },
  methods: {
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
    //债转筛选封装
    debtChouse(data){

      this.get('/V1/Investinfo/transfer',data)
        .then(res => {
          if(res.data.status==1){
             this.debtitems=res.data.list.data;
            this.totalCount=res.data.list.count;
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
      chouseProjecttype1(val){
        this.Type=val;
        this.getData['borrow_type'] = this.Type;//将来优化可以用this.getData['borrow_duration']来完全代替this.TimeChouse
        this.page=1;
        this.clickChouse(this.getData)
      },
      //债转里的目标年化利率
      chouseTarget(val){
        this.TargetChouse=val;
        this.getdebtData['type']=this.TargetChouse;
        this.getdebtData['p']=1;
        this.page=1;
        this.debtChouse(this.getdebtData);
      },
     //债转里的债转金额
      chouseAmount(val){
           this.AmountChouse=val;
        this.getdebtData['type2']=this.AmountChouse;
        this.getdebtData['p']=1;
        this.page=1;
        this.debtChouse(this.getdebtData);
      },
      borrowtype(){
       if(this.borrowType==9){
         this.debtShow=false;
        this.debtChouse(this.getdebtData)
      }else if(this.borrowType==undefined){
        this.borrowType=0;
        this.debtShow=true;
        this.getData['borrow_type']=0;
        this.getData['p']=1;
        this.page=1;

          this.clickChouse(this.getData)
      }else{
         this.debtShow=true;
        this.getData['borrow_type']=this.borrowType;
        this.getData['p']=1;
        this.page=1;
          this.clickChouse(this.getData)
      }

      },

     handleCurrentChange(val){
        if(!this.debtShow){
          document.documentElement.scrollTop = 0;
          this.getdebtData['p']=val;

              this.get('/V1/Investinfo/transfer',this.getdebtData)
        .then(res => {
          if(res.data.status==1){
             this.debtitems=res.data.list.data;
            this.nullShow=true
          }else{
            this.nullShow=false
          }
          })
        }else{
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
        }


     },
     zz(val){
      var params={
       'invest_id':val
      };
      this.post('/V1/Transfer/buydebt',params)
      .then(res=>{
        if(res.data.status==0){
          this.$router.push('/login');
        }else{
          this.getdata=res.data;
        console.log(res.data);
        }
        })
        this.$store.commit('zzModalshow', true)
     },
     //进入详情页
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
          //alert(val)
          this.$router.push({
          path: '/invest/info',
          query: {
            id: id,
            type:type
          }
        })
      }
       //this.$router.push('?id=id')
     },
     handleSizeChange(val){

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.fl {
    float: left;
}
.clearfix {
    clear: both;
    display: block;
    content: "";
}
#wdzh {
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding-bottom: 80px;
    background: #f8f8f8;
}
#wdzh .wdzh_right {
    width: 100%;
    height: auto;
}
.h2 {
    width: 100%;
    /* background: #fff; */
}
.h2_title {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ededed;
    height: 65px;
    padding-top: 17px;
}
#wdzh .wdzh_right h2 {
    width: 1200px;
    margin: 0 auto;
    font-weight: normal;
    position: relative;
    height: 48px;
    left: 50%;
    margin: 0 0 0 -600px;
}

#wdzh .wdzh_right h2  .active {
    margin-top: 0px;
    height: 46px;
    border-bottom: 2px solid #ff6769;
    color: #ff6769;
}
#wdzh .wdzh_right h2 a {
    display: block;
    padding: 0 40px;
    height: 46px;
    line-height: 48px;
    float: left;
    border: none;
    font-size: 20px;
    color: #999999;
    /* margin-right: 40px; */
}
.el-pagination.is-background .el-pager li.active {
    background-color: #ff6769;
    color: #fff;
}
.l_title {
    width: 1200px;
    margin: 0 auto;
}
.ul {
    width: 1100px;
    padding: 20px;
    padding-left: 0;
}
.l_list {
    width: 100%;
    font-size: 14px;
    margin: 5px 0;
    color: #666;
}
.l_tit, .l_span {
    padding: 5px 30px 5px 0;
    font-size: 14px;
}
.l_span {
    cursor: pointer;
}
.l_span.choused{
    color:red;
  }
  .investcontent{
         width: 100%;
         margin: 0 auto;
         padding-top: 35px;
         background-color: #fff;
         padding-bottom: 25px;
    }
       .JanuaryOne{
      margin: 0 auto;
      height: 110px;
    background-color: #fff;
    padding-left: 20px;
    width: 1180px;

    /* display: none; */
    position: relative;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    }
    .donghua li {
      width: 100px;
    float: left;
    margin-right: 55px;
}
   .donghua  .JanuaryLiOne {
    width: 200px;
    padding-left: 0;
    margin-right: 40px;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
}

.donghua .JanuaryPOne {
    line-height: 85px;
    height: 70px;
    font-family: "Microsoft YaHei", Arial, '\5b8b\4f53', sans-serif;
    font-size: 16px;
    color: #5d5d5d;
}

   li .number {
    line-height: 84px;
    font-family: Arial, "Microsoft YaHei", '\5b8b\4f53', sans-serif;
    font-size: 30px;
    color: #ff6769;
    text-align: center;
}
.two {
    display: block;
    line-height: 0;
    font-family: "Microsoft YaHei", Arial, '\5b8b\4f53', sans-serif;
    font-size: 14px;
    color: #b5b3b3;
}
 .JanuaryLiFive {
    margin-right: 97px;
}


.progress{
  width: 184px;
  margin-top: 50px;
  height: 3px;
  background: #dddddd;
  position: relative;
}
 .progress i{
  position: absolute;
    left: 0;
    top: 0;
    height: 3px;
    background-color: #ff6769;
}
.progress span{
    font-size: 16px;
    position: absolute;
    left: 193px;
    bottom: -9px;
}
.JanuaryPOne {
    line-height: 75px;
    font-family: "Microsoft YaHei", Arial, '\5b8b\4f53', sans-serif;
    font-size: 16px;
    color: #5d5d5d;
}
.JanuaryPOne .a_hover{
   color: #555;
}
.rush a {
    font-family: "Microsoft YaHei", Arial, '\5b8b\4f53', sans-serif;
    color: #ff6769;
    font-size: 14px;
    display: inline-block;
    border: 1px solid #ff6769;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    margin-top: 34px;
    line-height: 40px;
    text-align: center;
}
.rush .button_a {
    font-family: "Microsoft YaHei", Arial, '\5b8b\4f53', sans-serif;
    color: #ff6769;
    font-size: 14px;
    display: inline-block;
    border: 1px solid #ff6769;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    margin-top: 34px;
    line-height: 40px;
    text-align: center;
    background: #fff;
}
.rush .hovera:hover{
  background: #ff6769;
  color: #fff;
}
.page{
      width: 500px;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 30px;
}
.li_current{
   border-color: #ff6769;
   box-shadow: 5px 5px 5px #eee;
}
.li_current .a_hover{
  color: #ff6769;
}
.select{
  width: 100%;
  height: 130px;
  padding-top: 25px;
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.select_content{
  width: 1200px;
  margin:0 auto;
  height: 100%;


}
.select_content p{
  text-align: left;
  margin-bottom: 20px;
  color: #666666;
}
.select_content span{
  font-family: '微软雅黑';
  margin-left: 25px;
  font-size: 14px;
  color: #666666;
}
.select_content .text_current{
  color: #ff6769;
}
.p_cursor span{
  cursor: pointer;
}
.JanuaryOne .li_icon{
  width: 63px;
  height: 64px;
  position: absolute;
  top: -5px;
  left: -4px;
}
.JanuaryOne .span_icon{
  position: absolute;
  width: 46px;
  height: 26px;
  top: 17px;
  left: 83px;
  background: url(/static/img/toppage1/bj.png) no-repeat top center;
  color: #fff;
  line-height: 20px;
  text-align: center;
}
.page {
    width: 500px;
    height: 30px;
    margin: 20px auto;
}

#wdzh .el-tabs .el-tabs__header{
     border-bottom: none;

}
#wdzh .el-tabs__nav-scroll{
  border-bottom: none;
}
#wdzh #tab-first,#tab-second,#tab-third{
  outline: none;

}
#wdzh .el-tabs--card>.el-tabs__header .el-tabs__nav {
     border: none;
    border-bottom: none;
}
.no_list {
    width: 1195px;
    margin: 0 auto;
    height: 423px;
    border: 1px solid #ddd;
    background: #fff;
    margin-top: 195px;
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
/*债转*/
.wytz_biao {
    width: 1200px;
    background: #fff;
    margin: 0 auto;
    padding-bottom: 30px;
}
.b_wytz {
    border-top: 1px solid #eee;
    width: 1100px;
    margin: 0 auto;
}
.biao_in {
    border: 1px solid #eee;
    width: 1100px;
    margin: 0 auto;
    height: 180px;
    border-top: none;
}
.b_xmqx {
    width: 700px;
    float: left;
}
.b_rtsr {
    width: 85%;
    margin: 0 auto;
    border-bottom: 1px solid #ececec;
    text-align: left;
    height: 50px;
    padding-top: 20px;
}
.inx_ol {
    width: 85%;
    margin: 0 auto;
    margin-top: 15px;
    text-align: left;
}
.b_rtin2 {
    float: left;
    width: 140px;
}
.b_rtin2 p {
    width: 145px;
    color: #999;
    line-height: 30px;
    float: left;
    font-size: 14px;
}
.b_rtin2 span {
    width: 145px;
    color: #333;
    line-height: 30px;
    font-size: 18px;
    float: left;
}
.b_rtnu {
    width: 200px;
    float: right;
    height: 100%;
    border-left: 1px solid #ececec;
    text-align: center;
}
.b_rtnu a {
    width: 150px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #ff6769;
    color: #fff;
    display: block;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 70px;
    font-size: 18px;
}
</style>
