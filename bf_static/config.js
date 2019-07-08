var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/pay/':
		  'https://www.e-shequ.com/pay/';

var html= /127|test/.test(location.origin)?'https://test.e-shequ.com/baofang/weixin/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/baofang/weixin/':
		  'https://www.e-shequ.com/baofang/weixin/';
var bf = "bf";
window.config = {
		//请求头公共部分
		baseUrl:/127|test/.test(location.origin)?'https://test.e-shequ.com/baofang/wechat/hexie/wechat/':
  		/uat/.test(location.origin)?'https://uat.e-shequ.com/baofang/wechat/hexie/wechat/':
  		'https://www.e-shequ.com/baofang/wechat/hexie/wechat/',

		//商品订单板块
		orderpay_commentxiu:{
			url1: html+'repair/index.html',
		},

		orderpay_homeorderdetail:{
			url1: html+'home/index.html',
		},

		wuye_zhifu:{
			url1:html+'wuye/index.html?#/payEnquiry'
		},
		//团购
		rgrops_url :{
			url:pay+'/bfrgroups.html?v=20160229'
		},
		gotoGroupDetail:pay+'/bfrgroups.html?v=20160229#/rgroupinvite?',//团购
		
};


// export default config;