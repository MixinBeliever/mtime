<template>
  <div class="shop">
    <div class="search">
      <div>
        <a class="search_input" href="javascript:;"><span>搜索电影正版周边</span></a>
        <a class="shop_car" href="javascript:;"></a>
      </div>
    </div>
    <banner></banner>

  </div>
</template>

<script>
// @ is an alias to /src
import banner from './Shop/Banner'
export default {
    data(){
      return{

      }
    },
    components: {
      banner: banner
    }
}
</script>
<style lang="scss" scoped>
div.shop{
  div.search{
    height: 59px;
    background: transparent;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    
    div{
      display: flex;
      justify-content: space-between;
      width: 100%;
      a{
        display: block;
        height: 39px;
        text-decoration: none;
      }
      a.search_input{
        width: 303px;
        padding: 0 39px;
        background: #ffffff;
        background-image: url(../../public/imgs/search_ico_01.png);
        background-repeat: no-repeat;
        background-position: 10px;
        background-size: 25px 25px;
        span{
          display: block;

          line-height: 39px;
          color: #a5a5a5;
        }
      }
      a.shop_car{
        height: 39px;
        width: 60px;
        margin-left: 5px;
        background: url(../../public/imgs/i_h_shopping01.png) no-repeat center;
        background-size: 35px 30px; 
      }
    }
  }
}
</style>
