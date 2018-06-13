<template>
	<article class="RunReport">
  <div class="a_shuju"></div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type='card' >
        <el-tab-pane label="2017" name="first">
          <ul class="a_con" style="display:block">
           <li >
             <a href="/sevenyearend">
                <img src="/static/img/report/sevenyearend.png">
                </a>
            </li>
            <li>
               <a href="/oneseven">
                <img src="/static/img/report/oneseven.png">
                </a>
            </li>
        </ul>


        </el-tab-pane>
        <el-tab-pane label="2016" name="second">
         <ul class="a_con" >
           <li>
               <a href="/sixyearend">
                <img src="/static/img/report/yearend.jpg">
                </a>
            </li>
            <li>
            <a href="/autumn">
                <img src="/static/img/report/xbanner.png">
            </a>
            </li>
            <li>
            <a href="/reporttwo">
                <img src="/static/img/report/data161.png">
            </a>
            </li>
            <li>
            <a href="/spring">
                <img src="/static/img/report/data162.png">
            </a>
            </li>


        </ul>
        </el-tab-pane>
         <el-tab-pane label="2015" name="third">
           <ul class="a_con">
            <li>
               <a href="https://www.lichengdai.com/report/dec">
                <img src="/static/img/report/data1512.png">
                </a>
            </li>
            <li>
                <a href="https://www.lichengdai.com/report/nov">
                <img src="/static/img/report/data1511.png">
                </a>
            </li>
            <li>
                <a href="https://www.lichengdai.com/report/oct">
                <img src="/static/img/report/data1510.png">
                </a>
            </li>
            <li>
                <a href="/report">
                <img src="/static/img/report/data159.png">
                </a>
            </li>

        </ul>
         </el-tab-pane>
   </el-tabs>
	</article>
</template>
<script>
	export default {
		name:'RunReport',
		 data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
	}
</script>
<style >
.a_shuju{
  width:1200px;
  height: 133px;
  margin: 0 auto;
  background: url(/static/img/report/a_shuju3.png) no-repeat top center;

}
.RunReport .el-tabs .el-tabs__header{
    width: 300px;
    height: 50px;
    margin: 30px auto;
     border-bottom: none;

}
.RunReport .el-tabs__content{
    width: 1140px;
    margin: 0 auto;
}
.RunReport .el-tabs__nav-scroll{
  border-bottom: none;
}
.RunReport  .el-tabs--card>.el-tabs__header .el-tabs__item{
  outline: none;
    width: 85px;
    height: 30px;
    line-height: 30px;
    color: #999;
    border: 1px solid #999;
    text-align: center;
    float: left;
    margin-left: 10px;
    font-size: 18px;
    padding: 0;
}
.RunReport .el-tabs--card>.el-tabs__header .el-tabs__nav {
     border: none;
    border-bottom: none;
}
.RunReport .el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    z-index: 1;
    background: #fff;
    list-style: none;
}
.RunReport .is-focus{
  box-shadow: none !important ;
}
.RunReport .el-tabs__item.is-active {
    border-color: #ff7800 !important;
    color: #ff7800 !important;
}
.a_con{
    width: 1140px;
    margin: 0 auto;
}
.a_con li {
    margin-bottom: 30px;
    cursor: pointer;
}

</style>

