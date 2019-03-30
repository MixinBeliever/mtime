<template>
  <div class="home">
    <h2>{{dataNum}}为演职员</h2>
    <div class="actor">
      <div class="actorLeft">
        <p>导演</p>
        <img :src="directorImg" alt>
        <p></p>
      </div>

      <div class="actorRight">
        <p class="actorRightP">主要演员</p>
        <div v-for="(item,index) in actorList" :key="index">
          <img :src="item.actorImg" alt>
          <p>{{item.actor}}</p>
          <p>{{item.actorEn}}</p>
        </div>
      </div>
    </div>

    <div class="actorImg">
      <h2>
        {{imageCount}}张图片
        <span>&gt;</span>
      </h2>
      <ul>
        <li v-for="(imagesM,index) in images" :key="index">
          <img :src="imagesM" alt>
        </li>
      </ul>
    </div>
    <!-- 精选影评 -->
    <div class="review">
      <h2>
        精选影评(3)
        <span>&gt;</span>
      </h2>
      <p></p>
      <p></p>
      <div>
        <img src alt>
        <div>
          <p></p>
          <p></p>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    return {
      dataNum: "",
      directorImg: "",
      actorList: [],
      imageCount: "",
      images: [],
      comments:''
    };
  },
  mounted() {
    axios({
      url: `/Service/callback.mi/movie/Detail.api?movieId=${
        this.$route.params.detailsId
      }&locationId=290&t=20193291347472788`
    }).then(res => {
      this.dataNum = res.data.personCount;
      this.directorImg = res.data.director.directorImg;
      this.actorList = res.data.actorList;
      this.imageCount = res.data.imageCount;
      this.images = res.data.images;
    });

    ///Service/callback.mi/Movie/HotLongComments.api?movieId=222039&pageIndex=1&t=20193309381557206
    //${this.$route.params.detailsId}
    axios({
      url: `/Service/callback.mi/Movie/HotLongComments.api?movieId=${
        this.$route.params.detailsId
      }&pageIndex=1&t=20193309381557206`
    }).then(res => {
      console.log(res.data.comments);
      this
    });

    this.$store.state.isHeaderShow = false;
  }
};
</script>

<style lang="scss" scoped>
.home {
  h2 {
    margin-top: 30px;
    padding-left: 20px;
    color: #313131;
    font-size: 1.7em;
    line-height: 2.2em;
    background: #fff;
    height: 2.2em;
  }
  div.actor {
    height: 170px;
    display: flex;
    background: #fff;
    .actorLeft {
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid #8d8d8d;
      margin-left: 20px;
      p:nth-of-type(1) {
        font-size: 14px;
        margin-bottom: 5px;
      }
      img {
        width: 6em;
      }
    }
    .actorRight {
      .actorRightP {
        margin-bottom: 5px;
      }
      img {
        width: 6em;
        height: 6em;
      }
      div {
        float: left;
        text-align: center;
        padding-right: 23px;
        p {
          font-size: 12px;
        }
      }
    }
  }
  // 详情图片
  .actorImg {
    h2 {
      display: flex;
      justify-content: space-between;
      span {
        padding-right: 20px;
      }
    }
    ul {
      height: 50px;
      width: 100%;
      display: flex;
      li {
        height: 50px;
        margin: 0 10px;
        width: 25%;
        height: 25%;
        img {
          width: 100%;
          height: 50px;
        }
      }
    }
  }
  // 精选影评
  .review {
      width: 100%;
    span {
        float: right;
        padding-right: 20px;
    }
  }
}
</style>

