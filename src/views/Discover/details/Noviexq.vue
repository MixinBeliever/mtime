<template>
   <div>
    <header>
    <router-link to="/discover/movie" tag="span"> < </router-link>
    <router-link to="/search" tag="h2"> 搜电影 </router-link>
    </header> 
    <div v-html="this.datalist" id="box"></div> 
   </div>
</template>
<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
    data () {
        return {
            datalist : ''
        }
    },
    mounted () { 
        Indicator.open('加载中...');
        axios({
            url : `/Service/callback.mi/Review/Detail.api?reviewId=${this.$route.params.myid}&t=201933013244393523`
        }).then( (res) => {
            console.log(res.data)
            this.datalist = res.data.content 
            Indicator.close();
        })
        this.$store.state.isHeaderShow = false;
         
    },
    destroyed () {
        this.$store.state.isHeaderShow = true
    }
}
</script>
<style lang="scss" scoped>
 #box{
     margin-top: 20px;
     font-size: 18px;
     width: 100%;
     div{
         width: 100%;    
     }
 }
  img{
    max-width: 100% ;
    display: block;
}
header{
    height:50px;
    width: 100%;
    background:#1C2635;
    overflow: hidden;
    span{
        float: left;
        color: #fff;
        font-size: 30px;
        margin-top:3px;
        margin-left: 20px
    }
    h2{
        float: right;
        color: #fff;
        font-size: 20px;
        margin-top:12px;
        margin-right: 20px
    }
}
</style>