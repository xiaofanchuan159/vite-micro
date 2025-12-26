// 测试路由参数获取的封装方法
import { useRouteQuery, getRouteQuery, isMicroApp } from '@/utils/routeQuery';

// 测试用例
const testCases = [
  {
    name: '测试普通URL',
    url: 'http://localhost:5174/contact?source=test&timestamp=1234567890&message=hello',
    expected: {
      source: 'test',
      timestamp: '1234567890',
      message: 'hello'
    }
  },
  {
    name: '测试复杂URL',
    url: 'istoa.com.con/micro/vite/198342mtroPathe=/omslbranchesManagementylorojectAprovaManagement/spltproiect&xald=353&aproveName=-中部',
    expected: {
      xald: '353',
      aproveName: '-中部'
    }
  }
];

// 运行测试
export const runTests = () => {
  console.log('开始测试路由参数获取的封装方法...');
  
  // 测试是否在微前端环境
  console.log('是否在微前端环境:', isMicroApp());
  
  // 测试静态方法
  testCases.forEach(testCase => {
    console.log(`\n测试用例: ${testCase.name}`);
    console.log('URL:', testCase.url);
    
    // 模拟URL环境
    const originalHref = window.location.href;
    Object.defineProperty(window.location, 'href', {
      writable: true,
      value: testCase.url
    });
    
    try {
      const params = getRouteQuery();
      console.log('获取到的参数:', params);
      
      // 验证结果
      let passed = true;
      Object.keys(testCase.expected).forEach(key => {
        if (params[key] !== testCase.expected[key]) {
          console.error(`参数 ${key} 不匹配: 期望 ${testCase.expected[key]}, 实际 ${params[key]}`);
          passed = false;
        }
      });
      
      if (passed) {
        console.log('✅ 测试通过');
      } else {
        console.log('❌ 测试失败');
      }
    } catch (error) {
      console.error('测试出错:', error);
    } finally {
      // 恢复原始URL
      Object.defineProperty(window.location, 'href', {
        writable: true,
        value: originalHref
      });
    }
  });
  
  console.log('\n测试完成');
};

// 导出测试方法，可以在浏览器控制台中调用
export { runTests as testRouteQuery };