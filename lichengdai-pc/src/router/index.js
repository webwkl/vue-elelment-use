import Vue from 'vue'
import Router from 'vue-router'
//import {post,fetch,patch,put} from '@/util/http'

//注册
import Register from '@/components/common/register'

//登录
import Login from '@/components/common/login'

//首页
import Index from '@/components/home/index/index'
// import Banner from '@/components/home/index/banner'
//安全保障
import Safety from '@/components/home/Safety/index'
// 专题页
import credit from '@/components/home/tlevel/credit'
import disclosure from '@/components/home/Xsyd/disclosure'
import youqufen from '@/components/home/Xsyd/youqufen'
import tlevel from '@/components/home/tlevel/index'
//新手引导
import xsyd from '@/components/home/Safety/xsyd'
import onemin from '@/components/home/Safety/onemin'

//投资列表页
import Invest from '@/components/home/invest/index'
import Info from '@/components/home/invest/info'
import xieyi from '@/components/home/invest/xieyi'
import xieyiToo from '@/components/home/invest/xieyitoo'
import investNong from '@/components/home/invest/invest_nong'
import Confirm from '@/components/home/invest/confirm'
//老资产详情页
import Detail from '@/components/home/invest/info_new'

//信息披露
import Publishs from '@/components/home/publishs/index'
//运营报告
import sixyearend from '@/components/home/report/six/sixyearend'
import sevenyearend from '@/components/home/report/seven/sevenyearend'
import oneseven from '@/components/home/report/seven/oneseven'
import autumn from '@/components/home/report/six/autumn'
import reporttwo from '@/components/home/report/six/reporttwo'
import spring from '@/components/home/report/six/spring'
import report from '@/components/home/report/five/index'


//关于我们
import About from '@/components/home/about/About'

//关于我们二级路由
import AboutUs from '@/components/home/about/AboutUs'//联系我们
import Advantage from '@/components/home/about/advantage'//核心优势
import ContactUs from '@/components/home/about/ContactUs'//联系我们
import Maps from '@/components/home/about/Maps'
import CorporateCulture from '@/components/home/about/CorporateCulture'//企业文化
import Hiring from '@/components/home/about/Hiring'//人才招聘
import Honor from '@/components/home/about/Honor'//荣誉资质
import Partner from '@/components/home/about/Partner'//合作伙伴
import RunReport from '@/components/home/about/RunReport'//运营报告

//信息披露二级路由
import Publish1 from '@/components/home/publishs/Publish1'
import Publish2 from '@/components/home/publishs/Publish2'
import Publish3 from '@/components/home/publishs/Publish3'
import Publish4 from '@/components/home/publishs/Publish4'
import Publish5 from '@/components/home/publishs/Publish5'
import Publish6 from '@/components/home/publishs/Publish6'
import Publish7 from '@/components/home/publishs/Publish7'
import Publish8 from '@/components/home/publishs/Publish8'
import Publish9 from '@/components/home/publishs/Publish9'
import Publish10 from '@/components/home/publishs/Publish10'

//常见问题
import Problems from '@/components/home/problems/index'

//常见问题二级菜单
import Problem1 from '@/components/home/problems/Problem1'
import Problem2 from '@/components/home/problems/Problem2'
import Problem3 from '@/components/home/problems/Problem3'
import Problem4 from '@/components/home/problems/Problem4'
import Problem5 from '@/components/home/problems/Problem5'

//平台动态
import News from '@/components/home/news/index'
import Newsone from '@/components/home/news/newsone'
import Newstwo from '@/components/home/news/newstwo'
import Newsthree from '@/components/home/news/newsthree'
import Newsfour from '@/components/home/news/newsfour'
import Newsfive from '@/components/home/news/newsfive'
import Newsdetial from '@/components/home/news/detail'


//账户中心
import Overview from '@/components/member/overview/index'

//个人中心二级路由
import Pandect from '@/components/member/overview/pandect'
import Loanmanagement from '@/components/member/overview/Loanmanagement'
import Fundsmanagement from '@/components/member/overview/Fundsmanagement'
import Borrowmoney from '@/components/member/overview/Borrowmoney'
import Mydebt from '@/components/member/overview/Mydebt'
import zhaizhuan from '@/components/member/overview/mydebt/zhaizhuan'

//账户状态
import Xsrw from '@/components/member/overview/xsrw'

//个人中心
import Personaldata from '@/components/member/overview/personaldata'


//账户安全

import Accountsecurity from '@/components/member/overview/Accountsecurity'
import Redpackets from '@/components/member/overview/Redpackets'
 //消息管理
import Myxx from '@/components/member/overview/Myxx'
//充值页面
import Account from '@/components/member/overview/Account'
//提现页面
import Tixian from '@/components/member/overview/tixian'
import openbank from '@/components/member/overview/openbank'

import uploadphoto from '@/components/member/overview/uploadphoto'
Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [
  	{
  		path:'/',
  		component:Index
  	},
    {
      path: '/invest',
      component: Invest,
    },
     {
          path:'/invest/invest_nong',
          component:investNong
    },
    {
      path: '/invest/info',
      component: Info
    },
    {
      path:'/investinfo/confirm',
      component:Confirm
    },
    {
      path: '/invest/detail',
      component: Detail
    },
    {
      path:'/xieyi',
      component:xieyi
    },
    {
      path:'/signature',
      component:xieyiToo
    },
    {
      path: '/About',
      component: About,
      redirect:'AboutUs',
      children:[
        {
          path:'/AboutUs',
          component:AboutUs
        },
        {
          path:'/Advantage',
          component:Advantage
        },
        {
          path:'/ContactUs',
          component:ContactUs
        },
        {
          path:'/CorporateCulture',
          component:CorporateCulture
        },
        {
          path:'/Hiring',
          component:Hiring
        },
        {
          path:'/Honor',
          component:Honor
        },
        {
          path:'/Partner',
          component:Partner
        },
        {
          path:'/RunReport',
          component:RunReport
        },
      ]
    },
    {
      path:'/Safety',
      component:Safety
    },
    {
     path:'/xsyd',
     component:xsyd
    },
    {
     path:'/onemin',
     component:onemin
    },
    {
      path:'/tlevel/credit',
      component:credit
    },
    {
      path:'/Xsyd/disclosure',
      component:disclosure
    },
    {
      path:'/Xsyd/youqufen',
      component:youqufen
    },
    {
    path:'/tlevel',
    component:tlevel
    },
    {
      path: '/Publishs',
      component:Publishs,
      redirect:'Publish1',
      children:[
       {
          path:'/Publish1',
          component:Publish1,
        },
        {
          path:'/Publish2',
          component:Publish2
        },
        {
          path:'/Publish3',
          component:Publish3
        },
        {
          path:'/Publish4',
          component:Publish4
        },
        {
          path:'/Publish5',
          component:Publish5
        },
        {
          path:'/Publish6',
          component:Publish6
        },
        {
          path:'/Publish7',
          component:Publish7
        },
        {
          path:'/Publish8',
          component:Publish8
        },
        {
          path:'/Publish9',
          component:Publish9
        },
        {
          path:'/Publish10',
          component:Publish10
        },

      ]
    },
    {
      path: '/Problems',
      component:Problems,
      redirect:'Problem1',
      children:[
          {
          path:'/Problem1',
          component:Problem1
        },
        {
          path:'/Problem2',
          component:Problem2
        },
        {
          path:'/Problem3',
          component:Problem3
        },
        {
          path:'/Problem4',
          component:Problem4
        },
        {
          path:'/Problem5',
          component:Problem5
        },

      ]
    },
    {
      path:'/news',
      component:News,
      children:[
        {
          path:'/newsone',
          name:'newsone',
          component:Newsone
        },
        {
          name:'newstwo',
          path:'/newstwo',
          component:Newstwo,

        },
        {
          path:'/newsthree',
          component:Newsthree,
          name:'newsthree'
        },
        {
          path:'/newsfour',
          component:Newsfour,
          name:'newsfour'
        },
        {
          path:'/newsfive',
          component:Newsfive,
          name:'newsfive'
        },
      ]

    },
    {
      path:'/news/detail',
      component:Newsdetial
    },
    {
      path: '/overview/index',
      component: Overview,
      redirect:'/overview/pandect',
      children:[
        {
          path:'/overview/pandect',
          component:Pandect
        },
        {
          path:'/overview/Loanmanagement',
          component:Loanmanagement
        },
        {
          path:'/overview/Fundsmanagement',
          component:Fundsmanagement
        },
        {
          path:'/overview/Borrowmoney',
          component:Borrowmoney
        },
        {
          path:'/overview/Mydebt',
          component:Mydebt
        },
        {
          path:'/overview/Mydebt/zhaizhuan',
          component:zhaizhuan
        },
        {
          path:'/overview/xsrw',
          component:Xsrw
        },
        {
          path:'/overview/Personaldata',
          component:Personaldata
        },
        {
          path:'/overview/Accountsecurity',
          component:Accountsecurity,
        },
        {
          path:'/overview/Redpackets',
          component:Redpackets,
        },
        {
          path:'/overview/Myxx',
          component:Myxx
        },
        {
          path:'/overview/Account',
          component:Account,
        },
        {
          path:'/overview/Tixian',
          component:Tixian
        },

        {
          path:'/overview/uploadphoto',
          component:uploadphoto
        }
      ]
    },
    {
      path: '/register',
      component: Register
    },
    {
          path:'/overview/bank',
          component:openbank
        },
    {
      path: '/login',
      component:Login
    },
    {
     path:'/sevenyearend',
     component:sevenyearend
    },
    {
      path:'/oneseven',
      component:oneseven
    },
    {
     path:'/autumn',
     component:autumn
    },
    {
     path:'/reporttwo',
     component:reporttwo
    },
    {
     path:'/spring',
     component:spring
    },
    {
      path:'/report',
      component:report
    },
    {
     path:'/sixyearend',
     component:sixyearend
    },
    {
      path: '*',
      redirect:'/'
    }
  ],mode:"history"
})
