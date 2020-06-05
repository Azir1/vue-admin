<template>
<div>

  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>学员项目管理</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 远程搜索框 -->
  <div>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="handleSelect"
  ></el-autocomplete>
  </div>
  
</template>
</div>
<script>
export default {};
</script>

<style scoped>
</style>