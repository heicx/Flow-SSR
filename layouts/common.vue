<template>
  <div id="app" class="app-wrap">
		<app-header></app-header>
    <app-navigation :isHide='isHide'></app-navigation>
    <nuxt />
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from '../components/header.vue';
import appNavigation from '../components/navigation.vue';
import appFooter from '../components/footer.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {
      isHide: true
    }
  },
  mounted () {
    this.isHide = !(this.$route.name == 'tech' || this.$route.name == 'spec');
  },
  created() {
    Bus.$on('showNav', (status)=> {
      this.isHide = !status;
    });
  },
  components: {
    appHeader,
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
