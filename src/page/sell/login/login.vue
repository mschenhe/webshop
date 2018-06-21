<template>
<div id="logins">
<div class="weui-cells__title"></div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">账户</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="tel" class="weui-input" placeholder="手机号码" v-model="num"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="password" class="weui-input" placeholder="不少于6位" v-model="pasd"/>
                </div>
        </div>
        <div class="weui-cell" style="width:50%">
            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="number" class="weui-input" v-model="yan" placeholder="123">
                </div>
        </div>
        <div style="width:30%;position:absolute;margin-top:-35px;right:0;background:pink" @click="getYan()">{{yanNum}}</div>
    </div>
    <button class="weui-btn weui_btn weui-btn_primary" @click="login()">登录</button>
    <a href="javascript:;" style="position:absolute;right:10px;" @click="regist()">注册</a>
</div>
</template>
<script>
import weui from 'weui.js';
import axios from "axios";
import api from "../../../mock.js";
export default {
  data() {
    return {
      num: "",
      pasd: "",
      yan: "",
      token: "123",
      yanNum: 123
    };
  },
  created() {},
  methods: {
    regist(){
      this.$router.push({'name':'regist'});
    },
    getYan() {
      this.yanNum = Math.floor(Math.random() * 1000 + 1);
      console.log(this.yanNum);
    },
    login() {
      if (this.yanNum === parseInt(this.yan)) {
        this.openDB();
      } else {
        alert("验证码错误");
        this.getYan();
      }
    },
    openDB() {
      if ("indexedDB" in window) {
        console.log("支持indexDB");
        this.createindexDB(this.num,this.pasd);
      } else {
        console.log("不支持");
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
      }
    },
    createindexDB(num,pasd) {
      var dbInfo = {
        dbName: "chenH",
        dbVersion: 2021,
        dbInstance: {}
      };
      var openRequest = window.indexedDB.open(dbInfo.dbName, dbInfo.dbVersion);
      openRequest.onupgradeneeded = function(e) {
        //第一次打开数据库 ^-*

        console.log("第一次打开该数据库，或者数据库版本发生变化....");
        var db = e.target.result;
        var storeNames = db.objectStoreNames;

        //创建数据库的表格（或者叫数据库仓库）
        if (!storeNames.contains("list")) {
          db.createObjectStore("list", {
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        //遍历数据
        var tr = db.transaction(["list"], "readonly");
        var st = tr.objectStore("list");
        var cursor = st.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            if(res.value.num === num && res.value.pasd === pasd){
              console.log(res.value);
              let user = {
                name:res.value.name,
                num:res.value.num,
                pasd:res.value.pasd
              };
              //console.log(user);
              localStorage.setItem("user",JSON.stringify(user));
              localStorage.setItem("login","登出");
              window.location.href="http://localhost:8080/home";
              db.close();
            }
            //console.log("Key", res.key);
            //console.dir("Data", res.value);
            else{
              //alert("请先注册");
              res.continue();
              
            }
            
          }
        };
        db.close();
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
    }
  }
};
</script>
<style>
#logins {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>