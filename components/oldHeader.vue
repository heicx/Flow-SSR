<template>
	<div class="header-topbar">
		<div class="container clearfix">
      <router-link class="topbar-logo" to='/' tag='a'></router-link>
			<div class="topbar-tabs">
				<router-link
          v-for='(item, index) in tabList'
          :key='index'
          class='tabs-item-old'
          :class='{"active": item.alias.path.indexOf($route.name) > -1 }'
          :to='item.link'
          tag='a'
        >
          {{item.name}}
        </router-link>
        <a href="//www.flowclub.com/complaint" target="_blank">媒体资源</a>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showMenu: false
		}
  },
  methods: {
    closeMenu () {
      this.showMenu = false;
    },
    onMouseEnterItem (name) {
      if (name.indexOf('entityshop') > -1) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
      }
    },
    onMouseLeaveItem (e) {
      this.showMenu = false;
    }
  },
  computed: {
    tabList() {
      let cnEvnStr = '';

      if (process.client) {
        cnEvnStr = !!window.location.pathname.match(/^\/cn/) ? '/cn' : '';
      }

      let list = [
				{
					name: '首页',
					alias: {
            path: ['index', 'cn'],
          },
					link: '/'
				},
				{
					name: '产品技术',
					alias: {
            path: ['tech', 'spec', 'cn-tech', 'cn-spec'],
          },
					link: '/tech'
				},
				// {
				// 	name: '在线商城',
				// 	alias: {
        //     path: ['shop', 'cn-shop'],
        //   },
				// 	link: '/shop'
        // },
        {
					name: '关于我们',
					alias: {
            path: ['about', 'cn-about'],
          },
					link: '/about'
        },
        {
          name: '经销商合作',
					alias: {
            path: ['investment'],
          },
          link: '/investment',
				},
        {
          name: '专卖店加盟',
					alias: {
            path: ['entityshop'],
          },
          link: '/entityshop',
				},
      ]

      // for (let oItem of list) {
      //   oItem.link = `${cnEvnStr}${oItem.link}`;

      //   if (!!oItem.alias.subItems) {
      //     for (let oSubItem of oItem.alias.subItems) {
      //       oSubItem.link = `${cnEvnStr}${oSubItem.link}`;
      //     }
      //   }
      // }

      return list;
    }
  },
  mounted () {
    // console.log(this.$route.name)
  }
}
</script>
