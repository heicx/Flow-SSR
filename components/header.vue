<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
				<router-link v-for='(item, index) in tabList' :key='index' :class='{"active": item.alias.indexOf($route.name) > -1 }' :to='item.link' tag='a'>{{item.name}}{{$route.test}}</router-link>
        <a href="//www.flowclub.com/complaint" target="_blank" class="nuxt-link-active">媒体资源</a>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// list: this.test
		}
  },
  computed: {
    tabList() {
      const cnEvnStr = !!window.location.pathname.match(/^\/cn/) ? '/cn' : '';
      let list = [
				{
					name: '首页',
					alias: ['index', 'cn'],
					link: '/'
				},
				{
					name: '产品技术',
					alias: ['tech', 'spec', 'cn-tech', 'cn-spec'],
					link: '/tech'
				},
				{
					name: '在线商城',
					alias: ['shop', 'cn-shop'],
					link: '/shop'
        },
        {
					name: '关于我们',
					alias: ['about', 'cn-about'],
					link: '/about'
        },
        {
					name: '省市代招商',
					alias: ['investment', 'cn-investment'],
					link: '/investment'
				},
        {
					name: '专卖店加盟',
					alias: ['entityshop', 'cn-entityshop'],
					link: '/entityshop'
				},
      ]

      for (let oItem of list) {
        oItem.link = `${cnEvnStr}${oItem.link}`;
      }

      return list;
    }
  },
  mounted () {
    // console.log(this.$route.name)
  }
}
</script>
