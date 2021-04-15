<template>
  <div class="top-control shadow-sm">
    <div
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in tabText"
      @click="changeActive(index)"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TopControl",
  props: {
    tabText: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {},
  methods: {
    changeActive(index) {
      this.currentIndex = index;
      this.$emit("listenChildActive", this.currentIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-control {
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin: 0.625rem;
  margin-bottom: 0;
  div {
    font-size: 20px;
    margin: 0.25em 0;
    line-height: 36px;
    font-family: "Courier New", Courier, monospace;
    text-align: center;
  }
  .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-tint);
  }
}
</style>