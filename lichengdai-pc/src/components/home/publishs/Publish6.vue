<template>
  <div class="content">
     <div class="title-page">
             <span>安全保障</span>
           </div>
           <div class="content_page6" >
               <div class="images" style="position: relative;" >
                 <img  src="/static/images/pilou/61.png" alt="">
                 <p class="tian">{{year}}年{{date}}天</p>
               </div>

              <p class="p_title">模式安全合规</p>
              <div class="liucheng">
                   <img  src="/static/images/pilou/62.png" alt="">
              </div>
              <p class="p_title">风控管理完善</p>
              <div class="page6_text">
                   <p><i></i>甄选合作机构</p>
                   <p><i></i>大数据反欺诈系统初步筛查</p>
                   <p><i></i>信用评级系统评分</p>
                   <p><i></i>信审部人工审核</p>
                   <p><i></i>法务部进行合规合法性审核</p>
                   <p><i></i>财务部复核</p>
                   <p><i></i>贷后管理</p>
              </div>
              <div class="bj_text">
                    <p>信广立诚贷平台发布的所有借款项目都是经过严格的风控流程筛选出来的优质项目。通过完善的风控体系对细节风险进行把控，保证用户的权益。</p>
              </div>
              <p class="p_title">平台雄厚实力</p>
              <div class="page6_p" >
                <p>银行存管：<span> 与银行合作资金存管、依照中国互联网金融协会标准开展信息披露</span></p>
                <p>行业影响：<span> 行业内三农领域排行前十强</span></p>

              </div>
              <p class="p_title">账户数据安全</p>
              <div class="page6_p" >
                <p>账户安全：
                <span> 全站采用HTTPS传输加密协议及对隐私数据进行MD5加密保护</span></p>
                <p>攻击防护：<span> 配备市场银行级别的商业防攻击防火墙服务</span></p>
                <p>数据备份：
                <span> 每五分钟的异地备份，同时可追溯到交易细节</span></p>
                <p>信息安全：
                <span> 立诚贷通过国家公安部门颁发认证"信息系统安全等级保护"三级备案
                </span></p>

              </div>
           </div>
  </div>
</template>
<script>
  export default{
     data(){
      return{
         year:'',
         date:'',
      }
     },
     created: function () {
          //  this.$nextTick(function () {
          //       this.ajax()
          //       alert(22);
          // })
     },
     mounted:function(){
                this.ajax()
     },
     methods:{
        ajax(){
        this.$http.get('http://192.168.1.208:8989/Vue/index/index')
        .then(res => {
            this.year=res.data.year;
            this.date=res.data.data;
          })
      }
      //http://192.168.1.208:8989/Vue/index/index
     }
  }
</script>
<style scoped>
.content_page6{
  padding-left: 25px;
  margin-bottom: 80px;
}
.content-page6 .images{
    width: 904px;
    height: 226px;

}
.tian{
  font-family: "微软雅黑";
  font-size: 26px;
  color: #ff6769;
  position: absolute;
  top:95px;
  left: 347px;
}
.p_title{
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  font-size: 18px;
  font-family: '微软雅黑';
  color: #333333;
  border-left: 2px solid #ff6769;
  margin-bottom: 40px;
  margin-top: 40px;

}
.content_page6 .liucheng{
    margin: 0 auto;
    width: 645px;
    height: 282px;
}
.page6_text p{
  padding-left: 15px;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
}
.page6_text p i{
  display: inline-block;
  margin-right: 10px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff6769;
}
.bj_text{
  padding:15px 20px;
  width: 865px;
  height: auto;
  background: #f2f2f2;
  margin-top: 30px;
}
.bj_text p{
   font-size: 16px;
   color: #666666;
   line-height: 30px;
}
.page6_p p{
   font-size: 16px;
   color: #666666;
   font-weight: 700;
   font-family: '微软雅黑';
   padding-left: 10px;
   line-height: 35px;
}
.page6_p p span{
  font-size: 16px;
   color: #666666;
   font-weight: normal;
   font-family: '微软雅黑';
   padding-left: 10px;
   line-height: 35px;
}
</style>
