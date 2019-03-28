<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide" >Slide 1</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>    
</template>
<script>
import axios from 'axios'
import swiper from 'swiper'
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
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            })
        })
    }
}
</script>
<style lang="scss" scoped>

</style>
