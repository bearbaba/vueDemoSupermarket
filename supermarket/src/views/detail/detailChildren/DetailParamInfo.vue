<template>
  <div v-if="Object.keys(paramInfo).length">
    <div class="bg-white rounded shadow-sm detail-param-table">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <td scope="col" colspan="2" class="param-table-title">
              {{ paramInfo.info.key }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paramInfo.info.set" :key="index">
            <th scope="row" class="param-table-th">{{ item.key }}</th>
            <td class="param-table-td td-text">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="detail-param-table bg-white rounded shadow-sm">
      <table class="table">
        <thead class="thead-light">
          <tr class="param-table-title">
            <td
              scope="col"
              :colspan="tables.length * 2"
              class="param-table-title"
            >
              {{ paramInfo.rule.key }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tables" :key="index">
            <th scope="row" class="param-table-th">
              {{ item[0] }}
            </th>
            <td
              class="param-table-td"
              v-for="(num, index) in item.slice(1)"
              :key="index"
            >
              {{ num }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      tables: [],
    };
  },
  watch: {
    paramInfo() {
      this.tables = this.paramInfo.rule.tables[0];
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.detail-param-table {
  margin: 0.5em;
  padding: 0.5em;
}
.param-table-th {
  vertical-align: middle;
  width: 4em;
}

.param-table-td {
  vertical-align: middle;
}

.param-table-title {
  text-align: center;
  font-weight: bold;
}

.td-text {
  color: var(--color-high-text);
}

td,
th {
  padding: 0.7em 0;
}
</style>
