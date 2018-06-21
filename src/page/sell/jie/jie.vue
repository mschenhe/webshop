<template>
<div id="jie">
  <div id="jie-mask">
    <div id="j-conback">
        <div id="j-back">
            <div style="font-size:32px;color:#fff;" @click="back()"><i class="icon-back"></i></div>
            <!--<div style="margin-top:-40px;left:10px;">确定订单</div>--></div>
    </div>
    
<div id="jie-name" @click="changeAD()">
    <i class="icon-wxb定位" style="position:absolute;left:0;font-size:32px;top:25%;"></i>
    <span id="j-name">收货人：陈菏</span>
    <span id="j-phone">12345678910</span>
    <span id="j-ad">收货地址:<span>湖南省湘潭市雨湖区和平街道湖南科技大学北校</span></span>
    <span id="j-con">（收货不便时,可选择免费代收货服务）</span>
    <i class="icon-more" style="position:fixed;right:5%;font-size:32px;top:20%;"></i>
</div>
<div id="content">
<div id="jie-content" v-for="(item,index) in this.goodslist" :key="index">
<div id="ad-name">南瓜饼子铺</div>
<div id="con-img">
  <img :src="item.img">
</div>
<div id="con-name">
<span>{{item.name}}</span>
</div>
<div id="con-price">
  <span>{{item.price}}</span>
  </div>
  <div id="con-num">
    <span>{{item.id}}</span>
  </div>
  <div id="con-gui">
    <span id="gui">{{item.gui}}</span>
  </div>
  <div id="con-count">
    <span>x{{item.count}}</span>
  </div>
</div>
<!--<div id="attention">
  <div id="att-1">
    <div id="att-1-1">材质保证</div>
    <div id="att-1-2">喵喵材质保证真品</div>
  </div>
  <div id="att-2">
    <div id="att-2-1">配送方式</div>
    <div id="att-2-2">快递  免邮</div>
  </div>
  <div id="att-3">
    <div id="att-3-1">运费险</div>
    <div id="att-3-2">卖家送，确认收货前退货可赔</div>
  </div>
  <div id="att-4">
    <div id="att-4-1">卖家留言</div>
    <input id="att-4-2" type="text" placeholder="选填：填写内容已和卖家协商确认">
  </div>
</div>-->
</div>
</div>
<div id="jie-bottom">
<span style="position:absolute;right:35%;margin-top:15px;">合计：<span style="color:red;">￥{{totalAmount}}</span></span>
<div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:30%;height:50px;position:absolute;right:0;top:0;" @click="submitOrder">
  <span style="display:inline-block;font-size:16px;line-height:16px;height:16px;margin-top:17px;color:#fff">提交订单</span>
  </div>
</div>
  
<div id="picker" v-if="flag">
  <div id="title"><span>请输入支付密码</span></div>
  <div id="secret">
    <input value="">
    <input value="">
    <input value="">
    <input value="">
    <input value="">
  </div>
  <a href="javascript:;">忘记密码?</a>
  <div id="keyboard">
    <div id="key-1">
      <div @click="getSecret(1)"><span>1</span></div>
      <div @click="getSecret(2)"><span>2</span></div>
      <div @click="getSecret(3)"><span>3</span></div>
    </div>
    <div id="key-2">
      <div @click="getSecret(4)"><span>4</span></div>
      <div @click="getSecret(5)"><span>5</span></div>
      <div @click="getSecret(6)"><span>6</span></div>
    </div>
    <div id="key-3">
      <div @click="getSecret(7)"><span>7</span></div>
      <div @click="getSecret(8)"><span>8</span></div>
      <div @click="getSecret(9)"><span>9</span></div>
    </div>
    <div id="key-4">
      <div><span></span></div>
      <div @click="getSecret(0)"><span>0</span></div>
      <div @click="delSecret()"><span>x</span></div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      goodslist: [],
      totalAmount: 0,
      flag: false,
      count: 0,
      secret: "",
      password: "12345"
    };
  },
  created() {
    this.goodslist = JSON.parse(localStorage.getItem("goodslist")).goodslist;
    this.totalAmount = JSON.parse(
      localStorage.getItem("goodslist")
    ).totalAmount;
    console.log(JSON.parse(localStorage.getItem("goodslist")));
    if(this.goodslist[0].count === 0){
      this.goodslist.splice(0, 1);
    }
    //
    console.log(this.goodslist);
    //console.log(typeof(JSON.parse(localStorage.getItem("goodslist")).totalAmount));
  },
  methods: {
    changeAD() {
      //let address = localStorage.getItem("address");
      //console.log(address);
      this.$router.push({ name: "address" });
    },
    back() {
      this.$router.go(-1);
    },
    getSecret(obj) {
      ++this.count;
      if (this.count === 5) {
        let _l = document.getElementById("secret").children[this.count - 1];
        _l.value = obj;
        this.secret += obj;
        if (this.secret === this.password) {
          localStorage.setItem("totalAmount", this.totalAmount);
          this.$router.push({ name: "complete" });
        } else {
          alert("密码错误");
          this.count = 0;
          let r = document.getElementById("secret").children;
          for (let i = 0; i < r.length; i++) {
            r[i].value = "";
            this.secret = "";
          }
        }
        console.log(this.secret);
        //console.log(_l.value);
        //
      } else {
        let _l = document.getElementById("secret").children[this.count - 1];
        _l.value = obj;
        this.secret += obj;
        //console.log(_l.value);
        //console.log(typeof(_l.value));
      }
      //console.log(obj +','+this.count);
    },
    delSecret() {
      --this.count;
      document.getElementById("secret").children[this.count].value = "";
      console.log(this.count);
    },
    submitOrder() {
      let login = localStorage.getItem("login");
      if (login === null || login === "") {
        this.$router.push({ name: "login" });
      } else {
        this.flag = true;
        document.getElementById("j-con").style.color = "rgba(7, 17, 27, 0.9)";
        document.getElementById("jie-mask").style.background =
          "rgba(7, 17, 27, 0.5)";
          var adList = {
          name:document.getElementById("j-name").innerText,
          address:document.getElementById("j-ad").innerText,
          tel:document.getElementById("j-phone").innerText,
        
      }
      //console.log();
      localStorage.setItem("adList",JSON.stringify(adList));
      }
      console.log();
    }
  }
};
</script>
<style>
#jie {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}
#j-conback {
  width: 100%;
  height: 10%;
  background: red;
}
#j-back {
  position: absolute;
  top: 0;
}
#jie-name {
  display: block;
  position: absolute;
  margin-top: 12%;
  margin-left: 0;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid red;
}
#j-name,
#j-phone {
  position: absolute;
  top: 10px;
  font-size: 20px;
}
#j-name {
  left: 10%;
}
#j-phone {
  right: 10%;
}
#j-ad {
  position: absolute;
  left: 10%;
  top: 45px;
  padding-right: 5%;
  text-align: left;
}
#j-ad .icon-more {
  right: 1%;
  top: 20%;
  font-size: 28px;
}
#j-con {
  display: inline-block;
  position: absolute;
  margin-top:100px;
  left: 10%;
  color: #ff9966;
}
#content {
  width: 100%;
  position: absolute;
  left: 0;
  margin-top: 30%;
  margin-bottom: 50px;
}
#jie-content {
  width: 100%;
  height: 180px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
#ad-name {
  display: inline-block;
  position: absolute;
  left: 5%;
  margin-top: 1%;
}
#con-img {
  position: absolute;
  width: 20%;
  height: 50%;
  left: 5%;
  margin-top: 5%;
}
#con-img img {
  width: 100%;
  height: 100%;
}
#con-name {
  display: inline-block;
  position: absolute;
  margin-top: 5%;
  left:30%;;
}
#con-name span {
  font-size: 14px;
  font-weight: bold;
}
#con-price {
  display: inline-block;
  position: absolute;
  margin-top: 15%;
  left:30%;;
}
#con-price span {
  font-size: 14px;
  color: red;
}
#con-num {
  display: inline-block;
  position: absolute;
  margin-top: 10%;
 left:30%;;
}
#con-num span {
  font-size: 12px;
}
#con-gui {
  display: inline-block;
  position: absolute;
  margin-top: 10%;
  left:40%;;
}
#con-gui #gui {
  font-size: 15px;
  font-weight: 700;
}
#con-count {
  display: inline-block;
  position: absolute;
  right: 10px;
  margin-top: 15%;
}

/*#attention {
  width: 100%;
  height: 240px;
  position: absolute;
  margin-top: 0;
  left: 0;
}
#att-1,
#att-2,
#att-3,
#att-4 {
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}

#att-1-1,
#att-1-2,
#att-2-1,
#att-2-2,
#att-3-1,
#att-3-2 {
  display: inline-block;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  font-weight: bold;
}
#att-1-1,
#att-2-1,
#att-3-1 {
  margin-top: 22px;
  left: 10px;
}
#att-1-2,
#att-2-2,
#att-3-2 {
  margin-top: 22px;
  right: 10px;
}
#att-4-1 {
  position: absolute;
  margin-top: 22px;
  margin-left: 10px;
  font-weight: bold;
}
#att-4-2 {
  position: absolute;
  margin-top: 15px;
  left: 100px;
  width: 70%;
  height: 30px;
  border: none;
}*/
#jie-bottom {
  position: fixed;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 1000;
}
#picker {
  width: 100%;
  height: 60%;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1001;
}
#title {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
#title span {
  font-weight: bold;
  display: inline-block;
  position: absolute;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  margin-top: 12px;
  left: 35%;
}
#secret {
  width: 90%;
  height: 50px;
  position: fixed;
  left: 5%;
  margin-top: 20px;
  border: 1px solid rgba(7, 17, 27, 0.1);
}
#secret input {
  display: inline-block;
  width: 18%;
  height: 50px;
  border: none;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
  font-size: 20px;
  text-align: center;
}
#secret :last-child {
  border-right: none;
}
/*#secret span {
  display: inline-block;
  font-size: 20px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  margin-top: 15px;
  margin-left: -10px;
}*/
#picker a {
  position: absolute;
  margin-top: 80px;
  right: 5px;
}
#keyboard {
  width: 100%;
  height: 200px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
#key-1,
#key-2,
#key-3,
#key-4 {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
#key-1 div,
#key-2 div,
#key-3 div,
#key-4 div {
  display: inline-block;
  width: 30%;
  height: 50px;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
}
#key-1 :last-child,
#key-2 :last-child,
#key-3 :last-child,
#key-4 :last-child {
  border-right: none;
}
#key-1 div span,
#key-2 div span,
#key-3 div span,
#key-4 span {
  display: inline-block;
  position: absolute;
  margin-top: 15px;
  font-size: 20px;
  line-height: 20px;
  height: 20px;
  font-weight: 20px;
}
#key-4 :first-child,
#key-4 :last-child {
  background: rgba(7, 17, 27, 0.1);
}
#kry-4 :first-child {
  left: 0;
}
#jie-mask {
  width: 100%;
  height: 100%;
}
</style>