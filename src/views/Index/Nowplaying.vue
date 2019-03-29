<template>
   <div class="box">
       <h1>正在热映</h1>
        <ul>
            <router-link to="" tag="li" v-for="(data,index) in datalist" :key="data.id" v-if="index<8">
                <img :src="data.img">
                <p>{{data.t}}</p>
                <span v-if="data.r > 0">
                  <i>{{data.r}}</i>
                </span>
            </router-link>   
        </ul>
   </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
export default {
    data () {
      return {
        datalist :[]
      }
    },
    mounted () {
      axios ({
        url : '/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20193288174195020',

      }).then( (res) => {
        this.datalist = res.data.ms
      })
    }

}
</script>
<style lang="scss" scoped>
.box{
    width:100%;
    height:100%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    background: #fff;
}
h1{
    font-size:20px;
    margin-top: 5%;
    margin-left: 5%;
}
ul{
    width: 100%;
    display:flex;
    flex-wrap :wrap;
    box-sizing:border-box; 
    padding:2%;
    li{
        width:25%;
        float:left;
        box-sizing:border-box;   
        padding:2%;
        position: relative;
        img{
            width:100%;
        }
        p{
          margin-top: 8px;
        }
        span{
          width: 28%;
          height: 14%;
          background: green;
          position: absolute;
          top:5%;
          right:8%;
          text-align: center;
          i{
            color: #fff;
            font-size: 80%;
          }
        }
    }
}




</style>