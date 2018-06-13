<template>
<article id="Mydebt" class="fr">
<div class="wdzh_right clearfix">
  <div class="zaizhuan_content">
    <div class="jiaoyijilu">
      <div class="me_zichan_h" style="margin-left: 10px;">
          <h2>我的债转</h2>
      </div>
      <div class="invest_ul clearfix">
        <div class="invest_r fl mydebt_ul">
          <div class="invest_l ">状态分类：</div>
          <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="可转债权" name="first">
              <div class="current" v-if="this.status == 0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                <div class="huakai"></div>
                <table cellpadding="0" cellspacing="0">
                  <thead id="zqzzj">
                    <tr>
                        <th>出借项目</th>
                        <th>目标年化利率 </th>
                        <th>未还/总期数 </th>
                        <th>待收本金 / 待收利息(元) </th>
                        <th>出借时间 </th>
                        <th>到期时间</th>
                        <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(lists,index) in list">
                      <td><a href="javascript:;" @click='toDetail(lists.borrow_id,lists.tpl,lists.borrow_type)'>{{lists.borrow_name}}</a></td>
                      <td>{{lists.borrow_interest_rate}}%</td>
                      <td>{{lists.re_num}}期&nbsp;/&nbsp;{{lists.total}}期</td>
                      <td>￥{{lists.capital}}/￥{{lists.interest}}</td>
                      <td>{{lists.add_time}}</td>
                      <td>{{lists.deadline}}</td>
                      <td><a href="javascript:;" @click='toZz(lists.id)'>转让</a></td>
                    </tr>
                  </tbody>
                </table>
                <el-pagination
                  background
                  @current-change ="handleCurrentChange"
                  @size-change="handleSizeChange"
                  layout=" pager"
                  :total="count">
                </el-pagination>
              </div>
            </el-tab-pane>

            <el-tab-pane label="债权转让中" name="second">
              <div class="current" v-if="this.status1==0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                <div class="huakai"></div>
                <table cellpadding="0" cellspacing="0">
                  <thead id="zqzzj">
                    <tr>
                        <th>出借项目</th>
                        <th>目标年化利率 </th>
                        <th>未还/总期数 </th>
                        <th>待收本息(元)</th>
                        <th>转让价格 </th>
                        <th>转让时间</th>
                        <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(lists1,index) in list1">
                      <td>{{lists1.borrow_name}}</td>
                      <td>{{lists1.borrow_interest_rate}}</td>
                      <td>{{lists1.period}}期&nbsp;/&nbsp;{{lists1.total}}</td>
                      <td>￥{{lists1.money}}/￥{{lists1.transfer_price}}</td>
                      <td>{{lists1.add_date}}</td>
                      <td>{{lists1.add_time}}</td>
                      <td>撤销</td>
                    </tr>
                  </tbody>
                </table>
              <el-pagination
                  background
                  @current-change ="handleCurrentChange1"
                  @size-change="handleSizeChange1"
                  layout=" pager"
                  :total="count1">
                </el-pagination>
              </div>
            </el-tab-pane>

            <el-tab-pane label="成功转让债权" name="third">
              <div class="current" v-if="this.status2==0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                  <div class="huakai"></div>
                  <table cellpadding="0" cellspacing="0">
                    <thead id="successz">
                      <tr>
                          <th>出借项目</th>
                          <th>目标年化利率 </th>
                          <th>购买期数/总期数</th>
                          <th>债权总值(元)</th>
                          <th>转让价格(元)</th>
                          <th>转让时间</th>
                          <th>操作</th>
                          <th>协议书</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(lists2,index) in list2">
                        <td>{{lists2.borrow_name}}</td>
                        <td>{{lists2.borrow_interest_rate}}</td>
                        <td>{{lists2.period}}期&nbsp;/&nbsp;{{lists2.total_period}}期</td>
                        <td>￥{{lists2.money}}</td>
                        <td>￥{{lists2.transfer_price}}</td>

                        <td>{{lists2.buy_date}}</td>
                        <td>{{lists2.buy_time}}</td>
                        <td>{{lists2.user_name}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <el-pagination
                  background
                    @current-change ="handleCurrentChange2"
                    @size-change="handleSizeChange2"
                    layout=" pager"
                    :total="count2">
                  </el-pagination>
                </div>

            </el-tab-pane>

            <el-tab-pane label="已购买债权" name="fourth">
              <div class="current" v-if="this.status3== 0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                  <div class="huakai"></div>
                  <table cellpadding="0" cellspacing="0">
                    <thead id="ygmz">
                      <tr>
                          <th>出借项目</th>
                          <th>目标年化利率 </th>
                          <th>转让期数/总期数</th>
                          <th>债权总值(元)</th>
                          <th>购买价格(元)</th>
                          <th>购买时间</th>
                          <th>转让人</th>
                          <th>协议书</th>
                          <th>保全码</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(lists3,index) in list3">
                        <td>{{lists3.borrow_name}}</td>
                        <td>{{lists3.borrow_interest_rate}}%</td>
                        <td>{{lists3.period}}期&nbsp;/&nbsp;{{lists3.total_period}}期</td>
                        <td>{{lists3.money}}</td>
                        <td>￥{{lists3.transfer_price}}</td>
                        <td>{{lists3.buy_date}}</td>
                        <td>{{lists3.buy_time}}</td>
                        <td>{{lists3.user_name}}</td>
                        <td>下载</td>
                        <td>保全码</td>
                      </tr>
                    </tbody>
                  </table>
                  <el-pagination
                  background
                    @current-change ="handleCurrentChange3"
                    @size-change="handleSizeChange3"
                    layout=" pager"
                    :total="count3">
                  </el-pagination>
                  <div class="biaopage" id="goubai"></div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="回收中债权" name="fifth">
              <div class="current" v-if="this.status4== 0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                  <div class="huakai"></div>
                  <table cellpadding="0" cellspacing="0">
                    <thead id="zqhs">
                      <tr>
                          <th>出借项目</th>
                          <th>目标年化利率 </th>
                          <th>转让期数/总期数</th>
                          <th>债权总值(元)</th>
                          <th>购买价格(元)</th>
                          <th>购买时间</th>
                          <th>转让人</th>
                          <th>协议书</th>
                          <th>保全码</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(lists4,index) in list4">
                        <td>{{lists4.borrow_name}}</td>
                        <td>{{lists4.borrow_interest_rate}}%</td>
                        <td>{{lists4.period}}期&nbsp;/&nbsp;{{lists4.total_period}}期</td>
                        <td>{{lists4.money}}</td>
                        <td>￥{{lists4.transfer_price}}</td>
                        <td>{{lists4.buy_date}}</td>
                        <td>{{lists4.buy_time}}</td>
                        <td>{{lists4.user_name}}</td>
                        <td>下载</td>
                        <td>保全码</td>
                      </tr>
                    </tbody>
                  </table>
                  <el-pagination
                  background
                    @current-change ="handleCurrentChange4"
                    @size-change="handleSizeChange4"
                    layout=" pager"
                    :total="count4">
                  </el-pagination>
                  <div class="biaopage" id="huishou"></div>
                </div>
            </el-tab-pane>

            <el-tab-pane label="已撤销债权" name="sixth">
              <div class="current" v-if="this.status5== 0">
                <div class="invest_content">
                  <div class="no_jillu clearfix">
                    <img class="float_left mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去出借吧</a></p>
                  </div>
                  <div class="biaopage" id="kezhuapage"></div>
                </div>
              </div>
              <div class="invest_content" v-else>
                  <div class="huakai"></div>
                  <table cellpadding="0" cellspacing="0">
                    <thead id="cxzq">
                      <tr>
                          <th>出借项目 </th>
                          <th>目标年化利率</th>
                          <th>未还期数/总期数</th>
                          <th>待收利息(元)</th>
                          <th>撤销次数</th>
                          <th>撤销时间</th>
                          <th class="br last">备注</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(lists5,index) in list5">
                        <td>{{lists5.borrow_name}}</td>
                        <td>{{lists5.borrow_interest_rate}}</td>
                        <td>{{lists5.period}}期&nbsp;/&nbsp;{{lists5.total_period}}</td>
                        <td>{{lists5.money}}</td>
                        <td>{{lists5.cancel_times}}</td>
                        <td>{{lists5.cancel_time}}</td>
                        <td>{{lists5.remark}}</td>
                      </tr>
                    </tbody>
                  </table>
                  <el-pagination
                  background
                    @current-change ="handleCurrentChange5"
                    @size-change="handleSizeChange5"
                    layout=" pager"
                    :total="count5">
                  </el-pagination>
                </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</div>
</article>
</template>
<script>
import Mydebt from '../overview/Mydebt.vue'
export default {
  name: 'Mydebt',
  data () {
    return {
      chose:false,
      activeName:'first',
      list:[],
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[],
      status:'1',
      status1:'1',
      status2:'1',
      status3:'1',
      status4:'1',
      status5:'1',
      count:0,
      count1:0,
      count2:0,
      count3:0,
      count4:0,
      count5:0,
      count6:0,
    }
  },
  mounted:function(){
       this.getData();
  },
  methods:{
    handleClick(tab, event){
     var id=event.target.getAttribute('id')
     if(id=='tab-second'){
        this.get('/V1/Membersdebt/listonss').then(res => {
        this.list1 = res.data.data;
        this.status1=res.data.status;
        this.count1 = res.data.count;
        console.log(res.data.data)
      });
     }else if(id=='tab-third'){
        this.get('/V1/Membersdebt/listsuccess').then(res => {
        this.list2 = res.data.data;
        this.status2=res.data.status;
        this.count2 = res.data.count;
      });
     }else if(id=='tab-fourth'){
       this.get('/V1/Membersdebt/listbuy').then(res => {
        this.list3 = res.data.data;
        this.status3=res.data.status;
        this.count3 = res.data.count;
      });
     }else if(id=='tab-fifth'){
      this.get('/V1/Membersdebt/ondetb').then(res => {
        this.list4 = res.data.data;
        this.status4=res.data.status;
        this.count4 = res.data.count;
      });
    }else if(id=='tab-sixth'){
      this.get('/V1/Membersdebt/cancle').then(res => {
        this.list5 = res.data.data;
        this.status5=res.data.status;
        this.count5 = res.data.count;
        // console.log(res.data);
      });
    }else{
       this.getData()
    }
    },
    getData(){
      this.get('/V1/Membersdebt/show').then(res =>{
        this.list = res.data.data;
        this.status=res.data.status;
        this.count = res.data.count;

      });
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
     toZz(id){
          this.$router.push({
          path: '/overview/Mydebt/zhaizhuan',
          query: {
            id: id,
          }
        })
     },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/show',params)
        .then(res => {
            this.list = res.data.data;
          })
    },
    handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/listonss',params)
        .then(res => {
            this.list1 = res.data.data;
          })
    },
    handleSizeChange2(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/listsuccess',params)
        .then(res => {
            this.list2 = res.data.data;
          })
    },
    handleCurrentChange3(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/listbuy',params)
        .then(res => {
            this.list3 = res.data.data;
          })
    },
    handleCurrentChange4(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/ondetb',params)
        .then(res => {
            this.list4 = res.data.data;
          })
    },
    handleCurrentChange5(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersdebt/cancle',params)
        .then(res => {
            this.list5 = res.data.data;
          })
    },
     handleSizeChange3(val) {
        console.log(`每页 ${val} 条`);
    },
     handleSizeChange4(val) {
        console.log(`每页 ${val} 条`);
    },
     handleSizeChange5(val) {
        console.log(`每页 ${val} 条`);
    },

  },
  components:{
    Mydebt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wdzh_right {
  margin-bottom: 20px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #ff6769;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #ff6769;
}
.el-pagination{
  text-align: center;
  margin: 20px 0;
}
.is-focus{
  box-shadow: none !important ;
}
.zaizhuan_content {
    width: 1018px;
    overflow: hidden;
    borde: 1px solid #ededed;
    border-top: 2px solid #ff7800;
    padding-top: 30px;
    padding-left: 20px;
    float: right;
    height: auto;
    min-height: 600px;
    .me_zichan_h {
        height: 25px;
        border-left: 3px solid #ff7800;
        overflow: hidden;
        h2 {
            font-size: 16px;
            line-height: 25px;
            font-weight: normal;
            padding-left: 20px;
            color: #424242;
        }
    }
    .invest_ul {
        margin-top: 20px;
        .invest_r {
          width: 100%;
        }
        .invest_l {
            line-height: 32px;
            font-size: 16px;
            // font-weight: bold;
            color: #666;
        }
        li {
            height: 32px;
            margin-right: 20px;
            float: left;
            a {
                height: 32px;
                line-height: 22px;
                padding: 5px 20px 5px 20px;
                cursor: pointer;
                border-radius: 5px;
                -moz-border-radius: 5px;
                -webkit-border-radius: 5px;
                text-align: center;
                cursor: pointer;
                display: block;
            }
        }
        li.current a {
            background-color: #f89113;
            color: #FFF;
            font-weight: bold;
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            display: block;
        }
        .invest_content {
            width: 100%;
            overflow: hidden;
            height: auto;
            .no_jillu {
                margin-top: 80px;
                margin-left: 60px;
                .mt5 {
                    margin-top: 5px;float: left;

                }
                p {
                    width: 768px;
                    height: 43px;
                    line-height: 45px;
                    border: 1px solid #cccccc;
                    background-color: #f1f1f1;
                    float: left;
                    margin-left: 25px;
                    padding-left: 100px;
                    padding-left: 10px;
                }
            }
            .biaopage {
                width: 840px;
                height: 35px;
                margin: auto;
                margin-left: auto;
                margin-right: auto;
                border: 0px solid #ccc;
                margin-top: 50px;
                text-align: center;
            }
            table {
                width: 100%;
                tr {
                    height: 65px;
                    th {
                        height: 60px;
                        border-bottom: 1px solid #d9bb96;
                        margin-bottom: 20px;
                        text-align: center;
                        vertical-align: middle;
                    }
                    td{
                        border-bottom: 1px solid #ededed;
                        text-align: center;
                        vertical-align: middle;
                        a{
                         color: #00aaee
                        }
                    }
                }

          }
        }
    }
}
</style>
