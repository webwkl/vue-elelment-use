<template>
  <div class="satety">
       <div id="jh_qr" v-show='closemodal'>
           <p>您确定退出评估？</p>
           <p class="jh_qr_p"><a class="qdt" @click="sure()">确认</a><a style="color:#ff7800" class="qdq" @click="cancel()">取消</a></p>
      </div>
<div id="safetytk">
    <div class="safety_in2" v-show='!result'>
       <p class="xzda">请选择答案</p>
        <div>
            <p style="margin-top:30px;">尊敬的立诚贷用户：
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了便于您了解自身的风险承受能力，选择合适的产品和服务，请您填写以下风险承受能力评估问卷。下列问题可协助评估您对产品和服务的风险承受能力，请您根据自身情况认真选择。评估结果仅供参考，不构成出借建议。为了及时了解您的风险承受能力，我们建议您持续做好动态评估。我们承诺对您的所有个人资料保密。
            </p>
            <p class="ptip" id="tips" style="text-align: center; font-size: 12px;">（<span><span v-if="this.count<10">0</span>{{count}}</span>/12）</p>
           <div style="width: 755px;height: 300px;overflow: hidden;position: relative;margin:0;">
            <div class="issue" id="issue">

                <div class="cnt" v-if="count=='1'">
                    <h3>1.您购买P2P产品的时间有多久？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.2年以上</el-radio>
                      <el-radio :label="2">B.1年至2年</el-radio>
                      <el-radio :label="3">C.6个月以上</el-radio>
                      <el-radio :label="4">D.6个月以内</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='2'">
                    <h3>2.您历史投资最大损失占您总资产比例多少？</h3>
                     <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.40%</el-radio>
                      <el-radio :label="2">B.30%</el-radio>
                      <el-radio :label="3">C.20%</el-radio>
                      <el-radio :label="4">D.10%</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='3'">
                    <h3>3.您目前的收益状况是？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">出现损失，本息未收回。</el-radio>
                      <el-radio :label="2">B.略有盈余，本息收回。</el-radio>
                      <el-radio :label="3">C.收益中等，年化收益在10%-15%之间，本息收回。</el-radio>
                      <el-radio :label="4">D.收益较高，年化收益在15%以上，本息收回。</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='4'">
                    <h3>4.您对投资收益和风险所持的态度？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.厌恶风险，不希望本金损失，希望获得稳定收益。</el-radio>
                      <el-radio :label="2">B.保守投资，不希望本金损失，能够承担一定收益波动。</el-radio>
                      <el-radio :label="3">C.希望赚取一定收益，为此愿意承担一定损失。</el-radio>
                      <el-radio :label="4">D.多投多得，愿意承担较大损失。</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='5'">
                    <h3>5.您的家庭年收入折合人民币为？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.5万元以下</el-radio>
                      <el-radio :label="2">B.5-20万之间</el-radio>
                      <el-radio :label="3">C.20-80万之间</el-radio>
                      <el-radio :label="4">D.80-150万之间</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='6'">
                    <h3>6.您计划的出借期限是多久？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.1个月</el-radio>
                      <el-radio :label="2">B.1-6个月</el-radio>
                      <el-radio :label="3">C.6-12个月</el-radio>
                      <el-radio :label="4">D.12个月以上</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='7'">
                    <h3>7.您计划的出借金额为？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.1万元以下</el-radio>
                      <el-radio :label="2">B.1-5万元</el-radio>
                      <el-radio :label="3">C.5-10万元</el-radio>
                      <el-radio :label="4">D.D.10万元以上</el-radio>
                    </el-radio-group>
                </div>

                <div class="cnt" v-else-if="count=='8'">
                    <h3>8.您对P2P产品最关心的因素是？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.流动性是否便利。</el-radio>
                      <el-radio :label="2">B.本金和利息的安全性。</el-radio>
                      <el-radio :label="3">C.投资期限的长短。</el-radio>
                      <el-radio :label="4">D.收益的高低。</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='9'">
                    <h3>9.您的健康状况？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.有疾病</el-radio>
                      <el-radio :label="2">B.一般</el-radio>
                      <el-radio :label="3">C.健康</el-radio>
                      <el-radio :label="4">D.非常健康</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='10'">
                    <h3>10.您的家庭组成状况？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.离异</el-radio>
                      <el-radio :label="2">B.未婚</el-radio>
                      <el-radio :label="3">C.已婚无子女或子女年龄小</el-radio>
                      <el-radio :label="4">D.已婚子女已满18周岁</el-radio>
                    </el-radio-group>
                </div>

                <div class="cnt" v-else-if="count=='11'">
                    <h3>11.您需要赡养的老人及子女有几人？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.1人以下</el-radio>
                      <el-radio :label="2">B.1-3人</el-radio>
                      <el-radio :label="3">C.3-5人</el-radio>
                      <el-radio :label="4">D.5人以上</el-radio>
                    </el-radio-group>
                </div>
                <div class="cnt" v-else-if="count=='12'">
                    <h3>12.您名下有无房产、车产，是否按揭？</h3>
                    <el-radio-group v-model="radio2">
                      <el-radio :label="1">A.无房产车产或都为按揭型</el-radio>
                      <el-radio :label="2">B.房产按揭</el-radio>
                      <el-radio :label="3">C.车产按揭</el-radio>
                      <el-radio :label="4">D.有房产车产无按揭</el-radio>
                    </el-radio-group>
                </div>

                <div class="result" id="result">

                </div>
            </div>

          <a class="next_q" id="next_q" @click='next()'>{{btn}}</a>

           </div>

        </div>

        <a class="safety_cha" @click="close()"><img src="/static/images/safety_pic/cha.jpg"></a>
    </div>
     <div class="zyc_qd_in_s safety_in3" v-show='result'>
        <p style="font-size:16px">您的当前评级为 <span style="color:#ffae00;font-size:16px" class="span1">{{pgLevel}}</span></p>

        <p style="text-align:left">1、本次测评结果有效期3个月，3个月有效期后，您需重新进行风险测评；<br>2、您也可以根据个人实际情况，在个人中心随时重新进行风险测评。每次测评结果有效期3个月。</p>

        <p><a class="in_btn3" @click="coloseresult()">确定</a></p>
        <a class="safety_cha2" @click="coloseresult()"><img src="/static/images/safety_pic/cha.jpg"></a>
        </div>
</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
         closemodal:false,
         count:1,
         radio2:'',
         btn:'下一题',
         anser:[],
         result:false,
         pgLevel:''
    }
  },
  mounted:function(){

  },
  methods:{
    close(){
     this.closemodal=true;
    },
    cancel(){
     this.closemodal=false
    },
    sure(){
      this.closemodal=false;
      location.reload()
     this.$store.commit('assessmentModalshow', false);
    },
    coloseresult(){
      this.result=!this.result;
      this.$store.commit('assessmentModalshow', false);
      location.reload()
    },
    next(){
      if(this.count<13){
        if(this.radio2==''){
          this.$message('请选择答案');
          return
        }else{
          if(this.count==11){
          this.btn='提交问卷';
          }else if(this.count==12){
            this.anser.push(this.radio2);
            var data={
                 answer:this.anser
            }
            this.post('/V1/Assessment/receive',data)
            .then(res=>{
              this.anser=[];
              this.count=1;
              this.pgLevel=res.data.pgLevel;
              this.$store.commit('assessmentModalshow', true);
              this.result=!this.result;
            })
            this.$store.commit('assessmentModalshow', false);
          }
         this.anser.push(this.radio2);
          this.count+=1;
          this.radio2='';

        }
      }

    }
  }
}
</script>
<style scoped>
  .el-radio+.el-radio {
     margin-left: 0;
}

.el-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
    display: block;
    margin-top: 10px;

}
</style>
<style scoped>
 #safetytk {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 1000;
        background: rgba(0,0,0,0.6);
    }

    .safety_in {
        width: 580px;
        height: 380px;
        margin: 150px auto;
        background-color: #fff;
        padding: 15px;
        text-align: center;
        position: relative;

    }

    .safety_in div {
        padding-top: 50px;
        width: 410px;
        margin: 0 auto;
    }

    .safety_in div p {
        color: #666;
        font-size: 14px;
        line-height: 30px;
    }

    .safety_in div p a {
        width: 135px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        display: inline-block;
        border-radius: 5px;
        margin-top: 50px;
        cursor: pointer;
    }

    .safety_in div p .in_btn {
        color: #fff;
        background: #ff7800;
        float: left;
    }

    .safety_in div p .in_btn2 {
        color: #999;
        background: #fff;
        float: right;
        border: 1px solid #999;
    }

    .safety_cha {
        font-size: 25px;
        color: #ccc;
        position: absolute;
        top: 20px;
        right: 22px;
        cursor: pointer;
    }
    .safety_cha2 {
        font-size: 25px;
        color: #ccc;
        position: absolute;
        top: 20px;
        right: 22px;
        cursor: pointer;
    }

    .safety_in2 {
        width: 800px;
        min-height: 460px;
        margin: 90px auto;
        background-color: #fff;
        padding: 15px;
        text-align: center;
        position: relative;
        /*display: none;*/
    }

    .safety_in2 div {
        width: 755px;
        margin: 0 auto;

    }

    .safety_in2 div p {
        text-align: left;
        font-size: 14px;
        color: #666;
    }

    .ptip {
        background: url(/static/images/safety_pic/shu_bj.jpg) no-repeat center center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .ptip span {
        color: #ff7800;
        font-size: 12px;
    }
    .issue {
        position: absolute;
        top: 0;
        left: 0;
        width: 420px;
        height: auto;
        z-index: 99;
    }

    .issue div.selected {
        background: #fdfeff;
    }

    .issue div {
        height: 300px;
        /*padding-bottom: 33px;*/
        background: #fff;
    }
    .issue div h3{font-size: 14px;}
    .next_q{
        width: 390px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -185px;
        border: 1px solid #ff7800;
        color: #ff7800;
        z-index: 9999;
        border-radius: 5px;
        cursor: pointer;
    }
    .issue li.sel span, .issue div.selected li.sel:hover span {
        background: url(/static/images/safety_pic/chk.jpg) no-repeat center center;
    }
    .issue li span {
        float: left;
        clear: left;
        width: 22px;
        height: 22px;
        overflow: hidden;
        margin: 3px 3px 0 0;
        background: url(/static/images/safety_pic/nochk.jpg) no-repeat center center;
    }
    .cnt{text-align: left;}
    .issue li label {
        float: left;
        width: 370px;
        color: #555;
        font-size: 14px;
        margin-top: 3px;
    }
    .issue li input {
    display: none;
}
    .safety_in3 {
        width: 340px;
        height: 180px;
        margin: 300px auto;
        background-color: #fff;
        padding: 15px;
        text-align: center;
        position: relative;

    }
    .safety_in3 div{width: 250px;margin: 0 auto;}
    .safety_in3 div p a {
        width: 130px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
        display: inline-block;
        border-radius: 5px;
        background: #ff7800;
        color: #fff;
        cursor: pointer;
    }

    .safety_in3 div p {
        color: #666;
        font-size: 14px;
        line-height: 30px;
        margin-top: 30px
    }

    .safety_in3 div p span {
        color: #ff7800;
    }
    .xzda{width: 150px;height: 30px;line-height: 30px;background: url(/static/images/tmbg.png);text-align: center;color: #fff;position: absolute;top:280px;left: 50%;margin-left: -75px;z-index: 9999;display: none}
    #jh_qr{width: 200px;height:110px;background: #fff;z-index: 9999;position: fixed;top:320px;left: 50%;margin-left: -100px;border: 1px solid #ff7800;}
    #jh_qr p{text-align: center;font-size: 14px;color: #666;padding-top: 20px;}
    .jh_qr_p a{width: 50%;float: left;text-align: center;cursor: pointer;display: block;}
     .zyc_qd_s{position: fixed;z-index: 9999;background:url(/static/images/tmbg.png) repeat;top:0;left: 0;width: 100%;height: 100%;display: none}
    .zyc_qd_in_s{width: 550px;height: 300px;background: #fff;margin: 300px auto;}
    .zyc_qd_in_s p{width: 90%;margin: 0 auto;text-align: center;padding-top: 40px;}
    .zyc_qd_in_s p a{width: 40%;display:block;background: #ff7800;color: #fff;border: 1px solid #ff7800;border-radius: 3px;cursor: pointer;margin:0 auto;}
</style>
