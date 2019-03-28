<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
<<<<<<< HEAD
        <div class="swiper-slide" >Slide 1</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
=======
        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
            <img :src="item.image" alt="">
        </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
>>>>>>> ff38af5913325eee7bec0c6218414b5ede89cc56
    </div>    
</template>
<script>
import axios from 'axios'
<<<<<<< HEAD
import swiper from 'swiper'
=======
import Swiper from 'swiper'
>>>>>>> ff38af5913325eee7bec0c6218414b5ede89cc56
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return{
            bannerlist: []
        }
    },
    mounted(){
        axios({
            url: '/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2019328891340381',

        }).then(res=>{
            console.log(res.data);
            this.bannerlist = res.data.scrollImg;
            this.$nextTick(()=>{
                var swiper = new Swiper('.swiper-container', {
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
<<<<<<< HEAD
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
=======
                    }
>>>>>>> ff38af5913325eee7bec0c6218414b5ede89cc56
                });
            })
        })
    }
}
</script>
<style lang="scss" scoped>
<<<<<<< HEAD

=======
    img{
        width: 100%;
    }
>>>>>>> ff38af5913325eee7bec0c6218414b5ede89cc56
</style>
