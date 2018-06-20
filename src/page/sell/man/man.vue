<template>
    <div id="man">
        <div id="man-top">
            <i class="icon-back" @click="back()"></i>
        </div>
        <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;height:40px;position:absolute;right:20px;top:60px;border-radius:5px;">
            <span style="display:inline-block;font-size:14px;line-height:14px;height:14px;margin-top:13px;color:#fff" @click="change()">修改密码</span>
            </div>
        <div class="weui-cells weui-cells_form" style="top:100px;">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="用户名" v-model="name"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">账号</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="tel" class="weui-input" placeholder="123" v-model="num"/>
                </div>
        </div>
        <!--<div class="weui-cell" style="width:50%">
            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="number" class="weui-input" placeholder="123">
                </div>
        </div>-->
        <!---->
        <div class="weui-cell" v-show="this.flag">
            <div class="weui-cell__hd"><label class="weui-label">旧密码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="旧密码" v-model="oldPasd"/>
                </div>
        </div>
        <div class="weui-cell" v-show="this.flag">
            <div class="weui-cell__hd"><label class="weui-label">新密码</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="新密码" v-model="newPasd"/>
                </div>
        </div>
        <button class="weui-btn weui_btn weui-btn_primary" v-show="this.flag" @click="confirmChange()">确认修改密码</button>
    </div>
    
    </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      name: "",
      num: "",
      oldPasd: "",
      newPasd: "",
      user: [],
      pasd: ""
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    this.name = this.user.name;
    this.num = this.user.num;
    this.pasd = this.user.pasd;
    console.log(this.pasd);
  },
  methods: {
    confirmChange() {
      console.log(this.oldPasd);
      console.log(this.newPasd);
      if (this.oldPasd === this.pasd) {
        this.openDB();
        
      } else {
        alert("旧密码不正确!");
      }
    },
    openDB() {
      if ("indexedDB" in window) {
        console.log("支持indexDB");
        this.createindexDB(this.name, this.num, this.oldPasd, this.newPasd);
      } else {
        console.log("不支持");
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
      }
    },
    createindexDB(name, num, oldPasd, newPasd) {
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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        //遍历数据
        var tr = db.transaction(["list"], "readwrite");
        var st = tr.objectStore("list");
        var cursor = st.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            if(res.value.num === num && res.value.pasd === oldPasd){ 
              let key = res.key;
              console.log(key);
              let u = {
                name:name,
                num:num,
                pasd:newPasd
              };
              //console.log(u);
              let request = st.put(u);
              alert("修改密码成功!");
              this.num = "";
              this.oldPasd = "";
              this.newPasd = "";
            }else{
              res.continue();
            }
            
          }
        };

       
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
    },
    back() {
      this.$router.go(-1);
    },
    change() {
      this.flag = !this.flag;
    }
  }
};
</script>
<style>
#man {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#man-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: red;
}
#man-top .icon-back {
  position: absolute;
  left: 0;
  top: 5px;
  font-size: 32px;
}
#man-name {
  width: 100%;
  height: 20px;
  position: absolute;
  top: 50px;
  margin-left: 0;
}
</style>

