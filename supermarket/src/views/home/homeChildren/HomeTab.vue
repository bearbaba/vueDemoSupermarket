<template>
    <TabControl :titleList="titleList" @listenChild="listenChildClick"></TabControl>
</template>

<script>
import TabControl from "../../../components/common/tabControl/TabControl"
export default {
  name: "HomeTab",
  components: {
    TabControl
  },
  props: {
    titleList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      active:0 
    }
  },
  methods: {
    listenChildClick(data){
      this.active = data
    }
  },
  watch: {
    active(){
      this.$emit("listenChildActive", this.active)
    }
  }
}
</script>

<style>

</style>