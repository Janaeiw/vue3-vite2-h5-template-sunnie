<!--
 * @Author: ZhongJunWei
 * @Date: 2022/07/05 14:04
 * @LastEditTime: 2022/07/05 15:02
 * @LastEditors: ZhongJunWei
 * @FilePath: \vue3-vite2-h5-template-sunnie\src\views\demo\index.vue
 * @Description: ''
-->
<template>
  <nut-navbar :left-show="false" :title="$t('tabbar.demo')" />
  <div class="layout-tabbar">
    <van-button type="primary" to="/home">首页</van-button>
    <van-button type="primary" to="/testList">测试列表</van-button>
    <van-button type="primary" to="/testComponent">测试自动导入component</van-button>
    <van-button type="primary" to="/testBtnAuth">测试按钮权限</van-button>
    <van-button type="primary" to="/testApi">测试Api代理调试</van-button>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
  .layout-tabbar {
    display: flex;
    flex-wrap: wrap;

    .van-button {
      margin: 10px;
    }
  }
</style>
