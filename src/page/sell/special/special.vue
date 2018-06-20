<template>
    <div id="special">
        
        <div id="goods">
            <i class="icon-back" style="position:fixed;left:0;font-size:32px;" @click="goback()"></i>
            <ul>
                <li v-for="(item,index) in this.goodslist[num].lists" :key="index" @click="gotoDetail(item)">
                    <div id="img">
                        <img :src="item.img">
                    </div><div id="name">
                        <span>{{item.name}}</span>
                    </div><div id="desc">
                        <span>{{item.description}}</span>
                    </div>
                    <div id="gui">
                        <span>规格：￥{{item.gui}}</span>
                    </div>
                    <div id="price">
                        <span>￥{{item.price}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      num: 0,
      goodslist: []
    };
  },
  created() {
    this.num = parseInt(localStorage.getItem("index"));
    console.log(this.num);
    console.log(typeof this.num);
    axios
      .get("http://text.com")
      .then(res => {
        console.log(res);
        this.goodslist = res.data.list;
        console.log(this.goodslist);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gotoDetail(food) {
      console.log(food);
      localStorage.setItem("goods", JSON.stringify(food));
      this.$router.push({ name: "goods" });
    }
  }
};
</script>
<style>
li {
  list-style: none;
}
#special {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}
#special #goods {
  width: 100%;
  height: 100%;
}
#special li {
  width: 50%;
  height: 250px;
  float: left;
  margin-bottom: 10px;
}
#special #img {
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
}
#special #img img {
  width: 150px;
  height: 150px;
}
#special #name {
  margin-top: 5px;
  text-align: center;
}
#special #name span {
  font-size: 14px;
}
#special #desc {
  margin-top: 0;
  text-align: center;
}
#special #desc span {
  font-size: 12px;
  color: rgba(7, 17, 27, 0.5);
}
#special #gui {
  margin-top: 0;
  text-align: center;
}
#special #gui span {
  font-size: 8px;
}
#special #price {
  margin-top: 0;
  text-align: center;
}
#special #price span {
  color: red;
}
</style>


