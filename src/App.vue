<template>
  <div id="app">
      <headerBar></headerBar>
      <router-view
      ></router-view>
      <footerBar></footerBar>
  </div>
</template>
<script>
import headerBar from './views/headerBar'
import footerBar from './views/footerBar'
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
