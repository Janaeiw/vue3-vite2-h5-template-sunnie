<!--
 * @Author: ZhongJunWei
 * @Date: 2022/07/05 15:01
 * @LastEditTime: 2022/10/18 17:56
 * @LastEditors: Janaeiw
 * @FilePath: \vue3-vite2-h5-template-sunnie\src\views\demo\test\api.vue
 * @Description: ''
-->

<template>
  <div class="Container">
    <van-button type="primary" @click="handleLogin">登 录</van-button>
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
import { login } from '/@/api/index';
import { genUUID } from '/@/utils/uuid';

interface FormsType {
  account?: string;
  password?: string;
  type?: string;
}

const forms: FormsType = {
  account: 'frontend@cpapi.com',
  password: genUUID(8) + window.btoa('Password123'),
  type: 'PASSWORD',
};

const handleLogin = () => {
  const data = {
    ...forms,
  };
  login(data)
    .then((res: any) => {
      if (res) {
        Toast.success('登录成功');
      }
    })
    .catch((err: any) => {
      Toast.fail(err);
    });
};
</script>
<style scoped lang="scss">

</style>
