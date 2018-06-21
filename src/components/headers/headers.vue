<template>
<div id="header">
  <div id="cart">
    <i class="icon-cart2"  @click="shopcart()"></i>
    <i class="icon-account" @click="person()"></i>
    <span>{{user.name}}</span>
  </div>
  
<router-link to="login" class="weui-btn weui_btn_mini weui-btn_primary" id="login">{{this.logins}}</router-link>
<router-link to="regist" href="javascript:;" class="weui-btn weui_btn_mini weui-btn_default" id="register" >注册</router-link>
</div>
</template>
<script>
export default {
  data() {
    return {
      logins:'登录',
      user:[]
    };
  },
  created(){
    this.logins = localStorage.getItem("login");
    console.log(this.logins);
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    if(this.logins === null || this.logins === ""){
      this.logins = "登录";
      document.getElementById("register").style.display = "block";
    }
  },
  methods: {
    shopcart() {
      let m = JSON.parse(localStorage.getItem("shopcart"));
      if (m.productlist.length === 0) {
        alert("购物车暂时没有商品哦！");
      } else {
        this.$router.push({ name: "shopcart" });
      }
    },
    person(){
      let login = localStorage.getItem("login");
      console.log(login);
      if(login === "登出"){
        document.getElementById("register").style.display = "none";
        this.$router.push({'name':'man'});
      }else{
        alert("请先登录!");
        this.$router.push({'name':'login'});
      }
    }
  }
};
</script>
<style>
#header #cart {
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 5px;
}
#header #cart .icon-cart2 {
  font-size: 28px;
}
#header #cart .icon-account{
  font-size:20px;
}
#header #login {
  display: block;
  position: absolute;
  height: 30px;
  font-size: 14px;
  top: 5px;
  right: 100px;
}
#header #register {
  display: block;
  position: absolute;
  height: 30px;
  font-size: 14px;
  top: -10px;
  right: 20px;
}
</style>