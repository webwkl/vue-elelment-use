// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import "../static/js/jquery-2.1.3.min.js"
// import "../static/js/scrolltext.js"
import $ from 'jquery'
import Vuex from 'vuex'
import {delCookie,getCookie,setCookie} from '@/util/util'
import Method from '@/util/public'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import myUpload from 'vue-image-crop-upload'
// 省市区三联动插件
import axios from 'axios'
Vue.prototype.axios=axios
Vue.config.productionTip = false
axios.defaults.withCredentials=true

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(new Method())
//使用vuex
const store = new Vuex.Store({
  state: {
    isshow:false,
    isModal:false,//立诚贷协议
    jfModal:false,//金服协议
    loginModal:false,//登录弹框
    errorModal:false,//出借失败弹框
    assessmentModal:false,//评估弹框
    zzModal:false,//债转弹框
  },
  mutations: {
    //购物车弹框
    muShowprotocolBombBox(state,statu){
      state.isModal=statu
    },
    isshow(state,statu){
      state.isModal=statu
    },
    jfShowprotocolBombBox(state,statu){
      state.jfModal=statu
    },
    loginModalshow(state,statu){
      state.loginModal=statu
    },
    errorModalshow(state,statu){
      state.errorModal=statu
    },
    assessmentModalshow(state,statu){
      state.assessmentModal=statu
    },
    zzModalshow(state,statu){
      state.zzModal=statu
    },

  }
})

//判断路由
//  router.beforeEach((to, from, next) => {
//  if(to.meta.requireAuth) {
//   fetch('m/is/login').then(res => {
//    if(res.errCode == 200) {
//     next();
//    } else {
//     if(getCookie('session')) {
//      delCookie('session');
//     }
//     if(getCookie('u_uuid')) {
//      delCookie('u_uuid');
//     }
//     next({
//      path: '/Login'
//     });
//    }
//   });
//  } else {
//   next();
//  }
// });
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
})
