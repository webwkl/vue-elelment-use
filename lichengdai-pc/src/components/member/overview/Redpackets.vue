<template>
 <div class="Redpackets">
     <div class="wdzh_cz">
     <div class="me_zichan_h"><h2>我的红包</h2></div>
        <el-tabs v-model='activeName' type="border-card" @tab-click="handleClick">
          <el-tab-pane label="未使用" name="first">
           <div class="yhq_wsy">
                <dl  class="current">
                  <dd class="hongbao_bg" v-for="(item,index) in usedlist " :key='index'>
                   <div v-if="item.type==1">
                    <div class="yhq_ysy_con">
                      <p>
                        <span>使用条件：</span>
                        <span class="zzbd">{{item.condition}}</span><br>
                      </p>
                      <p>
                        <span>使用范围：</span>
                        <span>限优选项目可用</span>
                      </p>
                      <p>
                        <span>开始时间：</span>
                        <span>{{item.start_date}}</span>
                      </p>
                      <p>
                        <span>到期时间：</span>
                        <span>{{item.end_date}}</span>
                      </p>
                    </div>
                    <div class="qianshu">
                      <span>
                        {{item.money}}元
                      </span>
                    </div>
                    <div class="hb_text"><a href="/invest">马上加入</a></div>
                  </div>
                  <div v-else-if="item.type==2 && item.money<10">
                    <div class="yhq_ysy_con">
                      <p>
                        <span>使用条件：</span>
                        <span class="zzbd">{{item.condition}}</span><br>
                      </p>
                      <p>
                        <span>使用范围：</span>
                        <span>限优选项目可用</span>
                      </p>
                      <p>
                        <span>使用情况：</span>
                        <span>已经兑现</span>
                      </p>
                    </div>
                    <div class="qianshu">
                      <span>
                        {{item.money}}%加息
                      </span>
                    </div>
                    <div class="hb_text"><a href="/invest">马上加入</a></div>
                  </div>
                  </dd>
                </dl>
           </div>
          </el-tab-pane>
          <el-tab-pane label="已使用" name="second">
          <div class="yhq_wsy">
                <dl  class="current">
                  <dd class="hongbao_bg_grey" v-for="(item,index) in uselist " :key='index'>
                  <div v-if="item.type==1">
                    <div class="yhq_ysy_con">
                        <p>
                            <span>使用类型：</span>
                            <span class="zzbd">{{item.resource}} </span><br>
                        </p>
                        <p>
                            <span>使用范围：</span>
                            <span>限优选项目可用</span>
                        </p>
                        <p>
                           <span>使用情况：</span>
                          <span>已经兑现</span>
                        </p>

                    </div>
                    <div class="qianshu_grey"><span>{{item.money}}</span>元</div>
                    <div class="hb_text_grey"><a href="javascript:;">已使用</a></div>
                  </div>
                  <div v-else-if="item.type==2 && item.money<10">
                    <div class="yhq_ysy_con">
                        <p>
                            <span>使用类型：{{item.resource}} </span>
                            <span>出借即可使用，标的不限</span><br>
                        </p>
                        <p>
                            <span>使用范围：</span>
                            <span>限优选项目可用</span>
                        </p>
                        <p>
                            <span>使用情况：</span>
                            <span>已经兑现</span>
                        </p>

                    </div>
                    <div class="qianshu_grey">{{item.money}}%加息</div>
                    <div class="hb_text_grey"><a href="javascript:;">失效红包</a></div>
                  </div>

                  </dd>
                </dl>
           </div>

          </el-tab-pane>
          <el-tab-pane label="已过期" name="third">
           <div class="yhq_wsy">
                 <dl  class="current">
                  <dd class="hongbao_bg_grey" v-for="(item,index) in listtime " :key='index'>
                  <div v-if="item.type==1">
                    <div class="yhq_ysy_con">
                        <p>
                            <span>使用类型：</span>
                            <span class="zzbd">{{item.resource}} </span><br>
                        </p>
                        <p>
                            <span>使用范围：</span>
                            <span>限优选项目可用</span>
                        </p>
                        <p>
                        <span>开始时间：</span>
                        <span>{{item.start_date}}</span>
                      </p>
                      <p>
                        <span>到期时间：</span>
                        <span>{{item.end_date}}</span>
                      </p>

                    </div>
                    <div class="qianshu_grey"><span>{{item.money}}</span>元</div>
                    <div class="hb_text_grey"><a href="javascript:;">失效红包</a></div>
                  </div>
                  <div v-else-if='item.type==2 && item.money<5'>
                    <div class="yhq_ysy_con">
                        <p>
                            <span>使用类型：{{item.resource}} </span>
                        </p>
                        <p>
                            <span>使用范围：</span>
                            <span>限优选项目可用</span>
                        </p>
                       <p>
                        <span>开始时间：</span>
                        <span>{{item.start_date}}</span>
                      </p>
                      <p>
                        <span>到期时间：</span>
                        <span>{{item.end_date}}</span>
                      </p>

                    </div>
                    <div class="qianshu_grey">{{item.money}}%加息</div>
                    <div class="hb_text_grey"><a href="javascript:;">失效加息券</a></div>
                  </div>

                  </dd>
                </dl>
           </div>
         </el-tab-pane>
       </el-tabs>
     </div>
 </div>
</template>
<script>
 export default {
  data(){
    return {
      activeName: 'first',
      token:'',
      uid:'',
      uselist:[],
      usedlist:[],
      listtime:[]
    }
  },
  mounted:function(){
    this.token=localStorage.getItem('token');
    this.uid=localStorage.getItem('uid');
     this.getData();
  },
  methods:{
   getData(){
    var params={'token': this.token,'uid':this.uid}
    this.get('/V1/members/redpacket',params)
    .then(res =>{

      if(res.data.status==302 || res.data.status==500 ){
        this.$router.push('/login')
      }else{

        this.usedlist=res.data.unused.data;
        this.uselist=res.data.use.data;
        this.listtime=res.data.listTime.data;
        console.log(this.uselist);
      }


    })
   },
    handleClick(tab, event) {
        var tabid=event.target.getAttribute('id');
        //alert(tabid);
      }
  }
 }
</script>
<style>
.Redpackets .el-tabs--border-card{
  border-bottom: 1px solid #DDD;
    width: 980px;
    position: relative;
    margin-top: 26px;
}
.Redpackets .el-tabs__item {
  width:110px;
   text-align: center;
    height: 47px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 47px;
    display: inline-block;
    list-style: none;
    font-size: 16px;
    font-weight: 500;
    color: #303133;
    position: relative;
}
.Redpackets .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #ff7800;
}
.Redpackets .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    height: 49px;
    color: #ff7800;
    border-top: 3px solid #ff7800;
    border-bottom:1px solid #fff;
}
.Redpackets .is-focus{
  box-shadow: none !important ;
}
.wdzh_cz {
   width: 1038px!important;
    width: 1040px;
    overflow: hidden;
    border-top: 2px solid #ff7800;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding-top: 30px;
    padding-left: 25px;
    float: right;
    height: auto;
    min-height: 600px;
    padding-bottom: 25px;
    margin-bottom: 60px;
}
.me_zichan_h {
    height: 25px;
    border-left: 3px solid #ff7800;
    overflow: hidden;
}
.me_zichan_h h2 {
    font-size: 16px;
    line-height: 25px;
    font-weight: normal;
    padding-left: 20px;
    color: #424242;
}
.yhq_wsy {
    width: 978px!important;
    height: auto;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
}
.yhq_wsy dl {
    width: 990px;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}
.yhq_wsy .hongbao_bg {
    margin-right: 60px;
    width: 302px;
    height: 250px;
    float: left;
    margin-bottom: 30px;
    color: #7e4105;
    background: url(/static/images/pandect/red_bg.jpg) no-repeat;
    background-size: contain;
}
.yhq_wsy dl dd .yhq_ysy_con {
    padding: 0 0 0 18px;
    height: 101px;
}
.yhq_wsy dl dd .yhq_ysy_con p span {
    font-size: 12px;
    line-height: 20px;
}
.qianshu {
    width: 302px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    color: #f04b49;
}
.qianshu span {
    font-size: 14px;
}
.hb_text {
    width: 135px;
    height: 30px;
    text-align: center;
    border-radius: 50px;
    margin: auto;
    font-size: 16px;
    line-height: 30px;
    margin-top: 10px;
    background-color: #fde970;
    border-bottom: 3px solid #c08e1f;
}
.hb_text a {
    color: #f04b49;
}
.yhq_wsy .hongbao_bg_grey {
    margin-right: 60px;
    width: 302px;
    height: 250px;
    float: left;
    margin-bottom: 30px;
    color: #7E7E7E;
    background: url(/static/images/pandect/grey_bg.jpg) no-repeat;
    background-size: contain;
}
.yhq_wsy dl dd .yhq_ysy_con {
    padding: 0 0 0 18px;
    height: 101px;
}
.qianshu_grey {
    width: 302px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    color: #7E7E7E;
}


.hb_text_grey {
    width: 135px;
    height: 30px;
    text-align: center;
    border-radius: 50px;
    margin: auto;
    font-size: 16px;
    line-height: 30px;
    margin-top: 10px;
    background-color: #BABABA;
    border-bottom: 3px solid #A6A6A6;
}
</style>
