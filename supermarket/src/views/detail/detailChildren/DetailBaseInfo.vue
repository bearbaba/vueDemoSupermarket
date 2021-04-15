<template>
  <div v-if="Object.keys(detailBaseData).length">
    <div class="detail-base-info bg-white rounded shadow-sm">
      <p class="detail-base-title">
        {{ goods.title }}
      </p>
      <div class="d-flex flex-row">
        <p class="detail-base-newprice">{{ goods.newPrice }}</p>
        <p class="detail-base-oldprice text-muted">{{ goods.oldPrice }}</p>
        <p
          class="detail-base-discount"
          :style="{ background: discountBgColor }"
        >
          {{ goods.discount }}
        </p>
      </div>

      <div class="columns d-flex justify-content-between">
        <p
          v-for="(item, index) in goods.columns"
          :key="index"
          class="text-black-50 detail-base-text"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div
      class="detail-base-info bg-white rounded shadow-sm d-flex justify-content-between"
    >
      <div
        v-for="index in goods.services.length - 2"
        :key="index"
        class="detail-base-services"
      >
        <img
          :src="goods.services[index].icon"
          class="base-services-icon"
          v-if="goods.services[index].icon"
        />
        <span class="base-service-name">{{ goods.services[index].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      detailBaseData: {},
      dicountBgColor: "",
    };
  },
  watch: {
    goods(val) {
      this.$nextTick(() => {
        this.detailBaseData = val;
        console.log("goods", this.detailBaseData);
        this.discountBgColor = this.detailBaseData.itemInfo.discountBgColor;
      });
    },
  },
};
</script>

<style scoped lang="scss">

.detail-base-info {
  margin: 0.5em;
  padding: 0.5em;
  
  p {
    margin-bottom: 0;
  }

  .detail-base-title {
    margin: auto;
    line-height: 1;
    font-weight: bold;
  }

  .d-flex {
    margin-top: 0.625rem;
    display: flex;
    align-items: center;

    .detail-base-newprice {
      color: var(--color-high-text);
      font-size: 20px;
    }
    .detail-base-oldprice {
      text-decoration: line-through;
      margin-left: 1em;
    }
    .detail-base-discount {
      color: white;
      border-radius: 0.1rem;
      font-weight: bold;
      font-size: 14px;
      margin-left: 0.2em;
      margin-bottom: 1em;
    }
    .columns {
      p {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
    }
  }

  .base-services-icon {
    width: 1em;
    height: 1em;
  }
}

.base-service-name {
  font-size: 14px;
}
</style>