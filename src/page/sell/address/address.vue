<template>
    <div id="address">
        <i class="icon-back" style="position:absolute;left:5%;top:5%;font-size:32px;" @click="back()"></i>
        <div id="content">
                <div id="look-name">
                    <span>{{adList.name}}</span>
                </div>
                <div id="ad">
                    <span>{{adList.address}}</span>
                </div>
                <div id="look-tel">
                    <span>{{adList.tel}}</span>
                </div>
            </div>
        <!--<div id="ad-name">
            收货人:<input type="text">
        </div>
        <div id="ad-address">
            收货地址:<input type="text">
        </div>
        <div id="ad-mail">
            邮政编码:<input type="number">
        </div>
        <div class="weui_btn weui_btn_mini weui-btn_primary" style="background:#ff9966;width:80%;height:40px;position:absolute;top:40%;left:10%;border-radius:5px;"><span style="font-size:16px;line-height:14px;height:14px;position:absolute;margin-top:13px;margin-left:-10%;color:#fff;">确认修改</span></div>-->
    </div>
</template>
<script>
export default {
    data(){
        return{
            adList:[]
        }
    },
    created(){
        this.adList = JSON.parse(localStorage.getItem("adList"));
        console.log(this.adList);
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
};
</script>
<style>
#address {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
/*#ad-name {
  position: absolute;
  top: 10%;
  margin-left: 10%;
}
#ad-address {
  position: absolute;
  top: 20%;
  margin-left: 10%;
}
#ad-mail {
  position: absolute;
  top: 30%;
  margin-left: 10%;
}
#address input{
    height:30px;
    
}*/
#address #content{
    display:inline-block;
    width:100%;
    height:100px;
    position: relative;
    margin-top:0;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
#address #content #look-name{
    width:50%;
    display:inline-block;
    position:absolute;
    margin-top:10px;
    left:5%;
}
#address #content #look-name span{
    font-size:16px;
}
#address #content #ad{
    width:100%;
    display:inline-block;
    position:absolute;
    margin-top:50px;
    left:5%;
}
#address #content #ad span{
    font-size:16px;
}
#address #content #look-tel{
    width:50%;
    position:absolute;
    right:0;
    margin-top:10px;
}
</style>

