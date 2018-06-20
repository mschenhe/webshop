<template>
  <div id="listPic">

  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "456",
      pasd: "783"
    };
  },
  created() {
    this.openDB();
  },
  methods: {
    openDB() {
      if ("indexedDB" in window) {
        console.log("支持indexDB");
        this.createindexDB(this.num, this.pasd);
      } else {
        console.log("不支持");
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
      }
    },
    createindexDB(num, pasd) {
      var dbInfo = {
        dbName: "goods",
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
            //console.log(res.value);
            //console.log("Key", res.key);
            //console.dir("Data", res.value);
            res.continue();
          }
        };
        //更新数据
        var trans = db.transaction(["list"], "readwrite");
        var store = trans.objectStore("list");
        var u = {
          num: "11",
          psd: "11"
        };
        var request = store.put(u);
        //遍历
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
</style>

<!--<template>
<div id="listPic">
    <div id="showPic" v-for="(item,index) in picData" :key="index">
    <img :src="item">    
    </div>
</div>
</template>
<script>
import api from "../.././mock.js";
import axios from "axios";
export default {
  data() {
    return {
      picData: []
    };
  },
  created() {
    axios.get("http://test.com").then(res => {
      console.log(res.data.user);
      //console.log(JSON.stringify(res,null,1));
      this.picData = res.data.user.pic;
      console.log(this.picData);
    });
  },
  methods:{
      showPics(){
          var img = document.getElementById("showPic").getElementsByTagName("img");
          var num = 0;
          var len = img.length;
          setInterval(function(){
              img[num].style.display = "none";
              num=++num==len?0:num;
              img[num].style.display="inline-block";
          },3000);
      }
  }
};
</script>
<style>
#listPic {
  position: absolute;
  left: 20%;
  right:5px;
  top: 30%;
  width: 80%;
  height:120px;
}
#showPic{
    margin-left:-85%;;
}
#listPic img {
position:absolute;
  width: 100%;
  height: 120px;
}
</style>-->