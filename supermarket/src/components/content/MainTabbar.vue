<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-img" src="../../assets/img/tabbar/home.svg">
      <img slot="item-img-active" src="../../assets/img/tabbar/home_active.svg">
      <p slot="item-text">主页</p>
    </tab-bar-item>
    <tab-bar-item path="/list">
      <img slot="item-img" src="../../assets/img/tabbar/category.svg">
      <img slot="item-img-active" src="../../assets/img/tabbar/category_active.svg">
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-img" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="item-img-active" src="../../assets/img/tabbar/shopcart_active.svg">
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-img" src="../../assets/img/tabbar/profile.svg">
      <img slot="item-img-active" src="../../assets/img/tabbar/profile_active.svg">
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../common/topControl/TopControl";
  import TabBarItem from "../common/topControl/TopControlItem";
  export default {
    name: "MainTabbar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style scoped>

</style>
