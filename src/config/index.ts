// 若为ip+端口形式测试  则仅需修改下方配置中的ip为您自己部署的服务器ip即可
export const IM_WS_URL = "ws://localhost:8080/api";
export const IM_Online_Ws_URL = "ws://www.xuchengyu1212.cloud:31010/api"

export const AXIOS_TIMEOUT = 60000;
export const getIMWsUrl = () => (localStorage.getItem("IMWsUrl") ? localStorage.getItem("IMWsUrl")! : IM_WS_URL);