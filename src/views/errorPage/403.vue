<template>
  <div class="error-page">
    <div class="title">403</div>
    <div class="info">抱歉，你无权访问该页面</div>
    <div class="button-wrapper">
      <md-button type="primary" size="small" inline  to="/">返回首页</md-button>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mand-mobile'

  export default {
    name: 'page403',
    components: {
      [Button.name]: Button
    }
  }
</script>
