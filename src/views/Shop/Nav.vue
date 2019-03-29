<template>
    <div class="nav">
        <ul>
            <router-link to="" tag="li" v-for="(item,index) in navarr" :key="index">
                <img :src="item.image" alt="">
                <span>{{item.iconTitle}}</span>
            </router-link>
        </ul>
    </div>    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props: {
        navarr: Array,
    }
}
</script>
<style lang="scss" scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        li{
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding: 15px;
            img{
                width: 100%;
            }
            span{
                margin-top: 5px;
            }
        }
    }
</style>
