<template>
    <div class="searchbox">
        <div class="search">
            <a class="back" href="#/shop"><</a>
            <input type="text" placeholder="搜索正版电影周边">
            <a class="searchbtn" href=""><span>搜索</span></a>
        </div>
        <div class="contain">

        </div>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
export default {
    mounted(){
        this.$store.state.isHeaderShow = false;
        Indicator.close();//DOM上树之后 隐藏
        
    },
    destroyed(){
        this.$store.state.isHeaderShow = true;
    }
}
</script>
<style lang="scss" scoped>
    div.searchbox{
        height: 100%;
        background: #ffffff;
        div.search{
            height: 50px;
            background: #1c2635;
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                text-indent: 1.5em;
                border:none;
                height: 38px;
                border-radius: 6px;
                flex: 1;
                font-size: 15px;
                outline: none;
            }
            a{
                text-decoration: none;
            }
            a.back{
                line-height: 30px;
                width: 50px;
                color: #ffffff;
                text-align: center;
                font-size: 24px;
            }
            a.searchbtn{
                margin: 0 20px 0 10px;
                span{
                    border: 1px solid #ffffff;
                    padding: 4px 10px;
                    color: #ffffff;
                    font-size: 16px;
                    border-radius: 8px;
                }
            }
        }
        div.contain{
            height: 600px;
        }
    }
</style>
