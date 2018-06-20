<template>
<div id="topBanner" class="slide">
    <div v-for="(imgUrl,index) in this.imgs" v-show="index===mark" :key="index" class="slideshow" @click="gotoDetail(index)">
        <a href="#">
            <img :src="imgUrl">
        </a>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        mark:0,
      imgs:["https://imgqn4.fruitday.com/images/2018-05-24/be0f54414cc57820363352fb4e4828a8.jpg","https://imgqn4.fruitday.com/images/2018-06-18/4c1bd22e87d028236b71228d4e5d58fd.jpg"]
    };
  },
  created() {
      
   /* axios
      .get("http://boradcast.com")
      .then(res => {
        console.log(res);
        this.content = res.data.user[0].list;
        console.log(this.content);
        this.imgs = this.content.img;
        console.log(this.imgs);
      })
      .catch(err => {
        console.log(err);
      });*/
      //this.lunbo();
      this.play();
  },
  methods:{
      gotoDetail(index){
          //console.log(item),
          //console.log(index);
          //this.$router.push({'name':'special',params:{'index':index}});
          localStorage.setItem("index",index);
          this.$router.push({'name':'special'});
      },
      autoPlay(){
          this.mark++;
          if(this.mark === 2){
              this.mark = 0;
          }
      },
      play(){
          setInterval(this.autoPlay,2500);
      },
      lunbo(){
          let li = document.getElementById("pics").getElementsByTagName("li");
          let num = 0;
          let len = li.length;
          setInterval(function(){
              li[num].style="none";
              num =++num===len?0:num;
              li[num].style.display="inline-block";
          },300); 
      }
  }
};
</script>
<style>
 #topBanner{
     width:98%;
     height:150px;
     position:absolute;
     left:1%;
     right:1%;
     top:40px;
     
 }
.slideshow{
    width:100%;
    height:150px;
}
#topBanner img{
    width:100%;
    height:150px;
    border-radius:5px;
}
/*#pics {
  position: absolute;
  left: 5%;
  right: 5%;
  top: 40px;
  width: 90%;
  height: 150px;
}
#pics li{
    width:100%;
    height:150px;
}
#pics img{
    width:100%;
    height:150px;
}*/
</style>