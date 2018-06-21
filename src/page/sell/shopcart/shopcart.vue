<template>
<div id="shopcart">
  <div class="back" >
    <i class="icon-back" @click="goBack()"></i>
      </div>
  
  
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:red;width:20%;position:absolute;right:30%;top:5px;border-radius:5px;" v-if="this.flag1" @click="delGoods()">删除</div>
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;position:absolute;right:5%;top:5px;border-radius:5px;" @click="manage()">管理</div>
  <!--<a href="javascript:;" class="weui-btn weui_min_btn weui-btn_defalute" style="background:#ff9966">管理</a>-->
  <div id="goods">
          <ul id="shoplist">
            <li class="sh-list" v-for="(item,index) in shopData" :key="index" v-if="item.count > 0">
              <div class="sh-name">
        <span>南瓜饼子铺</span>
        <i class="icon-more"></i>
        <input type="checkbox" name="radios" style="position:absolute;right:10%;margin-top:10px;" @click="getAmount(item,item.count)">
    </div>
             <div id="sh-content">
        <div id="sh-img">
            <img :src="item.img">
        </div>
        <span id="goods-name">
            [狂欢价]{{item.name}}
        </span>
        <span id="sh-num">商品编号:{{item.id}}</span>
        <span id="sh-price">
            ￥{{item.price}}
        </span>
        <span id="sh-gui">
          规格:{{item.gui}}
        </span>
        <div id="shu">
        <span id="sub" @click="sub(item)">-</span>
        <span id="stock">{{item.count}}</span>
        <span id="add" @click="add(item)">+</span>
      </div>
    </div>
            </li>
          </ul>
</div>
<div id="shopcart-mask">
  <!--<div id="jie-name">
    <span style="color:#fff;">配送至</span>
    <div id="form">
      <select id="city" class="select">
        <option value="贵阳">贵阳</option>
        <option value="六盘水">六盘水</option>
        <option value="都匀">都匀</option>
        <option value="福泉">福泉</option>
        <option value="遵义">遵义</option>
        <option value="兴义">兴义</option>
        <option value="安顺">安顺</option>
        <option value="凯里">凯里</option>
        <option value="毕节">毕节</option>
      </select>
    </div>
    <input type="text" placeholder="请输入收货地址" style="height:20px;" v-model="address">
  </div>-->
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="width:20%;position:absolute;left:5%;top:10px;border-radius:5px;background:red;color:#fff;" v-if="this.flag2" @click="cancelAll()">取消全选</div>
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="width:20%;position:absolute;left:5%;top:50px;border-radius:5px;color:#fff;" @click="allGoods()">全选</div>
  <!--<div id="jie-amount">
    <span><span style="color:#fff;">总金额:</span><span style="color:red;">￥{{amount}}</span></span>
  </div>-->
  <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:20%;position:absolute;right:5%;height:30px;top:50px;border-radius:5px;" @click="jiesuan()">
    <span style="display:block;margin-top:2px;">结算</span>
    </div>
</div>
</div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      name: "",
      price: "",
      img: "",
      count: 0,
      stock: "",
      shopData: [],
      list: [],
      shop: [],
      num: [],
      flag: false,
      flag1: false,
      flag2: false,
      amount: 0.0,
      address: "",
      lists: {},
      goodslist: [],
      result: false
    };
  },
  created() {
    this.getCart();
    this.lists = {
      goodslist: [
        {
          id: 0,
          img: "",
          name: "",
          price: 0,
          gui: "",
          count: 0
        }
      ],
      totalNumber: 0,
      totalAmount: 0.0
    };
    console.log(this.lists);
    localStorage.removeItem("goodslist");
    //localStorage.setItem("goodslist", JSON.stringify(this.lists));
    this.goodslist = this.lists.goodslist;
  },
  methods: {
    jiesuan() {
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      for (let i = 0; i < _m.length; i++) {
        if (_m[i].checked === true) {
          console.log(_m[i]);
          let good = _m[i].parentNode.parentNode.children[1];
          //console.log(good);
          let id = good.children[2].innerText;
          let img = good.children[0].children[0].src;
          let name = good.children[1].innerText;
          let price = good.children[3].innerText;
          console.log(typeof price);
          console.log(price.length);
          console.log(price.replace("￥", ""));
          console.log(parseInt(price.replace("￥", "")));
          //console.log(price.splice(0,1)+"haha");
          let gui = good.children[4].innerText;
          let count = good.children[5].children[1].innerText;
          //this.result = true;
          for(let p = 0;p < this.goodslist.length;p++){
            if(this.goodslist[p].id === count){
              this.goodslist[p].count += parseInt(count);
              this.result = true;
            }
          }
          if (!this.result) {
            this.goodslist.push({
              id: id,
              img: img,
              name: name,
              price: price,
              gui: gui,
              count: count
            });
          }

          this.lists.totalNumber += parseInt(count);
          this.lists.totalAmount +=
            parseInt(count) * parseInt(price.replace("￥", ""));
          //console.log(this.lists.totalAmount);
        }
      }
      console.log(this.lists);
      localStorage.setItem("goodslist",JSON.stringify(this.lists));
      //console.log(JSON.parse(localStorage.getItem("goodslist")));
      this.$router.push({'name':'jie'});
      //localStorage.setItem(JSON.stringify(list));
    },
    goBack() {
      this.$router.go(-1);
    },
    getAmount(item, obj) {
      //this.amount = 0.0;
      //console.log(item);
      //console.log(parseFloat(item.price) * obj);
      //console.log(obj);
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      for (let i = 0; i < _m.length; i++) {
        if (_m[i].checked === true) {
          console.log(item);
          console.log(item.count);
          console.log(parseFloat(item.price));
          this.amount += parseFloat(item.price) * obj;
        }
      }
      console.log(this.amount);
      /*for (let i = 0; i < _m.length; i++) {
        if (_m[i].checked === true) {
          this.amount += obj * parseFloat(item.price);
        } else {
          this.amount -= obj * parseFloat(item.price);
        }
      }
      //console.log(typeof(obj));

      //this.amount = this.amount.toFixed(2);
      console.log(this.amount);*/
    },
    cancelAll() {
      this.flag2 = !this.flag2;
      let _ul = document.getElementById("shoplist");
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      let _n = document.getElementById("shoplist").getElementsByTagName("li");
      //console.log(_n);
      for (let i = 0; i < _m.length; i++) {
        _m[i].checked = false;
      }
      this.amount = 0;
    },
    allGoods() {
      this.flag2 = !this.flag2;
      let _ul = document.getElementById("shoplist");
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      let _n = document.getElementById("shoplist").getElementsByTagName("li");
      //console.log(_n);
      for (let i = 0; i < _m.length; i++) {
        _m[i].checked = true;
        this.amount += this.shopData[i].count * this.shopData[i].price;
      }
      this.amount = this.amount.toFixed(2);
      console.log(this.amount);
    },
    delGoods() {
      let _ul = document.getElementById("shoplist");
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      let _n = document.getElementById("shoplist").getElementsByTagName("li");
      for (let i = 0; i < _m.length; i++) {
        if (_m[i].checked === true) {
          console.log(i);
          //console.log(_m[i].parentNode.parentNode);
          this.list.productlist = this.list.productlist.splice(
            this.list.productlist[i],
            1
          );
          localStorage.setItem("shopcart", JSON.stringify(this.list));
          console.log(JSON.parse(localStorage.getItem("shopcart")));
          //console.log(this.list);
          _ul.removeChild(_n[i]);
          i--;
        }
      }
      console.log(_n);
    },
    manage() {
      this.flag = !this.flag;
      this.flag1 = !this.flag1;
      let _m = document
        .getElementById("shoplist")
        .getElementsByTagName("input");
      let _ul = document.getElementById("shoplist");
      let _n = document.getElementById("shoplist").getElementsByTagName("li");
      for (let i = 0; i < _m.length; i++) {
        if (_m[i].checked === true) {
          console.log(_m[i].parentNode.parentNode);
        }
      }
    },
    getCart() {
      this.list = JSON.parse(localStorage.getItem("shopcart"));
      console.log(this.list);
      this.shopData = this.list.productlist;
      this.num.splice(0, this.num.length);
      console.log(this.shopData);
      for (let y = 0; y < this.shopData.length; y++) {
        this.num.push(this.shopData[y].count);
      }
    },
    add(item) {
      let _p = item.count;
      var count = this.num[item.id - 1];
      console.log(typeof this.list.productlist[0].id);
      if (item.count === 0) {
        for (let j = 0; j < this.list.productlist.length; j++) {
          if (this.list.productlist[j].id === item.id) {
            this.list.productlist[j].count = item.count;
            this.list.totalNumber = this.list.totalNumber - count;
            this.list.totalAmount = this.list.totalAmount - item.price * count;
            console.log(this.list.totalNumber);
            console.log(this.list.totalAmount);
          }
        }
      } else {
        item.count += 1;
      }
      localStorage.setItem("shopcart", JSON.stringify(this.list));
      //console.log(JSON.parse(localStorage.getItem("shopcart")));
      this.getCart();
    },
    sub(item) {
      let _p = item.count;
      var count = this.num[item.id - 1];
      console.log(typeof this.list.productlist[0].id);
      if (item.count === 0) {
        for (let j = 0; j < this.list.productlist.length; j++) {
          if (this.list.productlist[j].id === item.id) {
            this.list.productlist[j].count = item.count;
            this.list.totalNumber = this.list.totalNumber - count;
            this.list.totalAmount = this.list.totalAmount - item.price * count;
            console.log(this.list.totalNumber);
            console.log(this.list.totalAmount);
          }
        }
      } else {
        item.count -= 1;
      }
      //console.log(count);

      console.log(this.list);
      localStorage.setItem("shopcart", JSON.stringify(this.list));
      //console.log(JSON.parse(localStorage.getItem("shopcart")));
      this.getCart();
    }
  }
};
</script>
<style>
li {
  list-style-type: none;
}

#shopcart {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  overflow-y: auto;
}
.back {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 5px;
}
.back .icon-back {
  font-size: 32px;
}
#goods {
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: 20px;
  overflow-y: auto;
}
.sh-list {
  border-radius: 5px;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  background: rgb(247, 247, 218);
}
.cart {
  position: absolute;
  margin-bottom: 20px;
  margin-left: 5%;
  width: 90%;
  border-radius: 5px;
  background: rgb(247, 247, 218);
}
.sh-name {
  width:100%;
  left:5%;
  height: 30px;
  background: rgba(7, 17, 27, 0.1);
}
.sh-name span {
  position: absolute;
  left: 6%;
  margin-top: 2px;
  font-size: 14px;
}
.sh-name .icon-more {
  position: absolute;
  margin-top: 5px;
  left: 130px;
}
#sh-content {
  width: 100%;
  height: 150px;
}
#sh-img {
  position: absolute;
  margin-top: 20px;
  margin-left: 5%;
  width: 15%;
  height:12%;
}
#sh-img img {
  width: 100%;
  height: 100%;
}
#goods-name {
  display: inline-block;
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  left: 25%;
  margin-top: 20px;
}
#sh-num {
  display: inline-block;
  position: absolute;
  margin-top: 80px;
  left: 26%;
  font-size: 12px;
}
#sh-price {
  position: absolute;
  margin-top: 50px;
  left: 25%;
  font-size: 14px;
  color: red;
}
#sh-gui {
  display: inline-block;
  position: absolute;
  margin-top: 50px;
  margin-left: 10px;
}
#shu {
  position: absolute;
  margin-top: 100px;
  right: 10%;
  width: 30%;
  height: 30px;
  border: 1px solid rgba(7, 17, 27, 0.1);
}
#sub {
  display: inline-block;
  position: absolute;
  left: 0;
  width: 30%;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  background: rgb(14, 57, 77);
  color: #fff;
}
#stock {
  display: inline-block;
  position: absolute;
  left: 35%;
  top: 5%;
  width: 30%;
}
#add {
  display: inline-block;
  position: absolute;
  right: 0;
  width: 30%;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  background: rgb(14, 57, 77);
  color: #fff;
}
#shopcart-mask {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: rgba(7, 17, 27, 0.5);
  z-index: 1000;
}
#jie-name,
#jie-amount {
  display: inline-block;
  position: absolute;
}
#jie-name {
  top: 10px;
  left: 10px;
}
#jie-amount {
  top: 50px;
  right: 30%;
}
#form {
  display: inline-block;
}
</style>