<template>
  <div class="home">
    <h1>
      最受关注&nbsp;&nbsp;
      <span>(&nbsp;7部&nbsp;)</span>
    </h1>
       
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in datalist" :key="item.id" @click="handleh(item.id)">
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
              <button v-if="item.isTicket" class="tick" @click="methodTick(item.id)">超前预售</button>
              <button v-if="item.isVideo" class="video">预告片</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- 广告轮播 -->
    <!-- <div v-url=""></div> -->
    <!-- <object data="https://static4da.mtime.cn/feature/mobile/banner/2019/0311/hvtnd750175.html" class="obj"></object> -->

    <!-- 即将上映 -->
    <h1>
      即将上映&nbsp;&nbsp;
      <span>(&nbsp;38部&nbsp;)</span>
    </h1>

    <div class="content">
      <p class="month">4月</p>
      <ul>
        <li v-for="items in datalistMv" :key="items.id" v-if="items.image" @click="handle(items.id)">
          <p class="day">{{items.rDay}}日</p>
          <img :src="items.image" alt="" >
          <div class="titleM">
            <p>{{items.title}}</p>
            <p><span>{{items.wantedCount}}</span>人想看 - {{items.type}}</p>
            <p>导演：{{items.director}}</p>
            <button v-if="items.isTicket" class="tick">超前预售</button>
            <button v-if="items.isVideo" class="video">预告片</button>
          </div>
        </li> 
      </ul>
      <div>
         <p class="month">5月</p>
         <ul>
        <li v-for="itemss in datalistMvH" :key="itemss.id" @click="handles(itemss.id)">
          <p class="day">{{itemss.rDay}}日</p>
          <img :src="itemss.image" alt="" >
          <div class="titleM">
            <p>{{itemss.title}}</p>
            <p><span>{{itemss.wantedCount}}</span>人想看 - {{itemss.type}}</p>
            <p>导演：{{itemss.director}}</p>
            <button v-if="itemss.isTicket" class="tick">超前预售</button>
            <button v-if="itemss.isVideo" class="video">预告片</button>
          </div>
        </li> 
      </ul>
      </div>
     
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import vue from "vue"
import Swiper from "swiper";
import axios from "axios";
import "swiper/dist/css/swiper.min.css";


export default {
  data() {
    return {
      datalist: [],
      datalistMv:[],
      datalistMvH:[]
    };
  },
  mounted() {
      
    axios({
      url:
        "/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=20193281635090995"
    }).then(res => {
        //console.log(res.data.moviecomings)
      this.datalistMvH = res.data.moviecomings
      this.datalistMvH = res.data.moviecomings.splice(-5,5)
      //console.log(this.datalistMvH)
      this.datalist = res.data.attention;

      //console.log(res.data.moviecomings)
      this.datalistMv = res.data.moviecomings
      this.datalistMv.length = 27
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          slidesPerView: 1.1
        });
      });
    });


  },
  methods:{
      methodTick(data){
        this.$router.push(`/buy/coming/${data}`)
        // console.log()
      },
      handle (id) {
          this.$router.push(`/details/${id}`)
      },
      handles (id) {
          this.$router.push(`/details/${id}`)
      },
      handleh (id) {
          this.$router.push(`/details/${id}`)
      },
      
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
    height: 160px;
    border-top: 1px solid #bcbdbd;
    border-right: 1px solid #bcbdbd;
    position: relative;
    padding-top: 20px;
    margin-left: 20px;
    .swiperBg {
      background: red;
      img {
        width: 33%;
        float: left;
        margin-right: 10px;
      }
    }
    .swiperMs{
      width: 330px;
      p:nth-of-type(1){
        font-size: 18px;
        font-weight: bold;
        line-height: 10px;
        margin-bottom: 20px;
      }
      p:nth-of-type(2){
        font-size: 12px;
        margin-bottom: 5px;
        span{
          color: #f89d52;
        }
      }
       p:nth-of-type(3){
        font-size: 12px;
        margin-bottom: 5px;
      }
      p:nth-of-type(4){
        font-size: 12px;
        margin-bottom: 30px;
      }
      button{
          width: 80px;
          background: #f89d52;
          height: 30px;
          border-radius: 35px;
          border: none;
          font-size: 12px;
          color: #fff;
          outline: none;
      }
      button:nth-of-type(1){
        margin-right: 20px;
      }
       button:nth-of-type(2){
         background: #fff;
         border: 1px solid  rgb(106, 238, 117);
         color: rgb(106, 238, 117);
      }
    }
  }
  .obj{
    margin-top: 20px;
    height: 110px;
    width: 100%;
  }
  // 即将预售
  .content{
    .month{
      line-height: 50px;
      border-bottom: 1px solid #8e8e8e;
      margin-left: 20px;
      font-size: 20px;
    }
      ul{
        li{
           margin-left: 20px;
           height: 150px;
           border-bottom: 1px solid #8e8e8e;
           padding-top: 20px;
           .day{
             float: left;
             margin-right: 10px;
           }
            img{
              width: 23%;
              float: left;
              margin-right: 20px;
            }
            .titleM{
              p:nth-of-type(1){
                font-size: 16px;
                font-weight: bold;
              }
               p:nth-of-type(2){
                font-size: 12px;
                margin: 5px 0;
                span{
                  color: #f89d52;
                }
              }
              p:nth-of-type(3){
                font-size: 12px;
              }
              p:nth-of-type(4){
                font-size: 12px;
              }
              button{
                width: 70px;
                height: 30px;
                margin-top: 20px;
                margin-right: 10px;
                border-radius: 35px;
                border: none;
                font-size: 12px;
              }
              button.tick{
                background: #f89d52;
                color: #fff;
              }
              button.video{
                background: #fff;
                color: rgb(106, 238, 117);
                border: 1px solid rgb(106, 238, 117);
              }
            }
        }
      }
  }
}
</style>


