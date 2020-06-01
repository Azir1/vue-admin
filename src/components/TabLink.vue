// 连接切换和插槽

<template>
  <div>
    <fieldset>
      <legend>
        <slot></slot>
      </legend>
      <a :href="to" @click.prevent="jump">
        {{to===link?'✉':''}}
        <slot></slot>
      </a>
      <div>{{to}}</div>
    </fieldset>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
  </div>
</template>

<script>
import { bus } from "@/bus/index.js";
export default {
  data() {
    return {
      link: "https://www.jd.com"
    };
  },
  props: ["to"],
  methods: {
    jump() {
      bus.$emit("handler", this.to);
    }
  },
  created() {
    bus.$on("handler", payload => {
      this.link = payload;
    });
  }
};
</script>

<style scoped>
</style>