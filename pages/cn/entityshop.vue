<template>
  <div class="entityshop-container">
    <ul class="entityshop-wrap">
      <li class="entityshop-img-1"></li>
      <li class="entityshop-img-2"></li>
      <li class="entityshop-img-3"></li>
      <li class="entityshop-img-4"></li>
      <li class="entityshop-img-5"></li>
      <li class="entityshop-img-6">
        <span>FLOW加盟 福禄加盟 FLOW招商 福禄招商</span>
      </li>
    </ul>
    <div class="footer-menu">
      <div class="content">
        <a href="https://www.wjx.cn/jq/41550946.aspx" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'common',
  head () {
    return {
      title: '专卖店加盟 - FLOW 福禄'
    }
  },
}
</script>

<style lang="scss" scoped>
.entityshop-container .footer-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 98px;
  background: #fff;
  z-index: 5;
  .content {
    width: 1220px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~assets/images/investment-footer.jpg);
    background-image: -webkit-image-set(url(~assets/images/investment-footer.jpg) 1x,url(~assets/images/investment-footer@2x.jpg) 2x);
    a {
      display: block;
      width: 100%;
      height: 98px;
    }
  }
}

.entityshop-wrap {
  background: #fff;
  span {
    position: absolute;
    font-size: 12px;
    color: #fff;
    z-index: -1;
  }
}

.entityshop-img-1 {
  width: 100%;
  height: 960px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-1.jpg) 1x,url(~assets/images/entityshop-img-1@2x.jpg) 2x);
}
.entityshop-img-2 {
  width: 100%;
  height: 1064px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-2.jpg) 1x,url(~assets/images/entityshop-img-2@2x.jpg) 2x);
}
.entityshop-img-3 {
  width: 100%;
  height: 867px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-3.jpg) 1x,url(~assets/images/entityshop-img-3@2x.jpg) 2x);
}
.entityshop-img-4 {
  width: 100%;
  height: 1111px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-4.jpg) 1x,url(~assets/images/entityshop-img-4@2x.jpg) 2x);
}
.entityshop-img-5 {
  width: 100%;
  height: 1398px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-5.png);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-5.png) 1x,url(~assets/images/entityshop-img-5@2x.png) 2x);
}
.entityshop-img-6 {
  width: 100%;
  height: 918px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/entityshop-img-6.jpg);
  background-image: -webkit-image-set(url(~assets/images/entityshop-img-6.jpg) 1x,url(~assets/images/entityshop-img-6@2x.jpg) 2x);
}
</style>
