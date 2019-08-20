<template>
  <div class="news-wrap">
    <card :title="news.title">
      <template v-slot:card-list>
        <ul class="news-contanier">
          <li
            v-for="(item, index) in news.detail"
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
import Card from '../../../components/card';
import NEWS from '../../../static/news.js';

export default {
  layout: 'common',
  data () {
    return {
    }
  },
  computed: {
    news () {
      let title = '';
      let detail = '';
      const { id } = this.$route.params;

      for (let item of NEWS.list) {
        if (item.id == id) {
          title = item.title;
          detail = item.detail;
        }
      }

      return {
        title,
        detail
      }
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
  .news-item {
    font-size: 14px;
    line-height: 26px;
    word-break: break-all;
    text-align: left;
    color: #666;
    margin-top: 10px;
    word-break: break-word;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
