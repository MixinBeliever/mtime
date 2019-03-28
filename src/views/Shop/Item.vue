<template>
    <article>
        <section v-for="(item,index) in category" :key="index">
            <div class="titlebar">
                <h3><span class="bgbar" style="background-color: #f48080"></span>{{item.name}}</h3>
                <div class="more"><a href="javascript:;">更多 ></a></div>
            </div>    
            <dl>
                <dt>
                    <img :src="item.image" alt="">
                </dt>
                <dd>
                    <ul>
                        <router-link to="" tag="li" v-for="piclist in item.subList" :key="piclist.goodsId">
                            <img :src="piclist.image" alt="">
                            <h3>{{piclist.title}}</h3>
                            <p>$<span>99.9</span></p>
                        </router-link>
                    </ul>
                </dd>
            </dl>
        </section>
    </article>    
</template>
<script>
export default {
    props: {
        category: Array,
    },
}
</script>
<style lang="scss" scoped>
    article{
        section{
            margin-top: 15px;
            background: #ffffff;
            overflow: hidden;
            div.titlebar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 15px;
                h3{
                    line-height: 20px;
                    span.bgbar{
                        display: inline-block;
                        vertical-align: middle;
                        height: 25px;
                        width: 8px;
                        margin-right: 10px;
                    }
                    font-weight: 400;
                }
                div.more{
                    margin-right: 15px;
                    a{
                        text-decoration: none;
                        color: #cfcfcf;
                    }
                }
            }
            dl{
                margin: 0 15px;
                dd{
                    ul{
                        display: flex;
                        li{
                            width: 33.3%;
                            box-sizing: border-box;
                            padding: 5px;
                            img{
                                width: 100%;
                            }
                            h3{
                                font-weight: 100;
                                color: #333;
                                font-size: 14px;
                                overflow: hidden;
                                width: 100%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                text-align: center;
                            }
                            p{
                                text-align: center;
                                color: #f48080;
                                span{
                                    font-size: 18px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
                dt{
                    border-bottom: 2px solid #cccccc;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
