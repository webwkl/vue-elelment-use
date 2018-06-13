<template>
  <div class="problem">
     <div class="wdzh_list">
         <ul>
            <div class="cjwt_cjwt">
                <span class="cjwt_title">常见问题</span>
            </div>
            <li class="current">
                <router-link to="/Problem1" class="linkGo" >注册与登陆</router-link>
            </li>
            <li >
                <router-link to="/Problem2" class="linkGo" >充值与提现</router-link>
            </li>
            <li >
                <router-link to="/Problem3" class="linkGo" >债权转让</router-link>
            </li>
            <li>
                <router-link to="/Problem4" class="linkGo" >安全与保障</router-link>
            </li>
            <li>
                <router-link to="/Problem5" class="linkGo" >银行存管</router-link>
            </li>

        </ul>
     </div>
</div>
</template>
<script>

</script>
<style scoped>
.cjwt_cjwt {
    width: 178px;
    height: 45px;
    position: relative;
    border-bottom: 1px solid #dddddd;
    line-height: 46px;
    text-align: center;
    overflow: hidden;
}
.wdzh_list {
    width: 178px;
    float: left;
    border: 1px solid #e3e3e3;
    border-bottom: 0;
}
.cjwt_title {
    font-size: 18px;
}

.wdzh_list ul li a{
  display: block;
     height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #e3e3e3;
    text-align: center;
    color: #555;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
}
.wdzh_list ul a:hover{
  color:#ff7800;
}
.wdzh_list ul .router-link-active{
    height: 46px;
    background-color: #ff7800;
    left: -3px;
    position: relative;
    top: -1px;
    width: 185px;
    color: #fff
}
.wdzh_list ul .router-link-active:hover{
  color: #fff;
}

</style>
