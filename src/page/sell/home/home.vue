<template>
<div id="home">
    <headers></headers>
    <!--<a href="javascript:;" class="weui-btn weui_btn_mini weui-btn_primary" id="login">登录</a>
<a href="javascript:;" class="weui-btn weui_btn_mini weui-btn_default" id="register">注册</a>-->
<!--<head></head>-->
<pic></pic>
<list></list>
<!--<listPic></listPic>-->
</div>
</template>
<script>

import pic from "../../../components/pic/pic.vue";
import api from "../../../mock.js";
import axios from "axios";
//import head from '../../components/head/head.vue'
import list from "../../../components/list/list.vue";
import listDetail from "../../../components/list/listDetail.vue";
import listPic from '../../../components/pic/listPic.vue';
import headers from '../../../components/headers/headers.vue';
export default {
  data() {
    return {
       
    };
  },
  created() {
    //localStorage.removeItem("goodslist");
    //localStorage.removeItem("shopcart");
    //localStorage.setItem("shopcart","");
    /*axios.get("http://test.com").then((res) => {
        console.log(res);
        console.log(JSON.stringify(res,null,1));
      });//huoqus();*/
  },
  methods: {
    huoqu() {
      
    }
  },
  components: {
    pic,
    headers,
    list,
    listPic,
    listDetail
  }
};
</script>
<style>

</style>