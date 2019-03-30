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
      <p class="comments">{{comments}}</p>
      <p class="content">{{content}}</p>
      <div class="testA">
        <img :src="headurl" alt>
        <div>
          <p>{{nickname}}</p>
          <p>19小时前看过&nbsp;-&nbsp;评论</p>
          <i>{{rating}}.0</i>
        </div>
      </div>
    </div>
    <object data="https://static4da.mtime.cn/feature/mobile/banner/2019/0311/hvtnd750175.html" class="obj"></object>


    <div class="friend">
      <h2>网友评论&nbsp;(&nbsp;{{totalCommentCount}}&nbsp;)&nbsp;</h2>
      <ul>
        <li v-for="(item,index) in cts" :key="index">
          <img :src="item.caimg" alt="">
          <div>
            <p>
              <span>{{item.ca}}</span>
              <span class="time">{{item.cr}}</span>
            </p>
            <p>{{item.ce}}</p>
            <p>
              <span>回复</span>
              <span>赞</span>
            </p>
          </div>
        </li>
      </ul>
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
      comments:[],
      content:'',
      headurl:'',
      nickname:'',
      rating:'',

      // 网友评论数据
      cts:[],
      totalCommentCount: '',
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
    axios({
      url: `/Service/callback.mi/Movie/HotLongComments.api?movieId=${
        this.$route.params.detailsId
      }&pageIndex=1&t=20193309381557206`
    }).then(res => {
      this.comments = res.data.comments[0].title
      this.content = res.data.comments[0].content
      this.headurl = res.data.comments[0].headurl
      this.nickname = res.data.comments[0].nickname
      this.rating = res.data.comments[0].rating
    });
    axios({
      url: `/Service/callback.mi/Showtime/MovieComments.api?movieId=${ this.$route.params.detailsId}&pageIndex=1&t=20193301419555705`
    }).then(res => {
      console.log(res.data);
      this.totalCommentCount = res.data.totalCommentCount
      this.cts = res.data.cts
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
      width: 100%;
      .actorRightP {
        margin-bottom: 5px;
      }
      img {
        width: 6em;
        height: 6em;
        margin: 0 auto;
      }
      div {
        width: 50%;
        float: left;
        text-align: center;
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
      background: #fff;
    span {
        float: right;
        padding-right: 20px;
    }
    .comments{
      margin-left: 20px;
      padding-right: 20px;
      font-size: 20px;
      line-height: 180%;
    }
    .content{
      background: #fff;
       margin-left: 20px;
       margin-right: 20px;
       display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .testA{
      height: 30%;
      margin-top: 30px;
      margin-left: 20px;
      display: flex;
      img{
        width: 15%;
        height: 15%;
        border-radius: 50%;
        padding: 10px 0;
      }
      div{
        width: 100%;
        margin-left: 20px;
        padding: 10px 0;
        p:nth-of-type(1){
          width: 100%;
        }
        p:nth-of-type(2){
            display: inline-block;
        }
        i{
          display: inline-block;
          width: 10%;
          height: 40%;
          background: #43f35b;
          margin-left: 20px;
          color: #fff;
        }
      }
    }
  }
  object{
    width: 100%;
    margin-top: 5%;
    height: 105px;
  }
  .friend{
    ul{
      li{
        width: 100%;
        background: #fff;
        display: flex;
        border-bottom: 2px solid #a1a1a1;
        padding-bottom: 20px;
        padding-top: 10px;
        img{
        width: 15%;
        height: 15%;
        border-radius: 50%;
        margin-left: 20px;
        }
        div{
          position: relative;
          padding-left: 20px;
          width: 100%;
          padding-bottom: 20px;
          p:nth-of-type(1){
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
              span:nth-of-type(2){
                display: inline-block;
                width: 20%;
                height: 100%;
                margin-right: 20px;
                text-align: center;
                margin-left: 10px;
                background: #2cc240;
                color: #fff;
              
            }
          }
          p:nth-of-type(2){
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            padding-right: 20px;
            font-size: 20px;
            color: #707070;
          }
          p:nth-of-type(3){
            position: absolute;
            right: 23px;
            bottom:-10px;
            font-size: 16px;
            span{
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
}
</style>

