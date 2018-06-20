<template>
    <div id="tops">

    </div>
</template>
<script>
//import api from "../../axios/api.js";
import axios from "axios";
export default {
  data() {
    return {
      newsListShow: []
    };
  },
  created() {
    //this.setNewsApi();
  },
  methods: {
    setNewsApi() {
      axios.get("http://test.com").then(res => {
        console.log(JSON.stringify(data, null, 4));
      });
    }
  }
};
</script>
<style>
</style>
