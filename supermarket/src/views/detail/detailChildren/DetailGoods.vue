<template>
  <div v-if="Object.keys(goodList).length">
    <div class="bg-white rounded shadow-sm goods-desc">
      {{ goodList.desc }}
    </div>
    <div class="goods-desc bg-white rounded shadow-sm">
      <p class="goods-desc-title">{{ goodList.detailImage[0].key }}</p>
      <img
        :src="item"
        alt=""
        v-for="(item, index) in goodList.detailImage[0].list"
        :key="index"
        class="goods-desc-img"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    goodList: {
      type: Object,
      default() {
        return {
          imagesLength: 0,
          counter: 0,
        };
      },
    },
  },
  watch: {
    goodList() {
      this.imagesLength = this.goodList.detailImage[0].list.length;
    },
  },

  methods: {
    imgLoad() {
      if (++this.counter !== this.imagesLength) {
        this.$bus.$emit("detailImageLoad");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.goods-desc {
  margin: 0.5em;
  padding: 1em;
}
.goods-desc-img {
  width: 100%;
}
</style>
