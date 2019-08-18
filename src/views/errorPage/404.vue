<template>
  <div class="error-page">
    <div class="title">404</div>
    <div class="info">抱歉，你访问的页面不存在</div>
    <div class="button-wrapper">
      <md-button type="primary" size="small" inline  to="/">返回首页</md-button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mand-mobile'

  export default {
    name: 'page404',
    components: {
      [Button.name]: Button
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" type="text/less">

</style>
