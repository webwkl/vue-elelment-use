<template>
<article id="Loanmanagement" class="fr">
<div class="wdzh_right clearfix">
  <div class="wdzh_cz">
    <div class="jiaoyijilu">
      <div class="me_zichan_h" style="margin-left: 10px;">
          <h2>出借管理</h2>
      </div>
        <!---->
      <div class="invest_ul">
        <div class="invest_ul_li clearfix">
          <div class="invest_l fl">项目状态：</div>
          <div class="invest_r fl">
            <ul>
              <li>
                <a href="/member/investmentmanagement/index?type=1&amp;type2=1&amp;duration=0&amp;status=1" class="invest_ula">全部</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type=2&amp;type2=1&amp;duration=0&amp;status=2">撮合中</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type=3&amp;type2=1&amp;duration=0&amp;status=6">还款中</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type=4&amp;type2=1&amp;duration=0&amp;status=7">已完成 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="invest_ul_li clearfix">
          <div class="invest_l fl">项目期限：</div>
          <div class="invest_r fl">
            <ul>
              <li>
                <a href="/member/investmentmanagement/index?type2=1&amp;type=1&amp;duration=0&amp;status=1" class="invest_ula">全部</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=8&amp;type=1&amp;is_week=1&amp;status=1">周标</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=2&amp;type=1&amp;duration=1&amp;status=1">一月标</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=7&amp;type=1&amp;duration=2&amp;status=1">二月标</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=3&amp;type=1&amp;duration=3&amp;status=1">季度标</a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=4&amp;type=1&amp;duration=6&amp;status=1">半年标 </a>
              </li>
              <li>
                <a href="/member/investmentmanagement/index?type2=5&amp;type=1&amp;duration=12&amp;status=1">年度标 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="invest_ul_li clearfix" style="display: none;">
          <div class="invest_l fl">标号操作：</div>
          <div class="invest_r fl">
            <ul>
                <li><a class="invest_ula">展开全部标号投资</a>
                </li>
                <li><a>合并相同标号投资</a>
                </li>
            </ul>
          </div>
        </div>
        <div class="invest_content">
          <div class="huakai"></div>
          <table cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                  <th>创建时间</th>
                  <th>标号</th>
                  <th>出借金额</th>
                  <th>目标年化利率</th>
                  <th>目标利息</th>
                  <!--<th>预期本息</th>-->
                  <th>已还金额</th>
                  <th>已还 / 总期数</th>
                  <th>状态</th>
                  <th>合同</th>
                  <th>保全码</th>
              </tr>
              <tr id="noinfotip" style="" v-for='(item,index) in items'>
                  <td>{{item.add_time}}</td>
                  <td class="tdContent"><a href="javascript:;" :title="item.borrow_name" class="blue_c" @click='toDetail(item.borrow_id,item.tpl,item.borrow_type)'>{{item.borrow_id}}</a>
                  </td>
                  <td class="tdContent">{{item.investor_capital}}</td>
                  <td class="tdContent" v-if="item.bonus==0">{{item.borrow_interest_rate}}%</td>
                  <td class="tdContent" v-else>{{Number(item.borrow_interest_rate)+Number(item.bonus)}}%</td>
                  <td class="tdContent">{{item.investor_interest}}</td>
                  <!--<td class="tdContent">102.13</td>-->
                  <td class="tdContent">{{Number(item.receive_capital)+Number(item.receive_interest)}}</td>
                  <td class="tdContent" v-if="item.status!=7">0/{{item.total}}</td>
                  <td class="tdContent" v-else>{{item.total}}/{{item.total}}</td>
                  <td v-if="item.status==6">还款中</td>
                  <td v-else-if="item.status>=7">已完成</td>
                  <td v-else>撮合中</td>
                  <td>......</td>
                  <td>......</td>
              </tr>
              </tbody>
          </table>
          <el-pagination
          @current-change ="handleCurrentChange"
            class="pagination"
            layout="prev, pager, next"
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
import Loanmanagement from '../overview/Loanmanagement.vue'
export default {
  name: 'Loanmanagement',
  data () {
    return {
      chose:false,
      items:[],
      count:0,
      params:{}
    }
  },
  mounted:function(){
      this.getData()
  },
  methods:{
    getData(){
     this.get('/V1/members/loan')
     .then(res=>{
      if(res.data.status==302 || res.data.status==500){
        this.$router.push('/login')
      }else if(res.data.status==0){

      }else{
        this.items=res.data.listback;
        this.count=Number(res.data.count)
      }
     })
    },
  	tab:function(){
  		alert(1)
  		this.chose = !this.chose;
  	},
    handleCurrentChange(val) {
        this.params['p']=val;
        document.documentElement.scrollTop = 0;
        this.get('/V1/members/loan',this.params)
        .then(res => {
           this.items=res.data.listback;
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
  },
  components:{
    Loanmanagement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pagination{
  text-align: center;
  margin: 20px 0;
}
.wdzh_cz {
    overflow: hidden;
    border-top: 2px solid #ff7800;
    float: right;
    height: auto;
    min-height: 600px;
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
    .invest_ul {
        margin-top: 40px;
        .invest_ul_li {
            margin-bottom: 40px;
            height: 32px;
            overflow: hidden;
            margin-left: 10px;
            .invest_l {
                width: 95px;
                height: 32px;
                line-height: 32px;
                font-weight: bold;
            }
            .invest_r{
               ul li {
                  height: 32px;
                  margin-right: 20px;
                  float: left;
                  a {
                      height: 32px;
                      font-size: 14px;
                      color: #666;
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
                  .invest_ula {
                      background-color: #f89113;
                      color: #FFF;
                      font-weight: bold;
                  }
              }
            }
        }
    }
    .invest_content {
        width: 1020px;
        overflow: hidden;
        height: auto;
        table {
            width: 100%;
            tbody{
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
                        vertical-align: middle;
                        border-bottom: 1px solid #ededed;
                        text-align: center;
                        a{
                          cursor: pointer;
                        }
                        .blue_c {
                            color: #00aaee;
                        }
                    }
                }
            }
        }
    }
}
</style>
