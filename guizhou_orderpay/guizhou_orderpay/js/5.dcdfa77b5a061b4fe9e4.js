webpackJsonp([5],{"62zs":function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Au9i"),r=t("fxnj"),o=t.n(r),n=void 0,i={data:function(){return{orders:[],groupsNum:0,shows:!0,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}]}},created:function(){n=this},mounted:function(){var s=location.href.split("#")[0];n.receiveData.wxconfig(n,o.a,["chooseWXPay"],s),n.grouprders()},methods:{grouprders:function(){n.receiveData.getData(n,"orders/status/group/"+n.currentStatus,"res",function(){n.res.success?(n.shows=!1,n.orders=n.res.result,"ALL"==n.currentStatus&&(n.groupsNum=n.res.result.length)):n.orders=[]})},toggleDropdown:function(){n.dropdownCollapsed=!n.dropdownCollapsed},selectDropdown:function(s){n.selectedName!=n.dropdowns[s].name&&(n.selectedName=n.dropdowns[s].name,n.currentStatus=n.dropdowns[s].value,n.grouprders(n.currentStatus))},gotoDetail:function(s){n.$router.push({path:"/orderdetail",query:{orderId:s}})},orderPay:function(s){n.receiveData.getData(n,"requestPay/"+s.id,"n",function(){n.n.success||alert(n.n.message),o.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(e){n.notifyPaySuccess(s.id),s.status=1}})})},notifyPaySuccess:function(s){n.receiveData.getData(n,"/notifyPayed/"+s,"n",function(){})},orderCancel:function(s){a.MessageBox.confirm("确定要取消订单?").then(function(e){"confirm"==e&&n.receiveData.getData(n,"/cancelOrder/"+s.id,"res",function(){n.res.success?(s.status=2,s.statusStr="已取消",alert("订单已取消")):alert(""==n.res.message?"支付取消失败，请稍后重试！":n.res.message)})}).catch(function(s){})},orderConfirm:function(s){a.MessageBox.confirm("确定要已收货?").then(function(e){"confirm"==e&&n.receiveData.getData(n,"/signOrder/"+s.id,"n",function(){n.n.success?(s.status=6,s.statusStr="已签收"):alert(""==n.n.message?"支付签收失败，请稍后重试！！":n.n.message)})}).catch(function(s){})},checkLogisics:function(s){var e=escape(s.logisticName);n.$router.push({path:"/logistice",query:{com:e,nu:s.logisticNo}})},comment:function(s){n.$router.push({path:"/comment",query:{orderId:s.id}})}}},c={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"group",class:{groupc:0==s.groupsNum}},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[t("div",{staticClass:"bounce1"}),s._v(" "),t("div",{staticClass:"bounce2"}),s._v(" "),t("div",{staticClass:"bounce3"})]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.shows,expression:"shows"}],staticClass:"black_overlay",attrs:{id:"fade"}}),s._v(" "),t("div",{attrs:{id:"phoneErro"}}),s._v(" "),t("div",{staticClass:"dropdown-wrap ",class:{dropdownCollapsed:s.dropdownCollapsed},staticStyle:{margin:"0 15px"},on:{click:s.toggleDropdown}},[t("span",[s._v(s._s(s.selectedName))]),s._v(" "),s.dropdownCollapsed?t("div",{staticClass:"dropdown"},s._l(s.dropdowns,function(e,a){return t("div",{staticClass:"dropdown-item",class:{noborder:s.dropdowns.length-1==a},on:{click:function(e){s.selectDropdown(a)}}},[s._v(s._s(e.name))])}),0):s._e()]),s._v(" "),0==s.groupsNum?t("div",{staticClass:"avatar-wrap rel ov"},[t("div",{staticClass:"filter-img avatar-wrap center-bg"})]):s._e(),s._v(" "),s._l(s.orders,function(e){return t("div",{key:e.id,staticClass:"order-item p15 divider"},[t("div",{on:{click:function(t){s.gotoDetail(e.id)}}},[t("img",{staticClass:"fl order-picture",attrs:{src:e.productThumbPic}}),s._v(" "),t("div",{staticClass:"ov pb10 fs14"},[s._v(s._s(e.productName))]),s._v(" "),t("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[t("span",{staticClass:"fl fs13"},[s._v(" ¥"+s._s(e.price)+" ")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2==e.orderStatus,expression:"order.orderStatus ==2"}],staticClass:"fr fs13 highlight"},[s._v("已取消支付")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2!=e.orderStatus&&1==e.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==1"}],staticClass:"fr fs13 highlight"},[s._v("团购进行中")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2!=e.orderStatus&&2==e.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==2"}],staticClass:"fr fs13 highlight"},[s._v("团购成功")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2!=e.orderStatus&&3==e.groupStatus,expression:"order.orderStatus !=2 && order.groupStatus==3"}],staticClass:"fr fs13 highlight"},[s._v("团购失败")])])]),s._v(" "),t("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"30px","margin-bottom":"2px"}}),s._v(" "),t("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[s._v("\n                        "+s._s(e.createDateStr)+"\n                        \n                    "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(t){s.orderPay(e)}}},[s._v("付款")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"order.status==0"}],staticClass:"btn-plain fr",on:{click:function(t){s.orderCancel(e)}}},[s._v("取消订单")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:5==e.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(t){s.orderConfirm(e)}}},[s._v("确认收货")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:5==e.status,expression:"order.status==5"}],staticClass:"btn-plain fr",on:{click:function(t){s.checkLogisics(e)}}},[s._v("查看物流")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:6==e.status&&1!=e.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}]},[t("div",{staticClass:"lite-btn fs13 fr",on:{click:function(t){s.comment(e)}}},[s._v("\n                            评价商品")])])])])})],2)},staticRenderFns:[]};var u=t("VU/8")(i,c,!1,function(s){t("YzBk")},"data-v-33b69413",null);e.default=u.exports},YzBk:function(s,e){}});