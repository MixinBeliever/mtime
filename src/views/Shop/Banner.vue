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
                    }
=======

                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    });

>>>>>>> 504c6551feddd907ec13b4bdf0c0c3be3afd7f76
                });
            })
    }
}
</script>
<style lang="scss" scoped>
<<<<<<< HEAD
=======

>>>>>>> 504c6551feddd907ec13b4bdf0c0c3be3afd7f76
    img{
        width: 100%;
    }
</style>
