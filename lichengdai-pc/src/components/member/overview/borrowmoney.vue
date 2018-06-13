<template>
<article id="Borrowmoney" class="fr">
<div class="wdzh_right clearfix">
  <el-tabs type="border-card">
    <el-tab-pane label="发标中借款">
      <ul class="clearfix">
          <!--发标中借款-->
          <li class="current">
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                  <tr>
                    <th>借款标号 </th>
                    <th>还款方式</th>
                    <th>借款金额</th>
                    <th>借款进度</th>
                    <th>借款时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="this.status == 0">
                    <td colspan="6">你还没有记录。</td>
                  </tr>
                  <tr v-else v-for="(lists1,index) in list1">
                    <td>{{lists1.id}}</td>
                    <td>{{lists1.repayment_type}}</td>
                    <td>{{lists1.borrow_money}}</td>
                    <td>{{lists1.progress}}</td>
                    <td>{{lists1.add_time}}</td>
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
          </li>
      </ul>
    </el-tab-pane>

    <el-tab-pane label="偿还中借款">
        <ul>
          <!--偿还中借款-->
          <li>
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                    <tr>
                      <th>借款标号</th>
                      <th>还款方式 </th>
                      <th>借款金额</th>
                      <th>已还金额</th>
                      <th>年利率</th>
                      <th>还款期限</th>
                      <th>即将还款时间</th>
                      <th class="br last">我要还款</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-if="this.status2 == 0">
                    <td colspan="6">你还没有记录。</td>
                  </tr>
                  <tr v-else v-for="(lists2,index) in list2">
                    <td>{{lists2.id}}</td>
                    <td>{{lists2.repayment_type}}</td>
                    <td>{{lists2.borrow_money}}</td>
                    <td>{{lists2.repayment_money}}</td>
                    <td>{{lists2.borrow_interest_rate}}</td>
                    <td>{{lists2.borrow_duration}}</td>
                    <td>{{lists2.repayment_time}}</td>
                    <td>
                      <a href="" class="">马上还款</a>
                    </td>
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
            <div id="page-wrap">
              <div id="demo-wrap">
                <div id="demo-left" class="demo">
                  <p></p>
                  <div id="bg"></div>
                  <div class="box" style="display:none">
                    <p>
                      <a href="#" class="close">
                        <img src="/style/images/Public/cha.png">
                      </a>
                    </p>
                    <div class="list">
                      <!--<h2>确认删除此条消息吗</h2>-->
                      <h3>你确定撤销债权转让吗?

                      </h3>
                      <div class="btn">
                        <a class="color_false">否</a>
                        <a class="color_true">是</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </el-tab-pane>

    <el-tab-pane label="逾期借款">
        <ul>
          <!--逾期借款-->
          <li>
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                  <tr>
                    <th>借款标号 </th>
                    <th>待还本金</th>
                    <th>待还利息</th>
                    <th>逾期罚息+违约金</th>
                    <th>催收费</th>
                    <th>待付总金额</th>
                    <th>应还款日期</th>
                    <th>当前/总(期) </th>
                    <th>逾期天数</th>
                    <th class="br last">还款</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="this.status3 == 0">
                    <td colspan="6">你还没有记录。</td>
                  </tr>
                  <tr v-else v-for = "(lists3,index) in list3">
                    <td>{{lists3.borrow_id}}</td>
                    <td>{{lists3.capital}}</td>
                    <td>{{lists3.interest}}</td>
                    <td>{{lists3.expired_money}}</td>
                    <td>{{lists3.call_fee}}</td>
                    <td>{{lists3.allneed}}</td>
                    <td>{{lists3.deadline}}</td>
                    <td>{{lists3.sort_order}}</td>
                    <td>{{lists3.breakday}}</td>
                    <td></td>
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
          </li>
        </ul>
    </el-tab-pane>

    <el-tab-pane label="失败的借款">
        <ul>
          <!--失败的借款-->
          <li>
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                  <tr>
                      <th>借款标号 </th>
                      <th>还款方式</th>
                      <th>借款金额</th>
                      <th>借款时间</th>
                      <th>标的状态</th>
                      <th class="br last">备注</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="this.status4 == 0">
                    <td colspan="6">你还没有记录。</td>
                  </tr>
                  <tr v-else v-for="(lists4,index) in list4">
                    <td>{{lists4.id}}</td>
                    <td>{{lists4.repayment_type}}</td>
                    <td>{{lists4.borrow_money}}</td>
                    <td>{{lists4.add_time}}</td>
                    <td>{{lists4.status}}</td>
                    <td>{{lists4.dealinfo}}</td>
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
            </div>
          </li>
        </ul>
    </el-tab-pane>

    <el-tab-pane label="已还清的借款">
        <ul>
          <!--已还清的借款-->
          <li>
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                  <tr>
                      <th>借款标号 </th>
                      <th>还款方式</th>
                      <th>借款金额 </th>
                      <th>借款期限</th>
                      <th>借款时间</th>
                      <th>已还本息</th>
                      <!-- <th class="br last">还款明细</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="this.status5 == 0">
                    <td colspan="6">你还没有记录。</td>
                  </tr>
                  <tr v-else v-for="(lists5,index) in list5" >
                    <td>{{lists5.id}}</td>
                    <td>{{lists5.repayment_type}}</td>
                    <td>{{lists5.borrow_money}}</td>
                    <td>{{lists5.borrow_duration}}</td>
                    <td>{{lists5.add_time}}</td>

                    <td>{{lists5.borrow_money + lists5.borrow_interest}}</td>
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
            </div>
          </li>
        </ul>
    </el-tab-pane>

    <el-tab-pane label="提前还款">
        <ul>
          <!--已撤销债权-->
          <li>
            <div class="wdzh_right_btm">
              <table cellpadding="0" cellspacing="0" class="chongzhi_table">
                <thead>
                  <tr>
                      <th>借款标号</th>
                      <th>还款方式</th>
                      <th>借款金额</th>
                      <th>借款期限</th>
                      <th>借款时间</th>
                      <th>查看</th>
                      <th class="br last">我要还款</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(lists6,index) in list6">
                    <td>{{lists6.id}}</td>
                    <td>{{lists6.repayment_type}}</td>
                    <td>{{lists6.borrow_money}}</td>
                    <td>{{lists6.borrow_duration}}</td>
                    <td>{{lists6.add_time}}</td>
                    <td>
                      <a href="">还款明细</a>
                    </td>
                    <td>
                      <a href="" class="">查看还款</a>
                    </td>
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
          </li>
        </ul>
    </el-tab-pane>
  </el-tabs>
</div>
</article>
</template>
<script>
import Borrowmoney from '../overview/Borrowmoney.vue'
import {delCookie,getCookie} from '@/util/util'
export default {
  name: 'Borrowmoney',
  data () {
    return {
      chose:false,
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[],
      list6:[],
      count:0,
      count1:0,
      count2:0,
      count3:0,
      count4:0,
      count5:0,
      status:'',
      status2:'',
      status3:'',
      status4:'',
      status5:'',
    }
  },
  mounted:function(){
    this.token=localStorage.getItem('token');
    this.uid=localStorage.getItem('uid');
    this.getData();
  },
  methods:{
  	getData(){
      this.post('/V1/Membersborrow/borrowing')
      .then(res =>{
          this.list1 = res.data.list;
          this.status=res.data.status;
          this.count = res.data.count;
      });

      this.post('/V1/Membersborrow/borrowpaying').then(res => {
        this.list2 = res.data.list;
        this.status2=res.data.status;
        this.count1 = res.data.count;


      });

      this.post('/V1/Membersborrow/borrowbreak').then(res => {
        this.list3 = res.data.list;
        this.count2 = res.data.count;
        this.status3=res.data.status;

      });

      this.post('/V1/Membersborrow/borrowfail').then(res=> {
        this.list4 = res.data.list;
        this.count3 = res.data.count;
        this.status4=res.data.status;


      });

      this.get('/V1/Membersborrow/borrowdone').then(res => {
        this.list5 = res.data.list;
        this.count4 = res.data.count;
        this.status5=res.data.status;
      });

      this.post('/V1/Membersborrow/advancerepayment').then( res => {
        this.list6 = res.data.list;
        this.count5 = res.data.count;

      })
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/borrowing',params)
        .then(res => {
            this.list1 = res.data.list.data;
          })
        console.log(`当前页: ${val}`);
    },
    handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange1(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/borrowpaying',params)
        .then(res => {
            this.list2 = res.data.list;
          })
        console.log(`当前页: ${val}`);
    },
    handleSizeChange2(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange2(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/borrowbreak',params)
        .then(res => {
            this.list3 = res.data.list;
          })
        console.log(`当前页: ${val}`);
    },
    handleSizeChange3(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange3(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/borrowfail',params)
        .then(res => {
            this.list4 = res.data.list;
          })
        console.log(`当前页: ${val}`);
    },
    handleSizeChange4(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange4(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/borrowdone',params)
        .then(res => {
            this.list5 = res.data.list;
          })
        console.log(`当前页: ${val}`);
    },
    handleSizeChange5(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange5(val) {
      var params ={p:val,}
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersborrow/advancerepayment',params)
        .then(res => {
            this.list6 = res.data.list;
          })
        console.log(`当前页: ${val}`);
    }
  },
  components:{
    Borrowmoney
  }
}
</script>
<style>
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
    color: #ff6769;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
    color: #ff6769;
  }
  .el-pagination{
    text-align: center;
    margin: 20px 0;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
a{
  color: #666;
}
// .el-tabs--border-card{
//   min-height: 600px;
// }
.wdzh_right {
    width: 1040px;
    // border: 1px solid #e3e3e3;
    float: right;
    height: auto;
    min-height: 600px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    h2 {
        font-weight: normal;
        position: relative;
        height: 50px;
        /* text-align: center; */
        a {
            display: block;
            padding: 0 29px;
            height: 48px;
            line-height: 48px;
            float: left;
            border-right: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
        }
        a.current {
            margin-top: -1px;
            border-top: 2px solid #ff7800;
            border-bottom: 0;
        }
    }

    ul {
        width: 100%;
        text-align: left;
        height: auto;
        li {
            top: 0;
            left: 0;
            width: 100%;
            // display: none;
            text-align: left;
            table {
                width: 100%;
                margin: 0 auto;
                border:1px solid #ddd;
                th,td {
                    border: 1px solid #ddd;
                    border-right: 0;
                    margin-left: -1px;
                    text-align: center;
                    height: 36px;
                    line-height: 36px;
                    font-weight: normal;
                    font-size: 12px;
                    padding: 0 5px;
                }
            }
        }
    }

}
</style>
