<template>
    <div id="regist">
      <i class="icon-back" style="position:absolute;left:0;font-size:32px;" @click="back()"></i>

    <div class="weui-cells weui-cells_form" style="top:10px;">
      <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="请输入用户名" v-model="name"/>
                </div>
        </div>
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
    <button class="weui-btn weui_btn weui-btn_primary" @click="regist()">注册</button>
    <a href="javascript:;" style="position:absolute;right:10px;font-size:14px;margin-top:10px;" @click="login()">已有账号,前往登录</a>
    </div>
</template>
<script>
import $ from "jquery";
//import weui from 'jquery-weui';
import axios from "axios";
import api from "../../../mock.js";
export default {
  data() {
    return {
      name: "",
      num: "",
      pasd: "",
      yan: "",
      token: "123",
      yanNum: 123
    };
  },
  created() {
    this.getYan();
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    login(){
      this.$router.push({'name':'login'});
    },
    regist() {
      if (this.yanNum === parseInt(this.yan)) {
        //console.log(this.num + "," + this.pasd);
        this.openDB();
        //this.add_users();
      } else {
        alert("验证码错误");
        this.getYan();
      }
    },
    getYan() {
      this.yanNum = Math.floor(Math.random() * 1000 + 1);
      //console.log(this.yanNum);
    },
   openDB() {
      if ("indexedDB" in window) {
        console.log("支持indexDB");
        this.createindexDB(this.name,this.num, this.pasd);
      } else {
        console.log("不支持");
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
      }
    },
    createindexDB(name,num, pasd) {
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
        var trans = db.transaction(["list"], "readwrite");
        var store = trans.objectStore("list");
        //添加数据
        var o = {
          name:name,
          num: num,
          pasd: pasd
        };
        //console.log(o);
        var request = store.add(o);
        request.onerror = function(e) {
          console.log("error", e.target.err.name);
          console.log("添加失败");
        };
        request.onsuccess = function(e) {
          console.log("添加成功");
          
        };
        //遍历数据
        var tr = db.transaction(["list"], "readonly");
        var st = tr.objectStore("list");
        var cursor = st.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            console.log(res.value);
            //console.log("Key", res.key);
            //console.dir("Data", res.value);
            res.continue();
          }
        };
        db.close();
        window.location.href="http://localhost:8080/login";
        //alert("注册成功,快去登录吧!");
        //this.$router.push({'name':'login'});
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
#regist {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
