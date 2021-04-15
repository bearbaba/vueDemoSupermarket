<template>
  <li
    @click="changeSite"
    class="main-item-box nav-item"
    :class="{ active: isActive }"
  >
    <div v-show="!isActive" class="main-item-img">
      <slot name="mainTabBarImg"></slot>
    </div>
    <div v-show="isActive" class="main-item-img">
      <slot name="mainTabBarImgActive"></slot>
    </div>
    <slot name="mainTabBarText"></slot>
  </li>
</template>

<script>
export default {
  name: "MainTabBarItem",
  props: {
    path: String,
  },
  methods: {
    changeSite() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      if (this.$route.path === this.path) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-item-box {
  float: left;
  font-size: 14px;
  width: 25%;
  clear: right;
  height: 49px;
  padding: 4px 0;
  border-radius: 3px;
  color: var(--color-high-text);
  img {
    height: 26px;
  }
  .main-item-img {
    margin-bottom: -10px;
  }
}

.active {
  color: white;
  background: pink;
}
</style>