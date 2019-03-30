<template>
    <div class="home">
        <ul>
            <li v-for="item in datalist" :key="item.movieId" @click="handle(item.movieId)">
                <img :src="item.img" />
                <div class="message">
                    <p>{{item.t}}<span>{{item.r}}</span></p>
                    <p>{{item.commonSpecial}}</p>
                    <p>{{item.cC}}家影院上映{{item.NearestShowtimeCount}}场</p>
                    <button>购票</button>
                </div>
            </li>
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
        },
        methods : {
            handle (id) {
                this.$router.push(`/details/${id}`)
            }
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
                display: flex;
                justify-content: flex-start;
                border-bottom: 1px solid #bfc0c0;
                img{
                    width: 85px;
                    height: 108px;
                    margin-right: 10px;
                }
                .message{
                    position: relative;
                    display: flex;
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
                        right: 0px;
                        width:80px;
                        height: 30px;
                        bottom: 0px;
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

