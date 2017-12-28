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