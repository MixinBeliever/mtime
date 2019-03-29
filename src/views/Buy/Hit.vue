<template>
    <div class="home">
        <ul>
            <router-link tag="li" to="/details" v-for="item in datalist" :key="item.movieId">
                <img :src="item.img" />
                <div class="message">
                    <p>{{item.t}}<span>{{item.r}}</span></p>
                    <p>{{item.commonSpecial}}</p>
                    <p>{{item.cC}}家影院上映{{item.NearestShowtimeCount}}场</p>
                    <button>购票</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import vue from "vue"
import axios from "axios"
export default {
        data(){
            return {
                datalist: []
            }
        },
        mounted(){
            axios({
                url:'/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20193281036486060',
            }).then( (res) => {
                console.log(res.data.ms);
                this.datalist = res.data.ms              
            })
        }
}
</script>
<style lang="scss" scoped>

    .home{
       
        ul{ 
            display: flex;
            justify-content: baseline;
            flex-wrap:wrap; 
            li{
                padding: 20px 10px;
                box-sizing: border-box;
                width: 100%;
                border-bottom: 1px solid #bfc0c0;
                img{
                    width: 20%;
                    float: left;
                    margin-right: 10px;
                }
                .message{
                    position: relative;
                   
                    flex-wrap: wrap;
                    p:nth-of-type(1){ display: flex;
                        font-size: 20px;
                        font-weight: 700;
                        color: #000;
                        
                        span{
                            display: inline-block;
                            margin-left: 10px;
                            height: 20px;
                            width: 40px;
                            line-height: 20px;
                            text-align: center;
                            background: rgb(180, 241, 81);
                            font-weight: 100;
                            color: #fff;
                            font-size: 14px;
                            vertical-align: center;
                            
                        }
                    }
                    p:nth-of-type(2){
                        font-size: 20px;
                        color: rgb(115, 184, 4);
                        margin-bottom: 35px;
                    }
                    button{
                        position: absolute;
                        right: 20px;
                        width:100px;
                        height: 40px;
                        bottom: -10px;
                        color: #fff;
                        background: #f39406;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        border-radius: 35px;
                    }
                }
            }
        }
    }
</style>

