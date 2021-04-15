<template>
  <div id="home">
    <NavBar>
      <div slot="center">首页</div>
    </NavBar>

    <TabControl
      :tabText="titleList"
      @listenChildActive="listenChildActive"
      v-show="showControl"
      ref="tabControl1"
      class="tab-control-head shadow-sm"
    ></TabControl>

    <BackTop
      class="back-top"
      @click.native="backTop"
      v-show="!isShowBackTop"
    ></BackTop>

    <Scroller
      id="scroller"
      ref="scroller"
      @scroll="showBackTop"
      @pullEnd="pullEnd"
    >
      <Swiper
        id="swiper"
        :swiperImgs="swiperImgs"
        @swiperImageLoad="imageLoad"
      ></Swiper>

      <HomeRecommend :recommendImgs="recommendImgs"></HomeRecommend>

      <HomeFeature></HomeFeature>
      <TabControl
        :tabText="titleList"
        @listenChildActive="listenChildActive"
        class="tab-control-in"
        ref="tabControl2"
      ></TabControl>
      <GoodList :goods="homeGoodsList"></GoodList>
    </Scroller>
  </div>
</template>

<script>
//NavBar是头部导航
import NavBar from "../../components/common/navBar/NavBar";

//轮播图的组件
import Swiper from "../../components/common/swiper/Swiper";

//推荐信息的组件
import HomeRecommend from "./homeChildren/HomeRecommend";

// 介绍图组件
import HomeFeature from "./homeChildren/HomeFeature";

// 商品控制栏
import TabControl from "./../../components/common/tabControl/TabControl";

//商品内容
import GoodList from "../../components/common/goodList/GoodList";

// BetterScroll
import Scroller from "./../../components/common/scroll/Scroller";

// 请求轮播图的图片
import { getHomeMultidataData, getHomeGoods } from "../../network/home";

import BackTop from "../../components/common/backTop/BackTop";

import { debounce } from "./../../components/common/utils/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    HomeRecommend,
    HomeFeature,
    GoodList,
    Scroller,
    TabControl,
    BackTop,
  },
  data() {
    return {
      swiperImgs: [],
      recommendImgs: [],
      titleList: ["流行", "新款", "精品"],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
      },
      tabs: ["pop", "new", "sell"],
      homeGoodsList: [],
      showControl: false,

      isShowBackTop: true,
      currentIndex: 0,

      tabControlOffsetTop: 0,
      saveY: 0,
    };
  },
  methods: {
    getHomeMultidataData() {
      getHomeMultidataData().then((res) => {
        for (let i of res.banner.list) {
          this.swiperImgs.push(i.image);
        }
        this.recommendImgs = res.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
        this.$refs.scroller.finishPullUp();
      });
    },
    listenChildActive(index) {
      this.currentIndex = index;
      this.homeGoodsList = this.goods[this.tabs[index]].list;
      console.log("home", index);
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop(event) {
      this.$refs.scroller.scrollTo(0, 0);
      event.preventDefault();
    },

    showBackTop(pos) {
      if (-pos.y > 1000) {
        this.isShowBackTop = false;
      } else {
        this.isShowBackTop = true;
      }
      this.showControl = -pos.y > this.$refs.tabControl2.$el.offsetTop;
    },

    pullEnd() {
      this.getHomeGoods(this.tabs[this.currentIndex]);
    },

    imageLoad() {
      console.log("home refresh");
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  created() {
    this.getHomeMultidataData();
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
    this.homeGoodsList = this.goods[this.tabs[0]].list;
  },
  mounted() {
    const refresh = debounce(this.$refs.scroller.refresh, 100);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
    refresh();
    this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  },

  activated() {
    this.$refs.scroller.scrollTo(0, this.saveY, 0);
    this.$refs.scroller.refresh();
  },

  deactivated() {
    this.saveY = this.$refs.scroller.scroll.y;
  },
};
</script>

<style scoped lang="scss">
.back-top {
  position: fixed;
  z-index: 22;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 5em;
  right: 2em;
  border-radius: 50%;
  background: linear-gradient(45deg, #dadada, #ffffff);
}

#home {
  background-color: #f4f4f4;
  margin-bottom: 49px;
}

.tab-control-head {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 23;
  background-color: white;
  margin: 0 !important;
}

.wrapper {
  top: 44px;
}
</style>