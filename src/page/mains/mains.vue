<template>
<div id="mains">
    <p id="show" style="position:absolute;top:5%;left:35%">欢迎来到天天购物网站</p>  
          <router-link to="home" class="weui-btn weui_btn_mini weui-btn_default" id="sell" style="width:20%;margin-right:5%;top:5%;background:#ff9966;color:#fff;">买家</router-link>
<router-link to="operate" class="weui-btn weui_btn_mini weui-btn_default" id="buyer" style="width:20%;margin-right:5%;top:5%;" >卖家</router-link>
    

    </div>    
</template>
<script>
export default {
  data() {
    return {
      wen:"欢迎来到天天购物网站"
    };
  },
  created() {
   
  },
  methods: {}
};
</script>
<style>
#mains {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url(bg.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>


