var url=/127|test/.test(location.origin)?'https://test.e-shequ.com':
    /uat/.test(location.origin)?'https://uat.e-shequ.cn':
    'https://www.e-shequ.cn';
var name='/guizhou';
var namepay='/pay';

window.config = {
    newname:'贵州幸福家园',
    URL:url+name+'/wechat/hexie/wechat/',
    footer:{
        wuye:url+name+'/weixin/wuye/index.html',
        person:url+name+'/weixin/person/index.html',
        home:url+name+'/weixin/home/index.html',
        group:url+name+'/weixin/group/onsalesindex.html'
    },
   
     //wuye支付成功
     wuye_zhifu:{
        url:url+name+'/weixin/wuye/index.html?state=123#/payEnquiry'
    },
    rgrops_url :{
        url:url+namepay+'/guizhourgroups.html?state=123'
    },



}
