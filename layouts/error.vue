<template>
  <div class="not-found">
    抱歉，页面载入失败 ...
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'common'
}
</script>

<style lang="scss" scoped>
.app-wrap .not-found {
    min-height: 650px;
    line-height: 650px;
    text-align: center;
    font-size: 32px;
}
</style>
