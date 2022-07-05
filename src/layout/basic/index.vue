<template>
  <div class="main-page">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <nut-tabbar v-model:visible="active" unactive-color="#364636" active-color="#1989fa" @tab-switch="tabSwitch" bottom>
    <nut-tabbar-item :tab-title="$t('tabbar.home')" icon="home" />
    <nut-tabbar-item :tab-title="$t('tabbar.pkgInfo')" icon="category" />
    <nut-tabbar-item :tab-title="$t('tabbar.demo')" icon="star" />
    <nut-tabbar-item :tab-title="$t('tabbar.member')" icon="my" />
  </nut-tabbar>
</template>

<script lang="ts" setup>
  // import { useRouter } from 'vue-router';

  const router = useRouter();
  const active = ref(0);

  const tabSwitch = (_item: any, index: any) => {
    switch (index) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/pkgInfo');
        break;
      case 2:
        router.push('/demo');
        break;
      case 3:
        router.push('/member');
        break;
    }
  };
</script>

<style scoped lang="scss">
  .main-page {
    height: calc(100vh - 50px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
