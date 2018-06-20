<template>
    <div id="list">
        <div class="menu-wrapper menu-list-hook" ref="menuWrapper">
      <ul>
          <li style="font-size:14px;background:#FF9966;color:#fff;">全部商品分类</li>
        <li class="menu-item" v-for="(item,index) in this.listData" :key="index" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text">
               {{item.name}}
           </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper" >
      <ul>
        <li class="food-list food-list-hook" v-for="(item,index) in this.listData" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="gotoDetail(food)" v-for="(food,index) in item.list" :key="index" class="food-item">
              <div class="icon">
                <img width="100" height="100" :src="food.img">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <div class="extra">
                  <span class="count"></span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old"></span>
                </div>
                <div class="cartcontrol-wrapper">
                  <!--<cartcontrol :food="food" @add="addFood"></cartcontrol>-->
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import api from "../.././mock.js";
import axios from "axios";
export default {
  data() {
    return {
      bookSorts: ["礼品卡券", "家庭量版", "全球鲜果", "生鲜美食"],
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {},
      dromNum: "",
      showFlag: false,
      listData: []
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
    },
    selectFoods() {
      let foods = [];
      this.listData.forEach((good) => {
        good.list.forEach((food) => {
          if (food.stock) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
  mounted() {
    // 监听物理返回按钮
  },
  created() {
    
    axios.get("http://test.com").then(res => {
      this.listData = res.data.user.list;
      //console.log(this.listData);
      //this._initScroll();
      //this._calculateHeight();
      
    
      //console.log(JSON.stringify(res,null,1));
    });
    
  },
  methods: {
    gotoDetail(food){
      console.log(food);
      localStorage.setItem('goods',JSON.stringify(food));
      this.$router.push({'name':'goods'});
      //router-link :to="{name:'goods',params:{'goods':food}}"
    },
    selectMenu(index, $event) {
     /*if (!event._constructed) {
        return;
      }*/
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
    },
    selectFood(food, event) {
      /*if (!event._constructed) {
        return;
      }*/
      this.selectedFood = food;
    },
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3,
          click: true
        });
        this.foodsScroll.on('scroll', (pos) => {
          // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
          if (pos.y <= 0) {
            this.scrollY = Math.abs(Math.round(pos.y));
          }
        });
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    getSort(index) {}
  },
  components: {}
};
</script>
<style>
li {
  list-style-type: none;
}
#list {
  display: flex;
  position: absolute;
  top: 200px;

  width: 100%;
  overflow: hidden;
}

#list .menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
#list .menu-wrapper .menu-item {
  float: left;
}
#list .menu-wrapper .menu-item {
  display: table;
  height: 54px;
  width: 56px;
  line-height: 14px;
  padding: 0 12px;
  background: #e8e8e8;
  margin-top: 5px;
}

#list .menu-wrapper .menu-item .current {
  position: relative;
}

#list .menu-wrapper .menu-item .current .text {
  font-weight: bold;
}

#list .menu-wrapper .menu-item .text {
  display: table-cell;
  width: 56px;
  vertical-align: middle;
  font-size: 12px;
}
.foods-wrapper {
  flex: 1;
}

.foods-wrapper .title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background: #f3f5f7;
}

.foods-wrapper .food-item {
  display: flex;
  margin: 10px;
  padding-bottom: 10px;
}

.foods-wrapper > last-child {
  margin-bottom: 0;
}
/*.foods-wrapper .content{
  flex:1
}
.foods-wrapper .content .name{
  margin-top:105px;
  margin-left:-160px;
  height:14px;
  line-height:14px;
  font-size:14px;
  
}
.foods-wrapper .content .price .now{
  margin-left:-160px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}*/
.foods-wrapper .content {
  flex: 1;
}

.foods-wrapper .content .name {
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}

.foods-wrapper .content .desc,
.extra {
  line-height: 10px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.foods-wrapper .content .desc {
  margin-bottom: 8px;
}

.foods-wrapper .content .extra .count {
  margin-right: 12px;
}

.foods-wrapper .content .price {
  font-weight: 700;
  line-height: 24px;
}

.foods-wrapper .content .price .now {
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}

.foods-wrapper .content .price .old {
  text-decoration: line-through;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.foods-wrapper .content .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 12px;
}
</style>
