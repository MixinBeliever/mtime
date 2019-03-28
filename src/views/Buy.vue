<template>
  <div class="home">
    <div class="navTop">
      <ul>
        <router-link tag="li" to="/buy/hit" activeClass="bgblue">正在热映</router-link>
        <router-link tag="li" to="/buy/coming" activeClass="bgblue">即将上映</router-link>
      </ul>
    </div>
    <div class="divText">
      <input type="text" placeholder="影片/影院/影人, 任你搜">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import vue from "vue";
import hit from "./Buy/Hit";
export default {
  // components:{
  //   hit:hit
  // }
};
</script>
<style lang="scss" scoped>
  .navTop{
    width: 100%;
    background:#1c2635 ;
    height: 50px;
    overflow: hidden;
    border-bottom: 1px solid rgb(182, 181, 181);
    ul{
      width: 250px;
      height: 30px;
      background: rgb(43, 42, 42);
      line-height: 30px;
      margin: 10px auto;
      border-radius: 35px;
      border: 1px solid #000;
      li{
        float: left;
        text-align: center;
        width: 125px;
        color: rgb(158, 157, 157)
      }
      li.bgblue{
        background: #1c2635;
        width:123px;
        border-radius: 35px;
        color: #fff;
      }
    }
  }
  .divText{
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #a7a8a8;
    input{
      display: block;
      margin: 10px auto;
      width: 300px;
      height: 35px;
      border-radius: 10px;
      border: none;
      border: 1px solid #a7a8a8;
      outline: none;
      background: url("./../../public/imgs/search_ico_01.png") no-repeat 13px center;
      background-size: 25px;
      text-indent: 4em;
      font-size: 16px;
    }
  }
</style>
