<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>
<script>
import {delCookie,getCookie} from '@/util/util'
export default {
  name: 'App',
  data(){
    return {
     headerShow:true
    }
  },
}
</script>
