<template>
  <nut-navbar :left-show="false" :title="$t('tabbar.member')" />
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large" :icon="userStore.info.avatar" />
    <div class="member-detail">
      <p class="nickname">
        {{ userStore.info.author }}
        <nut-button v-if="!userStore.info.author" shape="square" size="small" type="default" @click="goLogin"> 去登录 </nut-button>
      </p>
      <p class="info"> 个人其他信息，后续补充.... </p>
    </div>
  </div>
  <p v-if="userStore.info.projectAddress" class="href">项目地址: {{ userStore.info.projectAddress }}</p>
  <nut-grid>
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
    <nut-grid-item icon="dongdong" text="文字" />
  </nut-grid>
</template>

<script lang="ts" setup>
  import { useUserStore } from '/@/store/modules/user';
  // import { useRouter } from 'vue-router';

  const router = useRouter();
  const userStore = useUserStore();
  const goLogin = () => {
    router.push('/login');
  };
</script>

<style lang="scss" scoped>
  .avatar-wrap {
    display: flex;
    margin: 20px;
    align-items: center;

    .member-detail {
      margin-left: 20px;

      .nickname {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  .href {
    margin: 20px;
    color: #1989fa;
  }
</style>
