<template>
  <mdb-carousel :interval="8000" slide :items="items" indicators></mdb-carousel>
</template>

<script>
import { mdbCarousel } from "mdbvue";

export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
  },
  data() {
    return {
      srcs: config.data.banner.list,
      items: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
        },
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>