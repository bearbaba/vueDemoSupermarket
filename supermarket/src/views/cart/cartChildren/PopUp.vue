<template>
  <van-popup
    v-model="show"
    closeable
    position="bottom"
    round
    :style="{ height: '40%' }"
  >
    <div class="content">
      <img src="../../../assets/img/cart/zanzhu.png" /></div
  ></van-popup>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    pop() {
      this.show = true;
    },
  },
  mounted() {
    this.$bus.$on("buy", this.pop);
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 100vw;
  img {
    width: 50vw;
    margin: 50px 25vw 0;
  }
}
</style>