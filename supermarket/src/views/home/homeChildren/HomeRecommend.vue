<template>
  <div class="d-flex justify-content-between">
    <div v-for="(item, index) in recommendImgs" :key="index" class="card">
      <img :src="item.image" class="rounded-circle" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 0.3em 0;
  .card {
    border: none;
    text-align: center;
    img {
      margin: 0.3em auto;
      width: 80%;
    }
    p {
      line-height: 1;
    }
  }
}
</style>