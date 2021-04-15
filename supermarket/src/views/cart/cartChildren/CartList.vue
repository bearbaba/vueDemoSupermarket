<template>
  <div v-if="goodsList.length">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-swipe-cell
        v-for="(item, index) in goodsList"
        :key="index"
        class="list-cell"
      >
        <div class="bg-white rounded shadow-sm border list-card">
          <div class="list-button">
            <van-checkbox checked-color="#ff8198" :name="item.index"
              >选择</van-checkbox
            >
          </div>
          <van-card
            class="list-card-item rounded shadow-sm border"
            :num="item.count"
            :price="item.realPrice"
            :title="item.title"
            :thumb="item.image"
          />
        </div>
        <template #right class="right">
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="removeItem(item.index)"
          />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CartList",
  data() {
    return {
      goodsList: [],
      result: [],
      checked: true,
    };
  },
  props: {
    goodsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    },
    checkTrueLength(){
      return this.$store.getters.checkTrueLength;
    }
  },
  watch: {
    goodsData() {
      this.$nextTick(() => {
        this.goodsList = this.goodsData;
      });
    },
    result(val, oldVal) {
      console.log("oldval", oldVal);

      if (val.length > oldVal.length) {
        let array = [];
        for (let i = 0; i < val.length; i++) {
          if (val[i] in oldVal) {
            continue;
          } else {
            array.push(val[i]);
          }
        }

        console.log(array);
        this.$store.dispatch("aChangeTrue", array);
      }

      if (val.length < oldVal.length) {
        let array = [];
        for (let i = 0; i < oldVal.length; i++) {
          if (oldVal[i] in val) {
            continue;
          } else {
            array.push(oldVal[i]);
          }
        }
        this.$store.dispatch("aChangeFalse", array);
      }

      if (this.result.length == val.length) {
        this.$bus.$emit("selectCheck");
      }
      console.log("val", val);
    },
    cartLength(val) {
      if (this.result.length < val) {
        this.$bus.$emit("selectCheckFalse");
      }
    },
    checkTrueLength(val){
      if(val < this.$store.getters.cartLength){
        this.$bus.$emit("selectCheckFalse")
      }
    }
  },
  methods: {
    removeItem(currentIndex) {
      console.log(currentIndex);
      this.result.splice(this.result.indexOf(currentIndex), 1);
      this.$store.state.cartList.map((item) => {
        if (currentIndex == item.index) {
          this.$store.commit("removeItem");
        }
      });
    },

    toggle() {
      console.log(this.result);
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleFalse() {
      console.log(this.result);
      this.$refs.checkboxGroup.toggleAll(false);
    },
  },
  created() {
    this.$bus.$on("checkAll", this.toggle);
    this.$bus.$on("checkAllFalse", this.toggleFalse);
  },
};
</script>

<style scoped lang="scss">
.delete-button {
  height: 100%;
}

.list-card-item {
  padding: 0.5em;
  z-index: 1;
  margin-top: 0;
}

.list-button {
  position: relative;
  float: left;
  z-index: 2;
  margin: auto;
  top: calc(52px - 16px);
}
</style>