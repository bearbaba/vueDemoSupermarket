<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, timeOut = 300) {
      this.scroll && this.scroll.scrollTo(x, y, timeOut);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true,
      infinity: false,
    });
    this.scroll.on("scroll", (pos) => {
      this.$emit("scroll", pos);
    });
    this.scroll.on("pullingUp", () => {
      console.log("pullend");
      this.$emit("pullEnd");
    });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100vh - 45px);
  z-index: 11;
    .content {
    padding-bottom: 50px;
  }
}
</style>
