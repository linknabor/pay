webpackJsonp([1],{"+YQv":function(e,t,s){e.exports=s.p+"guizhou_rgroups/img/logo.b56374a.jpg"},CizL:function(e,t,s){e.exports=s.p+"guizhou_rgroups/img/coupon_chai.162191a.png"},f79n:function(e,t,s){e.exports=s.p+"guizhou_rgroups/img/hexie_ewm.cf1ab7c.png"},"h+MD":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("+YQv"),i=s.n(a),o=s("qI6z"),n=s.n(o),c=s("fxnj"),r=s.n(c),u=void 0,l={data:function(){return{load:!0,seedStr:this.$route.query.o,seed:{},coupon:{},coupons:[],fetched:!1,couponMsg:"",covered:!0,avatar:i.a,seedImg:n.a}},created:function(){u=this},mounted:function(){u.fetchSeed();var e=location.href.split("#")[0];u.receiveData.wxconfig(u,r.a,["onMenuShareTimeline","onMenuShareAppMessage"],e)},methods:{initSession4Test:function(){u.receiveData.getData(u,"/initSession4Test/105","Data",function(){})},fetchSeed:function(){u.common.invokeApi("GET","couponSeed/"+u.seedStr,null,null,function(e){if(null!=e.result){if(u.seed=e.result.seed,u.coupons=e.result.coupons,u.load=!1,u.seed.canUse)null!=e.result.coupon?(u.coupon=e.result.coupon,u.fetched=!0,u.covered=!1):(u.fetched=!1,u.covered=!0);else{var t={};t.title=e.result.seed.title,t.empty=!0,t.amount="",u.couponMsg="已抢完",u.coupon=t,u.fetched=!0,u.covered=!1}null==u.seed.userImgUrl&&(u.seed.userImgUrl=u.avatar),null!=u.seed.seedImg&&""!=u.seed.seedImg||(u.seed.seedImg=u.seedImg)}else alert("该现金券不存在或已领完！")},function(){u.load=!1,alert("获取现金券信息失败！")})},fetchCoupon:function(){this.common.invokeApi("GET","coupon/draw/"+u.seedStr,null,null,function(e){if(null!=e.result)u.coupon=e.result;else{var t={};t.title=u.seed.title,t.empty=!0,t.amount="",u.couponMsg="已抢完",u.coupon=t,u.fetched=!0}u.covered=!1},function(){alert("领取现金券失败，请稍后重试！"),u.covered=!1})},gotoSales:function(){null!=u.coupon.suggestUrl&&""!=u.coupon.suggestUrl?location.href=u.coupon.suggestUrl:location.href=u.config.group_onsales.url}},components:{},computed:{}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[s("div",{staticClass:"bounce1"}),e._v(" "),s("div",{staticClass:"bounce2"}),e._v(" "),s("div",{staticClass:"bounce3"})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),e._v(" "),s("div",{staticClass:"outter_container"},[s("div",{staticClass:"top_area"},[e._m(0),e._v(" "),s("div",{staticClass:"header_icon_line"},[s("div",{staticClass:"avatar bolda center-bg"},[s("img",{staticClass:"bolda center-bg",attrs:{src:e.seed.userImgUrl,alt:""}})])])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.covered,expression:"covered"}],staticClass:"chai_area",on:{click:e.fetchCoupon}},[e._m(1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.covered,expression:"!covered"}],staticClass:"content_area"},[s("div",{staticClass:"product_pic",staticStyle:{width:"100%","border-radius":"10px"}},[s("img",{staticStyle:{width:"100%","border-radius":"10px"},attrs:{src:e.seed.seedImg,alt:""}})]),e._v(" "),s("div",{staticClass:"coupon_item ",class:{received:e.fetched}},[s("div",{staticClass:"outter_bg"},[s("div",{staticClass:"coupon_desc"},[s("div",{staticClass:"coupon_line_1"},[s("span",{staticClass:"coupon-name"},[e._v(e._s(e.coupon.title))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.coupon.empty,expression:"!coupon.empty"}],staticClass:"coupon-time"},[e._v(e._s(e.coupon.leftDayDes))])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.coupon.empty,expression:"coupon.empty"}],staticClass:"coupon-limit"},[e._v("使用期限（7天）")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.coupon.empty,expression:"!coupon.empty"}],staticClass:"coupon-limit"},[e._v("使用期限"+e._s(e.coupon.useStartDateStr)+"至"+e._s(e.coupon.useEndDateStr))])]),e._v(" "),s("div",{staticClass:"coupon_value"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.coupon.empty,expression:"coupon.empty"}],staticClass:"coupon-msg"},[e._v(e._s(e.couponMsg))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.coupon.empty,expression:"!coupon.empty"}],staticClass:"coupon-amount"},[e._v(e._s(e.coupon.amount)+"元")]),e._v(" "),s("div",{staticClass:"coupon-dyq"},[e._v("现金券")])])])]),e._v(" "),s("div",{staticClass:"coupon_detail_btn_area"},[s("span",{staticClass:"coupon_detail_btn_2",on:{click:e.gotoSales}},[e._v("立即使用")])]),e._v("\n\t\t\t\t \n\t\t\t\t"),s("div",{staticClass:"psq"},[e._v("拼手气")]),e._v(" "),e._l(e.coupons,function(t){return s("div",{staticClass:"inviter"},[s("div",{staticClass:"avatar",staticStyle:{float:"left",margin:"6px 6px"}},[s("img",{staticClass:"avatar",attrs:{src:t.userHeadImg,alt:""}})]),e._v(" "),s("div",{staticClass:"inviter_desc"},[s("div",{staticClass:"inviter_txt"},[e._v(e._s(t.userName))]),e._v(" "),s("div",{staticClass:"inviter_txt"},[e._v(e._s(t.createDateStr))])]),e._v(" "),s("div",{staticClass:"inviter_amount"},[e._v("￥"+e._s(t.amount))]),e._v("\n\t\t\t\t\t \n\t\t\t\t")])}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)],2),e._v("\n             \n        ")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header_line"},[t("span",{staticClass:"header_line_title"},[this._v("我来发福利啦")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chai_layout"},[t("img",{staticClass:"chai_header_img",attrs:{src:s("CizL")}}),this._v(" "),t("img",{staticClass:"chai_bottom_img",attrs:{src:s("ij3b")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"rule_area"},[t("div",{staticClass:"rule_title"},[this._v("使用规则")]),this._v(" "),t("div",{staticClass:"rule_desc",attrs:{"ms-html":"seed.description"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{staticStyle:{width:"100%"},attrs:{src:s("f79n")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[t("span",{staticClass:"bottom_title"},[this._v("微信公众号:e-shequ")])])}]};var d=s("VU/8")(l,v,!1,function(e){s("oNb6")},"data-v-e15b2e5a",null);t.default=d.exports},ij3b:function(e,t,s){e.exports=s.p+"guizhou_rgroups/img/coupon_pin.f6e2b79.png"},oNb6:function(e,t){},qI6z:function(e,t,s){e.exports=s.p+"guizhou_rgroups/img/banner_market_shuiguo.98713c5.jpg"}});