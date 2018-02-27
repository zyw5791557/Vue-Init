import axios from 'axios';
export default{
	install(Vue,options)
	{
		Vue.prototype.getApi = function (api,...arg) {
			const api_port = {
				// 登录
				login: '/api/login',
				// 注册
				register: '/api/register'
			}
			let params = {};
			params.url = api_port[api];
			for ( let key in arg[0]) {
				params[key] = arg[0][key];
			};
			return axios(params);
		}
	}
}

// axios request interceptor
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});
 
// axios response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});