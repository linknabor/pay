var pay = /127|test/.test(location.origin)?'https://test.e-shequ.com/pay/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
		  'https://www.e-shequ.com/pay/';

var html= /127|test/.test(location.origin)?'https://test.e-shequ.com/weixin/':
		  /uat/.test(location.origin)?'https://uat.e-shequ.com/weixin/':
          'https://www.e-shequ.com/weixin/';
          
var url = /127|test/.test(location.origin)?'https://test.e-shequ.com/wechat/hexie/wechat/':
          /uat/.test(location.origin)?'https://uat.e-shequ.com/wechat/hexie/wechat/':
          'https://www.e-shequ.com/wechat/hexie/wechat/';

window.config={
    //公共的请求地址
        //  baseurl:url+'/weixin',
         URL:url,
         // 集市首页
        group_onsales:{
            url:html+'/group/onsales.html?type=3'
        },
        //物业支付成功跳转详细
        wuye_detail:{
            url:html+"wuye/index.html?state=123#/paymentquery"
        },
        //维修评论跳转
        commonxiu:{
            url:html+'person/index.html?state=123#/ordersDetail?'
        }

}

// export default config