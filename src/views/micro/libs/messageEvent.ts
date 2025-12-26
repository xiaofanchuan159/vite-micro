import { usemicroState } from './microStore';
import router from '/@/router';

let firstRouter = true;

// 处理来自主应用的消息
export const handleMicroMessage = (data: any) => {
  const microStore = usemicroState();
  
  if (data.type == 'router' && data.message.path) {
    // 解决微应用不跳转到对应页面的问题
    if (!firstRouter) {
      router.push({path:data.message.path as string,query:data.message.queryObject});
      microStore.setNextPath({});
    } else {
      firstRouter = false;
      // microStore.setNextPath(data.message.path);
      microStore.setNextPath({path:data.message.path,query:data.message.queryObject});
    }
  }
};