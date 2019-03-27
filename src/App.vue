<template>
  <div id="app">
      <headerBar></headerBar>
      <router-view
      ></router-view>
      <footerBar></footerBar>
  </div>
</template>
<script>
import headerBar from './components/common/headerBar'
import footerBar from './components/common/footerBar'
export default {
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
</style>
