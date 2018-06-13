<template>
  <div id='publish'>
    <ul class="ids-list-title">
            <li class="ids-wrap-title ids-wrap-title1">
                <div class="title-big">机构备案信息披露</div>
                <ul class="title-small-list">
                    <li class="ids-title ids-title1 ">
                      <router-link to="/Publish1" class="linkGo">平台备案基本信息</router-link>

                    </li>
                    <li class="ids-title ids-title3 ">
                    <router-link to="/Publish2" class="linkGo">机构风险管理信息披露</router-link>

                    </li>
                    <li class="ids-title ids-title4">
                    <router-link to="/Publish3" class="linkGo">信息安全等级测评报告</router-link>

                    </li>
                </ul>
            </li>
            <li class="ids-wrap-title ids-wrap-title2">
                <div class="title-big ids-title">
                <router-link to="/Publish4" class="linkGo">机构组织信息披露</router-link>

                </div>
            </li>

            <li class="ids-wrap-title ids-wrap-title5">
                <div class="title-big ids-title">
                <router-link to="/Publish5" class="linkGo">收费标准信息披露</router-link>

                </div>
            </li>
            <li class="ids-wrap-title ids-wrap-title6">
                <div class="title-big ids-title">
                <router-link to="/Publish6" class="linkGo">安全保障</router-link>

                </div>
            </li>
            <li class="ids-wrap-title ids-wrap-title7">
                <div class="title-big">其他重要信息披露</div>
                <ul class="title-small-list">
                    <li class="ids-title ids-title1">
                    <router-link to="/Publish7" class="linkGo">信息安全测评认证</router-link>

                    </li>
                    <li class="ids-title ids-title2">
                    <router-link to="/Publish8" class="linkGo">平台运营报告</router-link>

                    </li>
                    <li class="ids-title ids-title3">
                    <router-link to="/Publish9" class="linkGo">平台其他披露</router-link>

                    </li>
                </ul>
            </li>
            <li class="ids-wrap-title ids-wrap-title8">
                <div class="title-big ids-title">
                <router-link to="/Publish10" class="linkGo">资质与荣誉</router-link>

                </div>
            </li>

  </ul>
  <div style="clear:both"></div>
  </div>
</template>
<script>
  export default {
  data () {
    return {

    }

  },
  methods:{

  }
}
</script>
<style>
#publish{
  width: 266px;
  float: left;
}
.ids-list-title {
  width: 266px;
  padding: 45px 0 100px 0;
  float: left;
  letter-spacing: 1px;
  float: left;
}
.ids-wrap-title .title-small-list {
  padding-top: 5px;
  padding-bottom: 10px;
}
.ids-wrap-title .title-big {
  line-height: 56px;
  width: 100%;
  overflow: hidden;
  font-size: 18px;
  color: #333333;
  font-family: '微软雅黑'
}
.ids-title {
  cursor: pointer;
  position: relative;
}
.ids-wrap-title .title-small-list .ids-title {
  line-height: 36px;
  font-size: 14px;
  color: #666666;
  text-indent: 2em;
  font-family: '微软雅黑'
}

.ids-list-content {
  width: 725px;
  float: left;
}
.ids-content {
  width: 100%;
  display: none;
}
.ids-wrap-title .title-small-list .ids-title a{
  display: block;
   line-height: 23px;
   font-size: 14px;
   color: #4c6071;
   text-indent: 1.5em;
   margin: 9px 0;
}
.ids-wrap-title .title-big a{
  display: block;
  line-height: 23px;
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  color: #001c35;
  margin: 12px 0;
}
.ids-wrap-title .title-small-list .ids-title .router-link-active{
    color: #ff6769;
    border-right: 2px solid #ff6769;
}
.ids-wrap-title .title-big .router-link-active{
    color: #ff6769;
    border-right: 2px solid #ff6769;
}
.title-page {
    text-align: left;
    margin-bottom: 50px;
}
 .title-page span {
    display: inline-block;
    margin-left: 25px;
    margin-top: 23px;
    font-size: 30px;
    padding-bottom: 18px;
    border-bottom: 2px solid #001c35;
    color: #001c35;
}

</style>
