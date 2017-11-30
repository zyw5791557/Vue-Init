import Vue from 'vue';

export let setLocalStorage = function(key, value, exp) {
	var curTime = new Date().getTime();
	curTime = exp + curTime;
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
};

export let getLocalStorage = function(key) {
	var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    if (new Date().getTime() - dataObj.time > 0) {
        // console.log('信息已过期');
        new Vue().$message('登录信息已过期');
    }else{
        return dataObj.data;
    }
}

