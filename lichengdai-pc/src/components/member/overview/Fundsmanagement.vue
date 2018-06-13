<template>
<article id="Fundsmanagement" class="fr">
<div class="wdzh_right fr">
  <div class="wdzh_cz">
    <div class="jiaoyijilu">
      <div class="me_zichan_h" style="margin-left: 10px;"><h2>资金管理</h2></div>
      <div class="zjgl_title">
        <div class="zjgl_title_in">
          <div class="zjgl_title_right">
            <p class="zjgl_title_right_shang">您的账户余额<span>{{vo.keyong}}</span></p>
            <div v-if="vo.cardnbr!='' && vo.bank_num!=''">
            <div class="zjgl_title_right_xia clearfix" v-if="vo.set_pass=='Y'">
              <a class="fl zjgl_title_right01" href="/overview/Account" target="_blank">充 值</a>
              <a class="zjgl_title_right02 fl" href="/overview/Tixian" target="_blank">提 现</a>
            </div>
            <div class="zjgl_title_right_xia clearfix" v-else-if="vo.cardnbr!='' && vo.bank==''">
              <a class="fl zjgl_title_right01" href="javascript:;" >充 值</a>
              <a class="zjgl_title_right02 fl" href="javascript:;" >提 现</a>
            </div>
            <div class="zjgl_title_right_xia clearfix" v-else-if="vo.cardnbr==''">
              <a class="fl zjgl_title_right01" href="javascript:;" >充 值</a>
              <a class="zjgl_title_right02 fl" href="javascript:;" >提 现</a>
            </div>
            <div class="zjgl_title_right_xia clearfix" v-else>
              <a class="fl zjgl_title_right01" href="javascript:;" >充 值</a>
              <a class="zjgl_title_right02 fl" href="javascript:;" >提 现</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zjgl_time">
        <h2>资金历史记录了您各种交易产生的支出和收入的明细，请选择查询类型和时间，然后点击查询按钮进行查询。</h2>
        <h3 class="wdzh_cz_title">
          <span>查询类型：</span>
          <select id="type" v-model="type">
             <option value="">--请选择--</option>
             <option value="3">充值</option>
              <option value="6">出借冻结</option>
              <option value="7">管理员操作</option>
              <option value="9">回款</option>
              <option value="11">还款</option>
              <option value="12">提现失败</option>
              <option value="15">出借解冻</option>
              <option value="17">放款</option>
              <option value="18">借款管理费</option>
              <option value="20">投标奖励</option>
              <option value="28">出借成功</option>
              <option value="29">提现成功</option>
              <option value="30">逾期补偿</option>
              <option value="46">购买债权</option>
              <option value="47">转让债权</option>
              <option value="48">转让债权手续费</option>
              <option value="65">管理员转账撤消</option>
          </select>
          <span class="inline" id="demo">
            时间从
             <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
          </span>
          <a class="colink" href="javascript:;" @click='chakan()'>查询</a>
          <a href="/Member/fundmanagement/export?" class="download">下载</a>
        </h3>
      </div>
      <div class="invest_ul">
        <div class="invest_content">
          <table cellpadding="0" cellspacing="0">
            <tbody id="data_info">
              <tr>
                <th>发生日期</th>
                <th>类型</th>
                <th>影响金额</th>
                <th>可用余额</th>
                <th>冻结金额</th>
                <th>待收金额</th>
                <th class="br">说明</th>
              </tr>
              <tr v-for="(item,index) in items" :key='index' >
              <td>{{item.add_time | timestampToTime}}</td>
              <td>{{item.type}}</td>
              <td>{{item.affect_money}}</td>
              <td>{{item.account_money}}</td>
              <td>{{item.freeze_money}}</td>
              <td>{{item.collect_money}}</td>
              <td>{{item.info}}</td>
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
      </div>
    </div>
  </div>
</div>
</article>
</template>
<script>
import Fundsmanagement from '../overview/Fundsmanagement.vue'
export default {
  name: 'Fundsmanagement',
  data () {
    return {
      chose:false,
      items:[],
      vo:{},
      value6:'',
      count:0,
      params:{},
      type:''
    }
  },
  mounted:function(){
    this.getData();
    this.show()
  },
  methods:{
  	tab:function(){
  		alert(1)
  		this.chose = !this.chose;
  	},
    show(){
     this.get('/V1/Membersmoney/show')
     .then(res=>{
      this.vo=res.data.vo;
     })
    },
    getData(data){
      this.get('/V1/Membersmoney/ajax_data',data)
      .then(res=>{
        if(res.data.status==1){
         this.items=res.data.moneylog_list;
         this.count=res.data.moneylog_count
        }
      })

    },
    //时间转换
    GMTToStr(time){
    let date = new Date(time)
    let Str=date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate()
    return Str
    },
    chakan(){
      this.params['type']=this.type;
      if(this.value6!=''){
         this.params['start']=this.GMTToStr(this.value6[0]);
      this.params['end']=this.GMTToStr(this.value6[1]);
      }

      this.getData(this.params)
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.params['nowpage']=val;
        document.documentElement.scrollTop = 0;
        this.get('/V1/Membersmoney/ajax_data',this.params)
        .then(res => {
            this.items=res.data.moneylog_list;;
          })
    },
  },
  components:{
    Fundsmanagement
  },
  filters:{
     timestampToTime:function (timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() ;
        return Y+M+D;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-pagination{
  text-align: center;
}
.wdzh_cz {
    width: 1040px;
    overflow: hidden;
    border-top: 2px solid #ff7800;
    float: right;
    height: auto;
    min-height: 600px;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    margin-bottom: 20px;
    .me_zichan_h {

        height: 25px;
        border-left: 3px solid #ff7800;
        overflow: hidden;
        margin: 20px 0;
        h2 {
            font-size: 16px;
            line-height: 25px;
            font-weight: normal;
            padding-left: 20px;
            color: #424242;
        }
    }
    .zjgl_title {
        height: 250px;
        padding-top: 30px;
        padding-left: 30px;
        border-bottom: 1px solid #DDD;
        position: relative;
        .zjgl_title_in {
            height: 204px;
            .zjgl_title_right {
                width: 390px;
                margin-left: 22px;
                float: left;
                .zjgl_title_right_shang {
                    line-height: 80px;
                    font-size: 18px;
                    color: #000;
                    position: relative;
                    span {
                        font-size: 30px;
                        padding-left: 10px;
                    }
                }
                .zjgl_title_right_xia {
                    width: 640px;
                    a {
                        width: 177px;
                        height: 48px;
                        overflow: hidden;
                        cursor: pointer;
                        display: block;
                        color: #fff;
                        text-align: center;
                        line-height: 48px;
                        font-size: 18px;
                        border-radius: 5px;
                        background: #ff7800;
                    }
                    .zjgl_title_right01 {
                        width: 177px;
                        height: 48px;
                        overflow: hidden;
                        cursor: pointer;
                        display: block;
                        color: #fff;
                        text-align: center;
                        line-height: 48px;
                        font-size: 18px;
                        border-radius: 5px;
                        background: #ff7800;
                    }
                    .zjgl_title_right02{
                        margin-left: 52px;
                    }
                }
            }
        }

    }
    .zjgl_time {
        height: 140px;
        padding-left: 30px;
        h2 {
            padding-top: 50px;
            color: #424242;
        }
        .wdzh_cz_title {
            margin-top: 35px;
            #type {
                margin-right: 10px;
            }
            #demo {
                width: 320px;
                /* margin: 0 auto; */
                position: relative;
                .laydate-icon {
                    height: 44px;
                    line-height: 44px;
                    margin-right: 5px;
                    margin-left: 5px;
                    padding-left: 5px;
                }
            }
            .colink {
                width: 60px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                display: inline-block;
                color: #fff;
                border-radius: 5px;
                background-color: #ff7800;
            }
            .download {
                margin-left: 20px;
            }
        }

    }
    .invest_ul {
        margin-top: 40px;
        .invest_content {
            width: 100%;
            overflow: hidden;
            height: auto;
            border-top: 2px solid #ff7800;
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
                  td {
                      border-bottom: 1px solid #ededed;
                      text-align: center;
                      vertical-align: middle;
                  }
                }
            }
        }
    }
    .pagination{
      text-align: center;
      margin: 20px 0;
    }
}
</style>

