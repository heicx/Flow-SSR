<template>
  <section class="home-wrap">
    <div class="cn-banner-img-1">
      <span class="tips-hidden">未成年人禁止使用</span>
    </div>
    <div class="cn-banner-img-2">
      <div class="img">
        <span class="tips-hidden">机身采用阳极氧化、纳米注塑工艺，浑然一体；烟嘴依据人体工学设计，“嘴感”一流；配备新一代尼古丁盐烟油、极速蜂窝化技术，给你醇正、细腻、畅快的吸入体验；拥有四重防漏结构设计、“一支烟”震动提醒、纳米涂层防水等领先技术的电子烟</span>
      </div>
      <div class="text-container">
        <span class="text"></span>
        <div class="cn-banner-btn">
          <a class="btn-1" target="_blank" href="https://item.taobao.com/item.htm?spm=a2oq0.12575281.0.0.25911deblYfbnz&ft=t&id=590862990609"></a>
          <a class="btn-2" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c- s.w4004-21525864382.4.3d703438MaVxUV&id=590715241618"></a>
        </div>
      </div>
    </div>
    <div class="cn-introduce-container">
      <div class="cn-introduce">
        <h3 class="cn-slogan">
          <span class="tips-hidden">有 FLOW，你总是更自在</span>
        </h3>
        <transition name="fade">
          <ul>
            <li class="cn-video-1" @mouseover="mouseover('videoFlowA', $event)" @mouseout="mouseout('videoFlowA')">
              <i class="video-poster-1"></i>
              <span class="tips-hidden">提神、无烟味、呵护身边人的健康</span>
              <video muted="muted" id="videoFlowA" v-show="videoStatus == 'videoFlowA'" src="//static.flowclub.com/Flow-A.mp4" loop="loop"></video>
            </li>
            <li class="cn-video-2" @mouseover="mouseover('videoFlowB')" @mouseout="mouseout('videoFlowB')">
              <i class="video-poster-2"></i>
              <span class="tips-hidden">无焦油、无留味、呵护家人健康</span>
              <video muted="muted" id="videoFlowB" v-show="videoStatus == 'videoFlowB'" src="//static.flowclub.com/Flow-B.mp4" loop="loop"></video>
            </li>
            <li class="cn-video-3" @mouseover="mouseover('videoFlowC')" @mouseout="mouseout('videoFlowC')">
              <i class="video-poster-3"></i>
              <span class="tips-hidden">提神、无火、无烟灰</span>
              <video muted="muted" id="videoFlowC" v-show="videoStatus == 'videoFlowC'" src="//static.flowclub.com/Flow-C.mp4" loop="loop"></video>
            </li>
            <li class="cn-video-4" @mouseover="mouseover('videoFlowD')" @mouseout="mouseout('videoFlowD')">
              <i class="video-poster-4"></i>
              <span class="tips-hidden">放松、无火、防水</span>
              <video muted="muted" id="videoFlowD" v-show="videoStatus == 'videoFlowD'" src="//static.flowclub.com/Flow-D.mp4" loop="loop"></video>
            </li>
            <li class="cn-video-5" @mouseover="mouseover('videoFlowE')" @mouseout="mouseout('videoFlowE')">
              <i class="video-poster-5"></i>
              <span class="tips-hidden">提神、无火、无残留异味</span>
              <video muted="muted" id="videoFlowE" v-show="videoStatus == 'videoFlowE'" src="//static.flowclub.com/Flow-E.mp4" loop="loop"></video>
            </li>
          </ul>
        </transition>
      </div>
    </div>
    <div class="cn-footer-menu">
      <div class="content">
        <a></a>
        <router-link to="/cn/effect" class="hotlink"></router-link>
        <router-link to="/cn/shop" class="official-btn"></router-link>
      </div>
    </div>
    <div class="prohibit">
      <router-link to="/cn/news" class="news-hidden">新闻动态</router-link>
    </div>
    <!-- <div class="confirm-tips" v-if="isShowTips">
      <div class="confirm-text"></div>
      <div class="confirm-btn">
        <a class="btn-ok" @click="tipsConfirm(true)"></a>
        <a class="btn-no" @click="tipsConfirm()"></a>
      </div>
    </div>
    <div class="mask" v-if="isShowTips"></div> -->
  </section>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  layout: 'common',
  data() {
    return {
      // isShowTips: !localStorage.getItem('_tips'),
      videoStatus: ""
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 电子雾化烟 - FLOW 福禄'
    }
  },
  methods: {
    mouseover(name, event) {
      this.videoStatus = name;

      try {
        let video = document.getElementById(name);
        setTimeout(_ => {
          video && video.play();
        }, 150);
      } catch(e) {}
    },
    mouseout(name) {
      let video = document.getElementById(name);

      this.videoStatus = '';
      video.pause();
    },
    tipsConfirm(status) {
      const browserAgent = navigator.userAgent;

      if (!!status) {
        this.isShowTips = false;
        localStorage.setItem('_tips', true);
      } else if (browserAgent.indexOf("MSIE") > 0) {
        window.opener = null;
        window.close();
      } else if (browserAgent.indexOf("Firefox") != -1 || browserAgent.indexOf("Chrome") != -1) {
        window.location.href = 'about:blank';
        window.close();
      } else {
        window.opener = null;
        window.open('', '_self', '');
        window.close();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tips-hidden {
  opacity: 0;
}
.fade-enter-active {
    #videoFlowA {
      transition: opacity .5s;
      opacity: 0.2;
    }
}
.fade.move-enter, .fade-leave-active {
  #videoFlowA {
    opacity: 0;
  }
}

.cn-banner-img-1, .cn-banner-img-2 {
  position: relative;
}

.cn-banner-img-1 {
  // height: 788px;
  // overflow: hidden;
  /** 首屏 Banner 替换 Video **/
  height: 900px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url(~assets/images/home-banner.jpg?imageMogr2/format/webp/blur/1x0/quality/95);
  background-image: -webkit-image-set(url(~assets/images/home-banner.jpg?imageMogr2/format/webp/blur/1x0/quality/95) 1x,url(~assets/images/home-banner@2x.jpg?imageMogr2/format/webp/blur/1x0/quality/95) 2x);
  /** 首屏 Banner 替换 Video **/
  video {
    position: absolute;
    height: 1080px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid #c0c0bd;
  }
  .text-container {
    width: 1200px;
    margin: 0 auto;
    padding-top: 250px;
  }
  .text {
    display: block;
    width: 428px;
    height: 183px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url(~assets/images/home-banner-text.png);
    background-image: -webkit-image-set(url(~assets/images/home-banner-text.png) 1x,url(~assets/images/home-banner-text@2x.png) 2x);
  }
}

.cn-banner-img-2 {
  height: 1163px;
  .img {
    position: absolute;
    height: 1184px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #fff;
    background-image: url(~assets/images/home-banner2.png);
    background-image: -webkit-image-set(url(~assets/images/home-banner2.png) 1x,url(~assets/images/home-banner2@2x.png) 2x);
  }
  .text-container {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 314px;
    .cn-banner-btn {
      position: absolute;
      content: "";
      bottom: 22px;
      height: 52px;
      left: 16px;
    }
    .btn-1 {
      width: 152px;
      height: 100%;
      display: inline-block;
    }
    .btn-2 {
      margin-left: 24px;
      width: 152px;
      height: 100%;
      display: inline-block;
    }
  }
  .text {
    position: absolute;
    left: 0;
    width: 589px;
    height: 476px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url(~assets/images/home-banner-text2.png);
    background-image: -webkit-image-set(url(~assets/images/home-banner-text2.png) 1x,url(~assets/images/home-banner-text2@2x.png) 2x);
  }
}

.cn-introduce-container {
  width: 100%;
  background-color:#f8f9f9;
	background-image:-webkit-linear-gradient(top,#f5f5f5, #f9fafa,#ffffff);
	background-image:linear-gradient(top,#f5f5f5, #f9fafa,#ffffff);
}
.cn-introduce {
  width: 1300px;
  margin: 0 auto;
  li {
    transition: all .95s ease-out;
    opacity: 0.8;
    position: relative;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  li:hover {
    opacity: 1;
  }
  .cn-slogan {
    width: 1300px;
    height: 410px;
    margin: 0 auto;
    background-image: url(~assets/images/slogan.png);
    background-image: -webkit-image-set(url(~assets/images/slogan.png) 1x,url(~assets/images/slogan@2x.png) 2x);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .cn-video-1 {
    width: 1300px;
    height: 540px;
    background-image: url(~assets/images/video-box-1.png);
    background-image: -webkit-image-set(url(~assets/images/video-box-1.png) 1x,url(~assets/images/video-box-1@2x.png) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .video-poster-1 {
      position: absolute;
      width: 813px;
      height: 540px;
      top: 10px;
      left: 50px;
      background-image: url(~assets/images/video-box-view-1.png);
      background-image: -webkit-image-set(url(~assets/images/video-box-view-1.png) 1x,url(~assets/images/video-box-view-1@2x.png) 2x);
      background-repeat: no-repeat;
      background-size: cover;
    }
    video {
      position: absolute;
      content: "";
      width: 813px;
      height: 540px;
      top: 10px;
      left: 50px;
      object-fit: cover;
      z-index: 10;
      border-radius: 15px 0 0 15px;
    }
  }
  .cn-video-2 {
    width: 1300px;
    height: 540px;
    background-image: url(~assets/images/video-box-2.png);
    background-image: -webkit-image-set(url(~assets/images/video-box-2.png) 1x,url(~assets/images/video-box-2.png) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    .video-poster-2 {
      position: absolute;
      width: 813px;
      height: 540px;
      top: 20px;
      right: 50px;
      background-image: url(~assets/images/video-box-view-2.png);
      background-image: -webkit-image-set(url(~assets/images/video-box-view-2.png) 1x,url(~assets/images/video-box-view-2@2x.png) 2x);
      background-repeat: no-repeat;
      background-size: cover;
    }
    video {
      position: absolute;
      content: "";
      width: 813px;
      height: 540px;
      top: 20px;
      right: 50px;
      object-fit: cover;
      z-index: 10;
      border-radius:  0 15px 15px 0;
    }
  }
  .cn-video-3 {
    width: 1300px;
    height: 540px;
    background-image: url(~assets/images/video-box-3.png);
    background-image: -webkit-image-set(url(~assets/images/video-box-3.png) 1x,url(~assets/images/video-box-3@2x.png) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    .video-poster-3 {
      position: absolute;
      width: 813px;
      height: 540px;
      top: 20px;
      left: 50px;
      background-image: url(~assets/images/video-box-view-3.png);
      background-image: -webkit-image-set(url(~assets/images/video-box-view-3.png) 1x,url(~assets/images/video-box-view-3@2x.png) 2x);
      background-repeat: no-repeat;
      background-size: cover;
    }
    video {
      position: absolute;
      content: "";
      width: 813px;
      height: 540px;
      top: 20px;
      left: 50px;
      object-fit: cover;
      z-index: 10;
      border-radius: 15px 0 0 15px;
    }
  }
  .cn-video-4 {
    width: 1300px;
    height: 540px;
    background-image: url(~assets/images/video-box-4.png);
    background-image: -webkit-image-set(url(~assets/images/video-box-4.png) 1x,url(~assets/images/video-box-4@2x.png) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    .video-poster-4 {
      position: absolute;
      width: 813px;
      height: 540px;
      top: 20px;
      right: 50px;
      background-image: url(~assets/images/video-box-view-4.png);
      background-image: -webkit-image-set(url(~assets/images/video-box-view-4.png) 1x,url(~assets/images/video-box-view-4@2x.png) 2x);
      background-repeat: no-repeat;
      background-size: cover;
    }
    video {
      position: absolute;
      content: "";
      width: 813px;
      height: 540px;
      top: 20px;
      right: 50px;
      object-fit: cover;
      z-index: 10;
      border-radius: 0 15px 15px 0;
    }
  }
  .cn-video-5 {
    width: 1300px;
    height: 540px;
    padding-bottom: 60px;
    background-image: url(~assets/images/video-box-5.png);
    background-image: -webkit-image-set(url(~assets/images/video-box-5.png) 1x,url(~assets/images/video-box-5@2x.png) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    .video-poster-5 {
      position: absolute;
      width: 813px;
      height: 540px;
      top: 20px;
      left: 50px;
      background-image: url(~assets/images/video-box-view-5.png);
      background-image: -webkit-image-set(url(~assets/images/video-box-view-5.png) 1x,url(~assets/images/video-box-view-5@2x.png) 2x);
      background-repeat: no-repeat;
      background-size: cover;
    }
    video {
      position: absolute;
      content: "";
      width: 813px;
      height: 540px;
      top: 20px;
      left: 50px;
      object-fit: cover;
      z-index: 10;
      border-radius: 15px 0 0 15px;
    }
  }
}

.prohibit {
  width: 100%;
  height: 510px;
  margin: 0 auto;
  background-image: url(~assets/images/prohibit.jpg);
  background-image: -webkit-image-set(url(~assets/images/prohibit.jpg) 1x,url(~assets/images/prohibit@2x.jpg) 2x);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .news-hidden {
    position: absolute;
    font-size: 0;
    z-index: -1;
  }
}

.confirm-tips {
  position: fixed;
  width: 1000px;
  height: 450px;
  background: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 35;
  .confirm-btn {
    position: absolute;
    width: 603px;
    height: 80px;
    left: 50%;
    bottom: 114px;
    transform: translateX(-50%);
    font-size: 0;
    background-image: url(~assets/images/modal-btn.png);
    background-image: -webkit-image-set(url(~assets/images/modal-btn.png) 1x,url(~assets/images/modal-btn@2x.png) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .btn-ok {
    width: 290px;
    height: 80px;
    display: inline-block;
  }
  .btn-no {
    width: 290px;
    height: 80px;
    display: inline-block;
    margin-left: 23px;
  }
  .confirm-text {
    position: absolute;
    width: 531px;
    height: 67px;
    left: 50%;
    bottom: 263px;
    transform: translateX(-50%);
    background-image: url(~assets/images/modal-text@2x.png);
    background-image: -webkit-image-set(url(~assets/images/modal-text@2x.png) 1x,url(~assets/images/modal-text@2x.png) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(0, 0, 0);
  filter: alpha(opacity=60);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 30;
}

.cn-footer-menu {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 20;
  background-image: url(~assets/images/footer-menu.png);
  background-image: -webkit-image-set(url(~assets/images/footer-menu.png) 1x,url(~assets/images/footer-menu@2x.png) 2x);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    position: relative;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(~assets/images/footer-menu-text.png);
      background-image: -webkit-image-set(url(~assets/images/footer-menu-text.png) 1x,url(~assets/images/footer-menu-text@2x.png) 2x);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  .hotlink {
    position: absolute;
    z-index: 10;
    left: 106px;
    bottom: 16px;
    display: block;
    width: 170px;
    height: 18px;
  }
  .official-btn {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    display: block;
    width: 204px;
    height: 100px;
  }
}

@media screen and (max-width: 1414px) {
  .cn-banner-img-1 {
    height: 615px;
  }
  .cn-banner-img-2 {
    height: 885px;
    .img {
      height: 900px;
    }
    .text-container {
      padding-top: 238px;
      .text {
        width: 446px;
        height: 361px;
        left: 90px;
      }
      .cn-banner-btn {
        bottom: -343px;
        height: 39px;
        left: 102px;
      }
      .btn-1 {
        width: 114px;
      }
      .btn-2 {
        margin-left: 18px;
        width: 116px;
      }
    }
  }
}

@media screen and (min-width: 1415px) and (max-width: 1600px) {
  .cn-banner-img-1 {
    height: 650px;
  }
  .cn-banner-img-2 {
    height: 960px;
    .img {
      height: 980px;
    }
    .text-container {
      padding-top: 256px;
      .text {
        width: 487px;
        height: 393px;
        left: 70px;
      }
      .cn-banner-btn {
        bottom: -374px;
        height: 43px;
        left: 84px;
      }
      .btn-1 {
        width: 124px;
      }
      .btn-2 {
        margin-left: 18px;
        width: 128px;
      }
    }
  }
}


@media screen and (min-width: 1601px) and (max-width: 1919px){
  .cn-banner-img-1 {
    height: 830px;
  }
  .cn-banner-img-2 {
    height: 806px;
    .img {
      height: 820px;
    }
    .text-container {
      padding-top: 198px;
      .text {
        width: 491px;
        height: 397px;
        left: 50px;
      }
      .cn-banner-btn {
        bottom: -378px;
        height: 44px;
        left: 64px;
      }
      .btn-1 {
        width: 126px;
      }
      .btn-2 {
        margin-left: 18px;
        width: 128px;
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  .cn-banner-img-1 {
    height: 850px;
  }
  .cn-banner-img-2 {
    height: 963px;
    .img {
      height: 980px;
    }
    .text-container {
      padding-top: 260px;
      .text {
        width: 487px;
        height: 393px;
        left: 50px;
      }
      .cn-banner-btn {
        bottom: -376px;
        height: 44px;
        left: 64px;
      }
      .btn-1 {
        width: 126px;
      }
      .btn-2 {
        margin-left: 18px;
        width: 128px;
      }
    }
  }
}

</style>
