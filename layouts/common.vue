<template>
  <div id="app" class="app-wrap">
    <div v-if="isCN !== null">
      <app-header v-if="isCN"></app-header>
      <app-old-header v-else></app-old-header>
    </div>
    <app-navigation :isHide='isHide'></app-navigation>
    <nuxt />
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from '../components/header.vue';
import appOldHeader from '../components/oldHeader.vue';
import appNavigation from '../components/navigation.vue';
import appFooter from '../components/footer.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {
      isHide: true,
      isCN: null
    }
  },
  mounted () {
    if (process.client) {
      this.isCN = !!window.location.pathname.match(/^\/cn/)
    } else {
      this.isCN = false
    }

    this.isHide = ['tech', 'spec', 'cn-tech', 'cn-spec'].indexOf(this.$route.name) < 0;
  },
  created() {


    Bus.$on('showNav', (status)=> {
      this.isHide = !status;
    });
  },
  components: {
    appHeader,
    appOldHeader,
    appNavigation,
    appFooter
  },
}
</script>

<style src='../assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  min-width: 1280px;
}
</style>
