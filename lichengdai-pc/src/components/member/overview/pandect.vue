<template>
<article id="pandect" class="fr">
  <article class="top_person clearfix">
    <div class="top_left fl">
      <img src="/static/img/overview/person.gif" alt="" class="person">

    </div>
    <div class="top_right fl">
      <div class="right_left fl">
        <h3><em class="jyellow">{{myself.real_name}}</em>，您好</h3>
        <ul class="clearfix">
          <li class="fl">
            <a href="" class="fl">
              <img src="/static/img/personal_center/postal.png" alt="" class="fl">
            </a>
          </li>
          <li class="fl">
            <a href="" class="fl">
              <img src="/static/img/personal_center/iphone_c.png" alt="" class="fl">
            </a>
          </li>
          <li class="fl">
            <a href="" class="fl">
              <img src="/static/img/personal_center/xl_c.png" alt="" class="fl">
            </a>
          </li>
          <li class="fl">
            <a href="" class="fl">
              <img src="/static/img/personal_center/ax_o.png" alt="" class="fl">
            </a>
          </li>
        </ul>
      </div>
      <div class="right_right fl">
        <p class="recharge fl">充值</p>
        <p class="withdraw fr">提现</p>
      </div>
      <p class="fl">因您风险评估已过期，需要重新评估。<span class="cff6769"onclick="pinggu();">立即评估</span></p>
    </div> 
  </article>
  <article class="middle">
    <div class="me_zichan_h">
        <h2>我的资产</h2>
    </div>
    <div class="middle_contnet clearfix">
      <div class="middle_left fl">
        <div class="me_zichan_content fl">
          <div class="me_zichan_content_one fl">
              <h3>总资产（元）</h3>
              <p>{{account_money + back_money + money_collect + money_freeze}}</p>
          </div>
          <div class="fuhao fl">=</div>
          <div class="me_zichan_content_one fl">
              <h3>账户余额（元）</h3>
              <p class="zichantwo_img">{{account_money + money_freeze}}</p>
              <div class="zichantwo" style="display: none;">
                  <h5><p>可用余额：<em>{{account_money + back_money}}元</em></p></h5>
                  <h5><p>冻结金额：<em>{{money_freeze}}元</em></p></h5>
              </div>
          </div>
          <div class="fuhao fl">+</div>
          <div class="me_zichan_content_one fl">
              <h3>待收余额（元）</h3>
              <p class="zichanthree_img">{{money_collect}}</p>
              <div class="zichanthree" style="display:none;">
                  <h5><p>待收本金：<em>{{myself.capital}}元</em></p></h5>
                  <h5><p>待收利息：<em>{{myself.invest}}元</em></p></h5>
              </div>
          </div>
        </div>
          <div class="me_zichantongji">
          <p>预计本月利息（元）<em>{{myself.invest2}}</em>（单日约赚<span>{{myself.avg}}</span>元）</p>
          <p>预计下月利息（元）<em>{{myself.invest3}}</em>（单日约赚<span>{{myself.avg2}}</span>元）</p>
          <p>历史统计利息<em>{{myself.total}}</em>元</p>
        </div>
      </div>
      <div class="middle_right fr" >
        <p class="card_p4">银行电子交易账户采用原卡进出设置，您的资金只能提现至您充值的银行卡，只有账户余额与待收余额同时为零时，才能切换银行卡。</p>
        <p class="card_p1"> </p>
        <p class="card_p2">{{fengfu_list.cardnbra}}</p>
        <p class="card_p3">开户人：{{fengfu_list.real_namea}}</p>
      </div>
    </div>
  </article>
  <article class="bottom">
    <div class="me_zichan_h">
      <h2>我的出借记录</h2>
    </div>
    <div class="jiaoyijilu_table_title">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="出借" name="first">
            <div class="yello_h">
              <ul>
                  <li style="width: 18%;">日期</li>
                  <li style="width: 28%;">出借项目</li>
                  <li style="width: 18%;">金额（元）</li>
                  <li style="width: 18%;">目标利息（元）</li>
                  <li style="width: 18%;">预期本息（元）</li>
              </ul>
            </div>
            <div class="yello_h_list">
              <ul v-if="borrowList.length == 0 ">
                <div class="no_jillu clearfix">
                    <img class="fl mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去参与吧</a>
                    </p>
                </div>
              </ul>
              <ul v-else>
                  <li v-for="(lists,index) in borrowList" >
                    <span style="width: 18%;">{{lists.add_time}}</span>
                    <span style="width: 28%;">{{lists.borrow_name}}</span>
                    <span style="width: 18%;">{{lists.investor_capital}}</span>
                    <span style="width: 18%;">{{lists.investor_interest}}</span>
                    <span style="width: 18%;">{{lists.total}}</span>
                  </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="还款" name="second">
            <div class="yello_h clearfix">
              <ul>
                  <li style="width: 24%;">日期</li>
                  <li style="width: 28%;">回款项目</li>
                  <li style="width: 24%;">回款金额(元)</li>
                  <li style="width: 24%;">回款期数 / 总期</li>
              </ul>
            </div>
            <div class="yello_h_list" v-if="borrowInfo.length == 0 ">
              <ul >
                <div class="no_jillu clearfix" >
                    <img class="fl mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去参与吧</a>
                    </p>
                </div>
              </ul>
            </div>
            <div class="yello_h_list clearfix" v-else>
              <ul>
                <li v-for="(lists,index) in borrowInfo">
                  <span style="width: 24%;">{{lists.deadline}}</span>
                  <span style="width: 28%;">{{lists.borrow_name}}</span>
                  <span style="width: 24%;">{{lists.zong}}</span>
                  <span style="width: 24%;">{{lists.total}}</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="充值" name="third">
            <div class="yello_h clearfix">
              <ul>
                  <li style="width: 25%;">日期</li>
                  <li style="width: 25%;">金额（元）</li>
                  <li style="width: 25%;">充值方式</li>
                  <li style="width: 25%;">状态</li>
              </ul>
            </div>
            <div class="yello_h_list" v-if="chargelist.length == 0 ">
              <ul>
                <div class="no_jillu clearfix" >
                    <img class="fl mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去参与吧</a>
                    </p>
                </div>
              </ul>
            </div>
            <div class="yello_h_list clearfix" v-else>
              <ul>
                <li v-for="(lists,index) in chargelist">
                  <span style="width: 25%;">{{lists.add_time}}</span>
                  <span style="width: 25%;">{{lists.money}}</span>
                  <span style="width: 25%;">{{lists.RechargeType}}</span>
                  <span style="width: 25%;">{{lists.status}}</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="提现" name="fourth">
            <div class="yello_h clearfix" >
              <ul>
                  <li style="width: 25%;">日期</li>
                  <li style="width: 25%;">提现金额(元)</li>
                  <li style="width: 25%;">手续费(元)</li>
                  <li style="width: 25%;">状态</li>
              </ul>
            </div>
            <div class="yello_h_list" v-if="withdrawlist.length == 0 ">
              <ul>
                <div class="no_jillu clearfix">
                    <img class="fl mt5" src="/static/img/personal_center/tanhao.png">
                    <p>没有搜索到记录，<a href="/home/investinfo" style="color: #1e6ff6;" target="_blank">赶快去参与吧</a>
                    </p>
                </div>
              </ul>
            </div>
            <div class="yello_h_list clearfix" v-else>
              <ul>
                <li v-for="(lists,index) in withdrawlist">
                  <span style="width: 25%;">{{lists.add_time}}</span>
                  <span style="width: 25%;">{{lists.withdraw_money}}</span>
                  <span style="width: 25%;">{{lists.withdraw_fee}}</span>
                  <span style="width: 25%;">{{lists.status}}</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</article>
<h4 class="login_time">{{myself.lastTime}}</h4>
</article>
</template>
<script>
import Pandect from '../overview/pandect.vue'
import {delCookie,getCookie} from '@/util/util'
export default {
  name: 'pandect',
  data () {
    return {
      chose:false,
      myself:[],
      account_money:0,
      back_money:0,
      money_collect:0,
      money_freeze:0,
      fengfu_list:[],
      activeName: 'first',
      borrowList:[],
      borrowInfo:[],
      chargelist:[],
      withdrawlist:[],
    }
  },
  mounted:function(){
    this.token=localStorage.getItem('token');
    this.uid=localStorage.getItem('uid');
    this.getData();
  },
  methods:{
  	tab:function(){
  		alert(1)
  		this.chose = !this.chose;
  	},
    getData(){

      this.get('/V1/members/show')
      .then(res =>{

        if(res.data.status == 302 || res.data.status == 500 ){
          
          this.$router.push('/login');
        }else{
         
          this.myself = res.data;
          this.back_money = Number(res.data.minfo.back_money);
          this.account_money = Number(res.data.minfo.account_money);
          this.money_collect = Number(res.data.minfo.money_collect);
          this.money_freeze = Number(res.data.minfo.money_freeze);
          this.fengfu_list = res.data.fengfu_list;//用户相关信息
          this.borrowList = res.data.borrowList;//出借
          this.borrowInfo = res.data.borrowInfo;//还款
          this.chargelist = res.data.chargelist;//充值
          this.withdrawlist = res.data.withdrawlist;//提现
          // console.log(this.borrowInfo)
        }


      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
   computed : {

        // all_money : function(){

        //     return this.back_money + this.account_money;

        // }
  },
  components:{
    Pandect
  }
}
</script>
<style>
  .el-tabs__item{
    padding: 0 30px;
    font-size: 16px;
  }
  .el-tabs__active-bar{
    background: #ff7800;
  }
  .el-tabs__item.is-active{
    outline: 0;
    color: #ff7800;
  }
.el-tabs__item:hover{
  color: #ff7800;
}
.is-focus{
  box-shadow: none !important ;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #ff6769;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover{
  color: #ff6769;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
span,p{
  color: #666;
}
.cff6769{
  color: #ff6769;
}
#pandect{
  width: 1040px;
  border:1px solid #ededed;
  border-top: 2px solid #ff7800;
  padding: 30px 10px 35px 10px;
  position: relative;
  margin: 0 0 20px 0;
  .top_person{
    padding-bottom: 40px;
    .top_left{
      width: 160px;
      height: 100%;
      text-align: center;
      .person{
        vertical-align: middle;
        width: 100px;
        height: 100px;
      }
    }
    .top_right{
      width: 80%;
      .right_left{
        width: 60%;
        height: 80px;
        h3{
          line-height: 24px;
        }
        ul{
          li{
            margin-right: 10px;
          }
        }
      }
      h3{
        .jyellow{
          color:#ff6769
        }
      }
      .right_right{
        width: 40%;
        height: 80px;
        padding-top: 35px;
        .recharge,
        .withdraw{
          width: 123px;
          height: 38px;
          background-color: #ff7800;
          text-align: center;
          line-height: 38px;
          color: #FFF;
          font-size: 18px;
          border-radius: 5px;
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .middle{
    border: 1px solid #ededed;
    padding: 30px 15px 30px 15px;
    .me_zichan_h {
        height: 25px;
        border-left: 3px solid #ff7800;
        overflow: hidden;
        h2{
          font-size: 16px;
          line-height: 25px;
          font-weight: normal;
          padding-left: 20px;
          color: #424242;
        }
    }
    .middle_contnet{
      .middle_left{
        width: 480px;
        .me_zichan_content{
          padding-top: 25px;
        }
        .me_zichan_content_one {
            width: 136px;
            height: 100px;
            overflow: hidden;
            border: 1px solid #f3bc8c;
            color: #424242;
            h3 {
                font-weight: normal;
                /* height: 30px; */
                line-height: 55px;
                text-align: center;
            }
            p {
                font-size: 20px;
                text-align: center;
            }
        }
        .fuhao{
          padding: 0 5px 0 5px;
          height: 130px;
          line-height: 100px;
          float: left;
          font-size: 30px;
          color: #2a2a2a;
        }
        .me_zichantongji {
            width: 472px;
            border: 1px solid #DDD;
            /* float: right; */
            padding: 15px;
            overflow: hidden;
            p{
              font-size: 14px;
              color: #2a2a2a;
              line-height: 32px;
              color: #9f9f9f;
              em {
                  color: #ff6769;
                  font-size: 18px;
              }
              span{
                  color: #ff6769;
                  font-size: 18px;
              }
            }
        }
      }
      .middle_right{
        width:420px;
        height:245px;
        background:url(/static/img/personal_center/card.png) no-repeat;
        margin-top:20px;
        position: relative;
        .card_p4{
            color: rgb(153, 153, 153); 
            font-size: 12px; 
            line-height: 25px;
            color: #ffffec;
            font-size: 16px;
            padding-left: 10px;
            position: absolute;
            background: #f9ecb4;
            right: 0;
            top: -25px; 
            border-radius: 3px;
            display: none;
          }
          .card_p1 {
              color: #ffebb6;
              font-size: 16px;
              line-height: 40px;
              padding-top: 20px;
              cursor: pointer;
              width: 140px;
              padding-left: 30px;
              height: 60px;
          }
          .card_p2 {
              color: #ff3f00;
              font-size: 26px;
              width: 100%;
              text-align: center;
              line-height: 40px;
              padding-top: 25px;
          }
          .card_p3 {
              color: #ffffec;
              font-size: 16px;
              line-height: 40px;
              padding-left: 35px;
              padding-top: 40px;
          }
      }
      
    }
  }
  .bottom{
    overflow: hidden;
    padding: 20px;
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
    .jiaoyijilu_table_title {
      padding-top: 26px;
        h2 {
            border-bottom: 1px solid #DDD;
            height: 45px;
            width: 980px;
            position: relative;
            font-weight: normal;
          a {
              font-size: 16px;
              width: 108px;
              height: 44px;
              line-height: 45px;
              text-align: center;
              border-top: 1px solid #DDD;
              border-left: 1px solid #DDD;
              border-right: 1px solid #DDD;
              display: block;
              float: left;
              position: absolute;
              color: #424242;
          }
          .ml0 {
              margin-left: 0;
          }
          .ml125 {
              margin-left: 125px;
          }
          .ml245 {
              margin-left: 245px;
          }
          .ml365 {
              margin-left: 365px;
          }
          a.current {
              width: 110px;
              height: 46px;
              background: url(/static/img/personal_center/current.jpg) no-repeat;
              border-bottom: 0;
              line-height: 47px;
              border-top: 0;
              border-left: 0;
              border-right: 0;
              z-index: 5;
              color: #ff7800;
          }
          .ckgd {
              background: url(/static/img/personal_center/ckgd.jpg) no-repeat;
              float: right;
              display: block;
              right: 0;
              border: 0;
              margin-top: 15px;
              height: 17px;
          }
        }
        .yello_h {
            height: 55px;
            background-color: #fdead3;
            line-height: 55px;
            li {
                float: left;
                text-align: center;
            }
        }
        .yello_h_list ul li span {
            float: left;
            text-align: center;
            height: 50px;
            line-height: 50px;
            position: relative;
        }
        .no_jillu {
            margin-top: 80px;
            margin-left: 60px;
            .ml5{
              margin-left: 5px;
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
    }
  }
  .login_time{
      font-size: 12px;
      color: #999;
      line-height: 28px;
      padding-right: 5px;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 11;
      font-weight: normal;
  }
}
</style>
