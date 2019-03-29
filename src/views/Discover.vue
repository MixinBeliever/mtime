<template>
  <div class="home">
  	这是发现
     <ul>
	   <router-link to="/discover/news" tag="li" activeClass="active">新闻</router-link>

	   <router-link to="/discover/preview" tag="li" activeClass="active">预告片</router-link>

	   <router-link to="/discover/charts" tag="li" activeClass="active">排行榜</router-link>

	   <router-link to="/discover/movie" tag="li" activeClass="active">影评</router-link>     	
     </ul>
     <router-view></router-view>



  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from 'swiper' //引入swiper js
import 'swiper/dist/css/swiper.css'

export default {
 
}
</script>

<style lang="scss" scoped>
div.home{
  ul{
    width: 100%;
	height: 40px;
	display: flex;
	li{
	 flex:1;
	 line-height: 40px;
	 text-align: center;
	 color: #123685;
	   }
    }
}
</style>