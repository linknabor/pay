webpackJsonp([5],{"+Sju":function(t,s){},BJ4H:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=void 0,e={data:function(){return{bill:{},orderId:this.$route.query.oId}},created:function(){i=this},mounted:function(){i.query(),i.notifyPayed()},components:{},methods:{query:function(){i.receiveData.postData(i,"/yunxiyi/bill/"+i.orderId,null,"res",function(){i.res.success?i.bill=i.res.result:alert("订单数据获取失败，请稍后重试！")})},notifyPayed:function(){i.receiveData.postData(i,"/yunxiyi/notifyPayed/"+i.orderId,null,"res",function(){})},gotoBack:function(){location.href=i.basePageUrl+"home/index.html"}},computed:{}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"suc"},[t._m(0),t._v(" "),a("div",{staticClass:"bg_ffffff bb_gray items-area"},t._l(t.bill.items,function(s){return a("div",{staticClass:"orderitem"},[a("p",{staticClass:"fl w60"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"fl w20 fontr"},[t._v("￥"+t._s(s.price))]),t._v(" "),a("p",{staticClass:"fl w20 fontr"},[t._v("×"+t._s(s.count))])])}),0),t._v(" "),a("div",{staticClass:"bg_ffffff desc_area"},[a("div",{staticClass:"grade"},[a("span",{staticClass:"desc_title"},[t._v("联系地址:")]),t._v(" "),a("span",{staticClass:"desc_info"},[t._v(" "+t._s(t.bill.address))])]),t._v(" "),a("div",{staticClass:"grade"},[a("span",{staticClass:"desc_title"},[t._v("预约时间:")]),t._v(" "),a("span",{staticClass:"desc_info"},[t._v(" "+t._s(t.bill.serviceDateStr))])]),t._v(" "),a("div",{staticClass:"grade"},[a("span",{staticClass:"desc_title"},[t._v("联系人:")]),t._v(" "),a("span",{staticClass:"desc_info"},[t._v(" "+t._s(t.bill.receiverName))])]),t._v(" "),a("div",{staticClass:"grade"},[a("span",{staticClass:"desc_title"},[t._v("手机号：")]),t._v(" "),a("span",{staticClass:"desc_info"},[t._v(" "+t._s(t.bill.tel))])])]),t._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}},[t._v(" ")]),t._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"btn",on:{click:t.gotoBack}},[t._v("返回")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title_area"},[s("div",{staticClass:"brand-tip-1"},[this._v("支付成功")]),this._v(" "),s("div",{staticClass:"brand-tip-2"},[this._v("请等待小哥上门取件")])])}]};var n=a("VU/8")(e,c,!1,function(t){a("+Sju")},"data-v-e3c14ad0",null);s.default=n.exports}});
//# sourceMappingURL=5.6ef08535d77687ced13a.js.map?v=1574062565714