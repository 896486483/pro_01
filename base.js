// 基地址
axios.defaults.baseURL = 'http://www.itcbc.com:3006'

// 拦截器
axios.interceptors.request.use(config => {
    NProgress.start()
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    NProgress.done()
    return response;
}, error => {
    NProgress.done()
    return Promise.reject(error);
});