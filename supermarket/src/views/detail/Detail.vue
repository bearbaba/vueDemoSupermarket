<template>
  <div class="detail">
    <DetailNavBar @listenIndex="listenIndex" class="detail-nav-bar" ref="nav">
    </DetailNavBar>

    <BackTop
      class="back-top"
      @click.native="backTop"
      v-show="!isShowBackTop"
    ></BackTop>

    <Scroller class="detail-scroll" ref="scroller" @scroll="detailPosition">
      <Swiper :swiperImgs="swiperImgs" id="detail-swiper-img"></Swiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shopData"></DetailShopInfo>
      <DetailGoods :goodList="detailInfo" @imageLoad="imgLoad"></DetailGoods>
      <DetailParamInfo :paramInfo="paramInfo" ref="param"></DetailParamInfo>
      <DetailCommentInfo
        ref="comment"
        :detailCommentInfo="detailCommentInfo"
      ></DetailCommentInfo>
      <DetailRecommendInfo
        ref="recommend"
        :recommend="recommend"
      ></DetailRecommendInfo>
    </Scroller>
    <DetailButtomBar @addToCart="addToCart"></DetailButtomBar>
  </div>
</template>

<script>
import Scroller from "./../../components/common/scroll/Scroller";
import DetailNavBar from "./detailChildren/DetailNavBar";
import {
  getDetailData,
  Goods,
  Shop,
  getRecommendData,
} from "./../../network/detail";
import Swiper from "../../components/common/swiper/Swiper";

import DetailBaseInfo from "./detailChildren/DetailBaseInfo";
import DetailShopInfo from "./detailChildren/DetailShopInfo";
import DetailGoods from "./detailChildren/DetailGoods";
import DetailParamInfo from "./detailChildren/DetailParamInfo";
import DetailCommentInfo from "./detailChildren/DetailCommentInfo";
import DetailRecommendInfo from "./detailChildren/DetailRecommendInfo";
import DetailButtomBar from "./detailChildren/DetailButtomBar";

import BackTop from "./../../components/common/backTop/BackTop";

import { debounce } from "./../../components/common/utils/utils";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Swiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroller,
    DetailGoods,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailButtomBar,
    BackTop,
  },
  data() {
    return {
      iid: null,
      detailData: null,
      swiperImgs: [],
      goods: {},
      shopData: {},
      detailInfo: {},
      paramInfo: {},
      detailCommentInfo: {},
      recommend: [],
      themeTopYs: [],
      isShowBackTop: true,
    };
  },
  created() {
    this.iid = this.$route.params.id;
    getDetailData(this.iid)
      .then((res) => {
        this.detailData = res;
        return this.detailData;
      })
      .then((res) => {
        this.swiperImgs = res.itemInfo.topImages;
        this.goods = new Goods(
          res.itemInfo,
          res.columns,
          res.shopInfo.services
        );
        console.log(this.goods);
        this.shopData = new Shop(res.shopInfo).shopInfo;
        console.log("shopData", this.shopData);

        this.detailInfo = res.detailInfo;
        this.paramInfo = res.itemParams;
      });
    getRecommendData().then((res) => {
      this.recommend = res.data.list;
    });
  },
  mounted() {
    this.$bus.$on("detailImageLoad", this.imgLoad);
    this.$bus.$on("itemImageLoad", this.imgLoad);
  },

  destroyed() {
    this.$bus.$off("detailImageLoad", this.imgLoad);
    this.$bus.$off("itemImageLoad", this.imgLoad);
  },

  methods: {
    imgLoad() {
      let newRefresh = debounce(this.$refs.scroller.refresh, 100);
      newRefresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },
    listenIndex(index) {
      this.$nextTick(() => {
        this.$refs.scroller.scrollTo(0, -this.themeTopYs[index], 200);
      });
    },

    detailPosition(pos) {
      this.showBackTop(-pos.y);

      let y = -pos.y + 44;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (i < length - 1 &&
            y > this.themeTopYs[i] &&
            y < this.themeTopYs[i + 1]) ||
          (i === length - 1 && y > this.themeTopYs[i])
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
    },

    backTop(event) {
      this.$refs.scroller.scrollTo(0, 0);
      event.preventDefault();
    },

    showBackTop(pos) {
      if (pos > 1000) {
        this.isShowBackTop = false;
      } else {
        this.isShowBackTop = true;
      }
    },

    addToCart() {
      console.log(this.goods)
      const product = {};
      product.image = this.swiperImgs[0];
      product.title = this.goods.itemInfo.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid
      product.realPrice = this.goods.itemInfo.lowNowPrice

      this.$store.dispatch("addCart", product)

    },
  },
};
</script>

<style scoped lang="scss">
.detail-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
}
#detail-swiper-img {
  margin-top: var(--margin-top);
  img {
    height: 50%;
  }
}

.detail-scroll {
  background: #fff;
  padding-bottom: 0.1em;
}

.back-top {
  position: fixed;
  z-index: 22;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 5em;
  right: 2em;
  border-radius: 50%;
  background: linear-gradient(45deg, #ebe8e8, #ffffff);
}
</style>