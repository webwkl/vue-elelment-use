<template>
  <div class="about_cjwt01_right">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="1、如何保障项目安全？" name="1">
        <div>
        立诚贷设置独立风险控制部门进行项目把关，在原则性尽职调查基础上，实行“因地制宜，分类指导”原则，对相关项目选择从行业——细分行业——企业经营情况——实际控制人道德风险——企业现金流及负债——反担保措施等几个纬度实施审慎考量。
          <br>
         立诚贷平台发布的所有借款项目都是经过严格的风控流程筛选出来的优质项目。通过完善的风控体系对细节风险进行把控，保证用户的权益。
        </div>
      </el-collapse-item>
      <el-collapse-item title="2、立诚贷如何保障账户安全？" name="2">
        <div>
        （1）全站采用HTTPS传输加密协议及对隐私数据进行MD5加密保护；
          <br>
         （2）立诚贷拥有互联网金融技术背景的精英组成专业的技术团队，对数据进行24小时全天不间断监控，对服务可靠性提供充足的技术保障。
          </div>
      </el-collapse-item>
      <el-collapse-item title="3、立诚贷如何保障资金安全？" name="3">
        <div>
          立诚贷已成功接入银行存管系统，出借人资金全部存管于自己独立的银行资金存管账户中，立诚贷不经手用户账户资金，从而避免平台自融及资金池等风险，保障出借人资金安全。

        </div>

      </el-collapse-item>
      <el-collapse-item title="4、立诚贷如何保障信息系统安全？" name="4">
        <div>
       凭借过硬的技术能力与完善的信息安全管理体系，立诚贷获得了由国家公安部门核准颁发认证的“信息系统安全等级保护”三级备案证明，成为业内为数不多获得第三级认证的网络借贷信息中介平台之一。
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
  font-size: 14px;
    padding-left:25px;
    cursor: pointer;
 }
.el-collapse-item__header:hover{
  color:#ff7800
 }
.el-collapse-item__header.is-active {
    border-bottom-color: transparent;
    color:#ff7800;
}
 .el-collapse-item__content{
  font-size: 14px;
  padding: 25px 40px 20px 40px;
    color: #838383;
 }
</style>


