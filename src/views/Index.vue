<template>
  <div class="home">
    <header>
      <h1>北京</h1>
     <router-link to="/search" tag="div" class="search">影片/影院/影人 ，任你搜</router-link>
    </header>
    <Nowplaying></Nowplaying>
    <router-link to="/buy/coming" tag="div" class="comingsoon">即将上映 <span>></span> </router-link>
    <shopmid></shopmid>
    <Hotnew></Hotnew>
  </div>
</template>

<script>
// @ is an alias to /src
import Nowplaying from './Index/Nowplaying.vue'
import Shopmid from './Index/Shopmid.vue'
import Hotnew from './Index/Hotnew.vue'
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  beforeCreate () {
    Indicator.open('加载中...');
  },
  created () {
    Indicator.close();
  },
  components : {
    Nowplaying : Nowplaying,
    Shopmid : Shopmid,
    Hotnew : Hotnew
  },

}
</script>
<style lang="scss" scoped>
  header{
    height: 60px;
    width: 100%;
    background: #fafafa;
    border-bottom:1px solid #ccc;
    h1{
      float: left;
      font-weight: 100;
      font-size: 20px;
      margin-top: 20px;
      margin-left: 6%;
    }    
    .search{
      float:left;
      width: 62%;
      height: 35px;
      border: 1px solid #999;
      margin-top: 14px;
      margin-left : 34px;
      line-height: 35px;
      text-indent: 12%;
      border-radius: 5px;
      color:#aaa;
      background: url(../../public/imgs/search_ico_01.png ) no-repeat 9px 4px;
      background-size: 30px;
      background-color: #fff;
      font-size: 14px;
    }
  }
  .comingsoon{
    width: 100%;
    height: 50px;
    border-bottom:1px solid #ccc; 
    font-size: 20px;
    font-weight: 800;
    line-height: 50px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    background: #fff;
    span{
      float: right;
      
    }
  }




</style>
