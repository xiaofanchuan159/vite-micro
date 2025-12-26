// utils/enhanced-route.js
import { useRoute as originalUseRoute } from 'vue-router';

// 判断 Wujie 微前端环境
const isWujie = () => typeof window !== 'undefined' && window.__POWERED_BY_WUJIE__;

// 手动解析 URL 参数
const parseUrlParams = () => {
  const url = new URL(window.location.href);
  return Object.fromEntries(url.searchParams.entries());
};

// 增强型路由钩子
export const useRoute = () => {
  const originalRoute = originalUseRoute();
  
  // 创建增强型路由对象
  const enhancedRoute = {
    ...originalRoute,
    // 智能查询参数获取
    get query() {
      // Wujie 环境下且原始 query 为空时回退到 URL 解析
      if (isWujie() && Object.keys(originalRoute.query).length === 0) {
        return parseUrlParams();
      }
      return originalRoute.query;
    },
    // 保留原始 query 访问方式
    get rawQuery() {
      return originalRoute.query;
    },
    // 显式参数获取方法
    getParams: (useFallback = false) => {
      return useFallback ? parseUrlParams() : originalRoute.query;
    }
  };

  return enhancedRoute;
};
