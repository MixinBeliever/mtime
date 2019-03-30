<template>
    <div>
        <header>
            <router-link to="/index" tag="span"> < </router-link>
            <div>
                <input type="text" @input="input" v-model="inputlist">
                <button @click="button">搜索</button>
            </div>
        </header> 
        <object data="https://static4da.mtime.cn/feature/mobile/banner/2019/0311/hvtnd750175.html"></object>
        <main>
            <p>热门搜索</p>
            <ul>
                <router-link to="/buy/hit" tag="li" v-for="data in keywords" :key="data" > 
                    {{data}}
                </router-link>
            </ul>
        </main>
    </div>
</template>
<script>
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
    data () {
        return {
            inputlist : '影片/影院/影人 ，任你搜',
            keywords : '',
        }
    },
    mounted () {
        Indicator.open('加载中...');
        this.$store.state.isHeaderShow = false
        axios ({
            url : '/Service/callback.mi/Search/HotKeyWords.api?t=20193298435293257'
        }).then ( (res) => { 
            this.keywords = res.data.keywords
             Indicator.close();
        })
    },
    destroyed () {
        this.$store.state.isHeaderShow = true
    },
    methods :{
        input () {
            console.log('aaa')
        },
        button () {
            console.log('this.keywords')
           location.href =`http://m.mtime.cn/#!/search/list/${this.keywords}/`
        },
       
    }
}
</script>
<style lang="scss" scoped>
header{
    height: 80px;
    width: 100%;
    background:#1C2635;
    overflow: hidden;
    span{
        float: left;
        color: #fff;
        font-size: 30px;
        margin-top:20px;
        margin-left: 20px
    }
    div{
        width: 90%;
        background: red;
        margin-left: 16%;
        margin-top:16px; 
        input{
            width: 65%;
            height: 45px;
            float: left;
            border-radius: 8px; 
            outline: none;
            font-size: 18px;
            padding-left: 10px;
        }
   
        button{
            float: left;  
            width: 60px;
            height: 50px;  
            margin-left: 10px;
            border-radius: 8px; 
            outline: none;
            font-size: 20px;
            border: 1px solid #fff;
            background: #1C2635;
            color: #fff;
        }
    }
}
object{
    width: 100%;
    height:110px;
}
main {
    height: 437px;
    p{
        width: 100%;
        height: 30px;
        background: #ddd;
        font-size: 18px;
        line-height: 30px;
    }
    ul{
        background: #fff;
        height: 100%;
        li{
            height: 40px;
            line-height: 40px;
            background: #fff;
            border-radius:15px;
            float: left;
            margin-left: 30px;
            padding: 0 10px;
            margin-top: 10px;
            font-size: 20px;
            color: skyblue;
            border: 1px solid #ccc;
        }
    }
}
</style>

