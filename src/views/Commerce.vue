<template>
    <search>
        <div slot="confident" class="box">
            <nav>
                <ul>
                    <li><a href="" @click.prevent="allsort($event)"><span>综合排序</span><span class="down">></span></a></li>
                    <li><a href=""><span>主题角色</span><span class="down">></span></a></li>
                    <li><a href=""><span>玩具模型</span><span class="down">></span></a></li>
                </ul>
            </nav>
            <div class="boxsort" v-show="issortshow">
                <ul>
                    <li><a href="">综合排序</a></li>
                    <li><a href="">价格从低到高</a></li>
                    <li><a href="">价格从高到低</a></li>
                    <li><a href="">好评率从高到低</a></li>
                    <li><a href="">销量从高到低</a></li>
                </ul>
            </div>
            <aside class="list" slot="list">
                <ul>
                    <li v-for="(item,index) in datalist" :key="index">
                        <img :src="item.imageSrc" alt="">
                        <p class="title">{{item.name}}</p>
                        <p>￥<span>99</span></p>
                    </li>
                </ul>
            </aside>
        </div>
    </search>
</template>

<script>
import interesting from './Shop/Interesting'
import search from './Shop/router/Search'
import axios from 'axios'
export default {
    data(){
        return {
            datalist: [],
            issortshow: false,
        }
    },
    methods: {
        allsort(event){
            console.log(event)
            event.stopPropagation();
            this.issortshow = true;
        }
    },
    components: {
        search: search,
    },
    mounted(){
        axios({
            url: '/Service/callback.mi/ECommerce/SearchGoods.api?keyword=&pageIndex=1&sf=0&sm=2&topicId=0&movieId=0&roleId=0&categoryId1=25&categoryId2=0&brandId=0&fmin=0&fmax=0&salefid=0&cd=0&searchID=621911E35D952F8887AF035EFDCB31BE&t=201933111442459110',
        }).then(res=>{
            console.log(res.data.content.goods);
            this.datalist = res.data.content.goods.goodsList;
        })
        window.onclick = (evt) => {
            console.log(5555)
            this.issortshow = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        background: #f6f6f6;
        position: relative;
        nav{
            background: #fff;
            margin-bottom: 5px;
            ul{
                display: flex;
                li{
                    
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 50px;
                    a{
                        text-decoration: none;
                        color: #333;
                        span.down{
                            
                            display: inline-block;
                            transform: rotate(90deg);
                        }
                    }
                }
            }
        }
        .boxsort{
            height: 100%;
            background: rgba(000,000,000,.5);
            position: absolute;
            width: 100%;
            ul{
                background: #fff;
                text-align: left;
                li{
                    width: 100%;
                    line-height: 60px;
                    a{
                        display: block;
                        margin-left: 6%;
                        color: #333;
                        text-decoration: none;
                        border-bottom: 1px solid #cccccc;
                    }
                }
            }
        }
        aside{
            margin-top: 10px;
            ul{
                display: flex;
                flex-wrap: wrap;
                li:nth-of-type(odd){
                    border-right: 5px solid #f6f6f6;

                }
                li{
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: 0 10px;
                    box-sizing: border-box;
                    width: 50%;
                    border-bottom: 5px solid #f6f6f6;
                    img{
                        width: 100%;
                    }
                    p{
                        font-size: 15px;
                        color: #333;
                        text-align: left;
                        width: 100%;
                    }
                    p.title{
                        
                    }

                }
            }
        }
    }
</style>
