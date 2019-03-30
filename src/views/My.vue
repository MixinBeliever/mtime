<template>
  <div class="home">
    这是我的
  </div>
</template>

<script>
// @ is an alias to /src
import { MessageBox } from 'mint-ui';
export default {
  beforeRouteEnter(to,from,next){
    MessageBox.alert('待开发').then(action => {
      next({
        path: '/shop'
      })
    });
  }
}
</script>
