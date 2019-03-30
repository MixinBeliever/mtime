<template>
    <div >
        <header>
            <router-link to="/index" tag="span"> < </router-link>
            <router-link to="/search" tag="h2"> 搜电影 </router-link>
        </header>
        <main >
            <section >
                <img :src="mainvideo"/>
                <div class="clearfix">
                    <h3>{{titleCn}}</h3>
                    <ul class="clearfix">
                        <li>{{runTime}}</li>
                        <li>
                            <span v-for="(data,index) in type" :key="index">
                                {{data}}
                            </span>
                        </li>
                        <li>
                            <span v-for="(data,index) in release" :key="index">
                                {{data}}
                            </span>
                        </li>
                        <li>
                            <i>我想看</i>
                            <i>我想评分</i>
                        </li>
                    </ul>  
                </div>   
            </section>
            <p class="word">{{commonSpecial}}</p>
            <button>查影讯/购票</button>
            <p class="text" :class="ishide ?'minh':'maxh'">
                <b> {{content}}</b>
            </p>
            <span class="xia" @click="xiala()"> 查看更多 </span>
            <DetailsText></DetailsText>
        </main>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import DetailsText from "./DetailsText"
import { Indicator } from 'mint-ui';
export default {
    data () {
        return {
           mainvideo :'',
           titleCn : '',
           runTime : '',
           type : [],
           release : [],
           commonSpecial : '',
           content : '',
           ishide : true
        }
    },
    mounted () {
        Indicator.open('加载中...');
        axios ({
            url : `/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.detailsId}&locationId=290&t=20193291347472788`
        }).then( (res) => {
            // console.log(res.data)
            this.mainvideo = res.data.image
            this.titleCn = res.data.titleCn
            this.runTime = res.data.runTime
            this.type = res.data.type
            this.release = res.data.release
            this.commonSpecial = res.data.commonSpecial
            this.content = res.data.content
            Indicator.close();
        })
        this.$store.state.isHeaderShow = false;
    },
    destroyed () {
        this.$store.state.isHeaderShow = true;
    },
    components:{
        DetailsText:DetailsText
    },
    methods : {
        xiala () {
            this.ishide = !this.ishide
        }
    }
}
</script>
<style lang="scss" scoped>
    header{
        height:150px;
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
main{
    position: relative;
    width: 100%;
    height: 100%;
    section{
        height:142px;
        background: #fff;
        img{
            width: 40%;
            border: 2px solid #fff;
            position: absolute;
            top: -103px;
            left:10%;
        }
        div{
            width: 42%;
            position: absolute;
            top: -103px;
            left:53%;
            height:242px;
            h3{
                color: #fff;
                font-size: 28px;
                text-align: left;
            }
            ul{
                position: absolute;
                top: 38%;
                left:-2%;
                width: 100%;
                height: 100px;
                li{
                font-size: 18px;
                margin-top: 10px;
                i{
                    padding: 3% 1%;
                    font-style: normal;
                    background:#fff;
                    border-radius: 30%;
                    border:1px solid #1C2635;
                    color: #333;
                    background: skyblue;
                }
                }
            }
        }
    }
    .word{
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #FD8900;
        font-weight: 800;
        margin-top:8px;
    }
    button{
        width: 80%;
        margin: 0 auto;
        height: 50px;
        background: #FD8900;
        border-radius: 25px;
        font-size: 25px;
        display: block;
        color: #fff;
        outline: none;
        border: none;
        margin-top:10px;
    }
    .text{
        width: 98%;
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 3px;
        background: #fff;
        margin-top: 20px;
        box-shadow: -2px -2px 2px #aaa,
        -3px -3px 3px #ccc;
        border: 1px solid #ccc;
        font-size: 16px;
        line-height: 25px;
        text-overflow: ellipsis;
        padding-bottom: 18px;
        overflow: hidden;
        b{
            display: block;
            font-weight: 100;
           
        }
    }
}
.minh{
    height: 100px !important;
}
.maxh{
    height: 100% !important;
}
.xia{
    display: block;
    height: 20px;
    margin: 0 auto;
    width: 20%;
    
}
</style>

