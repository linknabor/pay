webpackJsonp([15],{RS6l:function(t,e){},nbMf:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Au9i"),a=s("fxnj"),r=s.n(a),o=void 0,i={data:function(){return{groupsNum:1,dropdownCollapsed:!1,selectedName:"订单筛选",currentStatus:"ALL",orders:[],dropdowns:[{name:"全部订单",value:"ALL"},{name:"待付款订单",value:"NEEDPAY"},{name:"已支付",value:"PAYED"},{name:"配货中",value:"PREPARE"},{name:"待收货订单",value:"NEEDRECEIVE"},{name:"已取消订单",value:"CANCELD"}],bgImage:this.common.GetImages("1")}},created:function(){o=this},mounted:function(){this.firstALL()},components:{},methods:{initSession4Test:function(){o.receiveData.getData(o,"/initSession4Test/62","Data",function(){})},firstALL:function(){o.receiveData.getData(o,"orders/status/"+o.currentStatus,"res",function(){o.res.success?(o.orders=o.res.result,"ALL"==o.currentStatus&&(o.groupsNum=o.res.result.length)):o.orders=[]})},toggleDropdown:function(){o.dropdownCollapsed=!o.dropdownCollapsed},selectDropdown:function(t){o.selectedName=o.dropdowns[t].name,o.currentStatus=o.dropdowns[t].value,o.firstALL(o.currentStatus)},gotoDetail:function(t){o.$router.push({path:"/orderdetail",query:{orderId:t}})},orderCancel:function(t){n.MessageBox.confirm("确定要取消订单?").then(function(e){"confirm"==e&&o.receiveData.getData(o,"/cancelOrder/"+t.id,"res",function(){o.res.success?(t.status=2,t.statusStr="已取消",alert("订单已取消")):alert("支付取消失败，请稍后重试！")})}).catch(function(t){})},orderPay:function(t){o.receiveData.getData(o,"requestPay/"+t.id,"n",function(){o.n.success||alert(o.n.message),r.a.config({debug:!1,appId:o.n.result.appId,timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,signature:o.n.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({timestamp:o.n.result.timestamp,nonceStr:o.n.result.nonceStr,package:o.n.result.pkgStr,signType:o.n.result.signType,paySign:o.n.result.signature,success:function(e){o.notifyPaySuccess(),t.status=1}})},function(){})},notifyPaySuccess:function(t){o.receiveData.getData(o,"/notifyPayed/"+t.id,"n",function(){})},orderConfirm:function(t){n.MessageBox.confirm("确定要已收货?").then(function(e){"confirm"==e&&o.receiveData.getData(o,"/signOrder/"+t.id,"n",function(){o.n.success?(t.status=6,t.statusStr="已签收"):alert("支付签收失败，请稍后重试！")})}).catch(function(t){})},comment:function(t){o.$router.push({path:"/comment",query:{orderId:t.id}})}},computed:{}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orders"},[s("div",{staticClass:"dropdown-wrap",class:{dropdownCollapsed:t.dropdownCollapsed},staticStyle:{margin:"0 15px"},on:{click:t.toggleDropdown}},[s("span",[t._v(t._s(t.selectedName))]),t._v(" "),t.dropdownCollapsed?s("div",{staticClass:"dropdown"},t._l(t.dropdowns,function(e,n){return s("div",{staticClass:"dropdown-item",class:{noborder:t.dropdowns.length-1==n},on:{click:function(e){t.selectDropdown(n)}}},[t._v(t._s(e.name))])})):t._e()]),t._v(" "),0==t.groupsNum?s("div",{staticClass:"rels"},[s("img",{staticClass:"center-bgs",attrs:{src:t.bgImage,alt:""}})]):t._e(),t._v(" "),t._l(t.orders,function(e){return s("div",{staticClass:"order-item p15 divider",on:{click:function(s){t.gotoDetail(e.id)}}},[s("img",{staticClass:"fl order-picture",attrs:{src:e.productThumbPic}}),t._v(" "),s("div",{staticClass:"ov pb10 fs14"},[t._v(t._s(e.productName))]),t._v(" "),s("div",{staticClass:"ov pb10",staticStyle:{color:"#3b3937"}},[s("span",{staticClass:"fl fs13"},[t._v("\n        ¥"+t._s(e.price)+"\n        ")]),t._v(" "),s("span",{staticClass:"fr fs13 highlight"},[t._v(t._s(e.statusStr))])]),t._v(" "),s("div",{staticClass:"lite-divider",staticStyle:{"margin-top":"25px"}}),t._v(" "),s("div",{staticClass:"pt15 fs13",staticStyle:{color:"#a6937c","line-height":"23px"}},[t._v("\n      "+t._s(e.createDateStr)+"\n      "),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"order.status==0"}],staticClass:"lite-btn fs13 fr",on:{click:function(s){s.stopPropagation(),t.orderPay(e)}}},[t._v("付款")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.status,expression:"order.status==0"}],staticClass:"btn-plain fr",on:{click:function(s){s.stopPropagation(),t.orderCancel(e)}}},[t._v("取消订单")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:5==e.status,expression:"order.status==5"}],staticClass:"lite-btn fs13 fr",on:{click:function(s){s.stopPropagation(),t.orderConfirm(e)}}},[t._v("确认收货")]),t._v(" "),s("span",[s("div",{directives:[{name:"show",rawName:"v-show",value:6==e.status&&1!=e.pingjiaStatus,expression:"order.status==6&&order.pingjiaStatus!=1"}],staticClass:"lite-btn fs13 fr",on:{click:function(s){s.stopPropagation(),t.comment(e)}}},[t._v("评价商品")])])])])})],2)},staticRenderFns:[]};var u=s("VU/8")(i,c,!1,function(t){s("RS6l")},"data-v-27368816",null);e.default=u.exports}});