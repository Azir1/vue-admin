<template>
  <div>
    <!--  面包屑-->
    <Header />
    <!-- 远程搜索框 -->
    <Search />
    <!-- 表格 -->
    <Table />
    <!-- 分页器 -->
    <Page />
  </div>
</template>
<script>
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import Page from "./Page";
export default {
  components: {
    Header,
    Table,
    Search,
    Page
  }
};
</script>

<style scoped>
</style>