<template>
  <div class="xsrw">
        <div class="wdzh_right">
            <div class="wdzh_cz" style="padding:0;width:1040px !important">
                <h2 class="z_h2">账户状态</h2>
                <ul class="rw_ul">
                    <li class="rw_li1">01</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">注册</p>
                        <p>说明：{{xsrwDatas.register.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.register.status==1">{{xsrwDatas.register.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.register.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">02</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">开通银行资金存管账户</p>
                        <p>说明：{{xsrwDatas.RealName.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.RealName.status==1">{{xsrwDatas.RealName.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.RealName.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">03</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">设置交易密码</p>
                        <p>说明：{{xsrwDatas.Password.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.Password.status==1">{{xsrwDatas.Password.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.Password.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">04</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">安心签</p>
                        <p>说明：{{xsrwDatas.ax.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.ax.status==1">{{xsrwDatas.ax.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.ax.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">05</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">风险承受能力评估</p>
                       <p>说明：{{xsrwDatas.fx.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                     <a style="background:#c9c9c9;" v-if="xsrwDatas.fx.status==1">{{xsrwDatas.fx.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.fx.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">06</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">充值</p>
                       <p>说明：{{xsrwDatas.Recharge.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.Recharge.status==1">{{xsrwDatas.Recharge.name}}</a>
                      <a style="background:#ff7800;" v-else>{{xsrwDatas.Recharge.name}}</a>
                    </li>
                </ul>
                <ul class="rw_ul">
                    <li class="rw_li1">07</li>
                    <li class="rw_li2">
                        <p style="color:#000; margin-top:24px;">出借</p>
                       <p>说明：{{xsrwDatas.Investment.explain}}</p>
                    </li>
                    <li class="rw_li3" style="float: right;width:158px">
                      <a style="background:#c9c9c9;" v-if="xsrwDatas.Investment.status==1">{{xsrwDatas.Investment.name}}</a>
                      <a style="background:#ff7800;" href='/invest' v-else>{{xsrwDatas.Investment.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
import {setCookie,getCookie} from '@/util/util';
 export default {

  data () {
    return {
      xsrwDatas:{},

    }


  },
  mounted:function(){

     this.getData();
  },
  methods:{
   getData(){
    this.get('/V1/members/xsrw')
    .then(res =>{
      if(res.data.status==302 || res.data.status==500 ){
        this.$router.push('/login')
      }else{
        this.xsrwDatas=res.data.data
      }


    })
   }
   }
}
</script>
<style scoped>
.wdzh_cz {
    overflow: hidden;
    border-top: 2px solid #ff7800;
    float: right;
    height: auto;
    min-height: 600px;
}
.z_h2 {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #fdead3;
    padding-left: 55px;
    font-size: 16px;
    color: #424242;
    clear: both;
}
.rw_ul {
    width: 100%;
    height: 168px;
    clear: both;
    border-bottom: 1px solid #ededed;
    overflow: hidden;
}
.rw_ul li {
    float: left;
    height: 168px;
}
.rw_ul .rw_li1 {
    width: 168px;
    color: #c9c9c9;
    font-size: 77px;
    height: 168px;
    line-height: 168px;
    text-align: center;
}
.rw_li2 {
    width: 544px;
    padding-top: 30px;
}
.rw_li2 p {
    color: #999;
    font-size: 14px;
    line-height: 30px;
}
.rw_li2 p {
    color: #999;
    font-size: 14px;
    line-height: 30px;
}
.rw_li3 a {
  cursor: pointer;
    width: 100px;
    height: 35px;
    display: block;
    text-align: center;
    line-height: 35px;
    background: #ff7800;
    color: #fff;
    border-radius: 5px;
    margin-top: 65px;
}

</style>
