<template>
  <ul class="nav nav-pills nav-fill mainTabBar">
    <slot></slot>
  </ul>
</template>
<script>
export default {};
</script>

<style lang="css" scoped>
.mainTabBar {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding-top: -1px;
  border-top: 1px solid var(--color-tint);
  border-radius: 3px;
  z-index: 590;
  background: white;
}
</style>