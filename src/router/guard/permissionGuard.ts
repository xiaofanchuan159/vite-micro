import { usemicroState } from '/@/views/micro/libs/microStore';

// 修改路由守卫，携带query参数
export const setupRouterGuard = (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    const microStore = usemicroState();
    
    // 修改getNextPath函数位置，添加query
    if (window.__POWERED_BY_WUJIE__ && microStore.getNextPath) {
      next({ path: microStore.getNextPath.path, query: microStore.getNextPath.query, replace: true });
    } else {
      next();
    }
  });
};