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
                background: #fff;
                li{
                    flex: 1;
                    font-size: 16px;
                    color: #499cd6;
                    text-align: center;
                }
            }
        }
        div.thumbs{
            height: 40px;
            background: #f6f6f6;
            ul{
                display: flex;
                text-align: center;
                li{
                    font-size: 14px;
                    line-height: 40px;
                    width: 25%;
                    box-sizing: border-box;
                    position: relative;
                    padding: 0 10px;
                    span{

                    }
                }
                li:not(.last)::after{
                    content: '';
                    position: absolute;
                    right: 0;
                    height: 14px;
                    width: 1px;
                    background: #e2e2e2;
                    top: 50%;
                    margin-top:  -7px;
                }
                li:last-of-type{
                    
                }
            }
        }
    }
</style>
