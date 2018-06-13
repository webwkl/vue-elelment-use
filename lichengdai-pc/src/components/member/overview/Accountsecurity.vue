<template>
<div class="Accountsecurity">
    <div class="wdzh_cz">
        <div class="me_zichan_h">
            <h2>账户安全设置</h2>
        </div>
        <div class="aqdengji">
            <div class="c_deal_title">
                <span class="anquan_title">修改登录密码：</span>
                <span class="aqspan_content">登录立诚贷需要输入的密码</span>
                <span
                    class="aqspan_right"
                    id="xiugaimima"
                    @click="xiugai()"
                ><a href="javascript:;">修&nbsp;&nbsp;改</a></span>
            </div>
            <div
                class="xiugai_hide"
                style="width:500px;clear: both;"
                v-show="formShow"
            >
                <el-form
                    ref="form"
                    id="pwd_forms"
                    class="y_forms"
                    novalidate="novalidate"
                >
                    <label class="y_input_top_font">6-20个字符，建议使用字母加数字或符号的组合密码</label>
                    <br>
                    <div class="mb_10">
                        <label class="y_input_label">当前密码</label>
                        <input
                            class="y_input_now"
                            type="password"
                            value=""
                            id="oldpassword"
                            name="pwd"
                            v-model="form.pwd"
                            @blur="yanzhengpwd()"
                        >
                            <span class="y_spans"></span>
                    </div>
                    <div class="mb_10">
                        <label class="y_input_label">新密码</label>
                        <input
                            class="y_input_new"
                            type="password"
                            value=""
                            id="newpassword"
                            name="newpwd"
                            v-model="form.newpwd"
                            @blur="verification2()"
                        >
                            <span class="y_spannew"></span>
                    </div>
                    <div class="mb_10">
                        <label class="y_input_label">确认密码</label>
                        <input
                            class="y_input_new_yes"
                            type="password"
                            value=""
                            id="newpassword1"
                            name="repwd"
                            v-model="form.repwd"
                            @blur="verification()"
                        >
                            <span class="y_spansrenew"></span>
                    </div>
                    <div>
                        <input
                            id="bc"
                            class="y_submits"
                            type="button"
                            value="确认"
                            name="age"
                            @click='submit'
                        >
                    </div>
                    </el-form>
                    <div
                        class="c_pwd_success"
                        style="display:none"
                    >登录密码修改成功<br/><a href="">返回账户设置</a></div>

    </div>

    <input
        type="hidden"
        value=""
        id="uid"
    />
    <div class="c_deal_title">
        <span class="anquan_title">银行存管：</span>
        <span class="aqspan_content">与银行合作资金存管，保障用户资金安全</span>
        <span
            class="aqspan_right"
            style="background-color:#a2a1a1;"
            v-if="dataItems.mark==1"
        ><a href="javascript:;">开户成功</a></span>
            <span
                class="aqspan_right"
                v-else
            >
                <a
                    href="/pandect"
                    id="kuaihu"
                >开&nbsp;&nbsp;户</a>
                    </span>
    </div>
    <div
        class="c_deal_title"
        v-if="dataItems.mark=='1' && dataItems.bank_select !='00'"
    >
        <span class="anquan_title">交易密码：</span>
        <span class="aqspan_content">设置交易密码需跳转至交易系统页面输入，用于出借、提现等验证。</span>
        <span
            class="aqspan_right"
            v-if="dataItems.set_paypass=='Y'"
        ><a href="">修改密码</a></span>
            <span
                class="aqspan_right"
                v-else
            ><a href="">设置密码</a></span>

</div>

<div class="c_deal_title">
    <span
        style="line-height: 26px;"
        class="anquan_title"
    >出借人风险<br>承受能力评估：</span>
        <span
            v-if='!dataItems.answer && !dataItems.answer.id'
        >
            <span class="aqspan_content">  为了更好的为您服务，请您参与出借人风险承受能力评估</span>
            <span class="aqspan_right assessment"><a href="javascript:void(0);" @click="active()">开始评估</a></span>
            </span>
            <span else>
                          <span class="aqspan_content">  根据风险评估结果，您当前属于&nbsp;&nbsp;<i style="color:#ff7800">{{dataItems.answer.level}}</i></span>
            <span class="aqspan_right "><a href="javascript:void(0);" @click="active()">重新评估</a></span>
            </span>
</div>

</div>

</div>
<assessmentModal v-show='showmodal'></assessmentModal>
</div>
</template>

<script>
import assessmentModal from '@/components/common/safety2'
export default {
    data() {
        return {
            formShow: false,
            form: {
                pwd: '',
                newpwd: '',
                repwd: ''
            },
            token: '',
            uid: '',
            dataItems: {},
        }
    },
    components: {
        assessmentModal
    },
    computed: {
        showmodal() {
            return this.$store.state.assessmentModal
        }
    },
    mounted: function () {
        this.token = localStorage.getItem('token');
        this.uid = localStorage.getItem('uid');
        this.getData()
    },
    methods: {
        getData() {

            //accountsecurity
            this.get('/V1/members/accountsecurity')
                .then(res => {
                    if (res.data.status == 302 || res.data.status == 500) {
                        this.$router.push('/login')
                    } else {
                        this.dataItems = res.data
                    }

                })
        },
        yanzhengpwd() {
            var data = {
                'pwd': this.form.pwd
            };
            this.post('/V1/members/checkPwd', data)
                .then(res => {
                    if (res.data.status == 0) {
                        this.$message({
                            message: res.data.message,
                            type: 'error'
                        });
                    }

                })

        },
        verification() {
            if (this.form.newpwd != this.form.repwd) {
                this.$message({
                    message: '两次密码不一致',
                    type: 'error'
                });
            } else if (this.form.repwd.length < 6) {
                this.$message({
                    message: '密码必须大于等于6位',
                    type: 'error'
                });
            } else {
                this.$message({
                    message: '',
                    type: 'success'
                });
            }
        },
        verification2() {
            if (this.form.newpwd.length < 6) {
                this.$message({
                    message: '密码必须大于等于6位',
                    type: 'error'
                });
            } else {
                this.$message({
                    message: '',
                    type: 'success'
                });
            }
        },
        xiugai() {
            this.formShow = !this.formShow;
        },
        submit() {
            if (this.form.pwd == '' || this.form.newpwd == '' || this.form.repwd == '') {
                this.$message({
                    message: '输入信息有误',
                    type: 'error'
                });

            } else {
                var data = {
                    'pwd': this.form.newpwd
                };
                this.post('/V1/members/update', data)
                    .then(res => {
                        if (res.data.status == 1) {
                            this.$message({
                                message: '修改成功',
                                type: 'error'
                            });
                        } else {
                            this.$message({
                                message: res.data.message,
                                type: 'error'
                            });
                        }
                    })
            }
        },
        active() {
            this.$store.commit('assessmentModalshow', true)
        }
    },
    filters: {
        ccc: function (val) {
            return JSON.stringify(val)
        }
    }
}
</script>

<style scoped>
.wdzh_cz {
    width: 1038px !important;
    height: 837px !important;
    border-left: 1px solid #DDD;
    border-right: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    padding-top: 30px;
    padding-left: 30px;
    overflow: hidden;
    border-top: 2px solid #ff7800;
    float: right;
}

.me_zichan_h {
    height: 25px;
    border-left: 3px solid #ff7800;
    overflow: hidden;
}

.me_zichan_h h2 {
    font-size: 16px;
    line-height: 25px;
    font-weight: normal;
    padding-left: 20px;
    color: #424242;
}

.aqdengji {
    margin-left: 40px;
}

.c_deal_title {
    text-align: left;
    /* margin-top: 40px; */
    color: #202020;
    /* height: 35px; */
    line-height: 45px;
    clear: both;
    padding-top: 20px/*overflow: hidden;*/
    ;
}

.c_deal_title span {
    float: left;
}

.aqspan_content {
    height: inherit;
    width: 475px;
    position: relative;
    color: #999;
    margin-right: 24px;
}

.aqspan_right {
    width: 135px;
    height: 35px;
    background-color: #ff7800;
    text-align: center;
    line-height: 35px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.aqspan_right a {
    color: #FFF;
    font-size: 16px;
    display: block;
    cursor: pointer;
}

.xiugai_hide {
    width: 775px !important;
    width: 880px;
    margin-bottom: 40px;
    padding-left: 105px;
    margin-top: 20px;
}

.y_input_top_font {
    line-height: 40px;
}

.mb_10 {
    margin-bottom: 10px;
}

.y_input_label {
    display: inline-block;
    width: 84px;
    text-align: right;
    padding-right: 10px;
}

.xiugai_hide input {
    outline: none;
    border: 1px solid #ddd;
    padding: 0;
    padding-left: 10px;
    width: 210px;
    border-radius: 4px;
    height: 44px;
}

.y_spans,
.y_spannew,
.y_spansrenew {
    font-size: 14px;
    color: #e86969;
    line-height: 26px;
    margin-left: 0;
    display: inline-block;
    width: 310px;
    text-align: left;
    margin-top: 8px;
}

.y_submits {
    display: block;
    width: 210px;
    background: #ff7800;
    margin-left: 89px;
    color: #fff;
    font-size: 18px;
    padding: 0 !important;
    cursor: pointer;
    height: 44px;
    line-height: 44px;
    border: 0 !important;
    border-radius: 5px;
}

.anquan_title {
    width: 100px;
}

.aqspan_content {
    height: inherit;
    width: 475px;
    position: relative;
    color: #999
}

.aqspan_content b {
    color: #e24747;
    cursor: pointer;
}

.mouse {
    font-weight: 100;
    color: #f00;
    padding-left: 50px;
}

.l_box {
    width: 300px;
    height: 380px;
    padding: 30px;
    position: absolute;
    left: 515px;
    top: 352px;
    border: 1px solid #ccc;
    color: #666;
    margin-left: -151px;
    margin-top: -201px;
    background: #fff;
    z-index: 111;
    display: none;
}

.l_close {
    width: 23px;
    height: 23px;
    /*background: url(/Style/images/images/ites2.png) no-repeat;*/
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
}

.l_box .hong {
    color: #e24747;
    line-height: 40px;
}

.l_box p {
    line-height: 24px;
}

.iknow {
    display: none;
}
</style>
