import axios from 'axios';

axios.interceptors.request.use((config) => {
  // 根据config，判断是否需要参数转换
  config.timestamp = new Date().getTime()
  // 是否需要开启loading
  if (config.showLoading) {
    // 开启loading
  }
  return config;
})

axios.interceptors.response.use((response) => {
  const ret = {
    msg: '',
    code: 0,
    data: {},
  }
  if (response.code != 0) {
    // 报错
  }
  if (response.code === 3000) {
    // 登出
  }
  return ret;
});

axios.defaults.transformRequest = [
  function (data) {
    var ret = [];
    for (var it in data) {
      ret.push(encodeURIComponent(it) + "=" + encodeURIComponent(data[it]));
    }
    return ret.join("&");
  }
]


export default axios;
