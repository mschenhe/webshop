<template>
<div id="goods">
    <div id="goodsImg">
        <img :src="goods.img">
    </div>
    <div id="back" @click="back()">
      <i class="icon-back"></i>
    </div>
    <div id="shopcar" @click="gotoShopCart()">
      <i class="icon-cart2"></i>
    </div>
    <div id="content">
        <div id="name">
        <span>{{goods.name}}</span>
    </div>
    <split style="position:absolute;margin-top:80px;"></split>
    <div id="price">
        <span>￥{{goods.price}}</span>
    </div>
    <div id="born">
        <span>{{goods.born}}</span>
    </div>
    </div>
    <div id="critical">
        <span id="Cname">宝贝评价</span>
        <ul>
            <li v-for="(item,index) in goods.critis" :key="index">
                <span id="cr-Content">{{item}}</span>
            </li>
        </ul>
        <div id="crContent">
            <div style="font-size:14px;line-height:14px;position:absolute;margin-left:10px;">{{goods.crContent.name}}</div>
            <div style="position:absolute;margin-top:20px;margin-left:5px;"><span style="font-size:16px;display:inline-block">{{goods.crContent.content}}</span></div>
            </div>
    </div>
    <tabbars :goods="goods"></tabbars>
</div>
</template>
<script>
import split from "../../../components/split/split.vue";
import tabbars from "../../../components/tabbars/tabbars.vue";
export default {
  data() {
    return {
      goods: [],
      name:'123'
    };
  },
  created() {
    let goods = localStorage.getItem("goods");
    this.goods = JSON.parse(goods); 
    //this.goods = this.$route.params.goods;
    //console.log(this.goods);
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    gotoShopCart(){
      let m = JSON.parse(localStorage.getItem("shopcart"));
      if(m.productlist.length === 0){
        alert("购物车暂时没有商品哦！");
      }else{
        this.$router.push({'name':'shopcart'});
      }
      //console.log(m);
      //
    }
  },
  components: {
    split,
    tabbars
  }
};
</script>
<style>
#goods {
  position: fixed;
  top: 0;
  width: 100%;
}
#goodsImg {
  width: 100%;
}
#goodsImg img {
  width: 100%;
  height: 250px;
}
#shopcar,#back{
  position:absolute;
  top:10px;
  display:inline-block;
  width:40px;
  height:30px;
}
#back{
  left:0;
}
#shopcar{
  right:0;
}
#shopcar .icon-cart2,#back .icon-back{
  font-size:20px;
}
#goods #name {
  position: absolute;
  margin-left: 10px;
  font-size: 18px;
  height: 18px;
  line-height: 18px;
  font-weight: bold;
}
#goods #price {
  position: absolute;
  margin-left: 10px;
  margin-top: 20px;
}
#goods #born {
  position: absolute;
  right: 5px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 14px;
}
#critical {
  width: 100%;
  position: absolute;
  margin-top: 100px;
}
#critical #Cname {
  display: block;
  font-size: 16px;
  line-height: 16px;
  margin-left: 10px;
  position: absolute;
}
#critical ul {
  position: absolute;
  margin-top: 25px;
  margin-left: 10%;
}
#critical li {
  display: inline-block;
  width: 100px;
  margin-left: 5px;
  background: #ff9966;
  border-radius: 5px;
}
#cr-Content {
  font-size: 14px;
  line-height: 14px;
}
#crContent {
  position: absolute;
  margin-top: 60px;
  width: 100%;
}
</style>