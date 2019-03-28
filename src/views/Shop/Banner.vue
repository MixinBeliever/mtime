<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
            <img :src="item.image" alt="">
        </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>    
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return{
        }
    },
    props: {
        bannerlist: Array
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>
