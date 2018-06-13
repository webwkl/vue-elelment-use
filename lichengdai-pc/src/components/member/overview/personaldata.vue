<template>
  <div class="Personaldata">
    <div class="wdzh_right">
      <div class="personaldata_right">
        <!-- 账户设置 -->
        <div class="me_zichan_h" style="margin-left: 10px;">
        <h2>个人资料</h2>
        </div>
        <!--头像-->
        <div class="photo">
          <a href="javascript:;"  @click="photo()">
            <img src="/static/images/pandect/noavatar_middle.gif"  />
          </a>
          <p>更换头像</p>
        </div>
        <div class="grxx">
          <el-form ref="form" :model="form" label-width="80px">
                            <tr class="trBg">
                              <td class="tdTitle">用户名：</td>
                              <td  class="tdContent">
                                <span>{{items.phone.user_name}}</span>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr>
                                <td class="tdTitle"> 身份验证： </td>
                                <td class="tdContent">
                                           <span>{{items.memberinfo.idcard}}</span>
                                            <span v-if="items.memberstatus.id_status=='0'">未验证</span>
                                            <span v-else-if="items.memberinfoidcard">已验证</span>
                                            <span v-else-if="items.memberstatus.id_status=='2'">待审核</span>
                                            <span v-else-if="items.memberstatus.id_status=='3'">审核未通过</span>
                                </td>
                                <td id="dv_idcard" class="tdTip"> </td>
                            </tr>
                            <tr class="trBg">
                              <td class="tdTitle">性别：</td>
                              <td  class="tdContent">
                                <el-radio-group v-model="form.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                              </el-radio-group>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">手机验证：</td>
                              <td  class="tdContent">
                                <span>{{items.phone.user_phone}}</span>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">出生年月：</td>
                              <td  class="tdContent">
                                <el-date-picker
                                  v-model="form.birth_date"
                                  type="date"
                                  placeholder="选择日期">
                                </el-date-picker>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">婚姻状况：</td>
                              <td  class="tdContent">
                                <el-radio-group v-model="form.marry">
                                <el-radio label="保密"></el-radio>
                                <el-radio label="未婚"></el-radio>
                                <el-radio label="已婚"></el-radio>
                              </el-radio-group>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">职业：</td>
                              <td  class="tdContent">
                                <el-input v-model="form.zy" placeholder=""></el-input>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                             <td class="tdTitle">选择地区：</td>
                              <td  class="tdContent">
                                <select v-model="prov" style="width:120px;border:1px solid #ccc">
                                  <option v-for="option in arr" :value="option.name">
                                    {{ option.name }}
                                  </option>
                                </select>
                                <select v-model="city" style="width:120px;border:1px solid #ccc">
                                  <option v-for="option in cityArr" :value="option.name">
                                    {{ option.name }}
                                  </option>
                                </select>
                                <select v-model="district" v-if="district" style="width:120px;border:1px solid #ccc" >
                                  <option v-for="option in districtArr" :value="option.name">
                                    {{ option.name }}
                                  </option>
                                </select>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">详细地址：</td>
                              <td  class="tdContent">
                                <el-input v-model="form.detailed_address" placeholder=""></el-input>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">紧急联系人：</td>
                              <td  class="tdContent">
                                <el-input v-model="form.emergency_contact_person" placeholder=""></el-input>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">紧急联系电话：</td>
                              <td  class="tdContent">
                                <el-input v-model="form.emergency_contact_phone" placeholder=""></el-input>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>
                             <tr class="trBg">
                              <td class="tdTitle">与本人关系：</td>
                              <td  class="tdContent">
                                <el-input v-model="form.relationship_with_me" placeholder=""></el-input>
                              </td>
                              <td id="dv_realname" class="tdTip"> </td>
                             </tr>

                             <tr>
                                <td class="tdTitle">  </td>
                                <td class="tdContent" style="height: 80px; ">
                                  <input id="bc" class="tdBaocun" type="button" value="保存" name="age" @click="send()" >
                                </td>
                                <td id="xx" class="tdTip"> </td>
                            </tr>
            </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import datajson from '../../../../static/json/data.js'
 export default {

  data () {
    return {
      input:'',
      arr:datajson,
      prov: '北京',
      city: '北京',
      district: '东城区',
      cityArr: [],
      districtArr: [],
       form:{},
      items:{}
    }

  },
  mounted:function(){
     this.getData()
  },
  methods:{
    getData(){
      this.get('/V1/members/personal')
      .then(res=>{
        this.items=res.data;
        this.form=res.data.memberinfo;
        if(res.data.memberinfo.province!=null){
          this.city=res.data.memberinfo.city;
        this.prov=res.data.memberinfo.province;
        this.district=res.data.memberinfo.area;
        }
        if(this.form.marry==''){
          this.form.marry='保密'
        }
      })
    },
    photo(){
      alert(11);
    },
     send(){
      this.form.province=this.prov;
      this.form.area=this.district;
      this.form.city=this.city;
      var data=this.form
      this.post('/V1/Members/editmemberinfo',data)
      .then(res=>{
         if(res.data.status==302 || res.data.status==500){
            this.$router.push('/login')
          }else{
            alert(res.data.message)
          }
      })
     },
    updateCity: function () {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = '';
      }
    }
   },
   beforeMount: function () {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function () {
      this.updateCity();
      this.updateDistrict();
    },
    city: function () {
      this.updateDistrict();
    }
  },
   filters:{
      marrying:function(val){
        if(val==''){
         return val='保密'
        }else{
         return val=val
        }
      }

   }
}
</script>
<style scoped>
.wdzh_right {
    width: 1020px;
    float: right;
    height: auto;
}

.personaldata_right {
    width: 1010px!important;
    width: 1020px;
    border-top: 2px solid #ff7800;
    padding-top: 30px;
    padding-left: 10px;
    float: right;
    height: auto;
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
.photo {
    padding: 20px 0 40px 212px;
    width: 301px;
    text-align: center;
}
.photo a {
    display: block;
    width: 89px;
    height: 89px;
    border-radius: 50%;
    box-shadow: 0 0 13px #ccc;
}
.photo a img {
    border-radius: 50%;
    width: 89px;
    height: 89px;
}
.grxx {
    border-top: 1px solid #ff7800;
    padding-top: 20px;
    padding-left: 87px;
}

.grxx  td {
    height: 40px;
    display: inline-block;
    margin-bottom: 8px;
    line-height: 40px;
    margin-right: 20px;
    text-align: right;
}
.tdContent span {
    padding-left: 10px;
}
.tdContent a {
    padding-left: 10px;
}
.tdBaocun {
    border-style: none;
    width: 162px;
    height: 42px;
    color: #fff;
    font-size: 14px;
    background: #ff7800;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}
</style>
