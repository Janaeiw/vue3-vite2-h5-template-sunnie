<template>
  <div class="Container">
    <van-button type="primary" v-auth:create="{ fn: handleBtn, params: true }">有权限</van-button>
    <br />
    <van-button type="primary" v-auth:noCreate="{ fn: handleBtn, params: true }">无权限</van-button>
    <br />
    <van-button type="primary" v-auth:noCreate,edit="{ fn: handleBtn, params: true }">有其中一个权限</van-button>
    <br />
    <van-button type="primary" v-auth:noCreate,noEdit="{ fn: handleBtn, params: true }">一个权限都没有</van-button>
    <br />
  </div>
</template>

<script setup lang="ts">
  import { Toast } from 'vant';

  const handleBtn = () => {
    Toast('你就是管理大大！');
  };
</script>
<style scoped lang="scss"></style>
