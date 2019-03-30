<template>
    <header>
    <router-link to="/discover/movie" tag="span"> < </router-link>
    <router-link to="/search" tag="h2"> 搜电影 </router-link>
    </header>

</template>

<script>
	export default{

	}
</script>

<style lang="scss" scoped>
header{
    height:50px;
    width: 100%;
    background:#1C2635;
    overflow: hidden;
    span{
        float: left;
        color: #fff;
        font-size: 30px;
        margin-top:3px;
        margin-left: 20px
    }
    h2{
        float: right;
        color: #fff;
        font-size: 20px;
        margin-top:12px;
        margin-right: 20px
    }
}	
</style>