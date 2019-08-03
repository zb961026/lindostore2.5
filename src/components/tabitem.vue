<template>
  <!---->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="商品参数" name="first">商品参数</el-tab-pane>
      <el-tab-pane label="商品配置" name="second">商品配置</el-tab-pane>
      <el-tab-pane label="商品性能" name="thrid">商品性能</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.el-tabs {
  width: 1220px;
  margin: 0 auto;
  height: 100%;
}
.el-tabs__item {
  width: 26rem;
}
</style>