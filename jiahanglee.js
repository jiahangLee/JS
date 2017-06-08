//浏览器测试
function displayDate(){

	// document.getElementById("demo").innerHTML = Date();
	//测试浏览器
	var userAgent = navigator.userAgent;
	if(userAgent.indexOf('MSIE')>= 0){
		alert('你正在使用的是IE浏览器'+userAgent);
	}
	else if(userAgent.indexOf('Firefox')>= 0){
		alert('你正在使用的是火狐浏览器'+userAgent);
	}
	else if(userAgent.indexOf('Chrome')>= 0){
		alert('谷歌浏览器'+userAgent);

	}
	else
		alert("其他浏览器"+userAgent)
}
// 注意问题：indexOf大小写问题
// 	     navigator.userAgent为代理描述
//          <meta	charset"utf-8">