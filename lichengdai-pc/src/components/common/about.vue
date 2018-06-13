<template>
<article id="commonAbout">
	<div class="commonTop">
		<img src="/static/img/about/about_bg.jpg" alt="" class="commonbg">
	</div>
  <ul class="about_list clearfix">
    <li class="about_li">
      <router-link to="/AboutUs" class="linkGo" >公司介绍</router-link>
    </li>
    <li class="about_li">
      <router-link to="/advantage" class="linkGo">核心优势</router-link>
    </li>
    <li class="about_li">
      <router-link to="/RunReport" class="linkGo">运营报告</router-link>
    </li>
    <li class="about_li">
      <router-link to="/CorporateCulture" class="linkGo">企业文化</router-link>
    </li>
    <li class="about_li">
      <router-link to="/Partner"  class="linkGo">合作伙伴</router-link>
    </li>
    <li class="about_li">
      <router-link to="/Honor" class="linkGo">荣誉资质</router-link>
    </li>
    <li class="about_li">
      <router-link to="/Hiring" class="linkGo">人才招聘</router-link>
    </li>
    <li class="about_li">
      <router-link to="/ContactUs" class="linkGo">联系我们</router-link>
    </li>

  </ul>
</article>
</template>

<script>
export default {
  name: 'commonAbout',
  
  data () {
    return {
      chose:false,
    }

  },
  methods:{
  	tab:function(){
  		alert(1)
  		this.chose = !this.chose;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.commonbg{
		width: 100%;
		height: 350px;
	}
  .about_list{
    width: 1200px;
    margin: 0 auto;
  }
  .about_list .about_li{
    float: left;
    padding: 0 43px;
    text-align: center;
  }
  .linkGo{
    line-height: 45px;
    font-size: 16px;
    color: #555;
    display: inline-block;
  }
  .router-link-active{
	  border-bottom: 2px solid #ff6769;
  	color: #ff6769;
  }
</style>
