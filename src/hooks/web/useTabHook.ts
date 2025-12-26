import router from '@/router';

// 自定义query参数不要与url、microName重名
export const useTabHook = (menuPath: string, realParams: { query?: any } = {}) => {
  // 事件类型就是addTabs，然后把真实想要跳转的路由放到message里
  if (window.__POWERED_BY_WUJIE__) {
    window.$wujie.bus.$emit('onMicroMessage-' + import.meta.env.VITE_APP_SHORT_NAME, {
      type: 'addSameTab',
      message: {
        // 这是主应用微前端详情展示页，注意这个path固定
        path: '/micro/vite/detail',
        query: {
          // 这个是微应用示例要跳转的路由，必填
          microPath: menuPath,
          // 微应用部署地址，注意：默认不写url参数，主应用从菜单管理中自动获取，传递会覆盖主应用参数，以传递的为主
          // url: 'http://localhost:5175',
          // 微应用名称，注意：默认不写microName参数，主应用从菜单管理中自动获取，传递会覆盖主应用参数，以传递的为主
          // microName: import.meta.env.VITE_APP_SHORT_NAME,
          ...realParams.query
        }
      },
    });
  } else {
    router.push({
      path: menuPath,
      query: realParams.query || {},
    });
  }
};