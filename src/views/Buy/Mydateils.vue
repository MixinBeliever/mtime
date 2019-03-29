<template>
  <div class="home">
    <h1>
      <span>&lt;</span>
      {{datalist}}
    </h1>
    <!-- 日期轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper" id="swiper">
        <div class="swiper-slide">4月4日(周四)</div>
        <div class="swiper-slide">4月5日(周五)</div>
        <div class="swiper-slide">4月6日(周六)</div>
        <div class="swiper-slide">4月7日(周日)</div>
      </div>
    </div>

    <ul class="tixtUl">
      <li>离我最近</li>
      <li>全城</li>
      <li>影音特效</li>
    </ul>

    <!-- <div v-for="">
      <p></p>
      <p></p>
      <p></p>
    </div> -->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      datalist: "",
      showtimeDates: []
    };
  },
  mounted() {
    axios({
      url: `/api/proxy/ticket/Showtime/LocationMovieShowtimeDates.api?locationId=366&movieId=231968&locationId=366&movieId=${
        this.$route.params.comingid
      }&_=1553839897240`
    }).then(res => {
      //console.log(res);
      this.datalist = res.data.movie.nameCN;
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    });
    this.$store.state.isshowVideo = false;

    axios({
      url: `/api/proxy/ticket/Showtime/LocationMovieShowtimes.api?locationId=290&movieId=231968&date=20190404&locationId=290&movieId=231968&date=20190404&_=1553863831041`
    }).then(res => {
        console.log(res)
    });
  },
  destroyed() {
    this.$store.state.isshowVideo = true;
  },
  
};
</script>

<style lang="scss" scoped>
div.home {
  h1 {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 100;
    height: 50px;
    line-height: 50px;
    background: #1c2635;
    color: #fff;
    span {
      font-size: 30px;
      float: left;
      margin-left: 20px;
    }
  }
  #swiper {
    height: 50px;
    line-height: 50px;
    div {
      width: 200px;
      text-align: center;
    }
  }
  .tixtUl{
    display: flex;
    width: 100%;
    background: #fff;
    border-top: 1px solid #969797;
     border-bottom: 1px solid #969797;
     height: 50px;
     line-height: 50px;
    li{
        flex: 1;
        cursor: pointer;
        text-align: center;
    }
  }
}
</style>


