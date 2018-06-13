<template>
    <div class="confirm">
    <Header></Header>
      <div class="con" v-if='show'>
        <h2>出借确认</h2>
        <ul class="con_d1">
            <li style="padding-left:95px;width:300px;">{{items.borrow_name}}<br>项目名称</li>
            <li>{{items.borrow_interest_rate}}%<br>目标年化利率</li>
            <li>
                 <span v-if='items.is_week==="0"'>
                    {{items.borrow_duration}}个月
                  </span>
                  <span v-else-if='items.is_week==="1"'>
                    {{items.borrow_duration}}周
                  </span>
                  <span v-else-if='items.is_week==="2"'>
                    {{items.borrow_duration}}天
                  </span>
                  <br>项目期限</li>
            <li>{{items.investM}}<br>出借金额（元）</li>
        </ul>
        <p><span>已使用优惠券：</span>{{items.red_desc}}</p>
        <p style="line-height: 90px;" class="con_in">
                <input type="hidden" id="mark" value=0 />
        <input type="hidden" id="borrow_id" value=13675 />
        <input type="hidden" id="paymoney" value=200 />
        <p><span>应付金额：</span><i>{{items.paymoney}}</i><span>元</span></p>
        <div class="zh_p"><i  :class="{'on_chack':chack}" @click='chack=!chack'></i><h3 class="zh_on">我已阅读<a href="https://www.anxinsign.com/Web/duty/use_agreement.html#certServiceProtocol" target="_blank">《CFCA数字证书服务协议》</a></h3></div>
        <div class="btn" @click='chujie()'><a :class="{'btn_zh':!chack}" href="JavaScript:;" >确认出借</a></div>

    </div>
    <errormodal v-show="errorModal" :message='message'></errormodal>
<Footer ></Footer>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import errormodal from './errorModal.vue';
  export default {
     data(){
      return{
        id:'',
        money:'',
        investM:'',
        show:true,
        items:{},
        chack:true,
        message:{},
        htmlp:''
      }
     },
     components:{
        Header,
        Footer,
        errormodal
        },
  computed: {
    errorModal(){
      return this.$store.state.errorModal
    }
    },
     mounted:function(){
         this.id=this.$route.query.id;
         this.money=this.$route.query.money;
         this.investM=this.$route.query.investM;
         this.getData()
     },
     methods:{
    //Forms.submit(),
      getData(){
          var data={
            'borrow_id':this.id,
            'money':this.money,
            'investM':this.investM
          };
          this.get('/V1/investinfo/confirm',data)
          .then(res=>{
            if(res.data.status==500){
              this.$confirm(res.data.message, '提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    showCancelButton:false,
                    showClose:false

                  }).then(() => {
                    this.$router.go(-1)
                  })
               this.show=false;

            }else{
             this.items=res.data.info
            }
          })
         },
         chujie(){
        var data={
            'borrow_id':this.id,
            'money':this.money,
            'mark':this.items.mark
          };

        if(this.chack==false){
           this.$message('请确认已阅读协议')
        }else{
          this.post('/V1/Sinainvest/invest',data)
          .then(res=>{
            if(res.data.status==1){
              alert('成功')
             var  parsmas={
                    'invest_id':res.data.invest_id
              }
              this.get('/member/fengfunew/hsinvest',parsmas)
              .then(res=>{
                console.log(res.data);
                this.htmlp=res.data
              })
               //window.location.href='/member/fengfunew/hsinvest?invest_id='+res.data.invest_id;

            }else{
                this.message={
                  'show':1,
                  'title':'出借失败',
                  'content':res.data.message,
                  'btn':'确定'
                };
                this.$store.commit('errorModalshow', true)
            }
          })
        }
     }
     },

  }
</script>
<style scoped>
body {
    background: #f9f9f9;
}

.con {
    width: 1100px;
    margin: 30px auto;
    min-height: 615px;
    background: #fff;
    margin-bottom: 60px;
    box-shadow: 0 3px 3px #eee;
    padding-top: 40px;
    height: auto;padding-bottom: 40px;
}

.con h2 {
    font-size: 16px;
    color: #333;
    padding-left: 15px;
    border-left: 5px solid #ff7800;
    margin-left: 40px;
    height: 19px;
    line-height: 19px;
    font-weight: 600;
    margin-bottom: 40px;
}

.con .con_d1 {
    width: 1000px;
    margin: 0 auto;
    height: 100px;
    background: #f5f5f5;

}

.con .con_d1 li {
  height: 100%;
    width: 205px;
    float: left;
    text-align: center;
    padding-top: 30px;
    font-size: 14px;
    color: #999;
}

.con p {
    width: 1000px;
    margin: 0 auto;
    line-height: 40px;
    color: #ff7800;
    clear: both;
    margin-top: 20px;
}

.con p span {
    color: #666;
    width: 100px;
    display: inline-block;
    float: left;
}
.con p s{
    width: 888px;
    display: inline-block;
    float: left;
}
.con p i {
    color: #ff7800;
    display: inline-block;
    font-size: 24px;
    float: left;
    padding-right: 30px;
    font-weight: 600;
}

.con p em {
    display: block;
    width: 220px;
    height: 80px;
    float: left;
    margin-right: 20px;
    position: relative;
    border: #eee 1px solid;
    margin-bottom: 30px;
    position: relative;
}

.con p em.c_bcy {
    border: #eee 1px solid;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    color: #666;
}

.con p em img {
    position: absolute;
    bottom: 0;
    right: 0;
}

.con p em a {
    position: absolute;
    bottom: -22px;
    display: block;
    height: 10px;
    line-height: 10px;
    width: 100%;
    text-align: center;
    color: #ff7800;
    text-decoration:underline;
}

.con p em.c_mxz {
    border: #eee 1px solid;
}

.con p em.c_mxz img.i_mxz {
    z-index: 66;
}

.con p .c_xz .i_xz {
    z-index: 66;
}

.con p em.c_xz {
    border: #ff7800 1px solid;
}

.con .zh_p {
    width: 1000px;
    margin: 0 auto;
    clear: both;
    padding-top: 20px;

}

.con .zh_p .zh_on {
    padding-left: 30px;
}

.con .zh_p .zh_on a {
    color: #3470d5;
    cursor: pointer;
}

.con .zh_p i {
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
}

.con .zh_p i.on_chack {
    background: url(/static/images/detail/gou.png) no-repeat center center;
}

.con .btn {
    width: 300px;
    margin: 30px auto;
}

.con .btn a {
    display: block;
    width: 300px;
    height: 50px;
    background: #f79035;
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}

.con .btn a.btn_zh {
    background: #cccccc;
}


/*div5*/

.pament {
    width: 525px;
    position: absolute;
    top: 200px;
    left: 33%;
    background: #FFF;
    overflow: auto;
    padding-bottom: 30px;
}

.pemher {
    width: 440px;
    float: left;
    border-bottom: 1px solid #d9d9d9;
    margin-left: 52px;
    margin-top: 15px;
}

.pemher h2 {
    width: 400px;
    float: left;
    font-size: 18px;
    color: #333;
    font-weight: normal;
    line-height: 50px;
    text-align: center;
}

.pemher span {
    float: right;
    width: 23px;
    height: 23px;
    margin-top: 8px;
    cursor: pointer;
}

.pewenz p {
    line-height: 35px;
    font-size: 16px;
    color: #333;
    overflow: hidden;
}

.paytr {
    float: left;
    width: 260px;
    height: 45px;
    background: #ffa422;
    line-height: 45px;
    text-align: center;
    border: 1px solid #ffa422;
    border-radius: 5px;
    margin-left: 125px;
    margin-top: 15px;
}

.paytr a {
    text-decoration: none;
    line-height: 45px;
    color: #FFF;
    font-size: 18px;
    display: block;
    width: 260px;
}

.pewenz {
    width: 440px;
    float: left;
    margin-left: 52px;
    margin-top: 15px;
    height: 160px;
}

.bleter {
    display: none;
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0;
    right: 0;
    width: 100%;
    /* height: 300%; */
    background: url(/Style/images/tmbg.png) repeat;
    z-index: 1000;
}
</style>
