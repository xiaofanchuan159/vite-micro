// 使用示例
// 在Vue组件中使用
import { useRouteQuery } from '@/utils/routeQuery';

export default {
  setup() {
    // 获取所有查询参数
    const { query } = useRouteQuery();
    
    // 获取单个查询参数
    const { getQueryParam } = useRouteQuery();
    const source = getQueryParam('source', '默认值');
    
    return {
      query,
      source
    };
  }
}

// 在非Vue组件中使用
import { getRouteQuery, isMicroApp } from '@/utils/routeQuery';

// 获取所有查询参数
const allParams = getRouteQuery();

// 检查是否在微前端环境
if (isMicroApp()) {
  console.log('当前运行在微前端环境中');
}