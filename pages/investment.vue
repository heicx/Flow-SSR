<template>
  <div class="investment-container">
    <ul class="investment-wrap">
      <li class="investment-img-1"></li>
      <li class="investment-img-2"></li>
      <li class="investment-img-3"></li>
      <li class="investment-img-4"></li>
      <li class="investment-img-5"></li>
      <li class="investment-img-6"></li>
      <li class="investment-img-7"></li>
      <li class="investment-img-8">
        <span>FLOW加盟 福禄加盟 FLOW招商 福禄招商</span>
      </li>
    </ul>
    <div class="footer-menu">
      <div class="content">
        <a href="https://www.wjx.cn/jq/44348869.aspx" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'common'
}
</script>

<style lang="scss" scoped>
.investment-container .footer-menu {
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

.investment-wrap {
  background: #fff;
  span {
    position: absolute;
    font-size: 12px;
    color: #fff;
    z-index: -1;
  }
}

.investment-img-1 {
  width: 100%;
  height: 880px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-1.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-1.jpg) 1x,url(~assets/images/investment-img-1@2x.jpg) 2x);
}
.investment-img-2 {
  width: 100%;
  height: 920px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-2.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-2.jpg) 1x,url(~assets/images/investment-img-2@2x.jpg) 2x);
}
.investment-img-3 {
  width: 100%;
  height: 1240px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-3.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-3.jpg) 1x,url(~assets/images/investment-img-3@2x.jpg) 2x);
}
.investment-img-4 {
  width: 100%;
  height: 880px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-4.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-4.jpg) 1x,url(~assets/images/investment-img-4@2x.jpg) 2x);
}
.investment-img-5 {
  width: 100%;
  height: 860px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-5.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-5.jpg) 1x,url(~assets/images/investment-img-5@2x.jpg) 2x);
}
.investment-img-6 {
  width: 100%;
  height: 880px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-6.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-6.jpg) 1x,url(~assets/images/investment-img-6@2x.jpg) 2x);
}
.investment-img-7 {
  width: 100%;
  height: 1500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-7.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-7.jpg) 1x,url(~assets/images/investment-img-7@2x.jpg) 2x);
}
.investment-img-8 {
  width: 100%;
  height: 860px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(~assets/images/investment-img-8.jpg);
  background-image: -webkit-image-set(url(~assets/images/investment-img-8.jpg) 1x,url(~assets/images/investment-img-8@2x.jpg) 2x);
}

// @media screen and (max-width: 1414px) {
//   .tech-img-1 {
//     height: 642px;
//   }
// }

// @media screen and (max-width: 1600px) {
//   .tech-img-1 {
//     height: 780px;
//   }
//   .tech-img-2 {
//     height: 960px;
//   }
// }
</style>
