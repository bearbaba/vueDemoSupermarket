<template>
  <div>
    <NavBar>
      <div slot="center">购物车({{ cartLength }})</div>
    </NavBar>
    <div v-show="$store.state.cartList.length">
      <Scroller class="detail-scroll" ref="scroller">
        <CartList :goodsData="goodsData"></CartList>
      </Scroller>
      <CartButtomBar class="detail-buttom"></CartButtomBar>
      <PopUp></PopUp>
    </div>
    <div class="cartVoid" v-show="$store.state.cartList.length == 0">
      <CartVoid class="cart-void"></CartVoid>
    </div>
  </div>
</template>

<script>
import CartList from "./cartChildren/CartList";
import NavBar from "../../components/common/navBar/NavBar";
import Scroller from "./../../components/common/scroll/Scroller";
import CartButtomBar from "./cartChildren/CartButtomBar";
import CartVoid from "./cartChildren/CartVoid";

import PopUp from "./cartChildren/PopUp";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroller,
    CartButtomBar,
    CartVoid,
    PopUp,
  },
  data() {
    return {
      goodsData: [],
    };
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
  },
  created() {
    this.$nextTick(() => {
      this.goodsData = this.$store.state.cartList;
    });
  },
};
</script>

<style scoped lang="scss">
.detail-scroll {
  margin-top: var(--margin-top);
}

.detail-buttom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 33;
}

.cartVoid {
  width: 300px;
  height: auto;
  margin: auto;
}
</style>