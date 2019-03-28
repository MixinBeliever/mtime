<template>
    <aside>
        <ul>
            <li v-for="item in interesting" :key="item.goodsId">
                <img :src="item.image" alt="" v-if="item.image" >
                <img v-else alt="" >
                <dl>
                    <dt><span class="ziying" v-if="item.goodsTip" >自营</span>{{item.longName}}</dt>
                    <dd>￥<span>{{item.marketPrice}}</span></dd>
                </dl>
                <span class="news" v-if="item.iconText">新品</span>
            </li>
        </ul>
    </aside>    
</template>
<script>
export default {
    props: {
        interesting: Array
    },
    mounted(){
        //https://m.mtime.cn/Service/callback.mi/ECommerce/RecommendProducts.api?t=201932816502812474&goodsIds=&pageIndex=1

    }
}
</script>
<style lang="scss" scoped>
    aside{
        ul{
            display: flex;
            flex-wrap: wrap;
            li:nth-of-type(2n+1){
                border-right: 5px solid #f6f6f6;
            }
            li{
                position: relative;
                width: 50%;
                box-sizing: border-box;
                margin-bottom: 5px;
                background: #ffffff;
                padding-bottom: 10px;
                img{
                    width: 100%;
                }
                dl{
                    padding: 0 10px;
                    dd{
                        color: #f60;
                        font-size: 15px;
                    }
                    dt{
                        font-size: 14px;
                        color: #333;
                        span.ziying{
                            border: 1px solid #f60;
                            border-radius: 5px;
                            font-size: 12px;
                            color: #f60;
                            margin-right: 3px;
                        }
                    }
                }
                span.news{
                    background: #25acbd;
                    color: #ffffff;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                }
            }
        }
    }
</style>
