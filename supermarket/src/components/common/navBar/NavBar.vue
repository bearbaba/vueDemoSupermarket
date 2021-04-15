<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav-bar {
  background: var(--color-high-text);
  height: 44px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 12;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 15px 0 rgba(0, 0, 0, 0.12);
  .center {
    text-align: center;
    color: white;
    height: 100%;
    div {
      line-height: 40px;
      font-size: 20px;
    }
  }
}
</style>