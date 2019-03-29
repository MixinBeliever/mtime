<template>
    <div class="box">
        <img :src="image" alt="" @click="handleclick">     
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            image : '',
            url : ''
        }
    },
    mounted () {
        axios ({
            url : '/Service/callback.mi/PageSubArea/MallAreaFirstH5Url.api?t=20193289294689195',

        }).then( (res) => {
            this.image = res.data.areaFirst.image
            this.url = res.data.areaFirst.url
        })
    },
    methods : {
        handleclick () {
            location.href = this.url
        }
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    margin-top: 30px;
}
    img{
        width: 100%;
    }
</style>
