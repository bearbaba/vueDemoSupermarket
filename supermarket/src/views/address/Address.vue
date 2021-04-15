<template>
  <div class="address">
    <AddressNav>
      <div>地址</div>
    </AddressNav>
    <div class="address-content">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import AddressNav from "./addressChildren/AddressNav";
export default {
  name: "Address",
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
          isDefault: false,
        },
      ],
      disabledList: [],
    };
  },
  components: {
    AddressNav,
  },
  methods: {
    onAdd() {
      this.$router.push("/address/addressEdit");
    },
  },
};
</script>

<style scoped lang="scss" >
.address {
  background: #f7f8fa;
  height: 100vh;
}

.address-content {
  padding-top: 50px;
}
</style>