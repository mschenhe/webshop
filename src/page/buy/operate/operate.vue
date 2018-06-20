<template>
<div id="operate">
    <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;height:40px;position:absolute;top:10px;left:10px;" @click="adds()">
  <span style="display:inline-block;font-size:14px;line-height:14px;height:14px;margin-top:13px;color:#fff">添加商品</span>
  </div>
  <div id="can">
  <table id="table">
      <tr>
          <th>商品编号</th>
          <th>商品名字</th>
          <th>商品描述</th>
          <th>商品规格</th>
          <th>商品价格</th>
          <th>商品产地</th>
          <th>仓库库存</th>
          <th>最大限购</th>
          
      </tr>
  </table>
  </div>
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;height:40px;position:absolute;top:10px;left:25%;" @click="dels()">
  <span style="display:inline-block;font-size:14px;line-height:14px;height:14px;margin-top:13px;color:#fff">删除商品</span>
  </div>
<div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;height:40px;position:absolute;top:10px;left:50%;" @click="chs()">
  <span style="display:inline-block;font-size:14px;line-height:14px;height:14px;margin-top:13px;color:#fff">修改商品</span>
  </div>
<div id="add-goods" v-if="addFlag">
    <i class="icon-关闭" style="position:fixed;left:5px;margin-top:5px;" @click="addFlag = false;"></i>
        <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品名" v-model="name"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品描述</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品描述" v-model="desc"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品规格</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品规格" v-model="gui"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品价格</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品价格" v-model="price"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品产地</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品产地" v-model="born"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">仓库库存</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="仓库库存" v-model="quantity"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">最大限购数</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="最大限购数" v-model="stock"/>
                </div>
        </div>
  </div>
  <button class="weui-btn weui_btn weui-btn_primary" v-if="addFlag" @click="confirmAdd()">添加商品</button>
</div>
 <!--删除商品-->
     <div id="del-goods" v-if="delFlag">
         <i class="icon-关闭" style="position:fixed;left:5px;margin-top:5px;" @click="delFlag = false;"></i>
         <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品名" v-model="haha"/>
                </div>
        </div>
        <button class="weui-btn weui_btn weui-btn_primary" v-if="delFlag" @click="delGoods(haha)">删除商品</button>
        </div>
     </div>
     <!--修改商品-->
     <div id="ch-goods" v-show="chFlag">
         <i class="icon-关闭" style="position:fixed;left:5px;margin-top:5px;" @click="chFlag = false;"></i>
         <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品名" v-model="chname"/>
                </div>
        </div>
        </div>
        <button class="weui-btn weui_btn weui-btn_primary" v-if="chFlag" @click="chGoods(chname,chFlag,Rechange)">查询</button>
     </div>
     <div id="change-goods" v-show="Rechange">
         <!--xiuxiuxiu-->
    <i class="icon-关闭" style="position:fixed;left:5px;margin-top:5px;" @click="close()"></i>
        <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品名</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品名" id="rename"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品描述</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品描述" id="chdesc"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品规格</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品规格" id="chgui"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品价格</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品价格" id="chprice"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">商品产地</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="商品产地" id="chborn"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">仓库库存</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="仓库库存" id="chquantity"/>
                </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">最大限购数</label></div>
            <div class="weui-cell__bd weui-cell_primary">
                <input type="text" class="weui-input" placeholder="最大限购数" id="chstock"/>
                </div>
        </div>
  </div>
  <button class="weui-btn weui_btn weui-btn_primary" @click="updateGoods()">更新商品</button>
</div>
</div>
</template>
<script>
import weui from "weui.js";
import $ from "jquery";
export default {
  data() {
    return {
      name: "",
      desc: "",
      gui: "",
      price: "",
      born: "",
      quantity: "",
      stock: "",
      id: 0,
      addFlag: false,
      delFlag: false,
      chFlag: false,
      Rechange: false,
      goodsclass: [],
      dName: "",
      haha: "",
      chname: "",
      chdesc: "",
      chgui: "",
      chprice: "",
      chborn: "",
      chquantity: "",
      chstock: "",
      rename: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
      close(){
          document.getElementById("change-goods").style.display = "none";
      },
    getData() {
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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        var trans = db.transaction(["goodslist"], "readwrite");
        var store = trans.objectStore("goodslist");
        var cursor = store.openCursor();
        cursor.onsuccess = function(e) {
          var res = e.target.result;
          var table = document.getElementById("table");
          if (res) {
            if(res.value.name !== ""){
            console.log(res);
            var row = document.createElement("tr");
            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.id;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.name;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.desc;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.gui;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.price;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.born;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.quantity;
            row.appendChild(idCell);

            var idCell = document.createElement("td");
            idCell.innerHTML = res.value.stock;
            row.appendChild(idCell);
            //row.appendChild(idCell);

            /*var btnDel = document.createElement('input');
            btnDel.setAttribute('type','button');
            btnDel.setAttribute('value','删除');

            row.appendChild(btnDel);
            btnDel.onclick = function(){
                if(confirm("确定删除?")){
                    console.log(res.value.name);
                }
            }*/

            table.appendChild(row);
            res.continue();
          }
          }
        };
        //删除数据
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
    },
    updateGoods() {
      //console.log(name)
      //console.log(chFlag);
      var rename = document.getElementById("rename").value;
      var chdesc = document.getElementById("chdesc").value;
      var chgui = document.getElementById("chgui").value;
      var chprice = document.getElementById("chprice").value;
      var chborn = document.getElementById("chborn").value;
      var chquantity = document.getElementById("chquantity").value;
      var chstock = document.getElementById("chstock").value;

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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
        if (!storeNames.contains("list")) {
          db.createObjectStore("list", {
            keyPath: "id",
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        var trans = db.transaction(["goodslist"], "readwrite");
        var store = trans.objectStore("goodslist");
        var cursor = store.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            if (res.value.name === rename) {
              console.log(res);
              let id = res.value.id;
              trans.objectStore("goodslist").delete(id);
              var o = {
                  id:id,
                name: rename,
                desc: chdesc,
                gui: chgui,
                price: chprice,
                born: chborn,
                quantity: chquantity,
                stock: chstock
              };
              console.log(o);
              var req = store.put(o);
              req.onerror = function(e) {
                console.log("Error", e.target.error.name);
                console.log("更新失败");
                alert("更新失败");
              };
              req.onsuccess = function(e) {
                console.log("更新成功");
                alert("更新成功!");
              };
              //this.chdesc = res.value.name;
              //console.log(this.chdesc);
              //this.chFlag = false;
              //console.log(this.chFlag);
              //Rechange = true;
            } else {
              res.continue();
            }

            //console.log("Key", res.key);
            //console.dir("Data", res.value);
          }
        };
        //删除数据
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
      $("#table tr:gt(0)").empty();
      $("table tr")
        .not(":eq(0)")
        .empty();
      this.getData();
    },
    chGoods(name, chFlag, Rechange) {
      //console.log(name)
      console.log(chFlag);
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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
        if (!storeNames.contains("list")) {
          db.createObjectStore("list", {
            keyPath: "id",
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        var trans = db.transaction(["goodslist"], "readwrite");
        var store = trans.objectStore("goodslist");
        var cursor = store.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            if (res.value.name === name) {
              console.log(res);
              document.getElementById("ch-goods").style.display = "none";
              document.getElementById("change-goods").style.display = "block";
              document.getElementById("rename").value = res.value.name;
              document.getElementById("chdesc").value = res.value.desc;
              document.getElementById("chgui").value = res.value.gui;
              document.getElementById("chprice").value = res.value.price;
              document.getElementById("chborn").value = res.value.born;
              document.getElementById("chquantity").value = res.value.quantity;
              document.getElementById("chstock").value = res.value.stock;

              //this.chdesc = res.value.name;
              //console.log(this.chdesc);
              //this.chFlag = false;
              //console.log(this.chFlag);
              //Rechange = true;
            } else {
              res.continue();
            }

            //console.log("Key", res.key);
            //console.dir("Data", res.value);
          }
        };
        //删除数据
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
      /*$("#table tr:gt(0)").empty();
      $("table tr")
        .not(":eq(0)")
        .empty();
      this.getData();*/
    },
    confirmAdd() {
      //console.log(this.data);
      //this.openDB();
      this.createindexDB(
        this.id,
        this.name,
        this.desc,
        this.gui,
        this.price,
        this.born,
        this.quantity,
        this.stock
      );
      this.id += 1;
      localStorage.setItem("id", this.id);
      console.log(this.id);
      $("#table tr:gt(0)").empty();
      $("table tr")
        .not(":eq(0)")
        .empty();
      this.getData();
    },
    delGoods(name) {
      //console.log(name)
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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
        if (!storeNames.contains("list")) {
          db.createObjectStore("list", {
            keyPath: "id",
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        var trans = db.transaction(["goodslist"], "readwrite");
        var store = trans.objectStore("goodslist");
        var cursor = store.openCursor();

        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if (res) {
            if (res.value.name === name) {
              console.log(res);
              let id = res.value.id;
              var req = store.delete(id);
              req.onerror = function(e) {
                console.log("Error", e.target.error.name);
                console.log("删除失败");
                alert("删除失败!");
              };
              req.onsuccess = function(e) {
                console.log("删除成功");
                alert("删除成功!");
              };
            } else {
              res.continue();
            }

            //console.log("Key", res.key);
            //console.dir("Data", res.value);
          }
        };
        //删除数据
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
      $("#table tr:gt(0)").empty();
      $("table tr")
        .not(":eq(0)")
        .empty();
      this.getData();
    },
    openDB() {
      if ("indexedDB" in window) {
        console.log("支持indexDB");
        this.createindexDB(
          this.name,
          this.desc,
          this.gui,
          this.price,
          this.born,
          this.quantity,
          this.stock
        );
      } else {
        console.log("不支持");
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
      }
    },
    createindexDB(id, name, desc, gui, price, born, quantity, stock) {
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
        if (!storeNames.contains("goodslist")) {
          db.createObjectStore("goodslist", {
            keyPath: "id",
            autoIncrement: true
          });
        }
        if (!storeNames.contains("list")) {
          db.createObjectStore("list", {
            keyPath: "id",
            autoIncrement: true
          });
        }
      };
      openRequest.onsuccess = function(e) {
        //success：打开成功^-^
        console.log("数据库打开成功...");
        var db = e.target.result;
        var trans = db.transaction(["goodslist"], "readwrite");
        var store = trans.objectStore("goodslist");
        //添加数据
        //console.log(data);
        var o = {
          id: id,
          name: name,
          desc: desc,
          gui: gui,
          price: price,
          born: born,
          quantity: quantity,
          stock: stock
        };
        console.log(o);
        var request = store.add(o);
        request.onerror = function(e) {
          console.log("error", e.target.err.name);
          console.log("添加失败");
          weui.alert("添加失败!");
        };

        request.onsuccess = function(e) {
          alert("添加商品成功!");
          console.log("添加成功");
        };
      };
      openRequest.onerror = function(e) {
        //error：打开失败*-
        console.log("数据库打开失败...");
        console.dir(e);
      };
    },
    adds() {
      this.addFlag = true;
      this.delFlag = false;
      this.id = parseInt(localStorage.getItem("id"));
      console.log(this.id);
      if (this.isNumber(this.id) === false) {
        this.id = 1;
        console.log(this.id);
        localStorage.setItem("id", this.id);
      }
    },
    isNumber(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    dels() {
      this.delFlag = true;
      this.addFlag = false;
    },
    chs() {
      this.chFlag = true;
      this.addFlag = false;
      this.delFlag = false;
    }
  }
};
</script>
<style>
#operate {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
#add-goods,
#change-goods {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 55%;
  left: 0;
}
#del-goods,
#ch-goods {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 55%;
  left: 0;
}
#table {
  border-collapse: collapse;
  height: 100%;
}
#table th,
#table td {
  width: 100px;
  height: 40px;
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
}
#del-name {
  width: 100%;
}
#can {
  width: 100%;
  height: 400px;
  overflow-y: auto;
  position: fixed;
  top: 10%;
  left: 0;
}
</style>

