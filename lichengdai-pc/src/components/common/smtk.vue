<template>
  <div id="smtk">
    <div class="smtk_in">
            <p id="tishi">只有通过开户，才能充值，出借，提现。</p>
            <a href="/member/Overview.html" class="smbtn">立即前往开户登记</a>
        <a class="smtk_cha">
            <img src="/Style/images/images/ites2.png">
        </a>
    </div>
</div>
</template>
<script>

</script>
<style scoped>
#smtk {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 1000;
        background: url("/Style/images/xinsy/bbj.png");
    }
    /* 模态框样式 */

    #smtk .smtk_in {
        width: 462px;
        height: 190px;
        margin: 300px auto;
        background-color: #fff;
        padding: 15px;
        text-align: center;
        position: relative;
        border-radius: 7px;
    }

    #smtk .smtk_in p {
        background: url(/Style/images/xinsy/smicon.png)center left no-repeat;
        padding-left: 25px;
        width: 380px;
        margin: 0 auto;
        font-size: 18px;
        text-align: left;
        margin-top: 60px;
    }

    .smtk_cha {
        font-size: 25px;
        color: #ccc;
        position: absolute;
        top: 17px;
        right: 19px;
        cursor: pointer;
    }

    .smbtn {
        width: 170px;
        height: 43px;
        background: #ff7800;
        display: block;
        font-size: 18px;
        color: #fff;
        line-height: 43px;
        margin: 30px auto;
        border-radius: 5px;
        text-decoration:none
    }
</style>
