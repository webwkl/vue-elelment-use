<template>
<div id="centerLeft">
  
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router>
      <el-menu-item index="/overview/pandect">
        <span slot="title">总览</span>
      </el-menu-item>
      <el-menu-item index="/overview/Loanmanagement">
        <span slot="title">出借管理</span>
      </el-menu-item>
      <el-menu-item index="/overview/Fundsmanagement">
        <span slot="title">资金管理</span>
      </el-menu-item>
      <el-menu-item index="/overview/Borrowmoney">
        <span slot="title">借款管理</span>
      </el-menu-item>
      <el-menu-item index="/overview/Mydebt">
        <span slot="title">债权转让</span>
      </el-menu-item>
      <el-menu-item index="/overview/Redpackets">
        <span slot="title">我的奖励</span>
      </el-menu-item>
      <el-submenu index="1" >
          <template slot="title" >
            <span>账户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <el-menu-item index="/overview/Personaldata">个人资料</el-menu-item>
            <el-menu-item index="/overview/Accountsecurity">账户安全</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      <el-menu-item index="/overview/Myxx">
        <span slot="title">消息管理</span>
      </el-menu-item>
      <el-menu-item index="/overview/xsrw">
        <span slot="title">账户状态</span>
      </el-menu-item>
    </el-menu>
</div>
</article>
</template>
<script>
export default {
  name: 'centerLeft',

  data () {
    return {
      chose:false,
    }

  },
  methods:{
  	tab:function(){
  		alert(1)
  		this.chose = !this.chose;
  	},
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.el-submenu__title{
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.el-submenu__title:hover{
  color: #ff7800;

}
.el-menu-item-group__title{
  padding: 0;
}
.el-menu{
    width:  100%;
    height: 100%;
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 45px;

  border:1px solid #ccc;
  border-left: 3px solid #ccc;
}
.el-submenu .el-menu-item{
  min-width: 125px!important;
  padding: 0!important;
  text-align: center;
}
.el-submenu .el-menu-item{
  height: 45px;
  line-height: 45px;
}

.el-menu-item.is-active{
  color: #ff7800;
  background-color: #ecf5ff;
}
</style>
<style scoped lang="less">
#centerLeft{
	width: 130px;
	float: left;
	.center_left_list{
		.center_left_li{
			height: 46px;
			font-size: 0;
			.linkGo{
				width: 100%;
				height: 100%;
				font-size: 14px;
				color: #666;
				text-align: center;
				line-height: 45px;
				display: inline-block;
        border:1px solid #ccc;
        border-left: 3px solid #ccc;
        border-bottom: 0;
			}
      .linkGo:hover{
        color: #ff7800;
        border-left: 3px solid #ff7800;
        border-top: 1px solid #FFCFA4;
        border-bottom: 1px solid #FFCFA4;
        border-right: 1px solid #ffffff;
      }
      .router-link-active{
        color: #ff7800;
        border-left: 3px solid #ff7800;
        border-top: 1px solid #FFCFA4;
        border-bottom: 1px solid #FFCFA4;
        border-right: 1px solid #ffffff;
      }
		}
    .center_left_li:last-child{
      .linkGo{
        border-bottom: 1px solid #ccc;
      }

    }
	}
}
</style>

