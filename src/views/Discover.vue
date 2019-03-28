<template>
  <div class="home">
  	这是发现
     <ul>
	   <router-link to="" tag="li" activeClass="active">新闻</router-link>

	   <router-link to="" tag="li" activeClass="active">预告片</router-link>

	   <router-link to="" tag="li" activeClass="active">排行榜</router-link>

	   <router-link to="" tag="li" activeClass="active">影评</router-link>     	
     </ul>
     <router-view></router-view>

      <div class="tu">
      	<img src="http://img5.mtime.cn/mg/2017/07/19/103505.79149520.jpg" >
      	
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from 'swiper' //引入swiper js
import 'swiper/dist/css/swiper.css'

export default {
 mounted(){
 	axios({
 		url:'http://m.mtime.cn/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=20193271924230050',
 		headers:{}
 	}).then(res=>{
 		console.log(res.data);
 	})
 }
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
	   }
    }
    div.tu{
    	img{
    		width: 100%;
    		height: auto;
    	}
    }
}
</style>