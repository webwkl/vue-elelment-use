<template>
  <div class="about_cjwt01_right">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="1、如何申请债权转让？" name="1">
        <div>登入账户后点击我的账户——债权转让，在可转债权页面点击转让即可；</div>
      </el-collapse-item>
      <el-collapse-item title="2、债权持有人可进行债权转让的项目数量是否有限制？" name="2">
        <div>
        平台可出借债权转让标的数量为5笔，若待转让数量小于5笔，则允许用户再次申请债权；债权持有人可以在每日的10:30将满足转让条件的债权申请转让（周六日支持债权转让）
          </div>
      </el-collapse-item>
      <el-collapse-item title="3、债权转让的条件限制？" name="3">
        <div>
          （1）一月标转让金额不可低于2000元；<br>
         （2）用户已购买债权不可进行二次转让；

        </div>

      </el-collapse-item>
      <el-collapse-item title="4、债权转让是如何收费的？" name="4">
        <div>
        每笔债权转让成功后平台将收取转让方转让金额（本金+红包）的2%作为手续费；
        </div>
      </el-collapse-item>
      <el-collapse-item title="5、债权转让申请后是否可以撤销？" name="5">
        <div>
        （1）转让方申请债权转让后，未有人购买该转让债权时，转让方可撤回该债权转让申请；<br>
       （2）转让方申请债权转让后，7个工作日未转让成功，则视为该次债权转让失败，将自动撤回；
        </div>
      </el-collapse-item>
      <el-collapse-item title="6、债权转让时，转让利率是否有上限？" name="6">
        <div>
        2015年8月6日，最高人民法院发布《关于审理民间借贷案件适用法律若干问题的规定》对民间借贷利率上限进行管控，以基准贷款利率（6%）的四倍（24%）作为利率保护上限，超过该上限将不受法律保护。立诚贷严格遵守国家规定，债权转让利率不超过24%。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
<style >
.el-collapse-item__header{

    padding-left:25px;
    cursor: pointer;
    font-size: 14px;
 }
.el-collapse-item__header:hover{
  color:#ff7800
 }
.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    color:#ff7800;
}
 .el-collapse-item__content{
  padding: 25px 40px 20px 40px;
    color: #838383;
    font-size: 14px;
 }
</style>

