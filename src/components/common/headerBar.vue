<template>
        <header :class="$store.state.isHeaderFixed?'fixed':''">
            <ul>
                <router-link to="/index" tag="li" activeClass="active"><a href="javascript:;"></a></router-link>
                <router-link to="/index" tag="li" activeClass="active"><a href="javascript:;">首页</a></router-link>
                <router-link to="/buy" tag="li" activeClass="active"><a href="javascript:;">购票</a></router-link>
                <router-link to="/shop" tag="li" activeClass="active"><a href="javascript:;">商城</a></router-link>
                <router-link to="/discover" tag="li" activeClass="active"><a href="javascript:;">发现</a></router-link>
                <router-link to="/my" tag="li" activeClass="active"><a href="javascript:;">我的</a></router-link>
            </ul>
      </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
header{
    
    ul{
      list-style: none;
      display: flex;
      height: 58px;
      line-height: 58px;
      background: #1c2635;
      li{
        flex: 1;
        text-align: center;
        a{
            color: #96999c;
            text-decoration: none;
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
        }
      }
      li:nth-of-type(1){
        background: url(../../../public/imgs/logo.png) no-repeat center;
        background-size: 100%;
        background-origin: content-box;
        width: 20%;
        padding-left: 10px;
      }

      .active{
          a{
            font-weight: bold;
            color: #ffffff;
            border-bottom: 2px solid #fff;
          }
          
      }
    }
  }
  header.fixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
</style>
