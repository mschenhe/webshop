<template>
    <div id="complete">
        <div id="success" @click="back()">
            <i class="icon-back"></i>
            <span>支付成功</span>
        </div>
        <div id="amount">
            <div id="price">
                <span style="font-size:14px; color: red;">￥</span>
            <span style="font-size:20px; color: red;">{{this.totalAmount}}</span>
            </div>
            <div id="lookMore">
                 <router-link to="look" id="lookOrder">查看订单</router-link>
                 <router-link to="home" id="lookHome">返回主页</router-link>
            </div>
           
            </div>
            <div id="buy">
                <span>你可能还想买</span>
                <div id="more">
                    <ul>
                        <li v-for="(item,index) in this.goodslist[this.ran].list" :key="index" @click="gotoDetail(item)">
                            <div id="img">
                                <img :src="item.img">
                            </div>
                            <div id="name">
                                <span>{{item.name}}</span>
                            </div>
                            <div id="price">
                                <span>￥{{item.price}}</span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      totalAmount: 0,
      goodslist: [],
      ran: 0
    };
  },
  created() {
    this.ran = parseInt(Math.random() * 3);
    //console.log(this.ran);
    this.totalAmount = localStorage.getItem("totalAmount");
    //console.log(this.totalAmount);
    axios.get("http://test.com").then(res => {
      console.log(res);
      this.goodslist = res.data.user.list;
      console.log(this.goodslist);
    });
  },
  methods: {
      back(){
          this.$router.go(-1);
      },
    gotoDetail(food) {
      localStorage.setItem("goods", JSON.stringify(food));
      this.$router.push({ name: "goods" });
    }
  }
};
</script>
<style>
#complete {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}
#success {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
#success .icon-back {
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 32px;
}
#success span {
  display: inline-block;
  position: absolute;
  left: 45%;
  top: 10px;
}
#amount {
  position: absolute;
  margin-top: 60px;
  width: 100%;
  height: 200px;
}
#amount #price {
  width: 100%;
  height: 50px;
}
#amount #lookMore {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
#lookOrder,
#lookHome {
  display: inline-block;
  width: 50%;
}
#lookOrder {
  position: absolute;
  left: 0;
  border-right: 1px solid rgba(7, 17, 27, 0.1);
}
#lookHome {
  position: absolute;
  right: 0;
}
#buy {
  width: 100%;
  position: absolute;
  top: 180px;
}
#more {
  width: 100%;
  height:100%;
  margin-top: 10px;
}
#more li {
  width: 50%;
  height:200px;
  float: left;
  list-style: none;
  margin-bottom: 10px;
}
#more li #img {
  width: 150px;
  height: 150px;
  margin-left: 5%;
}
#more li #img img {
  width: 150px;
  height: 150px;
}
#more li #name {
  display: inline-block;
  text-align: center;
}
#more li #name span {
  font-size: 14px;
  font-weight: bold;
}
#more li #price span {
  font-size: 14px;
  color: red;
}
</style>


