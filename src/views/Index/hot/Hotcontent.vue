<template>
    <div v-html="this.datalist" id="box"></div> 
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
        docment.querySelectAll('img').style.width = '100%'
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
   
</style>
