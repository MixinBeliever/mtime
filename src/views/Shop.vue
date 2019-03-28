<template>
  <router-view></router-view>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
    mounted(){
       Indicator.open('加载中...');
    }
}
</script>
<style lang="scss" scoped>

</style>
