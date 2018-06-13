<template>
 <div class="modal">
       <div id="modal-overlay">
        <div class="modal-data">
            <a class="clo close" @click='closeModal()'></a>
            <div class="data_in">
                <h2 id="borrow_name"></h2>
                <ul class="data_ul">
                    <!-- 债权金额：10000.00元 -->
                    <li id="s1">债权金额：{{getdata.investor_capital}}元</li>
                    <!-- 剩余待收利息：10000.00元 -->
                    <li id="s5">债权总额：{{getdata.money}}元</li>
                    <!-- 债权总额：10000.00元 -->
                    <li id="s2"></li>
                    <!-- 年化收益率：10000.00元 -->
                    <li id="s6">剩余待收利息：{{getdata.interest}}元</li>
                    <!-- 转让金额：10000.00元 -->
                    <li id="s21">转让金额：{{getdata.transfer_price}}</li>
                    <!-- 预期收益：10000.00元 -->
                    <li id="s10"></li>
                </ul>
                <p id="s22">应付金额：{{getdata.transfer_price}}</p>
                <form action="" method="post" name="debtForm" id="debtForm" >
                    <input type="hidden" value=""  name="invest_id" id="s4"/>
                    <button type="button" class="btn" id="dosubmit">
                         支付
                    </button>
                </form>
            </div>

        </div>
    </div>

 </div>
</template>
<script>
 export default {
  props:{
      getdata:{
        type:Object,
        default(){
          return {};
        }
      }
    },
   data(){
    return{

    }
   },

   methods:{
    closeModal(){
      this.$store.commit('zzModalshow', false)
    }
   }
 }
</script>
<style scoped>
 #modal-overlay {
             /*visibility: hidden; */
             position: fixed;
             left: 0px;
             top: 0px;
             width:100%;
             height:100%;
             text-align:center;
             z-index: 1000;
             background: rgba(0,0,0,0.5);
        }

        .modal-data{
             width:530px;
             height: 330px;
             margin:15% auto;
             background-color: #fff;
             padding:15px;
             text-align:center;
             position: relative;
        }
        .clo{
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 35px;
            right: 45px;
            background: url(/static/images/xltkt/clo2.png) no-repeat;
            background-size: 100% 100%;
      cursor:pointer;
        }
        .clo:hover{
            background: url(/static/images/xltkt/clo.png) no-repeat;
            background-size: 100% 100%;
        }
        .data_in{
            width:90%;
            padding-top: 20px;
            margin: 0 auto;
        }
        .data_in h2{
            height: 40px;
            line-height: 40px;
            text-align: left;
            padding-left: 10px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
        }
        .data_in p{
            color: #000;
            font-size: 20px;
            line-height: 50px;
            text-align: left;
            padding-left: 10px;

        }
        .btn{
            display: block;
            background: #ffae00;
            border-radius: 5px;
            width: 170px;
            height: 35px;
            line-height: 35px;
            color: #fff;
            margin: 30px auto;
      font-size:18px;
      cursor:pointer;

        }
        .data_ul{
            width: 100%;
            padding-top: 30px;
        }
        .data_ul li{
            width: 48%;
            float: left;
            text-align: left;
            padding-left: 2%;
            line-height: 30px;
        }
</style>
