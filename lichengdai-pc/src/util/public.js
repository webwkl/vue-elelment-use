import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios=axios
//axios.defaults.withCredentials=true
//Vue.axios.options.emulateJSON = true;
import qs from 'qs';
export default class {

    constructor() {

        }
        // 测试全局地址
        // Utils = "https://www.guoanfamily.com/"
    Utils = "http://why.yeyuming.com:8888"
        // Utils = "http://172.16.42.120:8002/"
        // Utils = 'http://192.168.1.106:8002/'
        // Utils2 = "https://www.guoanfamily.com/"
        // Utils2 = "http://rtest.guoanfamily.com/"
    //Utils2 = "http://172.16.4.12:28082/"
        // 正式环境地址

    // Utils2 = "https://www.guoanfamily.com/";
    // Utils = "https://www.guoanfamily.com/";
    IMAGE_PATH = "http://why.yeyuming.com:8888";
    install(Vue, options) {
            this.installPrototype(Vue); //ajax
        }


    installPrototype(Vue) {

        /**
         * get请求
         * @param url
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.get = (url, params) => {
          //let PHPSESSID = localStorage.getItem('PHPSESSID');
            return axios.get(this.Utils + url, {
               params:params,
               // headers: {
               //      "PHPSESSID": PHPSESSID
               //  },
                crossDomain: true,
            }).then(res =>{
              return res;
            }).catch(err =>{
              return err;
            })
        };
        // af5ccbbd9b1df20f6e0b6486af3d0033
        // af5ccbbd9b1df20f6e0b6486af3d0033

        /**
         * post请求
         * @param url
         * @param data
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.post = (url, data) => {
          //let PHPSESSID = localStorage.getItem('PHPSESSID');
            return axios.post(this.Utils + url,qs.stringify(data), {
               // headers: {
               //      "PHPSESSID": PHPSESSID
               //  },
                crossDomain: true,

            }).then(res =>{
          return res;
        }).catch(err =>{
          return err;
        })
        };
        Vue.prototype.IMAGE_PATH = this.IMAGE_PATH
        Vue.prototype.Utils = this.Utils
        Vue.prototype.Utils2 = this.Utils2

    }
}
