webpackJsonp([22],{jowg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("mvHQ"),n=r.n(a),s=r("fxnj"),i=r.n(s),o=r("Au9i"),u=void 0,c={data:function(){return{amount:"",paying:!1,repairOrderId:""}},created:function(){u=this},mounted:function(){u.repairOrderId=this.$route.query.orderId},components:{},methods:{getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?unescape(r[2]):null},storeMemo:function(e){u.amount=e.srcElement.innerText},onlinePay:function(){if(!u.repairOrderId||u.repairOrderId<=0)alert("页面错误，请到详情页重新发起支付！");else{var e=u.amount;""==e||isNaN(e)?alert("请输入正确金额"):u.onlinePays()}},onlinePays:function(){u.paying=!0;var e={orderId:u.repairOrderId,amount:u.amount};u.receiveData.postData(u,"/repair/pay",e,"res",function(){u.res.success?(i.a.config({debug:!1,appId:u.res.result.appId,timestamp:u.res.result.timestamp,nonceStr:u.res.result.nonceStr,signature:u.res.result.signature,jsApiList:["chooseWXPay"]}),i.a.chooseWXPay({timestamp:u.res.result.timestamp,nonceStr:u.res.result.nonceStr,package:u.res.result.pkgStr,signType:u.res.result.signType,paySign:u.res.result.signature,success:function(e){alert("维修单支付成功！"),u.$router.push({path:"/commentxiu",query:{ordersID:u.$route.query.orderId}})},fail:function(e){u.paying=!1,console.log(n()(e))},cancel:function(e){alert("支付取消"),u.paying=!1}})):(alert("支付请求失败，请稍后重试!"),u.paying=!1)})},offlinePay:function(){""!=u.amount?isNaN(u.amount)?alert("请填写正确的维修费用"):o.MessageBox.confirm("确定已现金支付给维修人员!").then(function(e){if("confirm"==e){var t={orderId:u.repairOrderId,amount:u.amount.trim()};u.receiveData.postData(u,"/repair/payOffline",t,"res",function(){u.res.success?(alert("维修单已确定"),u.$router.push({path:"/commentxiu",query:{ordersID:u.repairOrderId}})):alert("信息提交异常，请稍后重试！")})}}).catch(function(e){}):alert("请填写维修费用")}},computed:{}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"repay"},[r("div",{staticClass:"title-top"},[e._v("维修已完工，请支付费用")]),e._v(" "),r("div",{staticClass:"title-mid lite-divider"},[r("div",{staticClass:"title-mid-top"},[e._v("请输入维修费用（元）")]),e._v(" "),r("div",{staticClass:"title-mid-bottom",class:{hasvalue:""!=e.amount},attrs:{contenteditable:"true"},on:{blur:e.storeMemo}})]),e._v(" "),r("div",{staticClass:"main_btn"},[r("div",{staticClass:"btn",class:{useless:e.paying},on:{click:e.onlinePay}},[e._v("立即微信支付")]),e._v(" "),r("div",{staticClass:"btn",class:{useless:e.paying},on:{click:e.offlinePay}},[e._v("我已现金支付")])])])},staticRenderFns:[]};var d=r("VU/8")(c,l,!1,function(e){r("swGk")},"data-v-11998b56",null);t.default=d.exports},swGk:function(e,t){}});