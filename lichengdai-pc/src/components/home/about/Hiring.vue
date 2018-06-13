<template>
	<article class="Hiring">
		<div class="join">
    <p class="">这是一个颠覆传统金融模式的时代，这是一个打造国人优质生活的壮举，这是一个实现梦想和自我价值的机遇……</p>
    <p class="">这里有金融大咖、传媒大能，也有能说会道销售精英、脑洞大开创意人员；能接触最前沿技术、产品，也能学习最先进管理经验。你即将面对的是平台数十万忠实粉丝，以及千万未来客户。</p>
    <p class="">最重要的，我们有完善的薪酬福利及奖励系统、合理的职位晋升制度、轻松惬意的工作环境、专业多维度的培训体系……只有你想不到，没有我们做不到！</p>
    <p class="">赶快加入我们吧！发送简历至：<span>hr@lichengdai.cn</span></p>
    <p class="">统一主题： <span>应聘岗位+工作地点+姓名</span></p>
  </div>

  <div class="about_banner">
    <img src="/static/img/hiring/title7.png"/>
  </div>

  <div class="joinin">
    <div class="div1" :class='{m40:show==1}' @click='tabclick(1)'>
      <img :src="src1" alt="" id="one"/>
      <span class="sj" v-if="show==1"></span>
    </div>
    <div class="div1 div2" :class='{m40:show==2}' @click='tabclick(2)'>
      <img :src="src2" alt="" id="two" />
      <span class="sj" v-if="show==2"></span>
    </div>
    <div class="div1 div3" :class='{m40:show==3}' @click='tabclick(3)'>
      <img :src="src3" id="three" alt="" />
      <span class="sj" v-if="show==3"></span>
    </div>
    <div class="div1 div4" :class='{m40:show==4}' @click='tabclick(4)'>
      <img :src="src4" id="four" alt="" />
      <span class="sj" v-if='show==4'></span>
    </div>

  </div>
  <ul class="ul">
    <li class="list" v-if="show==1">
      <div class="li1" style="margin-bottom:30px;">
        <h4 class="h4">营销文案</h4>
        <p class="lip">岗位职责：</p>
        <p>1、负责公司相关活动的文字撰稿与优化；</p>
        <p>2、根据公司产品线，通过产品功能点挖掘，进行产品包装；</p>
        <p>3、负责活动文案的宣传推广、产品销售方案的文案策划撰稿、编辑工作；</p>
        <p>4、负责各项大型活动的执行方案与新闻稿件的撰写、文案策划及执行。</p>

        <p>任职要求：</p>
        <p>1、广告、中文、新闻、市场营销等相关专业，大专以上学历；</p>
        <p>2、三年以上工作经验，有优秀的案例和文案作品者优先考虑；</p>
        <p>3、具备深厚的文字功底，有犀利视角，擅长广告文案写作；优异的文字驾驭能力； </p>
        <p>4、能把握策略和用户要求，进行有的放矢的创意发想，并准确快速的进行文案执行； </p>
        <p>5、对市场有敏锐洞察力，具有市场调研、品牌规划与推广全案策划能力；</p>
        <p>6、熟练使用办公软件，优秀的PPT制作能力和表达沟通能力。</p>

      </div>
      <div class="li1">
        <h4 class="h4">资深BD经理</h4>
        <p class="lip">岗位职责：</p>
        <p>1、开发、导入社会资源，形成与公司间的商业合作；</p>
        <p>2、联络、洽谈、签订合作协议；</p>
        <p>3、根据公司指标要求，制定合作内容、条款；</p>
        <p>4、根据公司指标要求，控制合作成本；</p>
        <p>5、根据公司指标要求，完成商业合作带来的营业额增长。</p>

        <p>任职要求：</p>
        <p>1、必须有互联网金融平台合作成功案例及经验；</p>
        <p>2、有稳定、成熟的社会资源、品牌资源、异业资源；</p>
        <p>3、卓越的目标感、使命必达的意识、强大的抗压能力，以结果为导向。</p>

      </div>

    </li>
    <li class="list" v-else-if="show==2">
      <div class="li1"style="margin-bottom:30px;">
        <h4 class="h4">大客户销售</h4>
        <p class="lip">岗位职责：</p>
        <p>1、根据公司的业绩指标，对精准的目标意向客户进行资金撮合销售；</p>
        <p>2、负责维护客户关系，分析客户出借需求；</p>
        <p>3、根据公司要求按时保质完成销售报告。</p>
        <p>任职要求：</p>
        <p>1、本科及以上学历者；</p>
        <p>2、3年以上金融行业销售类工作经验；具有极强的学习及沟通能力；</p>
        <p>3、务必拥有大量稳定（如：演员、医生、教师、企业主、律师等）相关高净值客户资源；</p>
        <p>4、具有极强的市场开拓能力、谈判能力，敏锐的市场洞察力和准确的客户分析能力，乐于投入，能够有效的开发客户资源；</p>
        <p>5、卓越的解决问题能力，使命必达的工作作风。</p>
      </div>
      <div class="li1">
        <h4 class="h4">电话销售</h4>
        <p class="lip">岗位职责：</p>
        <p>1、根据公司的业绩指标，对精准的目标意向客户进行资金撮合销售；</p>
        <p>2、负责维护客户关系，分析客户出借需求；</p>
        <p>3、根据公司要求按时保质完成销售报告。</p>
        <p>任职要求：</p>
        <p>1、本科及以上学历者；</p>
        <p>2、3年以上金融行业销售类工作经验；具有极强的学习及沟通能力；</p>
        <p>3、务必拥有大量稳定（如：演员、医生、教师、企业主、律师等）相关高净值客户资源；</p>
        <p>4、具有极强的市场开拓能力、谈判能力，敏锐的市场洞察力和准确的客户分析能力，乐于投入，能够有效的开发客户资源；</p>
        <p>5、卓越的解决问题能力，使命必达的工作作风。</p>
      </div>
    </li>
    <li class="list" v-else-if="show==3">
      <div class="li1"style="margin-bottom:30px;">
        <h4 class="h4">PHP开发</h4>
        <p class="lip">岗位职责：</p>
        <p>1、负责手机端、PC端、web系统开发；</p>
        <p>2、负责项目的技术支撑；</p>
        <p>3、配合项目经理进行技术决策，进行技术风险评估；</p>
        <p>4、设计开发关键性功能模块，参与系统架构分析设计；</p>
        <p>5、参与项目迭代，代码优化相关工作。</p>
        <p>任职要求：</p>
        <p>1、3年以上php开发经验，参与过大型网站开发项目，精通php开发语言；</p>
        <p>2、精通mysql数据库设计、管理和优化，有较强数据库规划能力；</p>
        <p>3、掌握基本HTML、DIV+CSS、JavaScript/Ajax脚本语言、XHTML、XML页面结构；</p>
        <p>4、具备高负载大并发网站的优化经验者优先，如集群/负载均衡/分布式技术等；</p>
        <p>5、熟悉Unix/Linux操作系统，shell 脚本编程，能够使用脚本对服务器做日常性的管理。</p>
      </div>
    </li>
    <li class="list" v-else>
      <div class="li1"style="margin-bottom:30px;">
        <h4 class="h4">产品经理</h4>
        <p class="lip">岗位职责：</p>
        <p>1、负责产品、用户体系的搭建，市场需求调研、互联网产品规划、设计与管理工作；</p>
        <p>2、负责用户需求分析、竞品分析、行业分析等工作，拓展产品合作，规划产品演进；</p>
        <p>3、负责产品前后台的功能设计及流程优化，提升用户体验，优化运营效率；</p>
        <p>4、与研发团队紧密配合，编写产品需求，推进产品开发项目，达成产品目标；</p>
        <p>5、与市场、运营团队紧密配合，完成产品推广与运营工作；</p>
        <p>6、基于数据分析结果，对业务流程管理进行关键点的改进。</p>
        <p>任职要求：</p>
        <p>1、本科以上学历，三年以上互联网产品工作经验；</p>
        <p>2、熟悉互联网金融平台网站类业务实操经验的优先；</p>
        <p>3、熟悉产品实施过程，包括市场分析、需求分析、产品功能设计、业务流程设计、界面设计、用户研究和可用性测试等；</p>
        <p>4、具有较强的沟通能力、逻辑能力和产品设计能力，对数据敏感，具备较强分析加工能力；</p>
        <p>5、熟悉互联网产品，熟练使用产品设计类软件，对技术研发环节有了解者优先；</p>
        <p>6、较强的用户需求判断、引导、控制能力，有很好的合作能力，善于合作协调沟通，思维敏捷，具有非常好的书面和口头表达能力；</p>
        <p>7、具有强烈的责任心和上进心，具备良好的团队合作精神，积极主动，能承受较大的工作压力。</p>
      </div>
    </li>
  </ul>
	</article>
</template>
<script>
	export default {
		name:'Hiring',
		data() {
      return {
        activeName: 'first',
        src1:'/static/img/hiring/recruit1_1.png',
        src2:'/static/img/hiring/recruit2.png',
        src3:'/static/img/hiring/recruit3.png',
        src4:'/static/img/hiring/recruit4.png',
        show:1
      };
    },
    mounted: function (){
    },
    methods: {
      tabclick(val){
          this.show=val;
          if(val==1){
            this.src1="/static/img/hiring/recruit1_1.png"
            this.src2='/static/img/hiring/recruit2.png'
            this.src3='/static/img/hiring/recruit3.png'
            this.src4='/static/img/hiring/recruit4.png'
          }else if(val==2){
            this.src2="/static/img/hiring/recruit2_1.png"
            this.src1='/static/img/hiring/recruit1.png'
            this.src3='/static/img/hiring/recruit3.png'
            this.src4='/static/img/hiring/recruit4.png'
          }else if(val==3){
            this.src3="/static/img/hiring/recruit3_1.png"
            this.src2='/static/img/hiring/recruit2.png'
            this.src1='/static/img/hiring/recruit1.png'
            this.src4='/static/img/hiring/recruit4.png'
          }else if(val==4){
            this.src4="/static/img/hiring/recruit4_1.png"
            this.src2='/static/img/hiring/recruit2.png'
            this.src3='/static/img/hiring/recruit3.png'
            this.src1='/static/img/hiring/recruit1.png'
          }

      }
    }
	}
</script>
<style scoped>
/*.content{
  width: 1200px;
  height: auto;
  margin: 0 auto;
}*/
.about_banner{
  width: 1200px;
  height: 75px;
  border: 0;
  margin:30px auto 0;
}
.about_banner img{
  width: 100%;
}
.join{
  width: 1100px;
  margin: 0 auto;
  padding: 50px ;
  color: #666;
  line-height: 34px;
}
.join span{
  color: #ff7800;
}
.joinin{
  width: 1200px;
  height: 100px;
  background: url(/static/img/hiring/dashed.png) no-repeat;
  margin: 40px auto;
}
.ul{
  width: 1200px;
  margin: 0 auto;

  margin-bottom: 40px;
}
.list{
  border: 1px solid #ddd;
  padding: 44px;
}
.li1 .h4{
  font-size: 22px;
  padding-left: 35px;
  color: #ff8d40;
  background: url(/static/img/hiring/quare.png) no-repeat;
}
.ul .list .li1 p{
  font-size: 16px;
  color: #666;
  line-height: 32px;
}
.ul .list .li1 .lip{
  margin-top: 15px;
}
.joinin{
  position: relative;
}
.div1{
  position: absolute;
  left: 70px;
  top: -40px;
  z-index: 11;
}
.div2{
  left: 350px;
  top: 0;
  z-index: 11;
}
.div3{
  left: 670px;
  z-index: 11;
}
.div4{
  left: 1000px;
  z-index: 11;
}
.sj{
  width: 25px;
  height: 12px;
  background: url(/static/img/hiring/sj.png) no-repeat;
  position: absolute;
  bottom: -17px;
  margin-left: -12.5px;
  left: 50%;
}
.m40{
 top: -40px;
}
</style>
