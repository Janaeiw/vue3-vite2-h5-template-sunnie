const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('/@/layout/basic/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: '',
          keepAlive: true,
        },
      },
      {
        path: 'pkgInfo',
        component: () => import('../views/pkgInfo/index.vue'),
        meta: {
          title: '',
          keepAlive: true,
        },
      },
      {
        path: 'demo',
        component: () => import('/@/views/demo/index.vue'),
        meta: {
          title: '',
          keepAlive: true,
        },
      },
      {
        path: 'member',
        component: () => import('/@/views/member/index.vue'),
        meta: {
          title: '',
          keepAlive: true,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
  {
    name: 'testList',
    path: '/testList',
    component: () => import('/@/views/demo/test/list.vue'),
    meta: {
      title: '测试列表',
      keepAlive: true,
    },
  },
  {
    name: 'testComponent',
    path: '/testComponent',
    component: () => import('/@/views/demo/test/component.vue'),
    meta: {
      title: '测试全局组件',
      keepAlive: true,
    },
  },
  {
    name: 'testBtnAuth',
    path: '/testBtnAuth',
    component: () => import('/@/views/demo/test/btnAuth.vue'),
    meta: {
      title: '测试按钮权限',
      keepAlive: true,
    },
  },
  {
    name: 'testApi',
    path: '/testApi',
    component: () => import('/@/views/demo/test/api.vue'),
    meta: {
      title: '测试Api代理调试',
      keepAlive: true,
    },
  },
];

export default routes;
