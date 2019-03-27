<template>
  <div class="shop">
    <div class="search">
      <div>
        <a class="search_input" href="javascript:;"><span>搜索电影正版周边</span></a>
        <a href="javascript:;"></a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
 
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
        background: url('/imgs/search_ico_01.png') no-repeat left;
        padding: 0 39px;
        background: #ffffff;
        span{
          display: block;
          line-height: 39px;
          color: #a5a5a5;
        }
      }
    }
  }
}
</style>
