var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/dhzj3';
var namepay='/pay';

window.config = {
    URL:url+name+'/wechat/hexie/wechat/',
    gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购详情
    footer:{
        home:url+name+'/weixin/home/index.html?v=20160229'
    },
    //物业支付完成
    payEnquiry:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry',
}
