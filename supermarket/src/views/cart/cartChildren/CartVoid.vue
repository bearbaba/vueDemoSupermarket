<template>
  <div class="cart-void-root align-middle">
    <div class="img-border">
      <img src="../../../assets/img/cart/cart.png" />
    </div>

    <p class="h5">你忍心看着购物车空空如也吗</p>
    <div class="center-block">
      <button type="button" class="cart-button center btn" @click="toHome">
        点击购物
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartVoid",
  methods: {
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-void-root {
  margin-top: 100px;
  p {
    margin: 1em auto;
    text-align: center;
    font-weight: bold;
  }
  .cart-button {
    border: none;
    margin: auto;
    background: linear-gradient(to right, #ee9ca7, #ff5777);
    color: white;
    font-weight: bold;
  }
}
.img-border {
  border-radius: 5px;
  height: 150px;
  width: 150px;
  margin: auto;
  img {
    height: 100px;
    width: 100px;
    background: white;
    border-radius: 50%;
    position: relative;
    top: 25px;
    left: 22px;
  }
}

.center-block {
  text-align: center;
}
</style>