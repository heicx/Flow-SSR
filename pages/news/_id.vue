<template>
    <div class="news-wrap">
      <card :title="title">
        <template v-slot:card-list>
          <ul class="news-contanier">
            <li
              v-for="(item, index) in detail"
              :key="index"
              class="news-item"
            >
              {{item}}
            </li>
          </ul>
        </template>
      </card>
    </div>
</template>

<script>
import Card from '../../components/card';
import NEWS from '../../static/news.js';

let title, detail;

export default {
  layout: 'common',
  validate ({ params }) {
    for (let item of NEWS.list) {
      if (item.id == params.id) {
        title = item.title;
        detail = item.detail;
      }
    }

    // 必须是number类型
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      title: title,
      detail: detail,
      news: NEWS.list
    }
  },
  computed: {
    setTitle () {
      return this.title;
    },
    setDetail () {
      return ''
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
    padding: 15px 25px;
  }
  .news-title {
    float: left;
    margin-right: 20px;
  }
  .news-item {
    font-size: 14px;
    line-height: 26px;
    word-break: break-all;
    text-align: left;
    color: #666;
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
