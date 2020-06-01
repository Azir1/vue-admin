<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <span class="el-icon-tickets" @click="changeMenuStatus"></span>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <h2>芊芊教育后台管理系统</h2>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple info">
        <span>
          <span>欢迎您</span>
          <el-link type="success" class="user">哈哈哈</el-link>
        </span>
        <el-link type="danger" class="log">退出</el-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// 直接将vuex中的方法映射过来

import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeMenuStatus"])
  }
};
</script>

<style lang="scss" scoped>
.txt {
  cursor: none;
}
.info {
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-around;
}
.log {
  text-decoration: none;
}
.user {
  margin-left: 10px;
  text-decoration: none;
}
.el-icon-tickets {
  font-size: 24px;
  color: #fff;
  cursor: pointer;
}
h2 {
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.row-bg.el-row.is-justify-space-between.el-row--flex {
  height: 60px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #3481c5;
}
// .bg-purple {
//   // background: #3481c5;
// }
// .bg-purple-light {
//   // background: #3481c5;
// }
.grid-content.bg-purple-light {
  line-height: 40px;
}
.grid-content.bg-purple {
  line-height: 50px;
  text-align: left;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #3481c5;
}
</style>