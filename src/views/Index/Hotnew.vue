<template>
    <div>
        <div class="box">
            <h2>今日热点</h2>
            <ul>
                <li v-for="data in datalist" :key="data.id" @click="handleclick(data.id)"> 
                    <img :src="data.img" alt="">
                    <ul>
                        <li>{{data.title}}</li>
                        <li>{{data.desc}}</li>
                        <li>{{data.publishTime | datemtime}}</li>
                    </ul>
                </li>
            </ul> 
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter('datemtime', (date) => {
    var mydateobj = new Date(date);
    return mydateobj.getFullYear()+"-"+(mydateobj.getMonth()+1)+"-"+mydateobj.getDate();
})

export default {
    data () {
        return {
            datalist : []
        }
    },
    mounted () {
        axios ({
            url : "/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2019328929466268"
        }).then ( (res) => {
            this.datalist = res.data.hotPoints
            // console.log(this.datalist = res.data.hotPoints)
        })
    },
    methods : {
        handleclick (id) {   
            this.$router.push(`/hotcontent/${id}`)
            
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 100%;
        margin-top: 20px;
        margin-bottom: 38px;
        box-sizing: border-box;
        padding:0 5%;
        overflow: hidden;
        background: #fff;
        height: 100%;
        h2{
            margin-top: 8%;
            font-size: 20px;
        }
        li{
            padding-top: 5%;
            width: 100%;
            display: flex;
            img{
                height:20%;
                width: 20%;
                flex: 1;
            }
            ul{
               
                padding-left: 10px;
                flex: 1;
                li{
                    color: #999;
                }
                li:nth-of-type(1){
                    font-size:18px;
                    font-weight: 700;
                    color: #333;    
                }
            }
        }
    }






</style>
