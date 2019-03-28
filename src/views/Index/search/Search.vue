<template>
    <div>
        <header>
            <span> < </span>
            <div>
                <input type="text" value="影片/影院/影人 ，任你搜">
                <button>搜索</button>
            </div>
        </header> 
        <object data="https://static4da.mtime.cn/feature/mobile/banner/2019/0311/hvtnd750175.html"></object>
    </div>
</template>
<script>
export default {
    
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
        margin-top:13px;
        margin-left: 20px
    }
    div{
        width: 90%;
        background: red;
        margin-left: 16%;
        margin-top:19px; 
        input{
            width: 60%;
            height: 40px;
            float: left;
            border-radius: 8px; 
            outline: none;
            font-size: 15px;
            padding-left: 10px;
        }
   
        button{
            float: left;  
            width: 60px;
            height: 45px;  
            margin-left: 10px;
            border-radius: 8px; 
        }
    }
}
object{
    width: 100%;
}
</style>

