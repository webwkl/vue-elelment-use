<template>
<div class="info_box">
<Header></Header>
<div class="info_content">
 <div class="touzwr">
    <h3>
         {{items.borrow_arr.borrow_name}}
    </h3>
      <span><a href="#" target="_blank"> （借款协议范本）</a></span>
      </div>
   <div class="touzye">
                                <p class="vip_p" >温馨提示：本项目不可使用加息劵和红包</p>
    <div class="toyelf">
      <div class="toyelw">
                  <h2>12%</h2>        <h3>目标年化利率</h3>
        <span>发布时间：{{items.borrow_arr.first_verify_time}}</span>
        <span>募集截止时间：{{items.borrow_arr.deadline}}</span>
        <span>募集时间：{{items.borrow_arr.collect_day}}天</span>
        <!-- vip -->
        <span class="topvip" style="background: url(/static/img/toppage1/vip_jb.png) no-repeat;" v-if="items.borrow_arr.new_hand==='3'"></span>
        <!-- 新手 -->
        <span class="topvip" style="background: url(/static/img/toppage1/l_left_l.png) no-repeat;" v-else-if="items.borrow_arr.new_hand==='1'"></span>
        <span class="topvip" v-else-if="items.borrow_arr.new_hand!= '1' && items.borrow_arr.exclusive==='1'"></span>

      </div>
      <div class="toyetu">
        <img src="/static/images/detail/tp02.jpg" alt=""/>
      </div>
      <div class="toyelw">
                <input type="hidden" id="deadline" value="12"/>
                <h4  v-if='items.borrow_arr.is_week==="0"'>
                    {{items.borrow_arr.borrow_duration}}个月
                  </h4>
                  <h4 v-else-if='items.borrow_arr.is_week==="1"'>
                    {{items.borrow_arr.borrow_duration}}周
                  </h4>
                  <h4 v-else-if='items.borrow_arr.is_week==="2"'>
                    {{items.borrow_arr.borrow_duration}}天
                  </h4>
        <h3>项目期限</h3>
        <span>项目类型：
            {{items.borrow_arr.borrow_type | borrowType}}
                    </span>
        <span>还款方式：
        {{items.borrow_arr.repayment_type | Repayment}}
                </span>
        <span>计息方式：满标复审后计息</span>

      </div>
      <div class="toyetu">
        <img src="/static/images/detail/tp02.jpg" alt=""/>
      </div>
      <div class="toyelw">
        <h4>{{items.borrow_arr.borrow_money}}</h4>
        <h3>项目金额</h3>
                            <span>出借金额：50元起加入</span>        <span>剩余可出借：
                                <a style="color: #ff8385">{{items.borrow_arr.shengyu}}</a>元</span>
                <div class="jind">
                   <a>出借进度：</a>
                   <div class="jidt">
                                                  <i :style="{width:items.borrow_arr.progress + '%' }"></i>                   </div>
                    <em>{{items.borrow_arr.progress}}%</em>
                </div>
      </div>
    </div>
    <input type="hidden" id="deadline" value="12"/>
    <div class="toyeri">
            <div class="toerst" v-if="username">
               <p>
                可用余额：
                <b class="ft">{{items.investInfo.account_money}}</b>&nbsp;元
              </p>
              <span>
                <a href="#" v-if="items.memberStatus!='1' && items.uid>0" @click='shezhi'>充值</a>
                <a href="#" v-else-if="items.qdd_marked='' && items.uid>0" @click='shezhi'>充值</a>
                <a href="/Account" v-else>充值</a>
              </span>
              </div>
        <form action="" method="get">
         <input  placeholder="1000元起加入，需为10的整倍数" v-model='money'  name="" type="text" class="toerou" id="investmoney"  maxlength="28" v-if="items.borrow_arr.new_hand=='1'"  @blur="show()" />

         <input  :placeholder="items.borrow_arr.borrow_min +'元起加入  此为活动专享标的' "  v-model='money'  name="" type="text" class="toerou" id="investmoney"  maxlength="28" v-else-if="items.borrow_arr.exclusive=='2'" @blur="show()" />
        <!--  <input  :placeholder="items.borrow_arr.borrow_min 元起加入  此为活动专享标的"  name="" type="text" class="toerou" id="investmoney"   maxlength="28" v-else-if="items.borrow_arr.exclusive=='2'" /> -->
        <input  placeholder="50元起加入，需为10的整倍数"  v-model='money'  name="" type="text" class="toerou" id="investmoney" maxlength="28" @blur="show()"   />

        </form>
      <div id="toebao">
                <div id="rawrap" style="display: none;">
                    <ul>
                        <li>
                            <img src="/static/images/detail/tp19.jpg" alt="" style="display: none;" />
                            <i class="checked" id="yincang" ><img src="/static/images/detail/tp20.jpg" alt="" /></i>
                        </li>
                    </ul>
                </div>
        <div class="pronce">
                   <span style="background:none" v-if='this.reg.length==0'>没有可用红包</span>
                    <span style="background:none" v-else @click='selectreg()'>{{mesg}}</span>
                     <ul id="allprovince" v-show='regShow' v-if='this.reg.length!=0' >
                     <li v-for="(item,index) in this.reg" :key='index' @click="select(item.type,item.leixing,item.money)">
                     <input type="hidden" value="{$i.leixing}" id="leixing">
                      <input type="hidden" value="{$i.id}" id="hongid">
                      <input type="hidden" value="{$i.money}" id="redmoney">
                        <p class="newstyle_h" v-if="item.leixing=='1'">{{item.type}}：出借满{{item.des}}元可用<br>期限：{{item.borrow_duration}}个月及以上&nbsp;&nbsp;截止：{{item.end_date}}<a class="s_span">{{item.money}}元</a></p>
                        <p class="newstyle_x" v-else-if="item.leixing=='2'">{{item.type}}：出借满{{item.des}}元可用<br>期限：{{item.borrow_duration}}个月及以上&nbsp;&nbsp;截止：{{item.end_date}}<a class="s_span">{{item.money}}%</a></p>
                    </li>
                    </ul>

        </div>
      </div>
            <div class="toerst2">
                <!--<p class="p1">
          预期收益：<a id="interest">0.00</a>
        </p>-->
               <!-- -->
      </div>
      <div class="liqtou">
                     <!-- <a class="ljtb" href="javascript:;" v-if="username==false" style="background: #ff6769"  :title="items.borrow_arr.borrow_name" >登录后加入</a> -->

                    <img  src="/static/img/toppage1/over4.jpg" v-if="items.borrow_arr.borrow_status==='7'">
                    <img  src="/static/img/toppage1/over3.jpg" v-else-if="items.borrow_arr.borrow_status==='6'">
                     <a href="javascript:;"  style="border-color:#ccc ;color: #999;background:#ccc" v-else-if='items.borrow_arr.borrow_status!="3" && items.borrow_arr.progress>=100 ' >复审中</a>
                      <button  class="  hovera" :disabled="disabled"    v-else-if="items.borrow_arr.can_auto_time >startTime" @click="errorShow()" :title="items.borrow_arr.borrow_name">
                     <countdown :endTime='items.can_auto_time'  :callback="callback" endText="立即加入"></countdown>
                   </button>
                     <a class="ljtb" href="javascript:;" v-else-if="username==false" style="background: #ff6769"  :title="items.borrow_arr.borrow_name" @click="login" >登录后加入</a>
                    <a  title="开户" v-else-if="items.vo.id_status=='0' && items.uid>'0'" class="hovera" href="javascript:;" @click='shezhi()'>立即加入</a>
                    <a  title="绑卡" v-else-if="items.bank_loan=='00' && items.uid>0" class="hovera" href="/overview/bank">立即加入</a>
                    <a  title="设置支付密码" class="manb" v-else-if="items.set_paypass=='N' && items.uid>'0'" href="/overview/Accountsecurity">立即加入</a>
                    <a class="ljtb" href="javascript:;" v-else-if="items.cfca =='1' && this.username==true  " :title="items.borrow_arr.borrow_name" @click="errorShow()">立即加入</a>
                    <a class="ljtb" href="javascript:;" v-else-if="items.cfca =='0' && this.username==true  " :title="items.borrow_arr.borrow_name" @click="cfcaShow()">立即加入</a>
                    <a class="hovera" href="javascript:;" :title="items.borrow_arr.borrow_name" @click="chujie()" v-else >立即加入</a>

      </div>
    </div>
  </div>
   <div class="naver">
          <ul id="tab" v-if='borrowType==13'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>借款人信息</h3>
                                <div class=" sannong" style=" border-bottom:none;">
                                            <p >
                                                姓名：
                                            </p>
                                            <em>{{items.borrow_arr.debtor}}</em>
                                            <p>
                                                性别：
                                            </p>
                                            <em>{{items.borrow_arr.sex}}</em>
                                            <p>
                                                年龄：
                                            </p>
                                            <em>{{items.borrow_arr.age}}</em>
                                             <p style=" border-left:none;">
                                                户籍：
                                            </p>
                                            <em>{{items.borrow_arr.place_domicile}}</em>

                                     </div>
                                <div class=" sannong" style="">

                                            <p>
                                                婚姻状况：
                                            </p>
                                            <em>已婚</em>
                                            <p>
                                                土地面积：
                                            </p>
                                            <em>{{items.borrow_arr.land_area}}亩</em>
                                            <p>
                                                承包合同编号：
                                            </p>
                                            <em>{{items.borrow_arr.contract_num}}</em>
                                            <p style=" border-left:none;">
                                                作物类别：
                                            </p>
                                            <em>{{items.borrow_arr.crop_categories}}</em>


                            </div>

                          <h3>项目介绍</h3>

                            <!-- 三农 -->

                            <div class="xmusa" style=" border-bottom:none;">
                                 <div class="xmulf">
                                     <p>
                                         项目详情
                                     </p>
                                 </div>
                                 <div class="xmuri">
                                     <p>
                                         “三农计划”是信广立诚贷推出的新场景项目，该项目面对借款人群主要为农户，依托农业生产场景，为农户必需的农资消费提供资金，帮助农户稳定生产，提高农户收入。
                                     </p>
                                 </div>
                            </div>
                          <div class="xmusa" style=" border-bottom:none;">
                                 <div class="xmulf">
                                     <p>
                                         项目优势
                                     </p>
                                 </div>
                                 <div class="xmuri">
                                    <p>场景消费，资金用途明确可控</p>
                                 </div>
                           </div>
                           <div class="xmusa" style=" border-bottom:none;">
                                 <div class="xmulf">
                                     <p>
                                         借款用途
                                     </p>
                                 </div>
                                 <div class="xmuri">
                                     <p>种子、化肥等农资消费</p>
                                 </div>
                           </div>
                           <div class="xmusa">
                                 <div class="xmulf">
                                     <p>
                                         还款来源
                                     </p>
                                 </div>
                             <div class="xmuri">
                                 <p>
                                土地种植农作物出售等
                                </p>

                             </div>
                           </div>


                          <h3>风控审查项目</h3>
                            <!-- 精英 -->
                            <div class="table">
                               <p class="p_title">项目详情</p>
                               <p class="p_title p1" >状态</p>
                               <p>身份信息</p>
                               <p  class="p1">已认证</p>
                               <p>手机认证</p>
                               <p  class="p1">已认证</p>
                               <p>居住信息</p>
                               <p  class="p1">已认证</p>
                               <p>借款合同</p>
                               <p  class="p1">已认证</p>
                               <p>土地租赁合同</p>
                               <p  class="p1">已认证</p>
                               <p>农资买卖合同</p>
                               <p  class="p1">已认证</p>
                               <p style="margin-bottom: 20px;">委托付款协议</p>
                               <p  class="p1" style="margin-bottom: 20px;">已认证</p>

                             </div>
                        <h3>风险评估</h3>
                        <div style="clear: both;"></div>

                        <!-- 精英 -->
                        <p>根据审核，借款人提供的资料真实有效，借款用途明确，主要还款来源为农作物出售收入，还款意愿和还款能力较强，风险较低，此次借款符合信广立诚贷的借款审核标准。</p>
                        <h3>风险提示及承诺</h3>
                        <p class="p_hover"><a href="/xieyi" style="color: #4c98df" target="_blank">《网络借贷风险和禁止性行为提示书》和《资金来源合法承诺书》</a>、<a href="/signature " style="color: #4c98df" target="_blank">《个人电子签章授权委托书》</a></p>
                         <h3>可能产生的风险结果</h3>
                                       <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    操作风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p>
                                                    不可控制或预测的通信故障、系统故障、设备故障、电力故障等突发事故，有可能给出借人造成一定的损失。由于通信故障、电力故障、系统设备故障等不可抗力因素造成的影响，可能使出借人无法及时做出合理决策或者决策无法执行，对出借人造成一定损失。
                                                </p>
                                            </div>
                                       </div>
                                     <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    政策风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                               <p style="line-height: 40px">平台所属行业是基于当前的国家宏观政策及相关法律法规设计，因国家宏观政策和相关法律法规发生变化，影响系统实时匹配功能服务的正常提供。</p>
                                            </div>
                                      </div>
                                      <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    信用风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p >
                                                  用户出借获得的债权，借款人因不可抗拒因素或其他客观因素导致有还款能力不足或者还款意愿不足的，出现项目逾期的风险，出借用户的本金和收益有可能无法全部或者部分收回。
                                                </p>
                                            </div>
                                      </div>
                                       <div class="xmusa">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    市场风险
                                                </p>
                                            </div>
                            <div class="xmuri">
                                <p>
                                                  由于市场供求关系、利率变动、资产价值波动等不确定的未来市场变化，在发生不利情况下（可能但并不一定发生），可能不利于用户实现项目的预期收益甚至本金遭受损失。
                               </p>
                            </div>
                          </div>
                          <h3>特别提示</h3>
                        <p class="p_hover" style="color: #ff8385;margin-bottom: 30px">本《风险提示》并不保证揭示出借人使用平台提供的服务所面临的全部风险。出借人参与平台借贷服务前，应全面了解相关法律法规，认真阅读相关规则及网站各项协议全部内容，并根据出借人自身的出借目的、出借期限、出借经验、资产状况等情况自行判断是否具备相应的出借风险承受能力。</p>


                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                     <span>
                    <div class="jieku">
                      <div class="content_fengxian">
                      <p class="p_title" style="border-top: 1px solid #cccccc">信息发布前调查</p>
                        <p class="p1" style="border-top: 1px solid #cccccc" >客户准入前引入反欺诈风控系统，对借款人进行黑名单、反欺诈过滤；根据借款人提供的进件资料，对经营环境、还款能力及还款意愿进行综合评估，确定初始授信额度。</p>
                        <p class="p_title" >信息发布中审查</p>
                        <p  class="p1">通过下户与电核相结合的方式，对借款人申请资料信息进行全面审查，确保申请资料真实性、完整性、合规性，以及资金用途的真实性，对借款人还款意愿和还款能力进行分析，撰写调查报告，确定最终授信额度。</p>
                        <p class="p_title">信息发布后管理</p>
                        <p  class="p1">建立借款台账和借款业务管理档案，对借后事项实施跟踪监测。在还款前1-3天内进行还款电话提醒，还款日当天风控人员进行第二次电话提醒，确保借款的安全性及还款的准时性。</p>
                        <p class="p_title">逾期处理</p>
                        <p  class="p1" style="line-height: 75px;">账单逾期日开始进行电话催收，逾期超过30天委托律师所发律师函，超过90天我司催收人员进行上门催收或委托律师启动诉讼程序。</p>
                      </div>
                  </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
                  <!-- 投资记录站位 -->
                  <div class="jieku" id="History">
                          <div class="tzilu">
                             <div class="tdiv2">
                                     出借用户
                                 </div>
                                 <div class="tdiv2">
                                     目标年化利率
                                 </div>
                                 <div class="tdiv2">
                                     出借金额
                                 </div>
                                <!-- <div class="tdiv2">
                                     目标利息
                                 </div>-->
                                 <div class="tdiv1">
                                     出借时间
                                 </div>
                            </div>
                                  <div class="tzirt" v-for="(item,index) in listitem">
                                          <div class="tdiv3">
                                              <p>{{item.user_name}}</p>
                                  </div>

                                  <div class="tdiv2">
                                      {{item.borrow_interest_rate}}
                                  </div>
                                  <div class="tdiv2">
                                      {{item.investor_capital}}元
                                  </div>
                                 <!-- <div class="tdiv2">
                                      42.00元
                                  </div>-->
                                  <div class="tdiv1">
                                      {{item.add_time}}
                                       </div>
                                  </div>
                                  <p class="nullmessage">{{nullmessage}}</p>
                                  <div class="page" v-show='nullShow'>
                                   <el-pagination
                                    background
                                     @current-change ="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                    :page-size="pagesize"
                                    :total="totalCount"
                                    layout="prev, pager, next"
                                    >
                                  </el-pagination>
                                </div>
                  </div>
                  </span>
               </div>
              </el-tab-pane>
              </el-tabs>
            <!-- <li>贷后跟踪</li> -->
          </ul>
          <ul id="tab" v-else-if='borrowType==14'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>借款人信息</h3>
                                <div class="kuxtr" style=" border-bottom:none;">
                                            <p style=" border-left:none;">
                                                姓名
                                            </p>
                                            <em>{{items.borrow_arr.identity_name}}</em>
                                            <p>
                                                性别
                                            </p>
                                            <em>{{items.borrow_arr.sex}}</em>

                                     </div>
                                     <div class="kuxtr">
                                            <p style=" border-left:none;">
                                                年龄
                                            </p>
                                            <em>{{items.borrow_arr.age}}岁</em>
                                            <p>
                                                学历
                                            </p>
                                            <em>{{items.borrow_arr.education}}</em>
                            </div>
                              <div class="kuxtr" style="border-top: none">
                                              <p style=" border-left:none;">
                                                户籍
                                            </p>
                                            <em>{{items.borrow_arr.koseki}}</em>
                                            <p>
                                                婚姻状况
                                            </p>
                                            <em>{{items.borrow_arr.Marriage}}</em>


                            </div>

                            <!--</div>-->
                          <h3>项目介绍</h3>
                                       <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p>
                                                    项目详情
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p>
                                                    {{items.borrow_arr.product_description}}
                                                </p>
                                            </div>
                                       </div>
                                     <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p>
                                                    项目优势
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                               <p>{{items.borrow_arr.project_benefits}}</p>
                                            </div>
                                      </div>
                                      <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p>
                                                    资金用途
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                               <p>{{items.borrow_arr.Purpose}}</p>
                                            </div>
                                      </div>
                                      <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p>
                                                    还款来源
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p>{{items.borrow_arr.repaying_source}}</p>
                                            </div>
                                      </div>
                                      <div class="xmusa">
                                            <div class="xmulf">
                                                <p>
                                                    购车品牌型号
                                                </p>
                                            </div>
                                        <div class="xmuri">
                                            <!-- 内容 需挂<p> 和 <br/> 标签-->
                                            <p>
                                           {{items.borrow_arr.car_license_plate}}

                                           </p>

                                        </div>
                                      </div>

                          <h3>风控审查项目</h3>
                          <div class="table">
                          <p class="p_title">项目详情</p>
                          <p class="p_title p1" >状态</p>
                          <p>身份信息</p>
                          <p  class="p1">已认证</p>
                          <p>联系方式</p>
                          <p  class="p1">已认证</p>
                          <p>银行批贷函</p>
                          <p  class="p1">已认证</p>
                          <p>购车合同</p>
                          <p  class="p1">已认证</p>
                          <p>借款合同</p>
                          <p  class="p1">已认证</p>
                          <p style="margin-bottom: 20px;">风控模型</p>
                          <p  class="p1" style="margin-bottom: 20px;">已认证</p>

                        </div>
                        <h3>风险评估</h3>
                        <div style="clear: both;"></div>
                        <p>{{items.borrow_arr.due_diligence}}</p>
                        <!-- 精英 -->
                        <!-- <p>根据审核，借款人所提供资料真实有效，借款用途明确，工作收入稳定，还款意愿、能力较强，风险较低，此次借款符合信广立诚贷的借款审核标准。</p> -->
                        <h3>风险提示及承诺</h3>
                        <p class="p_hover"><a href="/xieyi" style="color: #4c98df" target="_blank">《网络借贷风险和禁止性行为提示书》和《资金来源合法承诺书》</a>、<a href="/signature " style="color: #4c98df" target="_blank">《个人电子签章授权委托书》</a></p>
                         <h3>可能产生的风险结果</h3>
                                       <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    操作风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p>
                                                    不可控制或预测的通信故障、系统故障、设备故障、电力故障等突发事故，有可能给出借人造成一定的损失。由于通信故障、电力故障、系统设备故障等不可抗力因素造成的影响，可能使出借人无法及时做出合理决策或者决策无法执行，对出借人造成一定损失。
                                                </p>
                                            </div>
                                       </div>
                                     <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    政策风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                               <p style="line-height: 40px">平台所属行业是基于当前的国家宏观政策及相关法律法规设计，因国家宏观政策和相关法律法规发生变化，影响系统实时匹配功能服务的正常提供。</p>
                                            </div>
                                      </div>
                                      <div class="xmusa" style=" border-bottom:none;">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    信用风险
                                                </p>
                                            </div>
                                            <div class="xmuri">
                                                <p >
                                                  用户出借获得的债权，借款人因不可抗拒因素或其他客观因素导致有还款能力不足或者还款意愿不足的，出现项目逾期的风险，出借用户的本金和收益有可能无法全部或者部分收回。
                                                </p>
                                            </div>
                                      </div>
                                    <div class="xmusa">
                                            <div class="xmulf">
                                                <p style="line-height: 65px">
                                                    市场风险
                                                </p>
                                            </div>
                            <div class="xmuri">
                                <p>
                                                  由于市场供求关系、利率变动、资产价值波动等不确定的未来市场变化，在发生不利情况下（可能但并不一定发生），可能不利于用户实现项目的预期收益甚至本金遭受损失。
                               </p>
                            </div>
                          </div>
                          <h3>特别提示</h3>
                        <p class="p_hover" style="color: #ff8385;margin-bottom: 30px">本《风险提示》并不保证揭示出借人使用平台提供的服务所面临的全部风险。出借人参与平台借贷服务前，应全面了解相关法律法规，认真阅读相关规则及网站各项协议全部内容，并根据出借人自身的出借目的、出借期限、出借经验、资产状况等情况自行判断是否具备相应的出借风险承受能力。</p>

                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                     <span>
                          <div class="jieku">
                            <div class="content_fengxian">
                            <p class="p_title" style="border-top: 1px solid #cccccc">信息发布前调查</p>
                              <p class="p1" style="border-top: 1px solid #cccccc" >客户准入前引入反欺诈风控系统，同时建立起大数据风控模型，对借款人进行黑名单、反欺诈过滤，对借款人整体资信状况和还款能力进行综合评估，系统出具初始授信额度。</p>
                              <p class="p_title p2" style="line-height: 115px;" >信息发布中审查</p>
                              <p  class="p1 p2">对借款人申请资料信息进行全面审查，确保申请资料真实性、完整性、合规性，按要求与借款人进行有效的电话沟通和外网过滤，对借款人还款意愿和还款能力进行分析，撰写调查报告，确定最终授信额度。另外，对借款合同进行审查校验，对客户本人进行当面审核，确保借款用户的资金用途和资料的真实性。</p>
                              <p class="p_title">信息发布后管理</p>
                              <p  class="p1">建立借款台账和借款业务管理档案，对借后事项实施跟踪监测。在还款前1-3天内进行还款电话提醒，还款日当天风控人员进行第二次电话提醒，确保借款的安全性及还款的准时性。</p>
                              <p class="p_title">逾期处理</p>
                              <p  class="p1" style="line-height: 75px;">账单逾期日开始进行电话催收，逾期超过30天委托律师所发律师函，超过90天我司催收人员进行上门催收或委托律师启动诉讼程序。</p>
                            </div>
                        </div>

                      </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
                  <!-- 投资记录站位 -->
                  <div class="jieku" id="History">
                          <div class="tzilu">
                             <div class="tdiv2">
                                     出借用户
                                 </div>
                                 <div class="tdiv2">
                                     目标年化利率
                                 </div>
                                 <div class="tdiv2">
                                     出借金额
                                 </div>
                                <!-- <div class="tdiv2">
                                     目标利息
                                 </div>-->
                                 <div class="tdiv1">
                                     出借时间
                                 </div>
                            </div>
                                  <div class="tzirt" v-for="(item,index) in listitem">
                                          <div class="tdiv3">
                                              <p>{{item.user_name}}</p>

                                  </div>

                                  <div class="tdiv2">
                                      {{item.borrow_interest_rate}}
                                  </div>
                                  <div class="tdiv2">
                                      {{item.investor_capital}}元
                                  </div>
                                 <!-- <div class="tdiv2">
                                      42.00元
                                  </div>-->
                                  <div class="tdiv1">
                                      {{item.add_time}}
                                       </div>
                                  </div>
                                  <p class="nullmessage">{{nullmessage}}</p>
                                  <div class="page" v-show='nullShow'>
                                   <el-pagination
                                    background
                                     @current-change ="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                    :page-size="pagesize"
                                    :total="totalCount"
                                    layout="prev, pager, next"
                                    >
                                  </el-pagination>
                                </div>
                  </div>
                  </span>
               </div>
              </el-tab-pane>
              </el-tabs>
            <!-- <li>贷后跟踪</li> -->
          </ul>
          <ul id="tab" v-else-if='borrowType==15'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                              <div class="jieku">
                                <div class="kuren">
                                  <h3>借款人信息</h3>
                                        <div class="kuxtr" style=" border-bottom:none;">
                                                    <p style=" border-left:none;">
                                                        姓名
                                                    </p>
                                                    <em>{{items.borrow_arr.identity_name}}</em>
                                                    <p>
                                                        性别
                                                    </p>
                                                    <em>{{items.borrow_arr.sex}}</em>

                                             </div>
                                             <div class="kuxtr">
                                                    <p style=" border-left:none;">
                                                        年龄
                                                    </p>
                                                    <em>{{items.borrow_arr.age}}岁</em>
                                                    <p>
                                                        学历
                                                    </p>
                                                    <em>{{items.borrow_arr.education}}</em>
                                    </div>
                                      <div class="kuxtr" style="border-top: none">
                                                      <p style=" border-left:none;">
                                                        户籍
                                                    </p>
                                                    <em>{{items.borrow_arr.koseki}}</em>
                                                    <p>
                                                        婚姻状况
                                                    </p>
                                                    <em>{{items.borrow_arr.Marriage}}</em>


                                    </div>
                                    <!-- 精英 -->
                                    <div class="kuxtr" style="border-top: none">
                                                      <p style=" border-left:none;">
                                                        工作城市
                                                    </p>
                                                    <em>{{items.borrow_arr.rental_address}}</em>
                                    </div>


                                  <h3>项目介绍</h3>

                                    <!-- 精英 -->

                                    <div class="xmusa" style=" border-bottom:none;">
                                         <div class="xmulf">
                                             <p>
                                                 项目详情
                                             </p>
                                         </div>
                                         <div class="xmuri">
                                             <p>
                                                 {{items.borrow_arr.product_description}}
                                             </p>
                                         </div>
                                    </div>
                                  <div class="xmusa" style=" border-bottom:none;">
                                         <div class="xmulf">
                                             <p>
                                                 项目优势
                                             </p>
                                         </div>
                                         <div class="xmuri">
                                            <p>{{items.borrow_arr.project_benefits}}</p>
                                         </div>
                                   </div>
                                   <div class="xmusa" style=" border-bottom:none;">
                                         <div class="xmulf">
                                             <p>
                                                 借款用途
                                             </p>
                                         </div>
                                         <div class="xmuri">
                                             <p>{{items.borrow_arr.Purpose}}</p>
                                         </div>
                                   </div>
                                   <div class="xmusa">
                                         <div class="xmulf">
                                             <p>
                                                 还款来源
                                             </p>
                                         </div>
                                     <div class="xmuri">
                                         <p>
                                        {{items.borrow_arr.repaying_source}}

                                        </p>

                                     </div>
                                   </div>


                                  <h3>风控审查项目</h3>
                                    <!-- 精英 -->
                                    <div class="table">
                                       <p class="p_title">项目详情</p>
                                       <p class="p_title p1" >状态</p>
                                       <p>身份信息</p>
                                       <p  class="p1">已认证</p>
                                       <p>银行卡信息</p>
                                       <p  class="p1">已认证</p>
                                       <p>信用报告</p>
                                       <p  class="p1">已认证</p>
                                       <p>收入证明</p>
                                       <p  class="p1">已认证</p>
                                       <p>工作证明</p>
                                       <p  class="p1">已认证</p>
                                       <p style="margin-bottom: 20px;">借款合同</p>
                                       <p  class="p1" style="margin-bottom: 20px;">已认证</p>

                                     </div>
                                <h3>风险评估</h3>
                                <div style="clear: both;"></div>

                                <!-- 精英 -->
                                <p>{{items.borrow_arr.due_diligence}}</p>
                                <h3>风险提示及承诺</h3>
                                <p class="p_hover"><a href="/xieyi" style="color: #4c98df" target="_blank">《网络借贷风险和禁止性行为提示书》和《资金来源合法承诺书》</a>、<a href="/signature " style="color: #4c98df" target="_blank">《个人电子签章授权委托书》</a></p>
                                 <h3>可能产生的风险结果</h3>
                                               <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            操作风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p>
                                                            不可控制或预测的通信故障、系统故障、设备故障、电力故障等突发事故，有可能给出借人造成一定的损失。由于通信故障、电力故障、系统设备故障等不可抗力因素造成的影响，可能使出借人无法及时做出合理决策或者决策无法执行，对出借人造成一定损失。
                                                        </p>
                                                    </div>
                                               </div>
                                             <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            政策风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                       <p style="line-height: 40px">平台所属行业是基于当前的国家宏观政策及相关法律法规设计，因国家宏观政策和相关法律法规发生变化，影响系统实时匹配功能服务的正常提供。</p>
                                                    </div>
                                              </div>
                                              <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            信用风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p >
                                                          用户出借获得的债权，借款人因不可抗拒因素或其他客观因素导致有还款能力不足或者还款意愿不足的，出现项目逾期的风险，出借用户的本金和收益有可能无法全部或者部分收回。
                                                        </p>
                                                    </div>
                                              </div>
                                               <div class="xmusa">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            市场风险
                                                        </p>
                                                    </div>
                                    <div class="xmuri">
                                        <p>
                                                          由于市场供求关系、利率变动、资产价值波动等不确定的未来市场变化，在发生不利情况下（可能但并不一定发生），可能不利于用户实现项目的预期收益甚至本金遭受损失。
                                       </p>
                                    </div>
                                  </div>
                                  <h3>特别提示</h3>
                                <p class="p_hover" style="color: #ff8385;margin-bottom: 30px">本《风险提示》并不保证揭示出借人使用平台提供的服务所面临的全部风险。出借人参与平台借贷服务前，应全面了解相关法律法规，认真阅读相关规则及网站各项协议全部内容，并根据出借人自身的出借目的、出借期限、出借经验、资产状况等情况自行判断是否具备相应的出借风险承受能力。</p>


                                </div>
                              </div>
                    </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                     <span>
                          <div class="jieku">
                            <div class="content_fengxian">
                            <p class="p_title" style="border-top: 1px solid #cccccc">信息发布前调查</p>
                              <p class="p1" style="border-top: 1px solid #cccccc" >客户准入前引入反欺诈风控系统，同时建立起大数据风控模型，对借款人进行黑名单、反欺诈过滤，对借款人整体资信状况和还款能力进行综合评估，系统出具初始授信额度。</p>
                              <p class="p_title p2" style="line-height: 115px;" >信息发布中审查</p>
                              <p  class="p1 p2">对借款人申请资料信息进行全面审查，确保申请资料真实性、完整性、合规性，按要求与借款人进行有效的电话沟通和外网过滤，对借款人还款意愿和还款能力进行分析，撰写调查报告，确定最终授信额度。另外，对借款合同进行审查校验，对客户本人进行当面审核，确保借款用户的资金用途和资料的真实性。</p>
                              <p class="p_title">信息发布后管理</p>
                              <p  class="p1">建立借款台账和借款业务管理档案，对借后事项实施跟踪监测。在还款前1-3天内进行还款电话提醒，还款日当天风控人员进行第二次电话提醒，确保借款的安全性及还款的准时性。</p>
                              <p class="p_title">逾期处理</p>
                              <p  class="p1" style="line-height: 75px;">账单逾期日开始进行电话催收，逾期超过30天委托律师所发律师函，超过90天我司催收人员进行上门催收或委托律师启动诉讼程序。</p>
                            </div>
                        </div>

                      </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
                  <!-- 投资记录站位 -->
                  <div class="jieku" id="History">
                          <div class="tzilu">
                             <div class="tdiv2">
                                     出借用户
                                 </div>
                                 <div class="tdiv2">
                                     目标年化利率
                                 </div>
                                 <div class="tdiv2">
                                     出借金额
                                 </div>
                                <!-- <div class="tdiv2">
                                     目标利息
                                 </div>-->
                                 <div class="tdiv1">
                                     出借时间
                                 </div>
                            </div>
                                  <div class="tzirt" v-for="(item,index) in listitem">
                                          <div class="tdiv3">
                                              <p>{{item.user_name}}</p>

                                  </div>

                                  <div class="tdiv2">
                                      {{item.borrow_interest_rate}}
                                  </div>
                                  <div class="tdiv2">
                                      {{item.investor_capital}}元
                                  </div>
                                 <!-- <div class="tdiv2">
                                      42.00元
                                  </div>-->
                                  <div class="tdiv1">
                                      {{item.add_time}}
                                       </div>
                                  </div>
                                  <p class="nullmessage">{{nullmessage}}</p>
                                  <div class="page" v-show='nullShow'>
                                   <el-pagination
                                    background
                                     @current-change ="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                    :page-size="pagesize"
                                    :total="totalCount"
                                    layout="prev, pager, next"
                                    >
                                  </el-pagination>
                                </div>
                  </div>
                  </span>
               </div>
              </el-tab-pane>
              </el-tabs>
            <!-- <li>贷后跟踪</li> -->
          </ul>
          <ul id="tab" v-else-if='borrowType==11 '>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                              <div class="jieku">
                                <div class="kuren">
                                  <h3>借款人信息</h3>
                                                             <div class="kuxtr" style=" border-bottom:none;">
                                                    <p style=" border-left:none;">
                                                        姓名
                                                    </p>
                                                    <em>{{items.borrow_arr.identity_name}}</em>
                                                    <p>
                                                        性别
                                                    </p>
                                                    <em>{{items.borrow_arr.sex}}</em>


                                             </div>
                                             <div class="kuxtr" style=" border-bottom:none;">
                                                    <p style=" border-left:none;">
                                                        年龄
                                                    </p>
                                                    <em>{{items.borrow_arr.age}}岁</em>
                                                    <p>
                                                        户籍
                                                    </p>
                                                    <em>{{items.borrow_arr.koseki}}</em>
                                    </div>
                                      <div class="kuxtr">
                                                    <p style=" border-left:none;">
                                                        婚姻状况
                                                    </p>
                                                    <em>{{items.borrow_arr.Marriage}}</em>
                                                    <p>
                                                        文化程度
                                                    </p>
                                                    <em>{{items.borrow_arr.education}}</em>

                                    </div>



                                  <h3>项目介绍</h3>
                                   <div class="xmusa" style=" border-bottom:none;">
                                        <div class="xmulf">
                                            <p>
                                                项目详情
                                            </p>
                                        </div>
                                        <div class="xmuri">
                                            <p>
                                                {{items.borrow_arr.product_description}}
                                            </p>
                                        </div>
                                   </div>
                                 <div class="xmusa" style=" border-bottom:none;">
                                        <div class="xmulf">
                                            <p>
                                                项目优势
                                            </p>
                                        </div>
                                        <div class="xmuri">
                                           <p>{{items.borrow_arr.project_benefits}}</p>
                                        </div>
                                  </div>
                                  <div class="xmusa" style=" border-bottom:none;">
                                        <div class="xmulf">
                                            <p>
                                                借款用途
                                            </p>
                                        </div>
                                        <div class="xmuri">
                                            <p>{{items.borrow_arr.Purpose}}</p>
                                        </div>
                                  </div>
                                  <div class="xmusa">
                                        <div class="xmulf">
                                            <p>
                                                还款来源
                                            </p>
                                        </div>
                        <div class="xmuri">
                            <!-- 内容 需挂<p> 和 <br/> 标签-->
                            <p>
                           {{items.borrow_arr.repaying_source}}

                           </p>

                        </div>
                      </div>
                                  <h3>风控审查项目</h3>
                                   <div class="inspect">
                                    <!-- 精英 -->
                                    <div style="width: 100%;line-height: 40px;">
                                      <p style="width: 242px;display: inline-block;">身份信息：<i>已认证</i></p>
                                      <p style="width: 242px;display: inline-block;">手机认证：<i>已认证</i></p>
                                      <p style="width: 242px;display: inline-block;">居住信息<i>已认证</i></p>
                                      </div>
                                      <div style="width: 100%;line-height: 40px;margin-bottom: 40px">
                                      <p style="width: 242px;display: inline-block;">征信记录：<i>已认证</i></p>
                                      <p style="width: 242px;display: inline-block;">借款合同：<i>已认证</i></p>
                                      </div>
                                    </div>
                                <h3>风险评估</h3>
                                <div style="clear: both;"></div>

                                <!-- 精英 -->
                                <p>{{items.borrow_arr.due_diligence}}</p>
                                <h3>风险提示及承诺</h3>
                                <p class="p_hover"><a href="/xieyi" style="color: #4c98df" target="_blank">《网络借贷风险和禁止性行为提示书》和《资金来源合法承诺书》</a>、<a href="/signature " style="color: #4c98df" target="_blank">《个人电子签章授权委托书》</a></p>
                                 <h3>可能产生的风险结果</h3>
                                               <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            操作风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p>
                                                            不可控制或预测的通信故障、系统故障、设备故障、电力故障等突发事故，有可能给出借人造成一定的损失。由于通信故障、电力故障、系统设备故障等不可抗力因素造成的影响，可能使出借人无法及时做出合理决策或者决策无法执行，对出借人造成一定损失。
                                                        </p>
                                                    </div>
                                               </div>
                                             <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            政策风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                       <p style="line-height: 40px">平台所属行业是基于当前的国家宏观政策及相关法律法规设计，因国家宏观政策和相关法律法规发生变化，影响系统实时匹配功能服务的正常提供。</p>
                                                    </div>
                                              </div>
                                              <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            信用风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p >
                                                          用户出借获得的债权，借款人因不可抗拒因素或其他客观因素导致有还款能力不足或者还款意愿不足的，出现项目逾期的风险，出借用户的本金和收益有可能无法全部或者部分收回。
                                                        </p>
                                                    </div>
                                              </div>
                                               <div class="xmusa">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            市场风险
                                                        </p>
                                                    </div>
                                    <div class="xmuri">
                                        <p>
                                                          由于市场供求关系、利率变动、资产价值波动等不确定的未来市场变化，在发生不利情况下（可能但并不一定发生），可能不利于用户实现项目的预期收益甚至本金遭受损失。
                                       </p>
                                    </div>
                                  </div>
                                  <h3>特别提示</h3>
                                <p class="p_hover" style="color: #ff8385;margin-bottom: 30px">本《风险提示》并不保证揭示出借人使用平台提供的服务所面临的全部风险。出借人参与平台借贷服务前，应全面了解相关法律法规，认真阅读相关规则及网站各项协议全部内容，并根据出借人自身的出借目的、出借期限、出借经验、资产状况等情况自行判断是否具备相应的出借风险承受能力。</p>


                                </div>
                              </div>
                    </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                     <span>
                          <div class="jieku">
                            <div class="content_fengxian">
                            <p class="p_title" style="border-top: 1px solid #cccccc">信息发布前调查</p>
                              <p class="p1" style="border-top: 1px solid #cccccc" >客户准入前引入反欺诈风控系统，同时建立起大数据风控模型，对借款人进行黑名单、反欺诈过滤，对借款人整体资信状况和还款能力进行综合评估，系统出具初始授信额度。</p>
                              <p class="p_title p2" style="line-height: 115px;" >信息发布中审查</p>
                              <p  class="p1 p2">对借款人申请资料信息进行全面审查，确保申请资料真实性、完整性、合规性，按要求与借款人进行有效的电话沟通和外网过滤，对借款人还款意愿和还款能力进行分析，撰写调查报告，确定最终授信额度。另外，对借款合同进行审查校验，对客户本人进行当面审核，确保借款用户的资金用途和资料的真实性。</p>
                              <p class="p_title">信息发布后管理</p>
                              <p  class="p1">建立借款台账和借款业务管理档案，对借后事项实施跟踪监测。在还款前1-3天内进行还款电话提醒，还款日当天风控人员进行第二次电话提醒，确保借款的安全性及还款的准时性。</p>
                              <p class="p_title">逾期处理</p>
                              <p  class="p1" style="line-height: 75px;">账单逾期日开始进行电话催收，逾期超过30天委托律师所发律师函，超过90天我司催收人员进行上门催收或委托律师启动诉讼程序。</p>
                            </div>
                        </div>

                      </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
                  <!-- 投资记录站位 -->
                  <div class="jieku" id="History">
                          <div class="tzilu">
                             <div class="tdiv2">
                                     出借用户
                                 </div>
                                 <div class="tdiv2">
                                     目标年化利率
                                 </div>
                                 <div class="tdiv2">
                                     出借金额
                                 </div>
                                <!-- <div class="tdiv2">
                                     目标利息
                                 </div>-->
                                 <div class="tdiv1">
                                     出借时间
                                 </div>
                            </div>
                                  <div class="tzirt" v-for="(item,index) in listitem">
                                          <div class="tdiv3">
                                              <p>{{item.user_name}}</p>

                                  </div>

                                  <div class="tdiv2">
                                      {{item.borrow_interest_rate}}
                                  </div>
                                  <div class="tdiv2">
                                      {{item.investor_capital}}元
                                  </div>
                                 <!-- <div class="tdiv2">
                                      42.00元
                                  </div>-->
                                  <div class="tdiv1">
                                      {{item.add_time}}
                                       </div>
                                  </div>
                                  <p class="nullmessage">{{nullmessage}}</p>
                                  <div class="page" v-show='nullShow'>
                                   <el-pagination
                                    background
                                     @current-change ="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                    :page-size="pagesize"
                                    :total="totalCount"
                                    layout="prev, pager, next"
                                    >
                                  </el-pagination>
                                </div>
                  </div>
                  </span>
               </div>
              </el-tab-pane>
              </el-tabs>
            <!-- <li>贷后跟踪</li> -->
          </ul>
          <ul id="tab" v-else-if='borrowType==12 '>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                              <div class="jieku">
                                <div class="kuren">
                                  <h3>借款人信息</h3>
                                <div class="kuxtr" style=" border-bottom:none;">
                                        <p style=" border-left:none;">
                                            姓名
                                        </p>
                                        <em>{{items.borrow_arr.identity_name}}</em>
                                        <p>
                                            性别
                                        </p>
                                        <em>{{items.borrow_arr.sex}}</em>

                                 </div>
                                 <div class="kuxtr" style=" border-bottom:none;">
                                        <p style=" border-left:none;">
                                            年龄
                                        </p>
                                        <em>{{items.borrow_arr.age}}岁</em>
                                        <p>
                                            证件号码
                                        </p>
                                        <em>{{items.borrow_arr.identity_card}}</em>
                        </div>
                          <div class="kuxtr" style=" border-bottom:none;">
                                        <p style=" border-left:none;">
                                            婚姻状况
                                        </p>
                                        <em>{{items.borrow_arr.Marriage}}</em>
                                        <p>
                                            文化程度
                                        </p>
                                        <em>{{items.borrow_arr.education}}</em>

                        </div>
                          <div class="kuxtr" style=" border-bottom:none;">
                                        <p style=" border-left:none;">
                                            户籍
                                        </p>
                                        <em>{{items.borrow_arr.koseki}}</em>
                                        <p>
                                            租赁期限
                                        </p>
                                        <em>{{items.borrow_arr.lease_time}}月</em>

                        </div>
                          <div class="kuxtr">

                                        <p style=" border-left:none;">
                                            租房地址
                                        </p>
                                        <em>{{items.borrow_arr.rental_address}}</em>


                        </div>



                                  <h3>项目介绍</h3>
                                   <div class="xmusa" style=" border-bottom:none;">
                                          <div class="xmulf">
                                                        <p>
                                                            项目详情
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p>
                                                            {{items.borrow_arr.product_description}}
                                                        </p>
                                                    </div>
                                               </div>
                                             <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p>
                                                            项目优势
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                       <p>{{items.borrow_arr.project_benefits}}</p>
                                                    </div>
                                              </div>
                                              <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p>
                                                            借款用途
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p>{{items.borrow_arr.Purpose}}</p>
                                                    </div>
                                              </div>
                                              <div class="xmusa">
                                                    <div class="xmulf">
                                                        <p>
                                                            还款方式
                                                        </p>
                                                    </div>
                                    <div class="xmuri">
                                        <!-- 内容 需挂<p> 和 <br/> 标签-->
                                        <p>
                                        {{items.borrow_arr.repayment_type | Repayment}}
                                        </p>
                                    </div>
                                  </div>
                                  <h3>风控审查项目</h3>
                                    <!-- 精英 -->
                                    <div class="inspect">
                                    <div style="width: 100%;line-height: 40px;">
                                    <p style="width: 242px;display: inline-block;">身份信息：<i>已认证</i></p>
                                    <p style="width: 242px;display: inline-block;">信用历史：<i>已认证</i></p>
                                    <p style="width: 242px;display: inline-block;">联系方式：<i>已认证</i></p>
                                    </div>
                                    <div style="width: 100%;line-height: 40px;margin-bottom: 40px">
                                    <p style="width: 242px;display: inline-block;">租赁合同：<i>已认证</i></p>
                                    <p style="width: 242px;display: inline-block;">借款合同：<i>已认证</i></p>
                                    <p style="width: 242px;display: inline-block;">风控模型：<i>已认证</i></p>
                                    </div>
                                    </div>
                                <h3>风险评估</h3>
                                <div style="clear: both;"></div>

                                <!-- 精英 -->
                                <p>{{items.borrow_arr.due_diligence}}</p>
                                <h3>风险提示及承诺</h3>
                                <p class="p_hover"><a href="/xieyi" style="color: #4c98df" target="_blank">《网络借贷风险和禁止性行为提示书》和《资金来源合法承诺书》</a>、<a href="/signature " style="color: #4c98df" target="_blank">《个人电子签章授权委托书》</a></p>
                                 <h3>可能产生的风险结果</h3>
                                               <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            操作风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p>
                                                            不可控制或预测的通信故障、系统故障、设备故障、电力故障等突发事故，有可能给出借人造成一定的损失。由于通信故障、电力故障、系统设备故障等不可抗力因素造成的影响，可能使出借人无法及时做出合理决策或者决策无法执行，对出借人造成一定损失。
                                                        </p>
                                                    </div>
                                               </div>
                                             <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            政策风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                       <p style="line-height: 40px">平台所属行业是基于当前的国家宏观政策及相关法律法规设计，因国家宏观政策和相关法律法规发生变化，影响系统实时匹配功能服务的正常提供。</p>
                                                    </div>
                                              </div>
                                              <div class="xmusa" style=" border-bottom:none;">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            信用风险
                                                        </p>
                                                    </div>
                                                    <div class="xmuri">
                                                        <p >
                                                          用户出借获得的债权，借款人因不可抗拒因素或其他客观因素导致有还款能力不足或者还款意愿不足的，出现项目逾期的风险，出借用户的本金和收益有可能无法全部或者部分收回。
                                                        </p>
                                                    </div>
                                              </div>
                                               <div class="xmusa">
                                                    <div class="xmulf">
                                                        <p style="line-height: 65px">
                                                            市场风险
                                                        </p>
                                                    </div>
                                    <div class="xmuri">
                                        <p>
                                                          由于市场供求关系、利率变动、资产价值波动等不确定的未来市场变化，在发生不利情况下（可能但并不一定发生），可能不利于用户实现项目的预期收益甚至本金遭受损失。
                                       </p>
                                    </div>
                                  </div>
                                  <h3>特别提示</h3>
                                <p class="p_hover" style="color: #ff8385;margin-bottom: 30px">本《风险提示》并不保证揭示出借人使用平台提供的服务所面临的全部风险。出借人参与平台借贷服务前，应全面了解相关法律法规，认真阅读相关规则及网站各项协议全部内容，并根据出借人自身的出借目的、出借期限、出借经验、资产状况等情况自行判断是否具备相应的出借风险承受能力。</p>


                                </div>
                              </div>
                    </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                     <span>
                          <div class="jieku">
                            <div class="content_fengxian">
                            <p class="p_title" style="border-top: 1px solid #cccccc">信息发布前调查</p>
                              <p class="p1" style="border-top: 1px solid #cccccc" >客户准入前引入反欺诈风控系统，同时建立起大数据风控模型，对借款人进行黑名单、反欺诈过滤，对借款人整体资信状况和还款能力进行综合评估，系统出具初始授信额度。</p>
                              <p class="p_title p2" style="line-height: 115px;" >信息发布中审查</p>
                              <p  class="p1 p2">对借款人申请资料信息进行全面审查，确保申请资料真实性、完整性、合规性，按要求与借款人进行有效的电话沟通和外网过滤，对借款人还款意愿和还款能力进行分析，撰写调查报告，确定最终授信额度。另外，对借款合同进行审查校验，对客户本人进行当面审核，确保借款用户的资金用途和资料的真实性。</p>
                              <p class="p_title">信息发布后管理</p>
                              <p  class="p1">建立借款台账和借款业务管理档案，对借后事项实施跟踪监测。在还款前1-3天内进行还款电话提醒，还款日当天风控人员进行第二次电话提醒，确保借款的安全性及还款的准时性。</p>
                              <p class="p_title">逾期处理</p>
                              <p  class="p1" style="line-height: 75px;">账单逾期日开始进行电话催收，逾期超过30天委托律师所发律师函，超过90天我司催收人员进行上门催收或委托律师启动诉讼程序。</p>
                            </div>
                        </div>

                      </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
                  <!-- 投资记录站位 -->
                  <div class="jieku" id="History">
                          <div class="tzilu">
                             <div class="tdiv2">
                                     出借用户
                                 </div>
                                 <div class="tdiv2">
                                     目标年化利率
                                 </div>
                                 <div class="tdiv2">
                                     出借金额
                                 </div>
                                <!-- <div class="tdiv2">
                                     目标利息
                                 </div>-->
                                 <div class="tdiv1">
                                     出借时间
                                 </div>
                            </div>
                                  <div class="tzirt" v-for="(item,index) in listitem">
                                          <div class="tdiv3">
                                              <p>{{item.user_name}}</p>

                                  </div>

                                  <div class="tdiv2">
                                      {{item.borrow_interest_rate}}
                                  </div>
                                  <div class="tdiv2">
                                      {{item.investor_capital}}元
                                  </div>
                                 <!-- <div class="tdiv2">
                                      42.00元
                                  </div>-->
                                  <div class="tdiv1">
                                      {{item.add_time}}
                                       </div>
                                  </div>
                                  <p class="nullmessage">{{nullmessage}}</p>
                                  <div class="page" v-show='nullShow'>
                                   <el-pagination
                                    background
                                     @current-change ="handleCurrentChange"
                                    @size-change="handleSizeChange"
                                    :page-size="pagesize"
                                    :total="totalCount"
                                    layout="prev, pager, next"
                                    >
                                  </el-pagination>
                                </div>
                  </div>
                  </span>
               </div>
              </el-tab-pane>
              </el-tabs>
            <!-- <li>贷后跟踪</li> -->
          </ul>
<!--三农场景-->
    </div>
<div style="clear:both"></div>
</div>
<loginmodal v-show='loginModal'></loginmodal>
<errormodal v-show='errorModal' :message='message'></errormodal>
<assessmentModal v-show='showmodal'></assessmentModal>
<Footer ></Footer>
</div>
</template>
<script>
import loginmodal from './loginModal.vue';
import errormodal from './errorModal.vue';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {delCookie,getCookie} from '@/util/util';
import assessmentModal from '@/components/common/safety2';
import countdown from "../../common/time.vue"
 export default {
    name:'register',
    data () {
      return{
        activeName: 'first',
        startTime:'',
        disabled:true,
        id:'',
        items:{},
        borrowType:'',
        listitem:[],//出借记录
        nullmessage:'',
        pagesize:8,
        totalCount:0,
        nullShow:true,
        username:false,
        message:{},
        investInfo:{},
        money:'',
        reg:[],
        mesg:'请选择红包',
        regShow:false


      }
    },
    components:{
      countdown,
    loginmodal,
    errormodal,
    Header,
    Footer,
    assessmentModal
  },
  computed: {
    loginModal(){
      return this.$store.state.loginModal
    },
    errorModal(){
      return this.$store.state.errorModal
    },
     showmodal(){
               return this.$store.state.assessmentModal
          }
    },
     mounted() {
      this.id=this.$route.query.id;
      this.borrowType=this.$route.query.type
      this. detailClick();
      if(getCookie('u_user_name')){
       this.username=true;

       }else{
        this.username=false;
       }


    },
    methods:{
        detailClick() {
          var params={
                  id:this.id
                }
          this.get('/V1/Investinfo/detail',params)
          .then(res => {
            console.log(res.data.status);
            if(res.data.status==1){
               this.items=res.data;
               this.startTime=res.data.time

               //this.investInfo=res.data.investInfo;
            }
            })
      },
      select(type,val,money){
        if(val=='2'){
          this.mesg=money+'%'+type
          this.regShow=false
        }else{
          this.mesg=money+'元'+type
          this.regShow=false
        }
      },
      selectreg(){
        this.regShow=true
      },
      handleClick(val){
        var tabid=event.target.getAttribute('id');
          var parmes={borrow_id:this.id}
         if(tabid==='tab-third'){
          this.post('/V1/Investinfo/loanlog',parmes).then(res => {
             if(res.data.status==1){
              this.listitem=res.data.info;
              this.totalCount=res.data.count
             }else{
                this.nullmessage='暂无出借记录'
             }
             });


         }
      },
      handleCurrentChange(val){
        var parmes={borrow_id:this.id,p:val};
         this.post('/V1/Investinfo/loanlog',parmes).then(res => {
             if(res.data.status==1){
              this.listitem=res.data.info;

             }else{
                this.nullmessage='暂无出借记录'
             }
             });
      },
      login(){
          this.$store.commit('loginModalshow', true)
      },
      errorShow(){
         this.post('/V1/Assessment/isDone')
        .then(res=>{
           if(res.data.status==1){
               this.chujie()
         }else if(res.data.status==2){
            this.message={
            'show':1,
            'title':'',
            'content':'因您风险评估已过期，需要重新评估！',
            'btn':'立即评估'
          };
          this.$store.commit('errorModalshow', true)
         }
        });
      },
      handleSizeChange(){},
      shezhi(){
      this.message={
        };
      this.$store.commit('errorModalshow', true)
     },
     cfcaShow(){
      this.message={
        'show':2
        };
      this.$store.commit('errorModalshow', true)
     },
     callback(){
         this.disabled=false
     },
    show(){
      if(this.money%10!=0){
        this.message={
          'show':1,
          'title':'出借失败',
          'content':'出借的金额必须是10的整倍数！',
          'btn':'确定'
        };
        this.$store.commit('errorModalshow', true)
      }

     },
     chujie(){
       var date=new Date(new Date()).getTime();
       var endtime=new Date(this.items.borrow_arr.deadline).getTime();
        if(this.money%10!=0 || this.money==''){
        this.message={
          'show':1,
          'title':'出借失败',
          'content':'出借的金额必须是10的整倍数！',
          'btn':'确定'
        };
        this.$store.commit('errorModalshow', true)
      }else if(endtime<date){
       this.message={
          'show':1,
          'title':'出借失败',
          'content':'募集时间已经结束!',
          'btn':'确定'
        };
        this.$store.commit('errorModalshow', true)
      }else if(parseInt(this.items.investInfo.account_money)<parseInt(this.money)){
        this.message={
          'show':1,
          'title':'出借失败',
          'content':'您的金额剩余不足!',
          'btn':'确定'
        };
        this.$store.commit('errorModalshow', true)
      }else{
           var data={
           'borrow_id':this.id,
           'money':this.money
        };
        this.post('/V1/Sinainvest/invest_check',data)
        .then(res=>{
          if(res.data.status==0){
              this.message={
            'show':1,
            'title':'出借失败',
            'content':res.data.message,
            'btn':'确定'
            };
          this.$store.commit('errorModalshow', true)
            }else{
              this.$router.push({
                  path: '/investinfo/confirm',
                  query: {
                    id: this.id,
                    money:this.money,
                    investM:this.money
                  }
                })
            }
        })
      }
     },

     },
    filters:{
　　　　//债转还款方式的转换
         Repayment:function(val){
　　　　　　if(val==4){
               return val='先息后本'
             }else if(val==5){
                return val='一次性还清'
             }else if(val==6){
                return val='等额本息'
             }else{
                return val='先息后本'
             }
　　　　},
     borrowType:function (val) {
       if(val==11){
         return val='周计划'
       }else if(val==15){
         return val='精英计划'
       }else if(val==13){
         return val='三农场景'
       }else{
        return val='车计划'
       }
     }

　　}
  }
</script>
<style>
 .info_box{
  background:#f1f1f1;
}
 .info_content{
  height: auto;
  width: 1200px;
  margin: 0 auto;
}
.touzwr {
    width: 1200px;
    float: left;
    margin-top: 24px;
}
.touzwr h3 {
    width: 830px;
    float: left;
    font-size: 24px;
    color: #333333;
    line-height: 84px;
    font-weight: normal;
}
.touzwr span {
    float: right;
    padding-right: 18px;
    margin-top: 35px;
}
.touzwr span a {
    color: #666;
    font-size: 14px;
}
.touzye {
    width: 1200px;
    float: left;
       position: relative;
    background: #fff;
 }
.vip_p {
    position: absolute;
    bottom: 5px;
    left: 35px;
    font-size: 12px;
    font-family: '微软雅黑';
    color:#ff8385
}
.toyelf {
    width: 802px;
    height: 288px;
    background: #FFF;
    float: left;
}
.toyelw {
    width: 250px;
    float: left;
    height: 288px;
    margin-left: 10px;
}
.toyelw h2 {
    width: 250px;
    line-height: 63px;
    margin-top: 30px;
    color: #ff8385;
    font-size: 50px;
    text-align: center;
    font-weight: normal;
    float: left;
}
.toyelw h3 {
    width: 250px;
    font-size: 16px;
    color: #999;
    line-height: 50px;
    text-align: center;
    margin-bottom: 28px;
    font-weight: normal;
    float: left;
}
.toyelw span {
    float: left;
    font-size: 14px;
    color: #666;
    padding-left: 25px;
    overflow: hidden;
    line-height: 26px;
    width: 210px;
     line-height: 26px;
}
.topvip {
    width: 88px;
    height: 96px;
    background: url(/static/img/toppage1/topvipleft.png) no-repeat;
    position: absolute;
    left: 0;
    top: 0;
}
.toyetu {
    float: left;
    width: 4px;
    height: 200px;
}
.toyelw h4 {
    width: 250px;
    line-height: 63px;
    color: #666;
    padding-top: 30px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    float: left;
}
.jind {
    float: left;
    width: 245px;
    padding-left: 25px;
    font-size: 14px;
    color: #666;
    overflow: hidden;
    line-height: 35px;
}
.jind a {
    float: left;
    color: #666;
}
.jidt {
    position: relative;
    height: 8px;
    margin-top: 13px;
    width: 92px;
    /* border: 1px solid #ddd; */
    border-radius: 5px;
    display: inline-block;
    background: #ebebeb;
}
.jidt i {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 8px;
    background-color: #83c35c;
    border-radius: 4px;
}
.jind em {
    float: right;
    color: #666;
    line-height: 35px;
    font-size: 14px;
}
.toyeri {
    float: right;
    width: 388px;
    background: #FFF;
    height: 288px;
    padding-top: 30px;
}
.toerst {
    width: 318px;
    float: left;
    margin-left: 33px;
}
.toerst p {
    float: left;
    width: 280px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
.ft {
    font-size: 20px;
}
.toerst span {
    float: right;
    line-height: 40px;
    font-size: 14px;
}
.toerst span a {
    color: #999999;
    text-decoration: none;
}
.toerou {
    width: 314px;
    height: 46px;
    float: left;
    border: 2px solid  #ff8385;
    margin-left: 33px;
    line-height: 46px;
    background: #FFF;
    font-size: 16px;
    text-indent: 10px;
    overflow: hidden;
    margin-right: 38px;
    color: #999;
}
#toebao {
    width: 318px;
    float: left;
    margin-left: 33px;
    position: relative;
}
#rawrap {
    width: 15px;
    float: left;
    position: absolute;
    top: 25px;
    left: 8px;
}
.pronce {
    width: 318px;
    height: 35px;
    float: left;
    background: #f8f8f8;
    margin-top: 15px;
    font-size: 12px;
    color: #666;
}
.pronce span {
    width: 318px;
    height: 35px;
    line-height: 35px;
    display: block;
    float: left;
    cursor: pointer;
    font-size: 14px;
    text-indent: 28px;
}
.pronce ul {
    width: 316px;
    background: #FFF;
    list-style: none;
    border: 1px solid #e2e2e2;
    clear: both;
    position: relative;
    left: 0;
    top: 0px;
    top: 0px;
    left: 0px;
    overflow-y: auto!important;
    height: 280px;
}
.pronce ul li p {
  cursor: pointer;
    width: 225px;
    margin-top: 8px;
    height: 40px;
    position: relative;
    line-height: 20px;
    font-size: 12px;
    padding-left: 67px;
    margin-left: 3px;
}

.newstyle_x {
    background: url(/static/images/detail/quan.jpg) left center no-repeat;
}
.newstyle_x .s_span {
    position: absolute;
    left: 0px;
    bottom: 6px;
    width: 55px;
    background: none;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #ff7800;
}
.liqtou {
    width: 220px;
    float: left;
    height: 40px;
    border-radius: 5px;
    margin-left: 83px;
    text-align: center;
    margin-top: 30px;
}


.liqtou a {
    width: 220px;
    display: block;
    text-decoration: none;
    background: #ff6769;
        color: #fff;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    /* margin-top: 30px; */
}
.liqtou button{
    width: 220px;
    display: block;
    text-decoration: none;
    background: #ff6769;
        color: #fff;
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    /* margin-top: 30px; */
}
     .newstyle_x{background: url(/static/images/detail/quan.jpg) left center no-repeat;}
      .newstyle_x .s_span{position: absolute;left: 0px;bottom:6px;;width: 55px;background: none;height: 20px;line-height: 20px;text-align: center;color: #ff7800;}
        .newstyle_h{background: url(/static/images/detail/bao.jpg) left center no-repeat;}
        .newstyle_h .x_span{position: absolute;left: 19px;bottom:9px;;width: 45px;background: none;height: 20px;line-height: 20px;text-align: center;color: #ff7800;}
          .kuxtr{
          border-color:#cccccc;
        }
.naver {
    width: 1200px;
    float: left;
    margin-top: 33px;
    margin-bottom: 30px;
}
.naver {
    width: 1200px;
    float: left;
    margin-top: 33px;
    margin-bottom: 30px;
}
/*.info_content .el-pagination.is-background .el-pager li.active {
    background: #FFF;
    border-top: 2px solid #f79035;
    color: #333;
    font-size: 18px;
}*/
 .info_content .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
   background: #FFF;
    border-top: 2px solid #ff6769;
    color: #333;
    font-size: 18px;
}
.info_content  .is-focus{
  box-shadow: none !important ;
}
 .info_content .el-tabs--card>.el-tabs__header .el-tabs__item{
   float: left;
    width: 168px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    border:none;
}
.info_content .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0;
}
.info_content .el-tabs .el-tabs__header{
     border-bottom: none;

}
.info_content .el-tabs__nav-scroll{
  border-bottom: none;
}
.info_content #tab-first,#tab-second,#tab-third{
  outline: none;

}
.info_content .el-tabs--card>.el-tabs__header .el-tabs__nav {
   overflow: hidden;
    zoom: 1;
    list-style-type: none;
     border: none;
    border-bottom: none;
}

#tabco {
    width: 1200px;
    height: auto;
    background: #FFF;
}

#tabco span {
    width: 1200px;
    height: auto;
}

#tabco span.nadiv {
    display: block;
    background: #FFF;
}

.jieku {
    width: 1200px;
    float: left;
    background: #FFF;
}

.kuren {
    width: 1105px;
    float: left;
    margin-left: 49px;
}

.kuren h3 {
    float: left;
    width: 1101px;
    line-height: 63px;
    margin-top: 20px;
    font-size: 15px;
    color: #333;
}

.kuxtr {
    width: 1101px;
    border: 1px solid #eeeeee;
    float: left;
}

.kuxtr p {
    width: 100px;
    color: #666;
    float: left;
    border-left: 1px solid #eeeeee;
    font-size: 14px;
    height: 40px;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 40px;
}

.kuxtr em {
    width: 130px;
    float: left;
    border-left: 1px solid #eeeeee;
    padding: 10px;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    min-height: 20px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
}

.xmusa {
    width: 1101px;
    border: 1px solid #eeeeee;
    float: left;
    height: auto;
   background: #f6f6f6;
}

.xmulf {
    width: 126px;
    height: auto;
    float: left;
}

.xmulf p {
    float: left;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    padding-left: 30px;
}

.xmuri {
    width: 973px;
    float: left;
    font-size: 14px;
    color: #333;
    line-height: 45px;
    border-left: 1px solid #eeeeee;
    background: #fff;
}

.xmuri p {
    width: 975px;
    float: left;
    font-size: 14px;
    color: #333;
    line-height: 23px;
    padding: 15px 10px 10px 15px;
    overflow: hidden;
    line-height: 20px;
    min-height: 50px;
}

        .kuxtr p{
          height: 43px;
          width: 181px;
          text-align: left;
          line-height: 43px;
          padding: 0;
          padding-left: 61px;
          background: #f6f6f6;
        }
        .kuxtr em{
          width: 368px;
          height: 43px;
          line-height: 43px;
          padding: 0;
          text-align: left;
          padding-left: 61px;
          border-color: #cccccc;
        }
        .sannong {
          width: 1101px;
          border: 1px solid #eeeeee;
          float: left;
      }
        .sannong p {
          width: 132px;
          color: #666;
          float: left;
          border-left: 1px solid #eeeeee;
          font-size: 14px;
          height: 40px;
          padding-left: 8px;
          padding-right: 8px;
          line-height: 40px;
          background: #f6f6f6;
        }
        .sannong em {
          width: 130px;
          float: left;
          border-left: 1px solid #eeeeee;
          padding: 10px;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          font-size: 14px;
          font-style: normal;
          min-height: 40px;
          line-height: 20px;
          overflow: hidden;
          white-space: nowrap;
        }
        .inspect{
           width: 1131px;
           border-top: 1px solid #eeeeee;
           float: left;
           padding-left: 30px;
           padding-top: 20px;
        }
        .inspect p{
          width: 100%;
          height: 45px;
        }
        .fchrne p{
          width: 196px;
        }
        .table{
              width: 1106px;
              height: auto;
              margin: 0 auto;
              background: #ffffff;
              clear: both;
            }
            .table p{
              font-size: 14px;
              padding-left: 110px;
              float: left;
              border-left: 1px solid #cccccc;
              border-bottom: 1px solid #cccccc;
              height: 40px;
              line-height: 40px;
              width: 253px;
              font-family: 'å¾®è½¯é›…é»‘';
              color: #666666;
              text-align: left;

            }
           .table .p1 {
            padding-left: 0;
            text-align: center;
              width: 850px;
              color: #38a66f;
              border-right: 1px solid #cccccc;
            }
            .table .p_title{
             border-top: 1px solid #cccccc;
              font-size: 16px;
              color: #666666;
              background: #f6f6f6;
            }
            .naver ul li.navli{
        border-color: #ff6769;
      }
        .content_fengxian{
          width: 1105px;
          height: 345px;
          background: #ffffff;
          margin: 0 auto;
          margin-top: 45px;
          margin-bottom: 60px;
        }
        .content_fengxian p{
              font-size: 14px;
              float: left;
              border-left: 1px solid #cccccc;
              border-bottom: 1px solid #cccccc;
              height: 75px;

              width: 186px;
              font-family: 'å¾®è½¯é›…é»‘';
              color: #666666;
              text-align: center;

            }
           .content_fengxian .p1 {
            padding-left: 0;
            text-align: center;
              width: 916px;
              color: #666666;
              border-right: 1px solid #cccccc;
              font-size: 14px;
              color: #666666;
              padding: 0 30px;
              line-height: 35px;
              text-align: left;
            }
            .content_fengxian .p2{
              height: 115px;
            }
            .content_fengxian .p_title{
              font-size: 14px;
              color: #666666;
              background: #f6f6f6;
              line-height: 75px;
            }
            .p_hover a:hover{
              text-decoration: underline;
            }
    .tzilu {
    width: 1105px;
    margin-left: 49px;
    background: #f8f8f8;
    height: 40px;
    text-align: center;
    margin-top: 33px;
    margin-bottom: 30px;
}
.inspect p i {
    margin-left: 19px;
    padding-left: 25px;
    background: url(/static/img/toppage1/duihao_03.png) no-repeat;
}
.tdiv2 {
    width: 200px;
    float: left;
    line-height: 40px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
}
.tdiv1 {
    width: 300px;
    float: left;
    line-height: 40px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
}
.tzirt {
    width: 1105px;
    margin-left: 49px;
    background: #FFF;
    height: 50px;
    text-align: center;
    margin-bottom: 15px;
}
.tdiv3 {
    width: 200px;
    float: left;
    line-height: 40px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
}
.tdiv3 p {
   /* float: left;
    margin-left: 35px;*/
}
.nullmessage{
  text-align: center;
  margin-bottom: 20px;
}
.el-pagination.is-background .el-pager li.active {
    background-color: #ff6769;
    color: #fff;
}
.page{
  text-align: center;
  margin-bottom: 30px;
}
.newstyle_x{background: url(/Style/images/detail/quan.jpg) left center no-repeat;}
                        .newstyle_x .s_span{position: absolute;left: 0px;bottom:6px;;width: 55px;background: none;height: 20px;line-height: 20px;text-align: center;color: #ff7800;}
                        .newstyle_h{background: url(/Style/images/detail/bao.jpg) left center no-repeat;}
                        .newstyle_h .x_span{position: absolute;left: 19px;bottom:9px;;width: 45px;background: none;height: 20px;line-height: 20px;text-align: center;color: #ff7800;}
</style>

