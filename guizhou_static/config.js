var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.com':
    'https://www.e-shequ.com';
var name='/guizhou';
var namepay='/guizhou/weixin';

window.config = {
    URL:url+name+'/wechat/hexie/wechat/',
    footer:{
        wuye:url+name+'/weixin/wuye/index.html?v=20162299',
        person:url+name+'/weixin/person/index.html?v=20160229',
        home:url+name+'/weixin/home/index.html?v=20160229'
    },
    //person
    gotoGroupDetail:url+name+'/weixin/group/rgroupinvite.html?',//团购详情
     //wuye支付成功
     wuye_zhifu:{
        url:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry'
    }


}
