<template>
  <div class="address-edit">
    <AddressNav>
      <div>地址编辑</div>
    </AddressNav>
    <div class="content">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import AddressNav from "./AddressNav";
import { Toast } from "vant";
export default {
  name: "AddressEdit",
  components: {
    AddressNav,
  },
  data() {
    return {
      areaList: ["安徽", "浙江"],
      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
.address-edit {
  background: white;
  position: fixed;
  z-index: 600;
  height: 100%;
  width: 100%;
}
.content {
  padding-top: 50px;
}
</style>