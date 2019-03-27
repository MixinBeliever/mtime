<template>
    <footer>
        <div class="bottom_nav">
            <ul>
                <router-link to="/index" tag="li" >首页</router-link>
                <router-link to="/buy" tag="li">购票</router-link>
                <router-link to="/shop" tag="li">商城</router-link>
                <router-link to="/discover" tag="li">发现</router-link>
                <router-link to="/my" tag="li">我的</router-link>
            </ul>
        </div>
        <div class="thumbs">
            <ul>
                <router-link to="" tag="li"><span>PC版</span></router-link>
                <router-link to="" tag="li"><span>客户端下载</span></router-link>
                <router-link to="" tag="li"><span>意见反馈</span></router-link>
                <router-link class="last" to="" tag="li"><span>帮助中心</span></router-link>
            </ul>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    footer{
        div.bottom_nav{
            height: 40px;
            line-height: 40px;
            ul{
                display: flex;
                li{
                    flex: 1;
                    font-size: 16px;
                    color: #499cd6;
                    text-align: center;
                }
            }
        }
        div.thumbs{
            height: 20px;
            background: #f6f6f6;
            ul{
                line-height: 20px;
                justify-content: space-around;
                text-align: center;
                li{
                    font-size: 14px;
                    float: left;
                    padding: 0 20px;
                    position: relative;
                    span{

                    }
                }
                li:not(.last)::after{
                    content: '';
                    position: absolute;
                    right: 0;
                    height: 14px;
                    width: 1px;
                    background: #e5e5e5;
                    top: 50%;
                    margin-top:  -7px;
                }
                li:last-of-type{
                    
                }
            }
        }
    }
</style>
