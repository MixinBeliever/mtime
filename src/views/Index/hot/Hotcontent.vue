<template>
   <div>
    <header>
    <router-link to="/index" tag="span"> < </router-link>
    <router-link to="/search" tag="h2"> 搜电影 </router-link>
    </header> 
    <div v-html="this.datalist" id="box"></div> 
   </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            datalist : ''
        }
    },
    mounted () { 
        axios({
            url : `/Service/callback.mi/News/Detail.api?newsId=${this.$route.params.hotcontentid}&t=201932816571733730`
        }).then( (res) => {
            console.log(res.data)
            this.datalist = res.data.content  
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
