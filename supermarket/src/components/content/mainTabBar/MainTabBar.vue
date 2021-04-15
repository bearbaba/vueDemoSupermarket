<template>
  <MainTabList>
    <MainTabBarItem path="/home">
      <img
        slot="mainTabBarImg"
        src="../../../assets/img/mainTab/iconDisaed/icon-.svg"
      />
      <img
        slot="mainTabBarImgActive"
        src="../../../assets/img/mainTab/iconActive/icon-.svg"
      />
      <p class="nav-link" slot="mainTabBarText">主页</p>
    </MainTabBarItem>
    <MainTabBarItem path="/cart">
      <img
        slot="mainTabBarImg"
        src="../../../assets/img/mainTab/iconDisaed/gouwuche.svg"
      />
      <img
        slot="mainTabBarImgActive"
        src="../../../assets/img/mainTab/iconActive/gouwuche.svg"
      />
      <p class="nav-link" slot="mainTabBarText">购物车</p>
    </MainTabBarItem>
    <MainTabBarItem path="/my">
      <img slot="mainTabBarImg" src="../../../assets/img/mainTab/iconDisaed/wode.svg" />
      <img
        slot="mainTabBarImgActive"
        src="../../../assets/img/mainTab/iconActive/wode.svg"
      />
      <p class="nav-link" slot="mainTabBarText">我的</p>
    </MainTabBarItem>
  </MainTabList>
</template>

<script>
import MainTabBarItem from "../../common/mainTabBar/MainTabBarItem";
import MainTabList from "../../common/mainTabBar/MainTabList";
export default {
  name: "MainTabBar",
  components: {
    MainTabBarItem,
    MainTabList,
  },
};
</script>

<style>
</style>
