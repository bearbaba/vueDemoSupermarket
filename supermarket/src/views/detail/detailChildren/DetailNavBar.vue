<template>
  <NavBar class="detail-nav">
    <div slot="left" class="detail-nav-left" @click="back">
      <img src="../../../assets/img/detail/back.png" alt="" />
    </div>
    <div slot="center" class="detail-nav-center">
      <div
        v-for="(title, index) in titles"
        :key="index"
        :class="{ active: currentIndex == index }"
        @click="titleClick(index)"
      >
        {{ title }}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "../../../components/common/navBar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("listenIndex", this.currentIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-nav {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .detail-nav-left {
    padding-left: 1em;
    img {
      width: 22px;
      margin: auto 0;
    }
  }
  .detail-nav-center {
    display: flex;
    color: black;
    height: 100%;
    div {
      margin-right: 1em;
    }
  }
}

.active {
  color: var(--color-high-text);
}
</style>