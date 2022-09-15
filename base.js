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

// 3 设置 提示框
toastr.options = {
    closeButton: true, // 显示 关闭按钮
    // debug: false,
    positionClass: 'toast-top-center', // 提示框显示的位置
    // onclick: null,
    // showDuration: '300',
    // hideDuration: '1000',
    // timeOut: '5000',
    // extendedTimeOut: '1000',
    // showEasing: 'swing',
    // hideEasing: 'linear',
    // showMethod: 'fadeIn',
    // hideMethod: 'fadeOut',
};