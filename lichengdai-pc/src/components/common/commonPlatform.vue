<template>
<article id="commonPlatform">
  <ul class="about_list clearfix">
    <li class="about_li">
      <router-link :to="{name:'newsone',params:{id:9}}" class="linkGo" >平台动态</router-link>
    </li>
    <li class="about_li">
      <router-link :to="{name:'newstwo',params:{id:30}}" class="linkGo">媒体报道</router-link>
    </li>
    <li class="about_li">
      <router-link :to="{name:'newsthree',params:{id:32}}" class="linkGo">发标公告</router-link>
    </li>
    <li class="about_li">
      <router-link :to="{name:'newsfour',params:{id:33}}" class="linkGo">还款公告</router-link>
    </li>
    <li class="about_li">
      <router-link :to="{name:'newsfive',params:{id:34}}"  class="linkGo">行业动态</router-link>
    </li>
  </ul>
  <router-view></router-view>
</article>
</template>

<script>
export default {
  name: 'commonPlatform',
  
  data () {
    return {
      chose:false,
    }

  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about_list{
    width: 1200px;
    margin: 0 auto;
  }
  .about_list .about_li{
    float: left;
    height: 50px;
    padding: 0 43px;
    text-align: center;
  }
  .linkGo{
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #555;
    display: inline-block;
    cursor: pointer;
    border-bottom: 2px solid #fff;
  }
  .router-link-active{
	  border-bottom: 2px solid #ff6769;
  	color: #ff6769;
  }
  .linkGo:hover{
    color:#ff6769;
    border-bottom: 2px solid #ff6769;
  }
</style>
