<template>
    <article>
        <div class="toPic"  v-for="(list,index) in topic" :key="index">
            <dl class="bg">
                <dd v-for="(item,index) in bglistarr" :key="index" :style="item">11111</dd>
            </dl>
            <div class="hook">
                <dl>
                    <dd>
                        <div>
                            <img src="../../../public/imgs/get (15).jpg" alt="">
                        </div>
                    </dd>
                    <dd>
                        <div>
                            <img src="../../../public/imgs/get (16).jpg" alt="">
                        </div>
                    </dd>
                    <dd>
                        <div>
                            <img src="../../../public/imgs/get (17).jpg" alt="">
                        </div>
                    </dd>
                    <dd>
                        <div>
                            <img src="../../../public/imgs/get (18).jpg" alt="">
                        </div>
                    </dd>
                </dl>
            </div>
            <div class="items">
                <p class="style">{{list.titleCn}}</p>
                <h3 class="estyle">{{list.titleEn}}</h3>
                <ul>
                    <router-link tag="li" to="" v-for="(item1,index) in list.subList" :key="index"><img :src="item1.image"><p>{{item1.title}}</p><p class="price">￥<strong>99</strong></p></router-link>
                </ul>
                <div class="more">
                    <a href="">更多商品 ></a>
                </div>
            </div>
        </div>    
    </article>    
</template>
<script>
export default {
    data(){
        return {
            bglistarr: []
        }
    },
    props: {
        topic: Array,
    },
    watch: {
        topic(){
            this.bglistarr = this._props.topic.map(item=>`background-image: url(${item.backgroupImage})`);
        }
      
    }
}
</script>
<style lang="scss" scoped>
    article{
        margin-top: 15px;
        position: relative;
        background: #fff;
        div.toPic{
            display: none;
            dl.bg{
                height: 150px;
                dd{
                    height: 150px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    display: none;
                }
                dd:nth-of-type(1){
                    display: block;
                }
                
                
            }
        }
        div.toPic:nth-of-type(1){
            display: block;
            // dl.bg{
            //     dd{
            //         height: 150px;
            //         background-size: 100%;
            //         background-repeat: no-repeat;
            //         display: none;
            //     }
            //     dd:nth-of-type(1){
                    
            //     }
                
                
            // }
        }
        div.hook{
            height: 60px;
            width: 100%;
            position: absolute;
            top: 70px;
            left: 0;
            dl{
                text-align: center;
                width: 100%;
                dd{
                    box-sizing: border-box; 
                    width: 25%;
                    height: 100%;
                    display: inline-block;
                    box-sizing: border-box;
                    padding: 0 10px;
                    div{
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        img{
                            height: 80px;
                        }
                    }
                }
            }
        }
        div.items{
            p.style{
                text-align: center;
                font-size: 12px;
            }
            h3.estyle{
                text-align: center;
                font-weight: 100;
            }
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 33.3%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
                    box-sizing: border-box;
                    img{
                        width: 100%;
                    }
                    p{
                        font-size: 14px;
                        color: #333;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 100%;
                        text-align: center;
                        
                    }
                    p.price{
                        color: #f48080;
                        strong{
                            font-size: 20px;
                        }
                    }
                }
            }
            div.more{
                text-align: center;
                padding: 15px;
                a{
                    text-decoration: none;
                    color: #fff;
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    background: #f48080;
                    text-align: center;
                    font-size: 15px;
                    padding: 2px 15px;
                    border-radius: 20px;
                }
            }
        }
    }
</style>
