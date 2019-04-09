var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/pay/';
var html =/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/':
			'https://www.e-shequ.com/shijiazhuang/weixin/';
var sjz = "shijiazhuang";
window.config = {	
	//请求头公共部分
		baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
	  			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/wechat/hexie/wechat/':
	  			'https://www.e-shequ.com/shijiazhuang/wechat/hexie/wechat/',
		//个人中心
		person_index:{			
			url1: html+sjz+'orderpay.html',//商品订单 团购订单 服务订单			
			url2: html+'repair/index.html',//报修单			
			url3: html+'wuye/index.html?#/myHouse',//绑定房屋 我是业主
		},
		person_footer:{			
			url1: html+'wuye/index.html',//底部导航 物业
		},
		person_register:{
			// 注册
			url1: html+'person/index.html',	
		},
		repair_orderdetail:{
			url1: pay+sjz+'orderpay.html',	
		},
		repair_success:{
			url1: html+'wuye/index.html',
		},
		//商品订单板块
		orderpay_commentxiu:{
			url1: html+'repair/index.html',
		},
		orderpay_homeorderdetail:{
			url1: html+'person/index.html',
		},
		wuye_index:{
			url1:'https://w.url.cn/s/AtroAQY',
		},
		wuye_footer:{
			url1: html+'person/index.html',//底部导航
		},
		wuye_pay:{
			url1: pay+sjz+'wuyepay.html'//支付跳转
		},
		wuye_house:{
			html: /127|test/.test(location.origin)?'test.e-shequ.com':
  				  /uat/.test(location.origin)?'uat.e-shequ.com':
  				  'www.e-shequ.com'       //提示框网址
		},
		wuye_suggest:{
			url1: html+'wuye/index.html'//业主意见提交成功跳转
		},
		wuye_zhifu:{
			url1:html+'wuye/index.html?#/paymentquery'
		}
};


// export default config