<template>
  <div class="hello">
    <m-head></m-head>
    <login-box></login-box>
  </div>
</template>

<script>
import MHead from '../components/login/header'
import loginBox from '../components/login/loginBox'
export default {
  name: 'Login',
  data(){
      return{
          msg:"login"
      }
  },
  mounted(){

  },
  components:{
      MHead,
      loginBox
  },
  methods: {
      // fun(){
      //
      // }
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
