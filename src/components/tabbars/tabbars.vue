<template>
<div id="tabbars">
  <a href="javascript:;" class="weui-btn weui_btn weui-btn_primary" style="width:50%;margin-left:0;" @click="joinCar()">加入购物车</a>
  <a href="javascript:;" class="weui-btn weui_btn weui-btn_defalute" style="width:50%;margin-top:-45px;margin-right:0;background:#ff9966" @click="jiesuan()">立即结算</a>
  <div id="mask" v-if="showFlag">
    
      <div id="m-pic">
        <img :src="this.goods.img">
        </div>
          <span id="m-price">￥{{this.goods.price}}</span>
          <span id="m-quantity">库存:{{this.goods.quantity}}</span>
      <span id="m-sale">规格:</span>
      <div id="m-sales" @click="getSales()">{{this.goods.gui}}</div>
      <div id="attention">每人限购{{this.stock}}份</div>
      <div id="m-content">
        <span id="shu-name">购买数量</span>
      <div id="shu">
        <span id="sub" @click="sub()">-</span>
        <span id="stock">{{this.shu}}</span>
        <span id="add" @click="add()">+</span>
      </div>
      </div>
      <button class="weui-btn weui_btn weui-btn_defalute m-que" style="background:#ff9966" @click="confirm()">确定</button>
  </div>
</div>
</template>
<script>
import Vue from "Vue";
export default {
  data() {
    return {
      colors: ["#ff9966", "rgb(147, 153, 159)"],
      i: 0,
      shu: 1,
      stock: 0,
      showFlag: false,
      flag: false,
      orderData: [],
      goodslist: []
    };
  },
  props: {
    goods: {
      type: Object
    }
  },
  created() {
    this.stock = parseInt(this.goods.stock);
    console.log(this.goods);
  },
  methods: {
    jiesuan() {
      //console.log(this.goods);
      if(!this.goods.count){
        Vue.set(this.goods,'count',1);
      }
      this.$emit('add',event.target);
      console.log(this.goods);
      //this.goodslist = JSON.parse(localStorage.getItem("goodslist"));
      localStorage.removeItem("goodslist");
      //console.log(this.goodslist);
      this.goodslist = {
        goodslist: 
          [{
            id: "商品编号"+this.goods.id,
            img: this.goods.img,
            name: this.goods.name,
            price: "￥"+this.goods.price,
            gui: "规格"+this.goods.gui,
            count: this.goods.count
          }],
        totalNumber: parseInt(this.goods.count),
        totalAmount: parseInt(this.goods.count) * parseFloat(this.goods.price.replace("￥",""))
      };
      //console.log(this.goodslist);
      localStorage.setItem("goodslist", JSON.stringify(this.goodslist));
      console.log(JSON.parse(localStorage.getItem("goodslist")));
      this.$router.push({'name':'jie'});

      //console.log(this.goodslist);
      //console.log(this.goodslist);
      /*if(this.shoplist === null || this.shoplist === ""){

      }*/
    },
    confirm() {
      if (this.flag === false) {
        alert("请先选择商品规格");
      } else {
        if (!this.goods.count) {
          Vue.set(this.goods, "count", this.shu);
        } else {
          this.goods.count += this.shu;
        }
        this.$emit("add", event.target);
        console.log(this.goods);
        var orderdetail = {};
        var shopcart = localStorage.getItem("shopcart");
        if (shopcart === null || shopcart === "") {
          var jsonstr = {
            productlist: [
              {
                id: this.goods.id,
                name: this.goods.name,
                img: this.goods.img,
                price: this.goods.price,
                stock: this.goods.stock,
                count: this.goods.count,
                gui: this.goods.gui,
                quantity: this.goods.quantity
              }
            ],
            totalNumber: this.goods.count,
            totalAmount: this.goods.count * this.goods.price
          };
          localStorage.setItem("shopcart", JSON.stringify(jsonstr));
        } else {
          var jsonstr = JSON.parse(shopcart.substr(0, shopcart.length));
          var productlist = jsonstr.productlist;
          var result = false;
          //查看购物车中是否有该商品
          for (var i in productlist) {
            if (productlist[i].id === this.goods.id) {
              productlist[i].count =
                parseInt(productlist[i].count) + parseInt(this.goods.count);
              result = true;
            }
          }
          if (!result) {
            //没有该商品直接加进去
            productlist.push({
              id: this.goods.id,
              name: this.goods.name,
              img: this.goods.img,
              price: this.goods.price,
              stock: this.goods.stock,
              count: this.goods.count,
              gui: this.goods.gui,
              quantity: this.goods.quantity
            });
          }
          //重新计算总价
          jsonstr.totalNumber =
            parseInt(jsonstr.totalNumber) + parseInt(this.goods.count);
          jsonstr.totalAmount =
            parseFloat(jsonstr.totalAmount) +
            parseInt(this.goods.count) * parseFloat(this.goods.price);
          //保存购物车
          localStorage.setItem("shopcart", JSON.stringify(jsonstr));
          //var _k = JSON.stringify(jsonstr);
          //localStorage.setItem("shopcart",_k);
        }
        /*localStorage.setItem("name",this.goods.name);
        localStorage.setItem("price",this.goods.price);
        localStorage.setItem("img",this.goods.img);
        localStorage.setItem("count",this.goods.count);
        localStorage.setItem("stock",this.goods.stock);*/
        alert("添加商品成功");
        this.showFlag = !this.showFlag;
      }
    },
    add() {
      if (this.shu === this.stock) {
        return;
      } else {
        this.shu += 1;
      }
    },
    sub() {
      if (this.shu === 1) {
        return;
      } else {
        this.shu -= 1;
      }
    },
    getSales() {
      //var i = 0;
      if (this.i === 2) {
        this.i = 0;
      }
      var _u = document.getElementById("m-sales");
      this.flag = !this.flag;
      _u.style.backgroundColor = this.colors[this.i];
      //console.log(this.colors[this.i]);
      //console.log(this.i);
      this.i += 1;
      //console.log(this.i);
    },
    joinCar() {
      this.showFlag = !this.showFlag;
    }
  }
};
</script>
<style>
#tabbars {
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  background: rgba(147, 153, 159, 0.4);
}
#mask {
  width: 100%;
  height: 260px;
  position: absolute;
  top: -200px;
  background: rgb(147, 153, 159);
  /*background: rgba(147, 153, 159, 0.4);*/
}
#m-pic {
  width: 30%;
  height: 30%;
  margin-top: 10px;
}
#m-pic img {
  width: 100px;
  height: 100px;
}
#m-price {
  position: absolute;
  top: 10px;
  left: 35%;
  font-size: 14px;
  color: red;
}
#m-quantity {
  position: absolute;
  top: 30px;
  left: 35%;
}
#m-sale {
  position: absolute;
  top: 60px;
  font-size: 14px;
  font-weight: bold;
  left: 35%;
}
#m-sales {
  position: absolute;
  top: 60px;
  left: 45%;
  width: 30%;
  border-radius: 5px;
  border: 1px solid rgba(7, 17, 27, 0.3);
  /*background: rgba(7, 17, 27, 0.1);*/
}
#attention {
  display: inline-block;
  position: absolute;
  top: 90px;
  left: 35%;
  font-size: 14px;
  color: red;
}
#m-content {
  position: absolute;
  left: 5%;
  top: 120px;
  width: 100%;
}
#shu-name {
  position: absolute;
  left: 3%;
  font-size: 16px;
  font-weight: bold;
}
#shu {
  position: absolute;
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
.m-que {
  position: absolute;
  bottom: 0;
}
</style>