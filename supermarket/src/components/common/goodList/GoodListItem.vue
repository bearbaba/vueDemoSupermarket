<template>
  <div class="good-list-item shadow-sm" @click="imgClick">
    <img :src="showImage" @load="imageLoad" />
    <div class="message">
      <p class="text-truncate">{{ item.title }}</p>
      <div>
        <p>{{ item.price }}￥</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5777"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-star"
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          ></polygon>
        </svg>
        <p>{{ showSale }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    item: Object,
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    imgClick() {
      if (this.item.iid) {
        this.$router.push("/detail/" + this.item.iid);
      } else {
        return;
      }
    },
  },
  computed: {
    showImage() {
      return this.item.image || this.item.show.img;
    },
    showSale() {
      return this.item.itemSale || this.item.sale;
    },
  },
};
</script>

<style scoped>
.good-list-item {
  border-radius: 0.2em;
  width: 49%;
  text-align: center;
  background-color: white;
  margin-top: 0.5em;
  height: auto;
}

img {
  margin-top: 0.5em;
  width: 90%;
}

.message {
  width: 80%;
  font-size: 12px;
  margin: auto;
}

.message p {
  margin-top: 0.2em;
  margin-bottom: 0.5em;
}

.text-truncate + div > p,
svg {
  float: left;
}

svg {
  margin-top: 0.35em;
  margin-left: 0.4em;
}
</style>