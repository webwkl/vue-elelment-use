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
                                <!-- <p class="vip_p" >温馨提示：本项目不可使用加息劵和红包</p> -->
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
            {{items.tpl| borrowType}}
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
                <a href="#" v-if="items.borrow_arr.memberStatus!='1' && items.borrow_arr.uid>0" @click='shezhi'>充值</a>
                <a href="#" v-else-if="items.borrow_arr.qdd_marked='' && items.borrow_arr.uid>0" @click='shezhi'>充值</a>
                <a href="/Account" v-else>充值</a>
              </span>
              </div>
        <form action="" method="get">
          <input  placeholder="1000元起加入，需为10的整倍数" v-model='money'  name="" type="text" class="toerou" id="investmoney"  maxlength="28" v-if="items.borrow_arr.new_hand=='1'"  @blur="show()" />

         <input  :placeholder="items.borrow_arr.borrow_arr.borrow_min +'元起加入  此为活动专享标的' "  v-model='money'  name="" type="text" class="toerou" id="investmoney"  maxlength="28" v-else-if="items.borrow_arr.exclusive=='2'" @blur="show()" />
        <!--  <input  :placeholder="items.borrow_arr.borrow_arr.borrow_min 元起加入  此为活动专享标的"  name="" type="text" class="toerou" id="investmoney"   maxlength="28" v-else-if="items.borrow_arr.borrow_arr.exclusive=='2'" /> -->
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
                     <li v-for="(item,index) in this.reg" :key='index' @click="select(item.id,item.leixing,item.money)">
                      <input type="hidden" value="{$i.leixing}" id="leixing">
                      <input type="hidden" value="{$i.id}" id="hongid">
                      <input type="hidden" id="redmoney" v-model="total">
                        <p class="newstyle_h" v-if="item.leixing=='1'">{{item.type}}：出借满{{item.des}}元可用<br>期限：{{item.borrow_duration}}个月及以上&nbsp;&nbsp;截止：{{item.end_date}}<a class="x_span">{{item.money}}元</a></p>
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
                    <button  class=" ljtb hovera" :disabled="disabled"    v-else-if="items.borrow_arr.can_auto_time >startTime" @click="errorShow()" :title="items.borrow_arr.borrow_name">
                    <countdown :endTime='items.can_auto_time'  :callback="callback" endText="立即加入"></countdown>
                   </button>
                     <a href="javascript:;"  style="border-color:#ccc ;color: #999;background:#ccc" v-else-if='items.borrow_arr.borrow_status!="3" && items.borrow_arr.progress>=100 ' >复审中</a>
                     <a class="ljtb" href="javascript:;" v-else-if="username==false" style="background: #ff6769"  :title="items.borrow_arr.borrow_name" @click="login" >登录后加入</a>
                    <a  title="开户" v-else-if="items.vo.id_status=='0' && items.uid>'0'" class="hovera" href="javascript:;" @click='shezhi()'>立即加入</a>
                    <a  title="绑卡" v-else-if="items.bank_loan=='00' && items.uid>0" class="hovera" href="/overview/bank">立即加入</a>
                    <a  title="设置支付密码" class="manb" v-else-if="items.set_paypass=='N' && items.uid>'0'" href="/overview/Accountsecurity">立即加入</a>
                    <a class="ljtb" href="javascript:;" v-else-if="items.cfca =='1' && this.username==true  " :title="items.borrow_arr.borrow_name" @click="errorShow()">立即加入</a>
                    <a class="ljtb" href="javascript:;" v-else-if="items.cfca =='0' && this.username==true  " :title="items.borrow_arr.borrow_name" @click="cfcaShow()">立即加入</a>

      </div>
    </div>
  </div>
   <div class="naver">
          <!-- 老三农 -->
          <ul id="tab" v-if='borrowType==3'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>借款人信息</h3>
                            <div v-if="items.borrow_arr.debtor_type==='1'">
                              <div class="kuxtr" style=" border-bottom:none;">
                                      <p style=" border-left:none;">
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
                                      <p>
                                          户籍：
                                      </p>
                                      <em>{{items.borrow_arr.place_domicile}}</em>
                               </div>
                               <div class="kuxtr">

                                      <p>
                                          土地面积：
                                      </p>
                                      <em>{{items.borrow_arr.land_area}}亩</em>
                                      <p>
                                          承包合同编号：
                                      </p>
                                      <em>{{items.borrow_arr.contract_num}}</em>
                                      <p>
                                          作物类别：
                                      </p>
                                      <em>{{items.borrow_arr.crop_categories}}</em>

                                </div>
                           </div>
                           <div v-else>
                              <div class="kuxtr" style=" border-bottom:none;">
                                  <p style=" border-left:none;">
                                      公司名称：
                                  </p>
                                  <em>{{items.borrow_arr.debtor}}</em>
                                  <p>
                                      企业法人：
                                  </p>
                                  <em>{{items.borrow_arr.corporate_debtor}}</em>
                                  <p>
                                      土地面积：
                                  </p>
                                  <em>{{items.borrow_arr.land_area}}亩</em>

                              </div>
                              <div class="kuxtr">
                                  <p>
                                      承包合同编号：
                                  </p>
                                  <em>{{items.borrow_arr.contract_num}}</em>
                                  <p>
                                      作物类别：
                                  </p>
                                  <em>{{items.borrow_arr.crop_categories}}</em>

                              </div>
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
                                        资金用途
                                    </p>
                                </div>
                                <div class="xmuri">
                                   <p>{{items.borrow_arr.purpose}}</p>
                                </div>
                          </div>
                          <div class="xmusa" style=" border-bottom:none;">
                                <div class="xmulf">
                                    <p>
                                        还款来源
                                    </p>
                                </div>

                                <div class="xmuri">
                                    <p>{{items.borrow_arr.repayment_source}}</p>
                                </div>
                          </div>
                          <div class="xmusa">
                                <div class="xmulf">
                                    <p>
                                        抵押物
                                    </p>
                                </div>
                            <div class="xmuri">
                                <p>
                                    {{items.borrow_arr.pawn}}
                                </p>
                            </div>
                          </div>


                          <h3>发标文件</h3>
                          <div class="inspect">
                            <div style="width: 100%;line-height: 40px;margin-bottom: 40px">
                                <p style="width: 242px;display: inline-block;">借款(担保)合同：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">家庭农场土地承包合同<i>已认证</i></p>
                            </div>
                            </div>
                            <div class="fekong">
                            <p>
                            <b>风控意见&nbsp;&nbsp;</b>
                            {{items.borrow_arr.risk_control_advice}}
                            </p>
                            </div>
                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                    <span>
                    <div class="jieku">
                      <div class="jieku">
                      <div class="kuren">
                          <div class="kution">
                              <div class="kute01">
                                  信息发布前调查
                              </div>
                              <div class="kute02">
                                  信息发布中审查
                              </div>
                              <div class="kute03">
                                  信息发布后管理
                              </div>
                              <div class="kute04">
                                  逾期处理
                              </div>
                          </div>
                    <div class="kutris">
                        <div class="daiuer">
                            <div class="daiute" style=" margin-bottom:0px;" >
                             <p>
                                    担保公司：
                                </p>
                                <p :title="items.borrow_arr.guarantee_agency" style=" color:#f79035; width:235px;">
                                    {{items.borrow_arr.guarantee_agency}}
                                </p>

                             </div>

                             <div class="mersr"><p>信息发布前进行尽职调查，在对借款人的收入情况、还款来源、担保等进行系统调查的同时，还要对借款人的信用高低进行评估（财务分析），以确定借款人将来按照合约规定及时偿还出借人款项的意愿和能力；对借款人品德、才干、资本、担保品、经营环境，根据分析的结论，确定授信额度，评估还款能力，预测未来盈利趋势，形成信息发布前的调查报告</p></div>
                        </div>
                        <div class="daiue2">
                            <p>在借款信息调查、审查意见的基础上,按授权权限进行审批，决定借款金额。 包括调查：借款人法定代表人的真实性；企业产权是否明晰；借款人注册资本是否足额到位及其真实性；借款人经营方式、范围是否与借款用途相符；借款人资产、负债的真实性；借款人资产抵押、担保情况；借款人是否有其他违法行为或成为重大经济案件的被诉人。

                            </p>
                        </div>
                        <div class="daiue2">
                            <p>建立借款台账和借款业务管理档案，对借后事项实施跟踪检查。<br>包括：股东变动情况资料、公司章程修改资料、实收资本变动信息、对外重大投资信息及其他重要信息，客户在他行融资信息、担保方式、利率水平信息；财务报表要按月收集并分析其真实性；风险预警信号资料；其他认为需要的相关的资料。
                            </p>
                        </div>
                        <div class="daiue3">
                            <a href="javascript:;"><img src="/static/img/toppage1/tp13.jpg"/></a>

                        </div>
                    </div>
                  </div>
                </div>
                  </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
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
          </ul>
          <!-- 车贷 -->
          <ul id="tab" v-else-if='borrowType==8'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>借款人信息</h3>
                            <div v-if="items.borrow_arr.lender_type==='1'">
                               <div class="kuxtr" style=" border-bottom:none;">
                                    <p style=" border-left:none;">
                                        姓名：
                                    </p>
                                    <em :title="items.borrow_arr.name">
                                    {{items.borrow_arr.name}}
                                    </em>
                                    <p>
                                        性别：
                                    </p>
                                    <em>{{items.borrow_arr.sex}}</em>
                                    <p>
                                        年龄：
                                    </p>
                                    <em>{{items.borrow_arr.age}}</em>
                                    <p>
                                        户籍：
                                    </p>
                                    <em>{{items.borrow_arr.koseki}}</em>
                              </div>
                              <div class="kuxtr">
                                    <p style=" border-left:none;">
                                        车辆型号：
                                    </p>
                                    <em>{{items.borrow_arr.vehicle_type}}</em>
                                    <p>
                                        购买价格：
                                    </p>
                                    <em>{{items.borrow_arr.born}}万元</em>
                                    <p>
                                        机动车数量：
                                    </p>
                                    <em>{{items.borrow_arr.car_number}}</em>
                                    <p>
                                        抵押物：
                                    </p>
                                    <em>{{items.borrow_arr.diya}}</em>
                              </div>
                           </div>
                           <div v-else>
                              <div class="kuxtr" style=" border-bottom:none;">
                                <p style=" border-left:none;">
                                    公司名称：
                                </p>
                                <em style="width:280px;">{{items.borrow_arr.name}}</em>
                                <p>
                                    法人：
                                </p>
                                <em>{{items.borrow_arr.corporate_borrowers}}</em>
                                <p>
                                    购买价格：
                                </p>
                                <em>{{items.borrow_arr.born}}万元</em>

                             </div>
                            <div class="kuxtr">
                                <p>
                                    车辆型号：
                                </p>
                                <em style="width:280px;">{{items.borrow_arr.vehicle_type}}</em>
                                <p>
                                    机动车数量：
                                </p>
                                <em>{{items.borrow_arr.car_number}}</em>
                                <p>
                                    抵押物：
                                </p>
                                <em :title="items.borrow_arr.diya">{{items.borrow_arr.diya}}</em>
                            </div>
                           </div>

                          <h3>项目介绍</h3>

                          <div class="xmusa" style=" border-bottom:none;">
                            <div class="xmulf">
                                <p>
                                    项目介绍
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
                                      项目特点
                                  </p>
                              </div>
                              <div class="xmuri">
                                 <p>{{items.borrow_arr.project_features}}</p>
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


                          <h3>发标文件</h3>
                          <div class="inspect">
                           <div style="width: 100%;line-height: 40px;">
                                <p style="width: 242px;display: inline-block;">身份证正反面：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">机动车证件：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">车辆保险证件：<i>已认证</i></p>


                            </div>
                            <div style="width: 100%;line-height: 40px">
                                <p style="width: 242px;display: inline-block;">借款（担保合同）：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">评估报告：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">车辆实况照片：<i>已认证</i></p>

                            </div>
                            </div>
                            <div class="fekong">
                            <p>
                            <b>风控意见&nbsp;&nbsp;</b>
                            {{items.borrow_arr.due_diligence}}
                           </p>
                           </div>
                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                    <span>
                    <div class="jieku">
                      <div class="jieku">
                      <div class="kuren">
                          <div class="kution">
                              <div class="kute01">
                                  信息发布前调查
                              </div>
                              <div class="kute02">
                                  信息发布中审查
                              </div>
                              <div class="kute03">
                                  信息发布后管理
                              </div>
                              <div class="kute04">
                                  逾期处理
                              </div>
                          </div>
                    <div class="kutris">
                      <div class="daiuer">
                        <div class="daiute" style=" margin-bottom:0px; border-bottom:none;" >
                          <p>
                            抵押物实际价值：
                          </p>
                          <p style=" color:#f79035; width:90px;">
                            {{items.borrow_arr.born}}万元
                          </p>
                          <p>
                            车辆评估价值：
                          </p>
                          <p style=" color:#f79035;  width:90px;">
                                              {{items.borrow_arr.shopping_cart}}万元
                          </p>
                                          <p>
                            车辆评估机构：
                          </p>
                          <p :title="items.borrow_arr.investment_integration" style=" color:#f79035; width:235px;">
                            {{items.borrow_arr.investment_integration}}
                          </p>

                                       </div>
                                       <div class="daiute" style=" margin-top:0px;" >
                          <p>
                            借款金额：
                          </p>
                          <p style=" color:#f79035;  width:90px;">
                            {{items.borrow_arr.Position}}万元
                          </p>
                          <p>
                            抵押系数：
                          </p>
                          <p style=" color:#f79035;  width:90px;">
                            {{items.borrow_arr.email}}%
                          </p>
                                          <p>
                            担保公司：
                          </p>
                          <p :title="items.borrow_arr.security_company"  style=" color:#f79035; width:235px;">
                            {{items.borrow_arr.security_company}}
                          </p>

                                       </div>
                                        <div class="mersr"><p>信息发布前进行尽职调查，在对借款人的收入情况、还款来源、担保等进行系统调查的同时，还要对借款人的信用高低进行评估（财务分析），以确定借款人将来按照合约规定及时偿还出借人款项的意愿和能力；对借款人品德、才干、资本、担保品、经营环境，根据分析的结论，确定授信额度，评估还款能力，预测未来盈利趋势，形成信息发布前的调查报告</p></div>
                                  </div>
                                  <div class="daiue2">
                                      <p>在借款信息调查、审查意见的基础上,按授权权限进行审批，决定借款金额。 包括调查：借款人法定代表人的真实性；企业产权是否明晰；借款人注册资本是否足额到位及其真实性；借款人经营方式、范围是否与借款用途相符；借款人资产、负债的真实性；借款人资产抵押、担保情况；借款人是否有其他违法行为或成为重大经济案件的被诉人。

                                      </p>
                                  </div>
                                  <div class="daiue2">
                                      <p>建立借款台账和借款业务管理档案，对借后事项实施跟踪检查。<br>包括：股东变动情况资料、公司章程修改资料、实收资本变动信息、对外重大投资信息及其他重要信息，客户在他行融资信息、担保方式、利率水平信息；财务报表要按月收集并分析其真实性；风险预警信号资料；其他认为需要的相关的资料。
                                      </p>
                                  </div>
                      <div class="daiue3">
                      <a href="javascript:;"><img src="/static/img/toppage1/tp13.jpg"/></a>
                     </div>
                    </div>
                    </div>
                    </div>
                  </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
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
          </ul>
          <!-- 房抵 -->
          <ul id="tab" v-else-if='borrowType==5'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>借款人信息</h3>
                           <div class="kuxtr" style=" border-bottom:none;">
                            <p style=" border-left:none;">
                                姓名：
                            </p>
                            <em>{{items.borrow_arr.identity_name}}</em>
                            <p>
                                性别：
                            </p>
                            <em>{{items.borrow_arr.sex}}</em>
                            <p>
                                年龄：
                            </p>
                            <em>{{items.borrow_arr.age}}</em>
                            <p>
                                户籍：
                            </p>
                            <em>{{items.borrow_arr.koseki}}</em>
                         </div>
                         <div class="kuxtr">
                            <p style=" border-left:none;">
                                房产位置：
                            </p>
                            <em>{{items.borrow_arr.income}}</em>
                            <p>
                                建筑面积：
                            </p>
                            <em>{{items.borrow_arr.house_evaluation}}m²</em>
                            <p>
                                规划用途：
                            </p>
                            <em>{{items.borrow_arr.education}}</em>
                            <p>
                                房产属性：
                            </p>
                            <em>{{items.borrow_arr.service}}</em>
                         </div>

                          <h3>标的详情</h3>

                          <div class="xmusa" style=" border-bottom:none;">
                            <div class="xmulf">
                                <p>
                                    项目介绍
                                </p>
                            </div>
                            <div class="xmuri">
                                <p>
                                    {{items.borrow_arr.Borrowing_describe}}
                                </p>
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
                                        抵押物
                                    </p>
                                </div>
                            <div class="xmuri">
                                <!-- 内容 需挂<p> 和 <br/> 标签-->
                                <p>
                              {{items.borrow_arr.diya}}
                                            </p>
                              <div class="sanket">
                                <b>市场参考价：</b>
                                <div class="canger">
                                  <img src="/static/img/toppage1/tp04.jpg" alt=""/>
                                  <font>市场价&nbsp;{{items.borrow_arr.assess}}万元&nbsp;<a target="_blank" :href="items.borrow_arr.assess_href"  >查看</a></font>
                                </div>
                                <div class="canger">
                                  <img src="/static/img/toppage1/tp05.jpg" alt=""/>
                                  <font>市场价&nbsp;{{items.borrow_arr.Marriage}}万元&nbsp;<a target="_blank" :href="items.borrow_arr.Marriage_href">查看</a></font>
                                </div>
                              </div>
                            </div>
                          </div>


                          <!-- <h3>房产信息</h3>
                          <div class="inspect">
                           <div style="width: 100%;line-height: 40px;">
                                <p style="width: 242px;display: inline-block;">身份证正反面：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">机动车证件：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">车辆保险证件：<i>已认证</i></p>


                            </div>
                            <div style="width: 100%;line-height: 40px">
                                <p style="width: 242px;display: inline-block;">借款（担保合同）：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">评估报告：<i>已认证</i></p>
                                <p style="width: 242px;display: inline-block;">车辆实况照片：<i>已认证</i></p>

                            </div>
                            </div> -->
                            <div class="fekong">
                            <p>
                            <b>风控意见&nbsp;&nbsp;</b>
                            {{items.borrow_arr.due_diligence}}
                           </p>
                           </div>
                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                    <span>
                    <div class="jieku">
                      <div class="jieku">
                      <div class="kuren">
                          <div class="kution">
                              <div class="kute01">
                                  信息发布前调查
                              </div>
                              <div class="kute02">
                                  信息发布中审查
                              </div>
                              <div class="kute03">
                                  信息发布后管理
                              </div>
                              <div class="kute04">
                                  逾期处理
                              </div>
                          </div>
                    <div class="kutris">
                      <div class="daiuer">
                        <div class="daiute" style=" margin-bottom:0px; border-bottom:none;" >
                          <p>
                            抵押物实际价值：
                          </p>
                          <p style=" color:#f79035; width:90px;">
                            {{items.borrow_arr.born}}万元
                          </p>
                          <p>
                            抵押系数：
                          </p>
                          <p style=" width:130px; color:#f79035">
                            {{items.borrow_arr.email}}%
                          </p>
                                          <p>
                            授信额度：
                          </p>
                          <p  style=" color:#f79035">
                            {{items.borrow_arr.Position}}
                          </p>

                          </div>

                                        <div class="mersr"><p>信息发布前进行尽职调查，在对借款人的收入情况、还款来源、担保等进行系统调查的同时，还要对借款人的信用高低进行评估（财务分析），以确定借款人将来按照合约规定及时偿还出借人款项的意愿和能力；对借款人品德、才干、资本、担保品、经营环境，根据分析的结论，确定授信额度，评估还款能力，预测未来盈利趋势，形成信息发布前的调查报告</p></div>
                                  </div>
                                  <div class="daiue2">
                                      <p>在借款信息调查、审查意见的基础上,按授权权限进行审批，决定借款金额。 包括调查：借款人法定代表人的真实性；企业产权是否明晰；借款人注册资本是否足额到位及其真实性；借款人经营方式、范围是否与借款用途相符；借款人资产、负债的真实性；借款人资产抵押、担保情况；借款人是否有其他违法行为或成为重大经济案件的被诉人。

                                      </p>
                                  </div>
                                  <div class="daiue2">
                                      <p>建立借款台账和借款业务管理档案，对借后事项实施跟踪检查。<br>包括：股东变动情况资料、公司章程修改资料、实收资本变动信息、对外重大投资信息及其他重要信息，客户在他行融资信息、担保方式、利率水平信息；财务报表要按月收集并分析其真实性；风险预警信号资料；其他认为需要的相关的资料。
                                      </p>
                                  </div>
                      <div class="daiue3">
                      <a href="javascript:;"><img src="/static/img/toppage1/tp13.jpg"/></a>
                     </div>
                    </div>
                    </div>
                    </div>
                  </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
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
          </ul>
          <ul id="tab" v-else-if='borrowType==10'>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="项目详情" rowid='11' name="first" >
                 <div id="tabco">
                    <span class="nadiv" >
                      <div class="jieku">
                        <div class="kuren">
                          <h3>基本信息</h3>
                            <div class="kuxtr" style=" border-bottom:none;">
                              <p style=" border-left:none;">
                                公司名称：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.company}}</em>
                              <p>
                                法人：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.faren}}</em>
                              <p>
                                项目金额：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.xiangmujine}}万元</em>
                                      </div>
                                      <div class="kuxtr">
                              <p style=" border-left:none;">
                                公司类型：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.gongsi_type}}</em>
                              <p>
                                公司地址：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.gongsiweizhi}}</em>
                              <p>
                                资金用途：
                              </p>
                              <em style="width:228px">{{items.borrow_arr.Purpose}}</em>
                                        </div>
                            <h3>项目介绍</h3>
                            <div class="xmusa" style=" border-bottom:none;">
                              <div class="xmulf">
                                <p>
                                  企业背景
                                </p>
                              </div>
                              <div class="xmuri">
                                <p>
                                  {{items.borrow_arr.involved_appeal}}
                                </p>
                              </div>
                              </div>
                            <div class="xmusa">
                              <div class="xmulf">
                                <p>
                                  营业范围
                                </p>
                              </div>
                              <div class="xmuri">
                                <p>
                                  {{items.borrow_arr.Classic_range}}
                                </p>
                              </div>
                              </div>
                            <div class="xmusa" style=" border-bottom:none;">
                              <div class="xmulf">
                                <p>
                                  经营状况
                                </p>
                              </div>
                              <div class="xmuri">
                                <p>
                                  {{items.borrow_arr.due_diligence}}
                                </p>
                              </div>
                              </div>
                            <div class="xmusa">
                              <div class="xmulf">
                                <p>
                                  抵押物
                                </p>
                              </div>
                              <div class="xmuri">
                                <p>
                                  {{items.borrow_arr.mortgage}}
                                </p>
                              </div>
                              </div>

                          <h3>项目介绍</h3>

                          <div class="xmusa" style=" border-bottom:none;">
                            <div class="xmulf">
                                <p>
                                    项目介绍
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
                                      项目特点
                                  </p>
                              </div>
                              <div class="xmuri">
                                 <p>{{items.borrow_arr.project_features}}</p>
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
                        </div>
                      </div>
                      </span>
                    </div>
              </el-tab-pane>
              <el-tab-pane label="风险控制" name="second" >
                <div id="tabco">
                    <span>
                    <div class="jieku">
                      <div class="jieku">
                      <div class="kuren">
                          <div class="kution">
                              <div class="kute01">
                                  信息发布前调查
                              </div>
                              <div class="kute02">
                                  信息发布中审查
                              </div>
                              <div class="kute03">
                                  信息发布后管理
                              </div>
                              <div class="kute04">
                                  逾期处理
                              </div>
                          </div>
                    <div class="kutris">
                      <div class="daiuer">
                          <div class="daiute" style=" margin-top:25px; margin-bottom:25px;">
                              <p>
                                抵押物实际价值：
                              </p>
                              <p style=" color:#f79035">
                                {{items.borrow_arr.born}}万元
                              </p>
                              <p>
                                抵押系数：
                              </p>
                              <p style=" width:130px; color:#f79035">
                                {{items.borrow_arr.email}}%
                              </p>
                                              <p>
                                授信额度：
                              </p>
                              <p style=" color:#f79035">
                                {{items.borrow_arr.Position}}万元
                              </p>

                            </div>
                                  </div>
                                  <div class="daiue2">
                                      <p>在借款信息调查、审查意见的基础上,按授权权限进行审批，决定借款金额。 包括调查：借款人法定代表人的真实性；企业产权是否明晰；借款人注册资本是否足额到位及其真实性；借款人经营方式、范围是否与借款用途相符；借款人资产、负债的真实性；借款人资产抵押、担保情况；借款人是否有其他违法行为或成为重大经济案件的被诉人。

                                      </p>
                                  </div>
                                  <div class="daiue2">
                                      <p>建立借款台账和借款业务管理档案，对借后事项实施跟踪检查。<br>包括：股东变动情况资料、公司章程修改资料、实收资本变动信息、对外重大投资信息及其他重要信息，客户在他行融资信息、担保方式、利率水平信息；财务报表要按月收集并分析其真实性；风险预警信号资料；其他认为需要的相关的资料。
                                      </p>
                                  </div>
                      <div class="daiue3">
                      <a href="javascript:;"><img src="/static/img/toppage1/tp13.jpg"/></a>
                     </div>
                    </div>
                    </div>
                    </div>
                  </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="出借记录" name="third" >
               <div id="tabco">
                   <span>
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
          </ul>




<!--三农场景-->
    </div>
<div style="clear:both"></div>
</div>
<loginmodal v-show='loginModal'></loginmodal>
<errormodal v-show='errorModal' :message='message'></errormodal>
<div id="fadet2" class="bleter" v-show='chujieModal'>
    <div id="mydiv2" class="pament">
        <div class="pemher3" >
            <span @click='yes()'><img src="/static/images/ites2.png" /></span>
        </div>
        <div class="toure">
            <span>你出借的金额不能使用这个红包，你确定使用吗？</span>
        </div>
        <div class="quein">
           <div class="quelf"><a href="javascript:;" @click="no()">否</a></div>
           <div class="queri"><a href="javascript:;" @click="yes()">是</a></div>
        </div>
    </div>
</div>
<Footer ></Footer>
</div>
</template>
<script>
import loginmodal from './loginModal.vue';
import errormodal from './errorModal.vue';
import {delCookie,getCookie} from '@/util/util'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
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
        regShow:false,
        total:'',
        phone:'',
        investM:'',
        chujieModal:false//出借金额小于红包使用的金额弹框


      }
    },
    components:{
    loginmodal,
    errormodal,
    Header,
    Footer,
    },
    computed: {
    loginModal(){
      return this.$store.state.loginModal
    },
    errorModal(){
      return this.$store.state.errorModal
    }
    },
     mounted() {
      this.id=this.$route.query.id;
      this.borrowType=this.$route.query.type
      this. detailClick();
      if(getCookie('u_user_name')){
       this.username=true;
       this.phone=getCookie('u_user_name')

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
            if(res.data.status==1){
               this.items=res.data;
               this.startTime=res.data.time
               if(res.data.borrow_arr.reg==null){
                this.reg=[]
               }else{
                this.reg=res.data.borrow_arr.reg
               }
               //console.log(this.items)
            }
            })
      },
      select(id,type,money){
        if(type=='2'){
          this.mesg=money+'%'+'加息券'
          this.regShow=false
        }else{
          this.mesg=money+'元'+'红包'
          this.regShow=false
        }
        var data={
          ids:id
        };
        this.post('/V1/investinfo/ajax_update',data)
        .then(res=>{
          if(parseInt(this.money) < parseInt(res.data.total) || this.money=='') {
              if(parseInt(res.data.total)!=2 || this.money==''){
                this.money=parseInt(res.data.total);
          }
          }
          this.total=res.data.total;
          this.investM=res.data.money;

        })

      },
      selectreg(){
        this.regShow=!this.regShow
      },
      handleClick(val){
        var tabid=event.target.getAttribute('id');
          var parmes={borrow_id:this.id}
         if(tabid==='tab-third'){
          this.post('/V1/Investinfo/loanlog',parmes).then(res => {
            //alert(res.data.status);
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
        alert(val);
        var parmes={borrow_id:this.id,p:val}
         this.post('/V1/Investinfo/loanlog',parmes).then(res => {
            //alert(res.data.status);
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
     show(){
      if(this.money%10!=0){
        this.message={
          'show':1,
          'title':'出借失败',
          'content':'出借的金额必须是10的整倍数！',
          'btn':'确定'
        };
        this.$store.commit('errorModalshow', true)
      }else if(parseInt(this.money)<parseInt(this.total)){
        console.log(this.money);
        console.log(this.total);
             this.chujieModal=true
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
      }else if(parseInt(this.money)<parseInt(this.total)){
             this.chujieModal=true
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
               if(parseInt(this.investM)>10){
                 this.investM=parseInt(this.money)*1+parseInt(this.investM)*1
                }else{
                  this.investM=parseInt(this.money)
                }
              //var totalmoney=parseInt(this.money)+parseInt(this.total)
                this.$router.push({
                  path: '/investinfo/confirm',
                  query: {
                    id: this.id,
                    money:this.money,
                    investM:this.investM
                  }
                })
            }
        })
           }
     },
     callback(){
         this.disabled=false
     },
      yes(){
        this.chujieModal=false
      },
      no(){
        this.get('/V1/invest/noajax_update')
        .then(res=>{
          console.log(res.data);
          this.total=0;
        })
        this.mesg='请选择红包';
        this.chujieModal=false
      },
      handleSizeChange(){},

     },
      filters:{
　　　　//债转还款方式的转换
         Repayment:function(val){
　　　　　　if(val==4){
               return val='每月还息到期还本'
             }else{
                return val='一次性还款'
             }
　　　　},
     borrowType:function (val) {
       if(val=='detail'){
         return val='北京房产抵押'
       }else if(val=='detail2'){
         return val='第三方担保'
       }else if(val=='detail1'){
         return val='100%股权质押'
       }else if(val=='detail3'){
        return val='有抵押、有担保'
       }
     }

　　}
  }
</script>
<style>
.bleter {
   display: block;
    height: 1835px;
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0;
    right: 0;
    width: 100%;
    /* height: 300%; */
    z-index: 1001;
   background: rgba(0,0,0,0.6)
}
.pament {
    width: 525px;
    position: absolute;
    top: 200px;
    left: 33%;
    background: #FFF;
    z-index: 1002;
    overflow: auto;
}
.pemher3 {
    width: 440px;
    float: left;
    margin-left: 52px;
    margin-top: 15px;
    margin-bottom: 25px;
}
.pemher3 span {
    float: right;
}
.toure {
    width: 525px;
    float: left;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
}
.toure span {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    color: #333;
}
.quein {
    width: 525px;
    float: left;
    margin-top: 20px;
    margin-bottom: 40px;
}
.quelf {
    width: 140px;
    height: 50px;
    border: 1px solid #999999;
    background: #b9b9b9;
    float: left;
    border-radius: 5px;
    text-align: center;
    margin-left: 60px;
}
.quelf a {
    width: 140px;
    font-size: 18px;
    line-height: 50px;
    color: #FFF;
    text-decoration: none;
    display: block;
}
.queri {
    width: 140px;
    height: 50px;
    border: 1px solid #ff7800;
    background: #ff7800;
    float: right;
    border-radius: 5px;
    text-align: center;
    margin-right: 60px;
}
.queri a {
    width: 140px;
    font-size: 18px;
    line-height: 50px;
    color: #FFF;
    text-decoration: none;
    display: block;
}
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
    width: 235px;
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
.sanket {
    width: 955px;
    float: left;
    margin-bottom: 5px;
    margin-top: 25px;
    margin-left: 15px;
}
.sanket b {
    float: left;
    font-size: 14px;
    color: #333;
}
.canger {
    width: 300px;
    float: left;
    margin-right: 10px;
    border: 1px solid #999;
    height: 40px;
}
.canger img {
    width: 84px;
    height: 38px;
    float: left;
}
.canger font {
    float: left;
    line-height: 40px;
    font-size: 18px;
    color: #333;
    margin-left: 10px;
    overflow: hidden;
}
.canger font a {
    color: #005cac;
    font-size: 16px;
    margin-left: 15px;
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
.fekong p {
    margin-left: 15px;
    line-height: 35px;
    font-size: 14px;
    text-indent: 30px;
    margin-top: 8px;
    margin-bottom: 50px;
}
.toerst {
    width: 318px;
    float: left;
    margin-left: 33px;
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
    width: 292px;
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
.newstyle_h {
    background: url(/static/images/detail/bao.jpg) left center no-repeat;
}
.newstyle_h .x_span {
    font-size: 12px;
}
.newstyle_h .x_span {
    position: absolute;
    left: 19px;
    bottom: 9px;
    width: 45px;
    background: none;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #ff7800;
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


.liqtou a{
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
    width: 120px;
    color: #666;
    float: left;
    border-left: 1px solid #eeeeee;
    font-size: 14px;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 40px;
}
.kuxtr em {
    width: 150px;
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
.xmusa {
    width: 1101px;
    border: 1px solid #eeeeee;
    float: left;
    height: auto;
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
}
.xmuri p {
    width: 975px;
    float: left;
    font-size: 14px;
    color: #333;
    line-height: 23px;
    padding: 15px 10px 10px 15px;
    overflow: hidden;
    min-height: 50px;
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
        .kuren {
    width: 1105px;
    float: left;
    margin-left: 49px;
}
.kution {
    float: left;
    width: 147px;
    margin-left: 11px;
    margin-top: 65px;
    height: 880px;
}
.kute01 {
    float: left;
    height: 226px;
    width: 147px;
    background: url(/static/img/toppage1/tp09.jpg) no-repeat;
    text-align: center;
    font-size: 16px;
    color: #333;
    line-height: 40px;
}
.kute02 {
    float: left;
    height: 147px;
    width: 147px;
    background: url(/static/img/toppage1/tp10.jpg) no-repeat;
    text-align: center;
    font-size: 16px;
    color: #333;
    line-height: 40px;
}
.kute03 {
    float: left;
    height: 168px;
    width: 147px;
    background: url(/static/img/toppage1/tp11.jpg) no-repeat;
    text-align: center;
    font-size: 16px;
    color: #333;
    line-height: 40px;
}
.kute04 {
    float: left;
    height: 35px;
    width: 147px;
    background: url(/static/img/toppage1/tp12.jpg) no-repeat;
    text-align: center;
    font-size: 16px;
    color: #333;
    line-height: 30px;
}
.kutris {
    width: 929px;
    float: left;
    height: 154px;
    margin-top: 65px;
}
.daiuer {
    width: 929px;
    background: #f8f8f8;
    float: left;
    margin-bottom: 40px;
}
.daiute {
    width: 878px;
    float: left;
    border: 1px solid #eeeeee;
    margin-left: 25px;
    background: #FFF;
    height: 42px;
    margin-top: 25px;
    margin-right: 25px;
    margin-bottom: 15px;
}
.daiute p {
    width: 120px;
    border-left: 1px solid #eeeeee;
    float: left;
    font-size: 14px;
    color: #666;
    overflow: hidden;
    word-break: break-all;
    line-height: 40px;
    height: 40px;
    padding-left: 8px;
    padding-right: 8px;
}
.mersr {
    width: 880px;
    float: left;
    line-height: 30px;
    font-size: 12px;
    color: #333;
    margin-bottom: 10px;
    margin-left: 25px;
}
.daiue2 {
    width: 929px;
    background: #f8f8f8;
    float: left;
    margin-bottom: 35px;
}
.daiue3 {
    width: 929px;
    background: #f8f8f8;
    float: left;
    margin-top: 10px;
}
.daiue2 p, .daiue3 p {
    width: 870px;
    margin: 15px;
    line-height: 30px;
    font-size: 14px;
    color: #333;
    float: left;
}
.daiue3 img {
    width: 455px;
    height: 174px;
    float: left;
    margin-top: 20px;
    margin-left: 217px;
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
</style>

