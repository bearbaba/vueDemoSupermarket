<template>
  <div class="detail-recommend" v-if="recommend.length">
    <GoodList :goods="recommend"></GoodList>
  </div>
</template>

<script>
import GoodList from "../../../components/common/goodList/GoodList"
export default {
  name: "DetailRecommendInfo",
  components: {
    GoodList,
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      recommendData: [],
    };
  },
  watch: {
    recommend() {
      console.log(this.recommend);
    },
  },
  created() {
    this.$nextTick(() => {
      console.log(this.recommend);
    });
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>