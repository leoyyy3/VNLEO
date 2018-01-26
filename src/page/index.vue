<template>
  <div class="hello">
    <!-- <MHead></MHead> -->
    <router-link to="/login">登录</router-link>
  </div>
</template>

<script>
// import MHead from '../components/index/header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'index'
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
</style>
