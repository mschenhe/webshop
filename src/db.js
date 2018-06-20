window.onload = function () {
  justifyIndexDB();
}

function justifyIndexDB() {
  if ("indexedDB" in window) {
    console.log("支持indexDB");
    createindexDB();
  } else {
    console.log("不支持");
    window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
  }
}
//创建数据库
function createindexDB() {

  //1-我们先创建一个对象，放一些数据比如dbInfo ，可以设置数据库名字dbName，数据库的版本dbVersion 

  var dbInfo = {
    dbName: "chenhe",
    dbVersion: 2021,
    dbInstance: {}
  };

  //2-创建数据库 indexedDB.open方法用于打开数据库。返回的是一个对象，第一个参数是数据库名称，格式为字符串。第二个参数是数据库版本。

  var openRequest = window.indexedDB.open(dbInfo.dbName, dbInfo.dbVersion);

  //3-创建数据库时会处罚三个事件之一，这三个事件，分别是upgradeneeded，success，onerror，意思就不说了吧，不懂得可以用字典查嘛。

  openRequest.onupgradeneeded = function (e) { //第一次打开数据库 ^-*

    console.log("第一次打开该数据库，或者数据库版本发生变化....");
    var db = e.target.result;
    var storeNames = db.objectStoreNames;

    //创建数据库的表格（或者叫数据库仓库）
    if (!storeNames.contains('chart')) {
      db.createObjectStore('chart', {
        keyPath: "goodId",
        autoIncrement: true
      })
    }
  }

  openRequest.onsuccess = function (e) { //success：打开成功^-^  
    console.log("数据库打开成功...");
    var db = e.target.result;
    var trans = db.transaction(["chart"], "readwrite");
    var store = trans.objectStore("chart");

    //4-这里面我要写很多要调用的函数了，比如，下面.....wu la wu la.....

    //add_data(db); //数据库中添加数据   ------->xian说这个啦
    //del_data(db); //数据库中删除数据
    //deal_data(db); //读取数据
    //update_data(db); //更新数据（类似于Add方法）
    //traverse_data(db); //遍历数据
  }

  openRequest.onerror = function (e) { //error：打开失败*-*

    console.log("数据库打开失败...");
    console.dir(e);
  }
}
//添加数据
function add_data(db) {
  var db = db;
  var tt = db.transaction(["chart"],"readwrite"); 
  var store = tt.objectStore("chart");
  var o = {
    num: '12345678910',
    psd: '123',
    yanNum: 123
  };
  var request = store.add(o);
  request.onerror = function (e) {
    console.log("error", e.target.err.name);
    console.log("添加失败");
  }
  request.onsuccess = function (e) {
    console.log("添加成功");
  }
}
//删除数据
function del_data(db) {
  var db = db;
  var tt = db.transaction(["chart"],"readwrite"); 
  var req = tt.objectStore("chart").delete(2);
  req.onerror = function (e) {
    console.log("Error",e.target.error.name);
    console.log("删除失败");
  }
  req.onsuccess = function (e) {
    console.log("删除成功");
  }
}
//更新数据
function update_data(db) {
  var db = db;
  var trans = db.transaction(["chart"],"readwrite"); 
  var store = trans.objectStore("chart");
  var o = {
    num: '12345678910',
    psd: '123',
    yanNum: 123
  };
  var request = store.put(o);
}
//遍历数据
function traverse_data(db) {
  var db = db;
  var trans = db.transaction(["chart"], "readonly");   
  var store = trans.objectStore("chart");
  var cursor = store.openCursor();

  cursor.onsuccess = function (e) {
    var res = e.target.result;
    if (res) {
      console.log("Key", res.key);
      console.dir("Data", res.value);
      res.continue();
    }
  }

}
//设置索引获得的数据
function create_index(db){ 

    //1-设置数据库中的数据对象 

        var o = {
           num:'201314',
            psd:"mayouchen",
            yanNum:456
        };


    //2-创建索引 

        var store = db.createObjectStore("o", { autoIncrement:true }); 

    //3-设置索引  createIndex方法接受三个参数，第一个是索引名称，第二个是建立索引的属性名，第三个是参数对象。  

        store.createIndex("M","M", {unique:false});  
        store.createIndex("Z","Z", {unique:true});

    //4-通过索引获取数据
        var t = db.transaction(["o"],"readonly");
        var store = t.objectStore("o");
        var index = store.index("M");

        var request = index.get(M);
        var request = index.get(M);
        console.log("通过索引获取数据:"+request);
    }
