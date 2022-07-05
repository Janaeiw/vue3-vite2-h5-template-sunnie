<template>
  <nut-navbar :left-show="false" :title="$t('tabbar.member')" />
  <div class="avatar-wrap">
    <nut-avatar class="avatar" size="large" icon="../../../public/touxiang.jpg" />
    <div class="member-detail">
      <p class="nickname"
        >Janaeiw
        <!-- <nut-button shape="square" size="small" type="default" @click="goLogin"> 去登录
        </nut-button> -->
      </p>
      <p class="info"> 个人其他信息，后续补充.... </p>
    </div>
  </div>
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
  // import { useUserStore } from '@/store/modules/user';
  // import { useRouter } from 'vue-router';

  // const router = useRouter();
  // const userStore = useUserStore();
  // const getUserInfo = computed(() => {
  //   const { name = '' } = userStore.getUserInfo || {};
  //   return name;
  // });
  // const goLogin = () => {
  //   router.push('/login');
  // };
</script>

<style lang="scss">
  .avatar-wrap {
    display: flex;
    margin: 30px;
    height: 50px;
    align-items: center;

    .member-detail {
      margin-left: 20px;

      .nickname {
        font-size: 16px;
        font-weight: bold;
      }

      .info {
      }
    }
  }
</style>
