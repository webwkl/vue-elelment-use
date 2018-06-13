<template>
  <div >
    
<el-container class="college">
  <!-- <el-header>Header</el-header> -->
  <el-main>Main
    {{msg}}
    <el-input
    suffix-icon="el-icon-search">
</el-input>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
    <p @click='save()'>点我发请求</p>
  </el-main>
  <!-- <el-footer>Footer</el-footer> -->
</el-container>

  </div>

</template>

<script>
export default {
  name: 'college',
  data () {
    return {
      msg: '商学院'
    }

  },
  methods:{

    save(){
      alert(11);
       this.$http.get('https://api.douban.com/v2/book/1220562')
        .then(response=>{
            console.log(response.data)
            // this.$router.push('/')
        })
        .catch(error=> {
          console.log(error)
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p{
  cursor: pointer;
}
</style>