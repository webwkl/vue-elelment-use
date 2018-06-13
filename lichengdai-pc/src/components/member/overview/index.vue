<template>
  <div class="overview">
   <Header></Header>
    <div id="hy_title">
      <div class="new_top clearfix">
        <div class="fl">
          <a href="/member/Overview">首页&nbsp;&gt;&nbsp;</a>
          <span>总览</span>
        </div>
        <!-- <a class="fr" href="/Member/index">返回旧版&nbsp;&gt;&nbsp;</a> -->
      </div>
    </div>
    <div class="content clearfix">
      <centerLeft></centerLeft>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import centerLeft from '../../common/centerLeft'
import Header from '@/components/common/Header'

import Footer from '@/components/common/Footer'
import {delCookie,getCookie} from '@/util/util'
export default {
  name: 'overview',
  data () {
    return {
      msg: '这是账户中心',
    }
  },
  mounted() {
    //delCookie('username');
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到登录页面先登录*/

      // if(getCookie('username')){
      //   this.$router.push('/overview/index')
      //  }else{
      //   this.$router.push('/Login')
      // }
  },
  components:{
    centerLeft,
    Header,
    Footer
  },
  created() {
        //  if(this.$route.path == '/overview/pandect' ){
        //   this.headerShow = true;

        // }else{
        //   this.headerShow = false;
        // }
    },
  // watch: {

  //   '$route': function(newValue, oldValue) {
  //       if(newValue.path == '/overview/pandect' ) {
  //         this.headerShow = true;

  //       }else {
  //         this.headerShow = false;
  //       }
  //     }

  //   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#hy_title{
  width: 100%;
  border-top: 1px solid #e3e3e3;
  height: 70px;
  line-height: 40px;
  .new_top {
    width: 1200px;
    height: 50px;
    margin: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    a {
      cursor: pointer;
      display: inline-block;
      font-size: 16px;
      color: #666;
    }
    span{
      color: #666;
    }
  }
}
.content{
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
}

</style>
