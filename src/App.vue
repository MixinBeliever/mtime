<template>
  <div id="app">
      <headerBar v-show="this.$store.state.isHeaderShow"></headerBar>
      <router-view></router-view>
      <footerBar></footerBar>
  </div>
</template>
<script>
import headerBar from './components/common/headerBar'
import footerBar from './components/common/footerBar'
export default {
  mounted(){

  },
  components: {
    headerBar: headerBar,
    footerBar: footerBar
    
  }  
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  img{
    display: block;
  }
</style>
