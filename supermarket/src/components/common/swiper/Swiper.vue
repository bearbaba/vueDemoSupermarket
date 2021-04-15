<template>
  <div>
    <Swiper class="container" :options="swiperOption" ref="mySwiper">
      <SwiperSlide v-for="(slide, index) in imgData" :key="index">
        <img :src="slide" @load="imageLoad" />
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgData: [],
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
  props: {
    swiperImgs: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  directives: {
    swiper: directive,
  },
  watch: {
    swiperImgs(val) {
      this.imgData = this.imgData.concat(val);
    },
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
.container img {
  width: 100%;
}

.container {
  max-height: 350px;
}

.swiper-container {
  --swiper-pagination-color: var(--color-high-text);
}
</style>