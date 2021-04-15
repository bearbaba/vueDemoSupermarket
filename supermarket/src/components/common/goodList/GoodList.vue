<template>
  <div class="d-flex flex-wrap good-list justify-content-between">
    <GoodListItem
      class=""
      v-for="(item, index) in goods"
      :key="index"
      :item="item"
    ></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodList",
  components: {
    GoodListItem,
  },
  props: {
    goods: Array,
  },
};
</script>

<style scoped>
.good-list {
  padding: 0 0.5em;
}
</style>