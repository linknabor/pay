var common =/127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
			/test/.test(location.origin)?'https://uat.e-shequ.com/xsq/weixin/':
			'https://www.e-shequ.com/shijiazhuang/weixin/';
let config = {
	//请求头公共部分
	baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
  			/uat/.test(location.origin)?'https://uat.e-shequ.com/xsq/wechat/hexie/wechat/':
  			'https://www.e-shequ.com/shijiazhuang/wechat/hexie/wechat/',
  	//商品订单板块
	orderpay_commentxiu:{
		url1: common+'repair/index.html',
	},
	orderpay_homeorderdetail:{
		url1: common+'person/index.html',
	}
		
};


export default config