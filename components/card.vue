<template>
  <div class="content-wrap">
    <div class="card">
      <h2 class="card-title">{{title}}</h2>
      <slot name='card-list'></slot>
    </div>
  </div>
</template>

<script>
export default {
	data() {
    return {
    }
  },
  props: {
    title: String
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.content-wrap {
    width: 1220px;
    min-width: 1220px;
    margin: 0 auto;
}

.card {
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: #666;
    text-align: left;
    padding-left: 30px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    border-radius: 10px 10px 0 0;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb,#ececec);
    line-height: 60px;
    height: 60px;
  }
  .card .card-list {
    overflow: hidden;
    padding: 20px 30px;
  }
}

.card .card-list li {
    list-style: none;
    float: left;
    width: 280px;
    height: 189px;
    border: 1px solid #e5e5e5;
    margin: 0 10px 10px 0;
    text-align: center;
    overflow: hidden;
}
</style>

