webpackJsonp([8],{LVZS:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("mvHQ"),o=e.n(a),n=e("fxnj"),r=e.n(n),c=e("lbHh"),i=e.n(c),u=void 0,l={data:function(){return{address:{},cartlist:[],totalShipFee:0,totalPrice:0,totalAmount:0,Mask:!1,orderId:"",itemList:JSON.parse(window.localStorage.getItem("itemList")),couponNum:0,coupon:null,couponDesc:"不使用",coupons:[],couponid:this.$route.query.couponid,salePlanId:""}},created:function(){u=this},components:{},computed:{},mounted:function(){u.getaddr(),u.ordercheck()},methods:{getaddr:function(){u.receiveData.getData(u,"repair/project/1","res",function(){u.res.success?u.res.result.address&&(u.address=u.res.result.address):alert(null==u.res.message?"请稍后重试！":u.res.message)})},ordercheck:function(){var s={rderType:"3",payType:"2",itemList:u.itemList};u.receiveData.postData(u,"/order/check",s,"res",function(){u.res.success?(u.cartlist=u.res.result.orderItems,u.totalAmount=u.res.result.totalAmount,u.totalShipFee=u.res.result.shipFee,u.totalPrice=u.res.result.price,u.queryCoupon(),u.computeAmount()):alert(u.res.message)})},queryCoupon:function(){var s={salePlanType:"3",itemList:u.itemList};u.receiveData.postData(u,"/coupon/valid",s,"res",function(){u.res.success?null!=u.res.result&&(u.coupons=u.res.result,u.couponNum=u.coupons.length,u.computeAmount()):alert(u.res.message)})},computeAmount:function(){var s;if(void 0!=u.couponid)for(var t=0;t<u.coupons.length;t++)u.couponid==u.coupons[t].id&&(u.coupon=u.coupons[t]);void 0==u.couponid&&(u.coupon=u.coupons[0],u.couponid=u.coupon.id),null!=u.coupon&&(null==u.coupon.usageCondition||u.coupon.usageCondition>u.totalPrice?(alert("当前优惠券不可用"),u.coupon=null):u.couponDesc="-¥ "+u.coupon.amount),null==u.coupon?s=u.totalPrice:u.coupon.amount>0&&(s=u.totalPrice-u.coupon.amount),u.totalPrice=s>0?s.toFixed(2):"0.01"},showCoupons:function(){0!=u.coupons.length&&null!=u.coupons&&u.$router.push({path:"/coupon",name:"coupon",query:{type:"3",couponid:u.couponid}})},pay:function(){var s=i.a.get("sectId");if(""==s||"null"==s||0==s||null==s)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=u.basePageUrl+"wuye/index.html?"+u.common.getoriApp()+"#/myhouse",!1;u.Mask=!0;var t={serviceAddressId:u.address.id,payType:2,orderType:3,itemList:[]};null!=u.coupon&&(t.couponId=u.coupon.id);for(var e=0;e<u.cartlist.length;e++)t.itemList.push({ruleId:u.cartlist[e].ruleId,count:u.cartlist[e].count,orderType:u.cartlist[e].orderType,productId:u.cartlist[e].productId});u.receiveData.postData(u,"/createOrderFromCart",t,"res",function(){u.res.success?(u.orderId=u.res.result.id,u.requestPay()):(alert(u.res.message),u.Mask=!1)})},requestPay:function(){var s="/requestPay/"+u.orderId;u.receiveData.postData(u,s,{},"n",function(){u.n.success?(r.a.config({debug:!1,appId:u.n.result.appId,timestamp:u.n.result.timestamp,nonceStr:u.n.result.nonceStr,signature:u.n.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({timestamp:u.n.result.timestamp,nonceStr:u.n.result.nonceStr,package:u.n.result.pkgStr,signType:u.n.result.signType,paySign:u.n.result.signature,success:function(s){alert("下单成功！"),u.Mask=!1},fail:function(s){u.Mask=!1,console.log(o()(s))},cancel:function(s){alert("支付取消"),u.Mask=!1}})):(u.Mask=!1,alert(null==u.n.message?"下单失败，请稍后重试！":u.n.message))})}}},p={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"confirmation"},[e("div",{staticClass:"addr"},[e("div",{staticClass:"ov heig37 "},[e("span",{staticClass:"fl"},[e("i",{staticClass:"iconfont icon-loc-s"}),s._v("收货人："+s._s(s.address.receiveName))]),s._v(" "),e("span",{staticClass:"fr"},[s._v(s._s(s.address.tel))])]),s._v(" "),e("div",[e("span",{staticClass:"cor99"},[s._v("收货地址   "+s._s(s.address.province)+s._s(s.address.city)+s._s(s.address.county)+s._s(s.address.xiaoquName)+s._s(s.address.detailAddress))])])]),s._v(" "),s._l(s.cartlist,function(t,a){return e("div",{key:a,staticClass:"cart-contents"},[e("div",{staticStyle:{height:"2.23rem"}},[e("div",{staticClass:"ov"},[e("div",{staticClass:"fl "},[e("div",{staticClass:"cart-imgs"},[e("img",{attrs:{src:t.productThumbPic,alt:""}})])]),s._v(" "),e("div",{staticClass:"ov cart-content "},[e("span",{staticClass:"f14 marb4 namecolor"},[s._v(s._s(t.ruleName))]),e("br"),s._v(" "),e("span",{staticClass:"marb4 free color"},[s._v("满"+s._s(t.freeShippingNum)+"件免运费")]),e("br"),s._v(" "),e("del",{staticClass:"marb4"},[s._v("¥"+s._s(t.oriPrice))]),e("br"),s._v(" "),e("span",{staticClass:"color1"},[s._v("¥"+s._s(t.price))]),e("span"),s._v(" "),e("div",{staticClass:"choose-num"},[e("span",[s._v("×"+s._s(t.count))])])])])])])}),s._v(" "),e("div",{staticClass:"mian ov fs14"},[e("div",{staticClass:"p15"},[e("span",{staticClass:"fl "},[s._v("商品金额")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalAmount))])]),s._v(" "),e("div",{staticClass:"p15"},[e("span",{staticClass:"fl "},[s._v("运费")]),e("span",{staticClass:"fr"},[s._v("¥"+s._s(s.totalShipFee))])]),s._v(" "),e("div",{staticClass:"p15",on:{click:s.showCoupons}},[e("span",{staticClass:"fl"},[s._v("优惠券")]),s._v(" "),e("span",{staticClass:"fl baoyou_desc"},[s._v(s._s(s.couponNum)+"张可用")]),s._v(" "),e("span",{staticClass:"fr"},[s._v(s._s(s.couponDesc))])])]),s._v(" "),e("div",{staticStyle:{width:"100%",height:"70px"}}),s._v(" "),e("div",{staticClass:"foter fs14"},[e("div",{staticClass:"fl foter-left"},[e("span",[s._v("合计：")]),e("span",{staticClass:"color fs18"},[s._v("¥ "+s._s(s.totalPrice))])]),s._v(" "),e("div",{staticClass:"fr foter-right",on:{click:s.pay}},[e("span",[s._v("立即支付")])])]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.Mask,expression:"Mask"}],staticClass:"box-bg"})],2)])},staticRenderFns:[]};var d=e("VU/8")(l,p,!1,function(s){e("O2eZ")},"data-v-3e6bff29",null);t.default=d.exports},O2eZ:function(s,t){}});