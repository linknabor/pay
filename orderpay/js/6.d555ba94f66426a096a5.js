webpackJsonp([6],{"62zs":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("Au9i"),r=e("fxnj"),o=e.n(r),n=void 0,i={data:function(){return{orders:[],groupsNum:1,shows:!0,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}],bgImage:this.common.GetImages("1")}},created:function(){n=this},mounted:function(){n.grouprders()},methods:{grouprders:function(){n.receiveData.getData(n,"orders/status/group/"+n.currentStatus,"res",function(){n.res.success?(n.shows=!1,n.orders=n.res.result,"ALL"==n.currentStatus&&(n.groupsNum=n.res.result.length)):n.orders=[]})},toggleDropdown:function(){n.dropdownCollapsed=!n.dropdownCollapsed},selectDropdown:function(s){n.selectedName!=n.dropdowns[s].name&&(n.selectedName=n.dropdowns[s].name,n.currentStatus=n.dropdowns[s].value,n.grouprders(n.currentStatus))},gotoDetail:function(s){n.$router.push({path:"/orderdetail",query:{orderId:s}})},orderPay:function(s){n.receiveData.getData(n,"requestPay/"+s.id,"n",function(){n.n.success?(o.a.config({debug:!1,appId:n.n.result.appId,timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,signature:n.n.result.signature,jsApiList:["chooseWXPay"]}),o.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(t){n.notifyPaySuccess(s.id),s.status=1}})):alert("支付请求失败，请稍后重试！")},function(){})},notifyPaySuccess:function(s){n.receiveData.getData(n,"/notifyPayed/"+s,"n",function(){})},orderCancel:function(s){a.MessageBox.confirm("确定要取消订单?").then(function(t){"confirm"==t&&n.receiveData.getData(n,"/cancelOrder/"+s.id,"res",function(){n.res.success?(s.status=2,s.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(s){})},orderConfirm:function(s){a.MessageBox.confirm("确定要已收货？").then(function(t){"confirm"==t&&n.receiveData.getData(n,"/signOrder/"+s.id,"res",function(){n.res.success?(s.status=6,s.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(s){})},checkLogisics:function(s){var t=escape(s.logisticName);n.$router.push({path:"/logistice",query:{com:t,nu:s.logisticNo}})},comment:function(s){n.$router.push({path:"/comment",query:{orderId:s.id}})}}},c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"group"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[e("div",{staticClass:"bounce1"}),s._v(" "),e("div",{staticClass:"bounce2"}),s._v(" "),e("div",{staticClass:"bounce3"})]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"black_overlay",attrs:{id:"fade"}}),s._v(" "),e("div",{attrs:{id:"phoneErro"}}),s._v(" "),e("div",{staticClass:"dropdown-wrap",class:{dropdownCollapsed:s.dropdownCollapsed},staticStyle:{margin:"0 15px"},on:{click:s.toggleDropdown}},[e("span",[s._v(s._s(s.selectedName))]),s._v(" "),s.dropdownCollapsed?e("div",{staticClass:"dropdown"},s._l(s.dropdowns,function(t,a){return e("div",{staticClass:"dropdown-item",class:{noborder:s.dropdowns.length-1==a},on:{click:function(t){s.selectDropdown(a)}}},[s._v(s._s(t.name))])})):s._e()]),s._v(" "),0==s.groupsNum?e("div",{staticClass:"rels"},[e("img",{staticClass:"center-bgs",attrs:{src:s.bgImage,alt:""}})]):s._e(),s._v(" "),s._l(s.orders,function(t){return e("div",{key:t.id,staticClass:"order-item p15 divider"},[e("div",{on:{click:function(e){s.gotoDetail(t.id)}}},[e("img",{staticClass:"fl order-picture",attrs:{src:t.productThumbPic}}),s._v(" "),e("div",{staticClass:"ov pb10 fs14"},[s._v(s._s(t.productName))]),s._v(" "),e("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[e("span",{staticClass:"fl fs13"},[s._v("¥"+s._s(t.price))]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.orderStatus,expression:"order.orderStatus ==2"}],staticClass:"fr fs13 highlight"},[s._v("已取消支付")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&1==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==1"}],staticClass:"fr fs13 highlight"},[s._v("团购进行中")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&2==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==2"}],staticClass:"fr fs13 highlight"},[s._v("团购成功")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2!=t.orderStatus&&3==t.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==3"}],staticClass:"fr fs13 highlight"},[s._v("团购失败")])])]),s._v(" "),e("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"30px","margin-bottom":"2px"}}),s._v(" "),e("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[s._v("\n        "+s._s(t.createDateStr)+"\n        "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){s.orderPay(t)}}},[s._v("付款")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"order.status==0"}],staticClass:"btn-plain fr",on:{click:function(e){s.orderCancel(t)}}},[s._v("取消订单")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==t.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(e){s.orderConfirm(t)}}},[s._v("确认收货")]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:5==t.status,expression:"order.status==5"}],staticClass:"btn-plain fr",on:{click:function(e){s.checkLogisics(t)}}},[s._v("查看物流")]),s._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:6==t.status&&1!=t.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}]},[e("div",{staticClass:"lite-btn fs13 fr",on:{click:function(e){s.comment(t)}}},[s._v("评价商品")])])])])})],2)},staticRenderFns:[]};var u=e("VU/8")(i,c,!1,function(s){e("dTHv")},"data-v-4d635c28",null);t.default=u.exports},dTHv:function(s,t){}});