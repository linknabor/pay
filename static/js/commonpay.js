function getRefererParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
function getWebRoot(){
	var r = window.location+"";
    var index = r.indexOf("/pay/");
    return r.substr(0,index+1);
}
function addcss(cssUrl){
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement("link");
	link.setAttribute('rel','stylesheet');
	link.href = cssUrl;
    head.appendChild(link); 
}

function addscript(jsUrl){
	var head = document.getElementsByTagName('head')[0];
	var script= document.createElement("script");
    script.type = "text/javascript"; 
    script.src=jsUrl; 
    head.appendChild(script); 
}