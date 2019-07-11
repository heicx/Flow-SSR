<template>
    <div class="about-wrap">
      <div class="about-content">
        <h3>北京羽衣科技有限公司</h3>
        <h5>我们的团队来自：锤子科技、华为、奥美等国内外知名品牌，拥有完整的硬件供应链、研发、生产、营销体系，以用户体验为驱动，融入高端设计美学、世界顶尖工艺打造出全行业最优秀的雾化烟。</h5>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'common',
}
</script>

<style lang="scss" scoped>
.about-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  .about-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h3 {
    font-size: 28px;
    font-weight: bold;
  }
  h5 {
    width: 710px;
    margin-top: 30px;
    display: inline-block;
    text-align: left;
    line-height: 28px;
    font-size: 16px;
    color: #737373;
  }
}
</style>
