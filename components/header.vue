<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
				<router-link v-for='(item, index) in list' :key='index' :class='{"active": $route.name == item.alias}' :to='item.link' tag='a'>{{item.name}}{{$route.test}}</router-link>
        <a href="//www.flowclub.com/complaint" target="_blank" class="nuxt-link-active">媒体资源</a>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '首页',
					alias: 'index',
					link: '/'
				},
				{
					name: '产品技术',
					alias: ['tech', 'spec'],
					link: '/tech'
				},
				{
					name: '在线商城',
					alias: 'shop',
					link: '/shop'
        },
        {
					name: '关于我们',
					alias: 'about',
					link: '/about'
        },
        {
					name: '省市代招商',
					alias: 'investment',
					link: '/investment'
				},
        {
					name: '专卖店加盟',
					alias: 'entityshop',
					link: '/entityshop'
				},
			]
		}
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>
