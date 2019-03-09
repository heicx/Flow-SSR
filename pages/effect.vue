<template>
    <div class="health-effect-wrap">
        <div class="effect-banner"></div>
        <div class="effect-img-1"></div>
        <div class="effect-img-2"></div>
        <div class="effect-img-3"></div>
    </div>
</template>

<script>
export default {
  layout: 'common',
}
</script>

<style lang="scss" scoped>
.health-effect-wrap {
    background: #fff;
}

.effect-banner {
    width: 100%;
    height: 589px;
    background-image: url(~assets/images/health-banner.jpg);
    background-image: -webkit-image-set(url(~assets/images/health-banner.jpg) 1x,url(~assets/images/health-banner@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.effect-img-1 {
    width: 100%;
    height: 851px;
    background-image: url(~assets/images/health-img-2.jpg);
    background-image: -webkit-image-set(url(~assets/images/health-img-2.jpg) 1x,url(~assets/images/health-img-2@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.effect-img-2 {
    width: 100%;
    height: 1100px;
    background-image: url(~assets/images/health-img-3.jpg);
    background-image: -webkit-image-set(url(~assets/images/health-img-3.jpg) 1x,url(~assets/images/health-img-3@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.effect-img-3 {
    width: 100%;
    height: 849px;
    background-image: url(~assets/images/health-img-4.jpg);
    background-image: -webkit-image-set(url(~assets/images/health-img-4.jpg) 1x,url(~assets/images/health-img-4@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
