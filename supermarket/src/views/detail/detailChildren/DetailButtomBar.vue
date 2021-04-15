<template>
  <div class="detail-buttom">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="badge"
        @click="changeSite"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addToCart"
      />
      <van-goods-action-button type="danger" color="#ff5777" text="立即购买" @click="haveBuy"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "DetailButtomBar",
  data() {
    return {};
  },
  computed: {
    badge() {
      return this.$store.getters.cartLength;
    },
  },
  methods: {
    addToCart() {
      Toast.success("已添加");
      this.$emit("addToCart");
    },
    changeSite() {
      this.$router.push("/cart");
    },
    haveBuy(){
      Toast.success("已提交")
    }
  },
};
</script>

<style lang="scss" scoped>
.detail-buttom {
  position: fixed;
  bottom: 0;
  z-index: 600;
}
</style>