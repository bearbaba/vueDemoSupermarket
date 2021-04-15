<template>
  <div
    v-if="Object.keys(shopInfoData).length"
    class="detail-shop bg-white rounded shadow-sm"
  >
    <div class="shop-logo">
      <img
        :src="shopInfoData.shopLogo"
        alt=""
        class="rounded float-left border shop-logo-img"
      />
      <p class="dianming">{{ shopInfoData.name }}</p>
    </div>

    <div class="shop-evaluation">
      <div class="left">
      <div class="left-xiaoliang">
        <p class="jiage">
          {{
            shopInfoData.cSells > 10000
              ? Number(shopInfoData.cSells / 10000)
                  .toFixed(1)
                  .toString() + "万"
              : shopInfoData.cSells
          }}
        </p>
        <p class="xiaoliang">总销量</p>
      </div>

      <div class="right-baobei">
        <p class="shuliang">{{ shopInfoData.cGoods }}</p>
        <p class="baobei">全部宝贝</p>
      </div>
      </div>

      <div  class="right">
      <!-- -->
        <div  v-for="(item, index) in shopInfoData.score" :key="index" class="item-border">
          <p class="key123">{{ item.name }}</p>

          <p  :class="{ scoreActive: item.isBetter }" class="score-normal">
            {{ item.score }}
          </p>
          <p 
            :class="{
              scoreBgActive: item.isBetter,
            }"
            class="score-bg-normal"
          >
            {{ item.isBetter ? "高" : "低" }}
          </p>

        </div>
        <!---->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {
      shopInfoData: {},
    };
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    shop(val) {
      this.$nextTick(() => {
        this.shopInfoData = val;
      });
    },
  },
  computed: {
    betterMessage(item) {
      if (item.isBetter) {
        return "高";
      } else {
        return "低";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.detail-shop {
  margin: 0.5em;
  padding: 0.5em;
}
.shop-logo-img {
  width: 3em;
  height: 3em;
}

.score-normal {
  color: rgb(124, 224, 77);
}

.score-bg-normal {
  display: inline;
  background: rgb(124, 224, 77);
  color: white;
}

.scoreActive {
  color: var(--color-high-text) !important;
}

.scoreBgActive {
  background-color: var(--color-high-text);
}


.dianming{
  line-height: 3em;
}
.shop-evaluation{
  display: flex;
  margin-top: 10px;
  width: 100%;
}
.left{
  flex: 1;
  display: flex;
  align-items: center;
  border-right: 1px solid #e4e1e1;
}
.right{
  flex: 1;
}
.left-xiaoliang{
  flex: 1; 
    text-align: center;
}
.right-baobei{
  flex: 1;
    text-align: center;
}
.item-border{
  display: flex;
  
}
.key123{
  flex: 3;
  text-align: center;
}
.score-normal{
  flex: 2;
  text-align: center;
}
.score-bg-normal{
  flex: 1;
  text-align: center;
}
</style>
