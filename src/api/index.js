import axios from 'axios';
export default{
	install(Vue,options)
	{
		Vue.prototype.getApi = function (api,method,data) {
			const api_port = {
				// 登录
				login: '/api/login',
				// 注册
				register: '/api/register'
			}
			return axios({
				method: method,
				url: api_port[api],
				data: data,
			});
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