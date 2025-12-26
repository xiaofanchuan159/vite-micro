import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

// 检测是否在微前端环境
const isMicroApp = () => {
  // 检查window.__POWERED_BY_QIANKUN__或其他微前端框架标识
  // 或者检查当前应用是否在iframe中运行
  // 这里可以根据实际使用的微前端框架进行调整
  return window.__POWERED_BY_QIANKUN__ || 
         window.parent !== window || 
         window.location.pathname.includes('/micro/');
};

// 从URL中解析查询参数
const getQueryParamsFromUrl = (url) => {
  const params = {};
  try {
    // 处理复杂URL，例如: istoa.com.con/micro/vite/198342mtroPathe=/omslbranchesManagementylorojectAprovaManagement/spltproiect&xald=353&aproveName=-中部
    // 这种URL中，查询参数可能不在标准的?后面，而是直接跟在路径后面
    
    // 首先尝试标准方式获取查询参数
    let queryString = url.split('?')[1];
    
    // 如果没有找到标准的查询参数，尝试从最后一个/后面获取
    if (!queryString) {
      const lastSlashIndex = url.lastIndexOf('/');
      if (lastSlashIndex !== -1) {
        const pathAndQuery = url.substring(lastSlashIndex + 1);
        const queryStartIndex = pathAndQuery.indexOf('&');
        if (queryStartIndex !== -1) {
          queryString = pathAndQuery.substring(queryStartIndex + 1);
        }
      }
    }
    
    if (!queryString) return params;
    
    // 解析查询参数
    const pairs = queryString.split('&');
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    });
  } catch (error) {
    console.error('解析URL查询参数失败:', error);
  }
  
  return params;
};

// 获取路由查询参数的封装方法
export const useRouteQuery = () => {
  const route = useRoute();
  
  // 获取完整的查询参数
  const query = computed(() => {
    // 首先尝试从vue-router的route.query获取
    if (route.query && Object.keys(route.query).length > 0) {
      return route.query;
    }
    
    // 如果在微前端环境中且route.query为空，则从URL中获取
    if (isMicroApp()) {
      const urlParams = getQueryParamsFromUrl(window.location.href);
      return urlParams;
    }
    
    // 默认返回route.query
    return route.query;
  });
  
  // 获取单个查询参数
  const getQueryParam = (key, defaultValue = null) => {
    return query.value[key] || defaultValue;
  };
  
  return {
    query,
    getQueryParam
  };
};

// 直接获取查询参数的静态方法（可以在非Vue组件中使用）
export const getRouteQuery = () => {
  // 从URL中解析查询参数
  return getQueryParamsFromUrl(window.location.href);
};

// 检测是否在微前端环境的导出方法
export { isMicroApp };