<template>
<div class="account">
    <div class="wdzh_cz">
        <div
            class="me_zichan_h clearfix"
            style="margin-left: 10px;"
        >
            <h2 class="fl">充值</h2>
    </div>
    <div class="cz_ka">
        <div class="ka_right">
            <a class="ka_dw"></a>
            <p
                class="card_p4"
                style="color:#999;font-size:12px;top:-25px;line-height: 25px;"
            >银行电子交易账户采用原卡进出设置，您的资金只能提现至您充值的银行卡，只有账户余额与待收余额同时为零时，才能切换银行卡。</p>
                <p class="ka_hao"></p>
                <p class="ka_id">开户人：<br>账户余额：<span>元</span></p>
        </div>
    </div>
    <div
        class=""
        style="margin-top:30px;clear: both"
    >
        <h4
            class="pay"
            style="font-size:20px;"
        >选择支付方式</h4>
</div>
<el-tabs
    v-model='activeName'
    type="border-card"
    @tab-click="handleClick"
>
    <el-tab-pane
        label="快捷充值"
        name="first"
    >
        <ul>
            <li class="current">
                <div class="wdzh_right_contop">

                    <a
                        class="bank_icon"
                        href="javascript:;"
                    ><i>

                    </i> 招商银行<br>6214**********7453</a>
                        <h3>帐户余额<span class="zhanghu_yu"></span>元</h3>
                        <p>
                            <span>充值金额</span>
                            <input
                                style="width:240px"
                                type="text"
                                class="cz_money"
                                name="money"
                                id="money_1"
                            />
                            <span>元</span>
                            <!--  <b>手续费：<i >0.00</i>元</b>-->

                        </p>
                        <p id="yzm">
                            <span>验证码</span>
                            <input
                                style="width:140px"
                                type="text"
                                class="cz_money"
                                id="yzmval"
                            />
                            <button id="huo">获取短信验证</button>
                        </p>
                        <div
                            class="none"
                            style="display:none;"
                        >
                            <input
                                type='hidden'
                                name="pay_method"
                                value="online_bank"
                            />
                            <input
                                type='hidden'
                                name="online_bank_bankid"
                                id="online_bank_bankid_1"
                                value=''
                            />
                            <input
                                type='hidden'
                                id="kuaijie"
                                value='1'
                            />
                            <div class="banks">
                                <div
                                    class="bank_list"
                                    data=""
                                >
                            </div>
                </div>
                </div>
                <textarea
                    id="miyao"
                    style="display:none"
                    name="miyao"
                ></textarea>
                    <div class="div clearfix">
                        <input
                            class="tj_css fl"
                            value="确认充值"
                            type="button"
                        >
                            <div class="mouse fl">
                                <span class="yuan">i</span>
                                <span>充值不成功</span>
                            </div>
                            <!-- <div class="l_box">
                        <b class="ll_close"></b>
                        <h4 class="hong">特别提示：</h4>
                        <p>1、请保证您所充值银行账户余额大于等于充值金额；</p>
                        <p>2、由于网络信息数据延迟导致信息不同步，如您确认银行账户已扣款，请将网银付款成功的页面截图，并刷新立诚贷账户页面；如10分钟内刷新仍未能解决，可致电立诚贷客服400-151-3456进行解决；</p>
                      </div> -->
                    </div>
                    </div>
                    <table class="l_table">
                        <thead>
                            <tr>
                                <td colspan="4">快捷支付受理能力参考汇总表（实际受理能力以各银行当日限额为准）</td>
                            </tr>
                            <tr>
                                <td>银行名称</td>
                                <td>卡种</td>
                                <td>单笔最大</td>
                                <td>单日最大</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>招商银行</td>
                                <td>借记卡</td>
                                <td>10万</td>
                                <td>5万</td>
                            </tr>
                        </tbody>
                    </table>
            </li>
            <!-- <li class="current">
            <div class="wdzh_right_contop">
                  <h2>截止<span class="red"></span>
                  您的充值成功金额是：<span class="red"></span>
                  ，充值失败金额是：
                <span class="red"></span>。</h2>
               <h3 class="wdzh_cz_title">
                <span><strong>自定义查询充值记录：</strong></span>
                <span class="inline" id="demo">
                  时间从<input id='start' class="laydate-icon" value="">
                  至 <input id="end" class="laydate-icon"  value="">
                </span>
                                <a class="colink"  href="javascript:;" > 查看</a>
              </h3>
            </div>
            </li> -->
        </ul>
        </el-tab-pane>
        <el-tab-pane
            label="网银充值"
            name="second"
        >
            <ul>
                <li class="current">
                    <div class="wdzh_right_contop">
                        <h3>帐户余额<span class="zhanghu_yu"></span>元</h3>
                        <p>
                            <span>充值金额</span>
                            <input
                                style="width:240px"
                                type="text"
                                class="cz_money"
                                name="money"
                                id="money_1"
                            />
                            <span>元</span>
                            <!--  <b>手续费：<i >0.00</i>元</b>-->

                        </p>
                        <div class="none">
                            <input
                                type='hidden'
                                name="pay_method"
                                value="online_bank"
                            />
                            <input
                                type='hidden'
                                name="online_bank_bankid"
                                id="online_bank_bankid_1"
                                value=''
                            />
                            <input
                                type='hidden'
                                id="kuaijie"
                                value='1'
                            />
                            <div class="banks">
                                <div
                                    class="bank_list"
                                    data=""
                                    v-for="(item,index) in items"
                                    :key='index'
                                >
                                    <img
                                        :src="item.src"
                                        :alt="item.title"
                                        width="120px"
                                        height="34px"
                                    >
                            </div>
                        </div>
                    </div>

                    <textarea
                        id="miyao"
                        style="display:none"
                        name="miyao"
                    ></textarea>
                        <div class="div clearfix">
                            <input
                                class="tj_css fl"
                                value="确认充值"
                                type="button"
                            >
                                <div class="mouse fl">
                                    <span class="yuan">i</span>
                                    <span>充值不成功</span>
                                </div>
                                <!-- <div class="l_box">
                        <b class="ll_close"></b>
                        <h4 class="hong">特别提示：</h4>
                        <p>1、请保证您所充值银行账户余额大于等于充值金额；</p>
                        <p>2、由于网络信息数据延迟导致信息不同步，如您确认银行账户已扣款，请将网银付款成功的页面截图，并刷新立诚贷账户页面；如10分钟内刷新仍未能解决，可致电立诚贷客服400-151-3456进行解决；</p>
                      </div> -->
                        </div>
                        </div>
                </li>
                <!-- <li class="current">
            <div class="wdzh_right_contop">
                  <h2>截止<span class="red"></span>
                  您的充值成功金额是：<span class="red"></span>
                  ，充值失败金额是：
                <span class="red"></span>。</h2>
               <h3 class="wdzh_cz_title">
                <span><strong>自定义查询充值记录：</strong></span>
                <span class="inline" id="demo">
                  时间从<input id='start' class="laydate-icon" value="">
                  至 <input id="end" class="laydate-icon"  value="">
                </span>
                                <a class="colink"  href="javascript:;" > 查看</a>
              </h3>
            </div>
            </li> -->
            </ul>
            </el-tab-pane>
            </el-tabs>
            <div class="wdzh_right_conbottom">
                <h3>温馨提示</h3>
                <div class="wrc_con">
                    <p>1、为保障账户及资金安全，请在充值前完成安全认证、开通银行存管账户；
                        <br>2、您充值的资金会进入银行电子交易账户；
                        <br>3、单笔充值最低3元，具体充值限额依据各银行限额为准；
                        <br>4、银行电子交易账户采用原卡进出设置，为了您的资金安全，只能提现至您绑定的银行卡；
                        <br>5、更换已绑定的银行卡需账户余额和待收余额都为0，如需换卡请联系客服：400-151-3456。</p>
                </div>
            </div>

            </div>
            </div>
</template>





<script>
export default {
    data() {
        return {
            chose: false,
            tabshow: true,
            activeName: 'first',
            items: [{
                src: '/static/images/bank_icon/bank/boc.gif',
                title: '中国银行'

            }, {
                src: '/static/images/bank_icon/bank/icbc.gif',
                title: '工商银行'
            }, {
                src: '/static/images/bank_icon/bank/ABC.gif',
                title: '农业银行'
            }, {
                src: '/static/images/bank_icon/bank/COMM.gif',
                title: '交通银行'
            }, {
                src: '/static/images/bank_icon/bank/CCB.gif',
                title: '建设银行'
            }, {
                src: '/static/images/bank_icon/bank/cncb.gif',
                title: '中信银行'
            }, {
                src: '/static/images/bank_icon/bank/CEB.gif',
                title: '光大银行'
            }, {
                src: '/static/images/bank_icon/bank/SHB.gif',
                title: '上海银行'
            }, {
                src: '/static/images/bank_icon/bank/pab.gif',
                title: '平安银行'
            }, {
                src: '/static/images/bank_icon/bank/HXB.gif',
                title: '华夏银行'
            }, {
                src: '/static/images/bank_icon/bank/SPDB.gif',
                title: '浦发银行'
            }]
        }
    },
    methods: {
        tabShow() {
            alert(111);
            this.tabshow = !this.tabshow;
        },
        handleClick(tab, event) {
            var tabid = event.target.getAttribute('id');
            //alert(tabid);
        }
    },
    components: {}
}
</script>




<style>
.el-tabs__item {
    width: 200px;
    text-align: center;
    line-height: 60px;
    height: 60px;
    border-right: 1px solid #dcdcdc;
    background: url(/static/images/bank_icon/tan4.png) right bottom no-repeat;
    font-size: 18px;
}

.el-tabs--border-card {
    background: #fff;
    border: none;
    box-shadow: none;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #666;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    border-top: 3px solid #ff7800;
    border-bottom: 1px solid #fff;
    background: #fff;
    color: #666;
}

.el-tabs__nav {
    height: 59px;
}

.is-focus {
    box-shadow: none !important;
}

.wdzh_cz {
    width: 1038px !important;
    width: 1040px;
    border-top: 2px solid #ff7800;
    float: right;
    height: auto;
    border-left: 1px solid #ededed;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding: 30px 10px 35px 10px;
}

.me_zichan_h {
    height: 25px;
    border-left: 3px solid #ff7800;
    overflow: hidden;
}

.wdzh_cz h2 {
    height: 25px;
    padding-left: 10px;
    font-weight: normal;
    position: relative;
    height: 50px;
    font-size: 16px;
    line-height: 25px;
    color: #424242;
}

.cz_ka {
    width: 980px;
    margin: 0 auto;
    height: 240px;
    margin-top: 40px;
}

.cz_ka .ka_right {
    position: relative;
    width: 420px;
    height: 240px;
    background: url(/static/images/bank_icon/ka.png) center center no-repeat;
    margin: 0 auto;
}

.cz_ka .ka_right .ka_dw {
    position: absolute;
    top: 20px;
    right: 250px;
    display: block;
    width: 130px;
    height: 35px;
}

.cz_ka .ka_right .card_p4 {
    color: #ffffec;
    font-size: 16px;
    line-height: 40px;
    padding-left: 10px;
    position: absolute;
    top: -20px;
    background: #f9ecb4;
    right: 0;
    border-radius: 3px;
    display: none;
}

.cz_ka .ka_right .ka_hao {
    padding-top: 80px;
    font-size: 26px;
    color: #ff3f00;
    text-align: center;
    width: 100%;
    line-height: 50px;
}

.cz_ka .ka_right .ka_id {
    color: #fff;
    padding-left: 50px;
    font-size: 16px;
    padding-top: 63px;
    line-height: 30px;
}

.cz_ka .ka_right .ka_id span {
    font-size: 24px;
}

.pay {
    padding-left: 25px;
    line-height: 40px;
}

.wdzh_cz ul {
    position: relative;
    width: 100%;
    text-align: left;
    height: auto;
}

.wdzh_cz ul li.current {
    display: block;
}

.wdzh_cz ul li {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    display: none;
    text-align: left;
}

.wdzh_right_contop {
    padding: 20px 25px 30px 25px;
}

.wdzh_right_contop .bank_icon {
    width: 368px;
    height: 73px;
    background: url(/static/images/bank_icon/bank_bj.png) no-repeat;
    display: inline-block;
    position: relative;
    padding-left: 100px;
    color: #666;
    font-size: 14px;
    padding-top: 15px;
    margin-bottom: 30px;
}

.bank_icon i {
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    top: 13px;
    left: 25px;
    background: url(/static/images/bank_icon/bank_c/cmb.png) no-repeat;
}

.wdzh_right_contop h3 {
    font-weight: normal;
    margin-bottom: 35px;
}

.wdzh_right_contop h3 span {
    padding: 0 5px;
    color: #ff7800;
}

.wdzh_right_contop p,
.wdzh_right_contop .yanzhengma {
    margin-bottom: 18px;
}

.wdzh_right_contop p span,
.wdzh_right_contop .yanzhengma span,
.select_box span {
    padding-right: 10px;
    text-align: left;
    width: 75px;
    display: inline-block;
}

.wdzh_right_contop p input,
.wdzh_right_contop .yanzhengma input,
.select_box select {
    width: 345px;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
}

.current .wdzh_right_contop p button {
    background: #ff7800;
    color: #fff;
    width: 100px;
    text-align: center;
    height: 44px;
    line-height: 44px;
    display: inline-block;
    cursor: pointer;
    border-radius: 3px;
}

.l_table {
    width: 1000px;
    border: 1px solid #ccc;
    text-align: center;
    border-collapse: collapse;
}

td {
    border: 1px solid #ccc;
    padding: 10px 0;
}

.banks {
    margin: 40px 0;
}

.bank_list {
    margin: 10px;
    padding: 5px 10px;
    display: inline-block;
    border: 1px solid #e3e3e3;
    cursor: pointer;
}

.bank_list:hover {
    border-color: red;
}

textarea {
    resize: none;
    overflow: hidden;
}

.div {
    position: relative;
    width: 70%;
    text-align: center;
    margin-top: 50px;
}

.tj_css {
    width: 230px;
    height: 40px;
    display: inline-block;
    text-align: center;
    background: #ffae11;
    color: #fff;
    margin: 0 auto;
    font-size: 16px;
}

.mouse {
    padding-top: 10px;
    cursor: pointer;
    margin-left: 20px;
}

.yuan {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    background: #87abdb;
    border: 1px solid #87abdb;
    text-align: center;
    line-height: 20px;
}

.wdzh_right_conbottom {
    margin-left: 0;
    width: 1000px;
    margin-top: 30px;
    height: auto;
    padding-bottom: 30px;
    background-color: #efefef;
}

.wdzh_right_conbottom h3 {
    padding: 11px 0 20px 41px;
    color: #ff7800;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    background: url(/static/images/bank_icon/wxts.png) no-repeat 18px 16px;
}

.wdzh_right_conbottom .wrc_con {
    padding-left: 60px;
}

.wdzh_right_conbottom .wrc_con p {
    font-size: 12px;
    line-height: 24px;
    padding-left: 15px;
}
</style>
