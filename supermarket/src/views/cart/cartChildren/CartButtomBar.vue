<template>
  <div
    class="cart-buttom-bar d-flex justify-content-around align-items-center bg-white rounded shadow-sm"
  >
    <van-checkbox
      v-model="checked"
      @click="selectAll"
      checked-color="#ff5777"
      class="cart-select"
      >全选</van-checkbox
    >
    <div class="cart-price">
      合计：<span>{{ $store.getters.totalPrice }} ￥</span>
    </div>
    <van-button
      round
      size="small"
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="submit"
      >提交</van-button
    >
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "CartButtomBar",
  data() {
    return {
      checked: false,
    };
  },

  methods: {
    selectAll() {
      if (this.checked === true) {
        this.$bus.$emit("checkAll");
      } else {
        this.$bus.$emit("checkAllFalse");
      }
    },
    changeChecked() {
      this.checked = true;
    },
    changeCheckedFalse() {
      this.checked = false;
    },
    submit() {
      if (this.$store.getters.totalPrice == 0) {
        return;
      } else {
        Toast("请扫码");
        this.$bus.$emit("buy");
      }
    },
  },
  mounted() {
    this.$bus.$on("selectCheck", this.changeChecked);
    this.$bus.$on("selectCheckFalse", this.changeCheckedFalse);
  },
};
</script>

<style lang="scss" scoped>
.cart-select {
  font-size: 1.2em;
  font-weight: bold;
}
.cart-buttom-bar {
  width: 100%;
  height: 3em;
  background: white;
  border: 1px solid var(--color-tint);
}

.cart-price {
  font-weight: bold;
  font-size: 1rem;
  span {
    color: var(--color-high-text);
  }
}
</style>