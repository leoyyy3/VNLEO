<template>
  <div class="login_box">
      <div class="login_tit">
          <p :class="[cname==='mes'?'cur':'']" @click="changeLogin('mes')"><a href="javascript:;">短信登录</a></p>
          <p :class="[cname==='pwd'?'cur':'']" @click="changeLogin('pwd')"><a href="javascript:;">密码登录</a></p>
      </div>
      <div class="login_content" v-show="cname==='mes'">
          <section>
              <input type="text" v-model="phone" placeholder="手机号">
              <a href="#" class="sendmes" @click="sendmes">获取验证码</a>
          </section>
          <section>
              <input type="text" v-model="code" placeholder="密码">
          </section>
          <a href="#" class="login_btn" @click="loginHandle">登录</a>
      </div>
      <div class="login_content" v-show="cname==='pwd'">
          <section>
              <input type="text" v-model="phone" placeholder="手机号/邮箱/用户名">
          </section>
          <section>
              <input type="text" v-model="code"  placeholder="密码">
          </section>
          <a href="#" class="login_btn" @click="loginHandle">登录</a>
      </div>
  </div>
</template>

<script>
import {sendMes} from "../../service"
export default {
  name: 'Login',
  data(){
      return{
          phone:"",
          code:"",
          cname:"mes"
      }
  },
  mounted(){

  },
  components:{
  },
  methods: {
      loginHandle(){
          console.log(this.phone)
      },
      changeLogin(flag){
          this.cname = flag
      },
      sendmes(){
          let mobile = this.phone
          sendMes({mobile:mobile})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_box{
    width:300px;
    margin:10px auto;
}
.login_tit{
    display:flex;
}
.login_tit p{
    flex:1;

}
.login_tit p a{
    font-size:14px;
    color:#999;
    font-weight:700;
}
.login_tit .cur a{
    color:#2395ff;
    border-bottom:2px solid #2395ff;
}
.login_content{

}
.login_content section{
    margin-bottom:10px;
    position:relative;
}
.login_content section input{
    font-size:14px;
    height:48px;
    width:100%;
    border:1px solid #ddd;
    border-radius:3px;
    box-sizing:border-box;
    padding:10px;
}
.login_btn{
    display:block;
    height:42px;
    line-height:42px;
    width:100%;
    border-radius:3px;
    background:#4cd96f;
    color:#fff;
    text-align:center;
    font-size:16px;
}
.sendmes{
    position:absolute;
    right:5px;
    top:15px;
    font-size:14px;
    color:#999;
}
</style>
