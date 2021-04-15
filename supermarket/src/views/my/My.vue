<template>
  <div>
    <NavBar>
      <div slot="center">我的</div>
    </NavBar>
    <div class="my-content">
      <div class="my-logo shadow-sm">
        <img class="rounded-circle" src="../../assets/img/my/头像.png" />
        <div class="my-login-text">
          <p id="my-login">登录</p>
          <p>注册</p>
        </div>
      </div>
      <div class="my-feature bg-white rounded shadow-sm">
        <div class="my-feature-detail" @click="toCart">
          <img class="my-img" src="./../../assets/img/my/购物车.png" />
          <p class="my-img-text">购物车</p>
        </div>
        <div class="my-feature-detail">
          <img
            class="my-img"
            src="./../../assets/img/my/地址.png"
            @click="toAddress"
          />
          <p class="my-img-text">地址</p>
        </div>
      </div>
      <div class="wallet">
        <MyWallet :wallet="0" :redEnvelope="0"></MyWallet>
      </div>
    </div>
  </div>
</template>

<script>
import MyWallet from "./myChildren/MyWallet";
import NavBar from "./../../components/common/navBar/NavBar";
export default {
  name: "My",
  components: {
    NavBar,
    MyWallet,
  },
  methods: {
    toCart() {
      this.$router.push("/cart");
    },
    toAddress() {
      this.$router.push("./address");
    },
  },
};
</script>

<style scoped lang="scss">
.my-content {
  padding-top: 50px;
  height: 100vh;
  background: #f4f4f4;
}
.rounded-circle {
  width: 75px;
  height: 75px;
  float: left;
}

.rounded-circle + div {
  height: 75px;
  font-size: 25px;
}

.my-logo {
  height: 4em;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 0.5em;
  background: white;
  margin: 0.3em;
}

#my-login,
#my-login + p {
  line-height: 75px;
  vertical-align: middle;
  margin-right: 0.5em;
  color: var(--color-tint);
}

#my-login {
  float: left;
}

.my-login-text {
  margin-left: 4em;
}

.my-img-text {
  font-size: 0.8em;
}

.my-img {
  height: 2rem;
  width: 2rem;
}

.my-feature-detail {
  text-align: center;
  width: 3rem;
}

.my-feature {
  justify-content: space-around;
  display: flex;
  margin: 0.5em;
  background-color: white;
  div {
    p {
      margin: 0;
    }
  }
}
</style>