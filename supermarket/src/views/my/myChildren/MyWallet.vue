<template>
  <div class="my-wallet rounded">
    <div class="wallet-value">我的钱包 ￥{{ wallet }}</div>
    <div class="wallet-red">我的红包 ￥{{ redEnvelope }}</div>
  </div>
</template>

<script>
export default {
  name: "MyWallet",
  props: {
    wallet: {
      type: Number,
      default: 0,
    },
    redEnvelope: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.my-wallet {

  background: var(--color-tint);
  margin: 0.5em;
  color: white;
  font-size: 14px;
  height: 6em;
  padding: 0.2em;
  .wallet-value,
  .wallet-red {
    padding: 0.5em;
  }
  .wallet-value {
    border-bottom: 1px solid white;
  }
}
</style>