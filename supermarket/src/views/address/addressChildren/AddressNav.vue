<template>
  <NavBar class="nav">
    <div slot="left" class="" @click="back">
      <img src="../../../assets/img/address/back.png" alt="" />
    </div>
    <div slot="center" class="nav-center">
      <slot></slot>
    </div>
  </NavBar>
</template>

<script>
import NavBar from "../../../components/common/navBar/NavBar";

export default {
  name: "AddressNav",
  components: {
    NavBar,
  },

  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  margin: auto 0;
}

.nav {
  display: flex;
  align-items: center;
  .nav-center {
    position: relative;
    left: calc(50vw - 3em);
  }
}
</style>