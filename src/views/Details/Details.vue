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
            <p class="text">
                {{content}}
                <span> ↓ </span>
            </p>
            <DetailsText></DetailsText>
        </main>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
<<<<<<< HEAD
import DetailsText from "./DetailsText"
=======
import { Indicator } from 'mint-ui';
>>>>>>> a02ef793efffe24560c718c9334b52295b1b7646
export default {
    data () {
        return {
           mainvideo :'',
           titleCn : '',
           runTime : '',
           type : [],
           release : [],
           commonSpecial : '',
           content : ''
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
            top: -11%;
            left:10%;
        }
        div{
            width: 42%;
            position: absolute;
            top: -11%;
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
                    padding: 4% 4%;
                    font-style: normal;
                    background:#fff;
                    margin-left:2%;
                    border-radius: 30%;
                    border:1px solid #1C2635;
                    color: #333;
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
<<<<<<< HEAD

        border: none;

=======
>>>>>>> d79831f6f4360b9dc5e2406e0b29c744b71abc2b
        margin-top:10px;
    }
    .text{
        width: 100%;
        height:85px;
        background: #fff;
        margin-top: 20px;
        box-shadow: 2px 2px 2px #aaa,
        3px 3px 3px #ccc;
        border: 1px solid #ccc;
        font-size: 16px;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 18px;
<<<<<<< HEAD

=======
>>>>>>> d79831f6f4360b9dc5e2406e0b29c744b71abc2b
    }
}

</style>

