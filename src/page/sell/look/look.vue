<template>
    <div id="look">
        <div id="look-top">
            <i class="icon-back" style="font-size:32px;position:fixed;left:0;top:2%;" @click="back()"></i>
            <span style="display:inline-block;position:absolute;left:10%;top:2%;">订单详情</span>
        </div>
        <div id="look-ad">
            <div id="look-tu">
                <i class="icon-wxb定位"></i>
            </div>
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
        </div>
        <div id="look-goods">
            <ul>
                <li v-for="(item,index) in goodslist" :key="index">
                    <div id="img">
                        <img :src="item.img">
                    </div>
                    <div id="name">
                        <span>{{item.name}}</span>
                    </div>
                    <div id="num">
                        <span>{{item.id}}</span>
                    </div>
                    <div id="gui">
                        <span>{{item.gui}}</span>
                    </div>
                    <div id="price">
                        <span>{{item.price}}</span>
                    </div>
                    <div id="count">
                        <span>x{{item.count}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            adList:[],
            goodslist:[]
        }
    },
    created(){
        this.adList = JSON.parse(localStorage.getItem("adList"));
        //console.log(this.adList);
        this.goodslist = JSON.parse(localStorage.getItem("goodslist")).goodslist;
        this.goodslist.splice(0,1); 
        console.log(this.goodslist);
    },
    methods:{
        back(){
            this.$router.push({'name':'home'});
            //this.$router.go(-1);
        }
    }
}
</script>
<style>
#look{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    overflow-y: auto;
}
#look-top{
    width:100%;
    height:10%;
    background: red;
}
#look-ad{
    width:100%;
    height:100px;
    border-bottom:1px solid rgba(7,17,27,0.1)
}
#look-tu{
    display: inline-block;
    position:fixed;
    width:10%;
    height:100%;
    left:0;
    margin-top:5%;
}
#look-tu .icon-wxb定位{
    font-size:32px;
}
#look-ad #content{
    display:inline-block;
    width:90%;
    height:100%;
    position: relative;
    left:10%;
    margin-top:0;
}
#look-ad #content #look-name{
    width:50%;
    display:inline-block;
    position:absolute;
    margin-top:10px;
    left:5%;
}
#look-ad #content #look-name span{
    font-size:16px;
}
#look-ad #content #ad{
    width:100%;
    display:inline-block;
    position:absolute;
    margin-top:50px;
    left:5%;
}
#look-ad #content #ad span{
    font-size:16px;
}
#look-ad #content #look-tel{
    width:50%;
    position:absolute;
    right:0;
    margin-top:10px;
}
#look-goods{
    width:100%;
    height:100%;
    
}
#look-goods li{
    width:100%;
    height:150px;
    border-bottom:1px solid rgba(7,17,27,0.1);
}
#look-goods #img{
    width:15%;
    height:12%;
    position:absolute;
    left:5%;
    margin-top:5%;
}
#look-goods img{
    width:100%;
    height:100%;
}
#look-goods #name{
    display:inline-block;
    position:absolute;
    margin-top:5%;
    left:25%;
}
#look-goods #name span{
    font-size:16px;
    font-weight:bold;
}
#look-goods #num{
    display:inline-block;
    position: absolute;
    margin-top:8%;
    left:25%;
}
#look-goods #num span{
    font-size:12px;
    color:rgba(7,17,27,0.3);
}
#look-goods #gui{
    display:inline-block;
    position: absolute;
    left:35%;
    margin-top:8%
}
#look-goods #gui span{
    font-size:14px;
    font-weight:bold;
}
#look-goods #price{
    display: inline-block;
    position: absolute;
    margin-top:12%;
    left:25%;
}
#look-goods #price span{
    color:red;
}
#look-goods #count{
    display:inline-block;
    position: absolute;
    right:5px;
    margin-top:12%;
}
</style>

