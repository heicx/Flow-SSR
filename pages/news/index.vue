<template>
    <div class="news-wrap">
      <card :title="title">
        <template v-slot:card-list>
          <ul class="news-contanier">
            <router-link
              v-for='(item, index) in news'
              :key='index'
              class='news-title'
              :to='"/news/" + item.id'
              tag='li'
            >
              {{item.title}}
            </router-link>
          </ul>
        </template>
      </card>
    </div>
</template>

<script>
import Card from '../../components/card';
import NEWS from '../../static/news.js';

export default {
  layout: 'common',
  data () {
    return {
      title: '新闻动态',
      news: NEWS.list
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.news-wrap {
  position: relative;
  background: #fff;
  min-height: 650px;
  text-align: center;
  padding: 20px 0 ;
  .news-contanier {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 25px;
    padding-bottom: 20px;
  }
  .news-title {
    cursor: pointer;
    width: 580px;
    font-size: 14px;
    line-height: 26px;
    word-break: break-all;
    color: #666;
    margin-top: 10px;
    margin-right: 10px;
    &:hover {
      color: #efc03f;
    }
  }
}
</style>
