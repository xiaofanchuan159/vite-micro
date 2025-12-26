import { defineStore } from 'pinia';

interface messageState {
  // 消息内容
  message: any;
  // 消息类型
  type: string;
}

interface routerObject {
  // 消息内容
  path: string;
  // 消息类型
  query: any;
}

interface microState extends messageState {
  // 记录当前存活的app名称
  activeApp: string;
  // 记录激活app后需要跳转的路由
  nextPath: routerObject;
  path: number;
  appList: string[];
  // 保存route-change接收到的data.message信息
  routeChangeData: any;
}

export const usemicroState = defineStore({
  id: 'micro-state',
  state: (): microState => ({
    // user info
    message: null,
    // token info
    type: '',
    activeApp: '',
    // 记录激活app后需要跳转的路由
    nextPath: {path:'',query:{}},
    // 保存所有激活过的app
    appList: [],
    path: 0,
    // 保存route-change接收到的data.message信息
    routeChangeData: null,
  }),
  getters: {
    getMessage(): any {
      return this.message;
    },
    getType(): string {
      return this.type;
    },
    getActiveApp(): string {
      return this.activeApp;
    },
    getNextPath(): any {
      return this.nextPath;
    },
    getAppList(): string[] {
      return this.appList;
    },
    getPath(): number {
      return this.path;
    },
    getRouteChangeData(): any {
      return this.routeChangeData;
    },
  },
  actions: {
    setmicroState(info: messageState) {
      this.message = info.message;
      this.type = info.type;
    },
    resetmicroState() {
      this.message = null;
      this.type = '';
    },
    setActiveApp(app: string) {
      this.activeApp = app;
    },
    setNextPath(data: any) {
      this.nextPath = data;
    },
    setPath() {
      this.path += 1;
    },
    setAppList(app: string) {
      this.appList.push(app);
    },
    clearApp() {
      this.appList = [];
    },
    setRouteChangeData(data: any) {
      this.routeChangeData = data;
    },
    clearRouteChangeData() {
      this.routeChangeData = null;
    },
  },
});

// Need to be used outside the setup
export function usemicroStateWithOut() {
  return usemicroState();
}