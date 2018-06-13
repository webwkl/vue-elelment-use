<template>
  <div class="Myxx">
     <div class="wdzh_cz">

            <div class="jiaoyijilu_table_title">
                <h2>
                    <a href="javascript:void(0);" class="ml0 current">我的消息</a>
                </h2>
                <div class="yhq_wsy">
                    <!--未使用-->
                    <div class="current">

                        <div class="quan">
                            <div class="bor">
                                <div class="quan_d">
                                     <el-select v-model="value" placeholder="时间选择" @change='shaixuan()'>
                                      <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                      </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <ul class="pan">
                            <el-checkbox-group v-model="checkList">
                            <el-checkbox label="项目预告"></el-checkbox>
                            <el-checkbox label="提现结果"></el-checkbox>
                            <el-checkbox label="资金到帐"></el-checkbox>
                            <el-checkbox label="系统消息"></el-checkbox>
                          </el-checkbox-group>
                          <li>全部标记为已读</li>

                            </ul>

                        </div>

                        <div style="clear: both; height: 0px; width:100%;"></div>
                        <div id="datas">
                                 <div class="zhuti" v-for="(item,index) in datalist" :key='index'>
                                    <div class="zuo">
                                        <span>{{item.day}}</span><span>{{item.shi}}</span>
                                    </div>
                                   <!--  <div class="zuo" id="dandu{$vo.id}" style="background-image:url(/static/images/pandect/hui.png);">
                                        <span>33</span><span>33</span>
                                    </div> -->
                                    <div class="you">
                                        <span v-html='item.info'></span>
                                    </div>
                                </div>
                        </div>


                        <p class="chak" @click="getMore()">查看更多 >></p>

                    </div>
                </div>
            </div>

        </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
         checkList: ['项目预告','提现结果','资金到帐','系统消息'],
         datalist:[],
         options: [{
          value: '0',
          label: '全部'
          }, {
            value: '7',
            label: '最近七天'
          }, {
            value: '3',
            label: '最近三个月'
          }, {
            value: '1',
            label: '最近一年'
          }, {
            value: '11',
            label: '一年前'
          }],
        value: '',
        number:1,

      }
    },
    mounted:function(){
     this.getData();
  },

  methods:{
   getData(){
    this.get('/V1/members/message')
    .then(res =>{

      if(res.data.status==302 || res.data.status==500 ){
        this.$router.push('/login')
      }else{
        this.datalist=res.data.list;
      }


    })
   },
   shaixuan(){
    var params={
               'search':this.value,
               'page':this.number,
            }
     this.post('/V1/members/fenye',params)
    .then(res =>{
      if(res.data.status==302 || res.data.status==500 ){
        this.$router.push('/login')
      }else{
        this.datalist=res.data.list;
        console.log(res.data)
      }


    })
   },
    getMore(){
       this.number+=1;
       var params={
               'search':this.value,
               'page':this.number,
            }
     this.post('/V1/members/fenye',params)
    .then(res =>{
      if(res.data.status==302 || res.data.status==500 ){
        this.$router.push('/login')
      }else{
        var newDatalist=res.data.list;
        for(var i=0;i<newDatalist.length;i++){
          this.datalist.push(newDatalist[i]);
        }
      }


    })

   }
   }
  }
</script>
<style >
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
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #a6a6a6;
    border-color: #a6a6a6;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #a6a6a6;
}
.el-checkbox__inner{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  line-height: 18px;
  text-align: center;
}
.el-checkbox__inner::after{
  left: 6px;
  top:2px;
}
.el-checkbox{
  margin-right: 30px;
}
.jiaoyijilu_table_title {
    padding-top: 26px;
}
.jiaoyijilu_table_title h2 {
    border-bottom: 1px solid #DDD;
    height: 45px;
    width: 980px;
    position: relative;
}
.jiaoyijilu_table_title h2 a.current {
  display: block;
    width: 110px!important;
    height: 46px!important;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    background: url(/static/images/pandect/current.jpg) no-repeat;
    border-bottom: 0;
    line-height: 47px!important;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    z-index: 5;
    color: #ff7800;
}
.yhq_wsy {
    width: 978px!important;
    height: auto;
    width: 960px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 20px;
}
.quan {
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    height: 80px;
    width: 100%;
}
.quan_d {
    float: left;
    margin-top: 25px;
    background: #fff;
    position: absolute;
}
.bor {
    width: 225px;
    height: 80px;
    border-right: 1px solid #ccc;
    float: left;
}
.pan {
    float: right;
    width: 700px;
    margin-top: 25px;
}
.zhuti {
    width: 100%;
    height: 100px;
}
.zuo {
    width: 229px;
    float: left;
    line-height: 100px;
    height: 100px;
    background: url(/static/images/pandect/hong.png) top right no-repeat;
    background-size: auto 100%;
}
.zuo span {
    width: 50%;
    display: block;
    float: left;
}
.zuo span:nth-child(2) {
    color: #ccc;
}
.you {
    float: right;
    width: 700px;
    text-align: left;
    padding-top: 35px;
    background: url(/static/images/pandect/xjian.png) bottom left no-repeat;
}
.you span {
    display: inline-block;
    background: #efefef;
    border-radius: 15px;
    padding: 10px 30px;
    width: auto;
    margin-left: 15px;
}
.you span a{
  color: blue
}
.chak {
    width: 100%;
    text-align: center;
    padding-top: 60px;
    color: #666;
    cursor: pointer;
}
.pan li {
    float: right;
    margin-right: 20px;
}
.el-checkbox-group{
  float: left;
}
</style>
