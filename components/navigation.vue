<template>
	<div class="header-nav" v-if="!isHide">
    <div class="container clearfix">
      <ul class="nav-list">
        <li v-for='(item, index) in list' :key='index' :class='{"active": item.alias.indexOf($route.name) > -1}'>
          <router-link :to='getEnvStr + item.link'>{{item.name}}</router-link>
        </li>
      </ul>
      <a class="nav-btn" href="/shop">现在购买</a>
    </div>
	</div>
</template>

<script>
export default {
  props: ['isHide'],
  data() {
    return {
      list: [
        {
          name: '核心技术',
          alias: ['tech', 'cn-tech'],
          link: '/tech'
        },
        {
          name: '产品规格',
          alias: ['spec', 'cn-spec'],
          link: '/spec'
        }
      ]
    }
  },
  computed: {
    getEnvStr () {
      return !!window.location.pathname.match(/^\/cn/) ? '/cn' : '';
    }
  }
}
</script>

<style lang="scss"></style>
