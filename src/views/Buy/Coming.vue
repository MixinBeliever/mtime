<template>
  <div class="home">
    <h1>
      最受关注&nbsp;&nbsp;
      <span>(&nbsp;7部&nbsp;)</span>
    </h1>
       
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in datalist" :key="item.id">
           <p class="swiperP">
            <span>{{item.rMonth}}月{{item.rDay}}日</span>
           </p>
          <div class="swiperTitle">
            <div class="swiperBg">
              <img :src="item.image" alt>
            </div>
            <div class="swiperMs">
              <p>{{item.title}}</p>
              <p>
                <span>{{item.wantedCount}}</span>
                人想看-{{item.type}}
              </p>
              <p>导演：{{item.director}}</p>
              <p>演员：{{item.actor1}},{{item.actor2}}</p>
              <button>超前预售</button>
              <button>预告片</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- 广告轮播 -->
    <!-- <div v-url=""></div> -->
    <object data="https://static4da.mtime.cn/feature/mobile/banner/2019/0311/hvtnd750175.html" class="obj"></object>

    <!-- 即将上映 -->
    <h1>
      即将上映&nbsp;&nbsp;
      <span>(&nbsp;38部&nbsp;)</span>
    </h1>

    <div>
      <ul>
        <router-link tag="li" to="">
          <p>月</p>
          <span></span>
          <img src="" alt="">
          <div>
            <p></p>
            <p></p>
            <p></p>
            <button></button>
            <button></button>
          </div>
        </router-link> 
      </ul>
    </div>

  </div>
</template>
<script>
import Swiper from "swiper";
import axios from "axios";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      datalist: [],
      datalistMv:[]
    };
  },
  mounted() {
    axios({
      url:
        "/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20193281635090995"
    }).then(res => {
      this.datalist = res.data.attention;
      this.datalistMv = res.data.moviecomings
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          slidesPerView: 1.1
        });
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
    background: #fff;
  h1 {
    font-size: 24px;
    color: #383737;
    line-height: 50px;
    height: 50px;
    margin-left: 20px;
    span {
      color: #b3b1b1;
    }
  }
   

 
  .swiperP{
      position: relative;
      background: #fff;
      width: 72px;
      left: 20px;
      height: 30px;
      top: 20px;
      z-index: 888;
    }
 
  .swiperTitle {
    border-top: 1px solid #bcbdbd;
    border-right: 1px solid #bcbdbd;
    position: relative;
    padding: 20px 10px 20px 0;
    margin-left: 20px;
    height: 160px;
    .swiperBg {
      img {
        width: 33%;
        float: left;
        margin-right: 10px;
      }
    }
    .swiperMs{
      p:nth-of-type(1){
        font-size: 20px;
        font-weight: bold;
        line-height: 10px;
        margin-bottom: 20px;
      }
      p:nth-of-type(2){
        font-size: 16px;
        margin-bottom: 5px;
        span{
          color: #f89d52;
        }
      }
       p:nth-of-type(3){
        font-size: 16px;
        margin-bottom: 5px;
      }
      p:nth-of-type(4){
        font-size: 16px;
        margin-bottom: 30px;
      }
      button{
          width: 100px;
          background: #f89d52;
          height: 40px;
          border-radius: 35px;
          border: none;
          font-size: 16px;
          color: #fff;
      }
      button:nth-of-type(1){
        margin-right: 20px;
      }
       button:nth-of-type(2){
         background: #63ec5e;
      }
    }
  }
  .obj{
    margin-top: 20px;
    height: 110px;
    width: 100%;
  }
}
</style>


