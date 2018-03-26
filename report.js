$(document).ready(function(){
	// 全局js：上报用户信息，以及访问数据到打点服务器（用户ip在nginx中获取）
	$.get("http://localhost:8888/dig",
	{
		"time":gettime(),
		"url":geturl(),
		"refer":getrefer(),
		"ua":getuser_agent()
	});
});

// 获取客户端时间
function gettime() {
	var nowDate = new Date();
	return nowDate.toLocaleString();
}

// 获取当前请求的url
function geturl() {
	return window.location.href;
}

// 获取当前请求的上一级的url（如果存在）
function getrefer() {
	return document.referrer;
}

// 获取客户端类型
function getuser_agent() {
	return navigator.userAgent;
}