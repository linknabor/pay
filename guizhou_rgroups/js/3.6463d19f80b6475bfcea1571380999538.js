webpackJsonp([3],{RWFv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("YJId"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"controller"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[i("div",{staticClass:"bounce1"}),t._v(" "),i("div",{staticClass:"bounce2"}),t._v(" "),i("div",{staticClass:"bounce3"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"black_overlay",attrs:{id:"fade"}}),t._v(" "),i("div",{class:{rule_intro:t.scrolltop},staticStyle:{width:"100%"},on:{click:t.gotosgrouprulr}},[i("img",{staticStyle:{width:"100%"},attrs:{alt:"",src:s("S8T/")}})]),t._v(" "),i("div",[t.product.pictureList.length>0?i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.product.pictureList,function(t,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"ban1"},[i("img",{attrs:{src:t,alt:""}})])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),t._v(" "),i("div",{staticClass:"product-info p15"},[i("div",{staticClass:"product-detail-name fs16"},[t._v(t._s(t.rule.name))]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"30px"}},[i("div",{staticClass:"highlight fs22 fl three_div"},[t._v("¥ "+t._s(t.rule.price)+" ")]),t._v(" "),i("div",{staticClass:"highlight fl fs14 three_div",staticStyle:{"padding-top":"8px"}},[t._v(t._s(t.rule.discount)+" ")]),t._v(" "),i("div",{staticClass:"ori-price2 three_div",staticStyle:{"padding-top":"8px"}},[t._v("运费  "),i("span",{staticClass:"highlight"},[t._v("¥"+t._s(t.rule.postageFee))])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"20px"}},[i("div",{staticClass:"ori-price2 fl three_div"},[t._v("市场价"),i("del",[t._v("¥ "+t._s(t.product.oriPrice))])]),t._v(" "),i("div",{staticClass:"ori-price2 fl three_div"},[t._v("目标份数"),i("span",{staticClass:"highlight"},[t._v(t._s(t.rule.groupMinNum))]),t._v("份")]),t._v(" "),i("div",{staticClass:"ori-price2 three_div",attrs:{"ms-visible":"rule.freeShippingNum<999"}},[i("span",{staticClass:"highlight"},[t._v(t._s(t.rule.freeShippingNum))]),t._v("件包邮")])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"1px"}},[t._v(" ")])]),t._v(" "),t.finished?t._e():i("div",{staticClass:"mt2 time-wrap bb3"},[i("span",{staticClass:"time-text"},[t._v("剩余")]),t._v(" "),"00"!=t.left.days?i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.days))]),t._v("天")]):t._e(),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.hours))]),i("span",[t._v("时")]),t._v(" "),i("span",{staticClass:"time-number"},[t._v(t._s(t.left.minitus))]),i("span",[t._v("分")]),t._v(" "),i("span",[i("span",{staticClass:"time-number"},[t._v(t._s(t.left.seconds))]),t._v("秒")]),t._v(" "),i("span",{staticClass:"time-text"},[t._v("结束")])]),t._v(" "),t.finished?i("div",{staticClass:"mt2 time-wrap bb3  fs18"},[t._v("\n\t\t    已结束\n\t    ")]):t._e(),t._v(" "),i("div",{staticClass:"rgroup-info bb3",attrs:{id:"products"}},[i("div",{staticClass:"fl ",staticStyle:{"margin-top":"23px","margin-left":"15px",color:"#999","font-size":"14px"}},[t._v("报名进度")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"fr",staticStyle:{"margin-top":"23px",color:"#333","font-size":"15px","margin-right":"15px"}},[t._v("已报名人数"),i("span",{staticStyle:{color:"#FF9933","font-size":"15px","margin-left":"5px"}},[t._v(t._s(t.rule.currentNum))])])]),t._v(" "),i("div",{staticClass:"p15 mb15"},[i("div",{staticClass:"section-title",staticStyle:{"padding-left":"0px","padding-top":"0px"},on:{click:t.toggleDetail}},[t._v("\n                报名规则\n                "),i("i",{staticClass:"icon more-icon align-right fr",class:{topIcon:t.showDetail}})]),t._v(" "),i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.product.serviceDesc)}})]),t._v(" "),t.showDetail?i("ul",{staticStyle:{"padding-top":"3px"}},[i("li",{staticClass:"detail-item",domProps:{innerHTML:t._s(t.product.serviceDescMore)}})]):t._e()]),t._v(" "),i("div",{staticClass:"activityTitleLine",staticStyle:{"margin-bottom":"85px",display:"block"}},[i("span",{staticClass:"more_btn",on:{click:function(e){t.goclassify()}}},[t._v("点击查看更多商品")])]),t._v(" "),i("div",{staticClass:"btn-home-fixed",staticStyle:{color:"white",position:"fixed",width:"100%",bottom:"0px"}},[i("span",{staticClass:"fl",staticStyle:{height:"40px","line-height":"40px",width:"36%","background-color":"#444","text-align":"center","font-size":"15px"},on:{click:function(e){t.goclassify()}}},[t._v("\n                更多团购\n            ")]),t._v(" "),i("span",{staticClass:"fl",class:{useless:t.rule.leftSeconds<0},staticStyle:{height:"40px","line-height":"40px",width:"64%","background-color":"#ff8a00","text-align":"center","font-size":"15px"},on:{click:t.buy}},[t._v("\n                马上参团\n            ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fr plr10",staticStyle:{"border-left":"#d5d59d 1px solid"},attrs:{id:"processImg"}},[e("canvas",{attrs:{width:"70px",height:"70px"}})])}]};var l=function(t){s("hYdr"),s("VSOe")},r=s("VU/8")(i.a,a,!1,l,"data-v-f0ab5282",null);e.default=r.exports},VSOe:function(t,e){},YJId:function(t,e,s){"use strict";(function(t){var i=s("7QTg"),a=(s.n(i),s("fxnj")),l=s.n(a),r=void 0;e.a={data:function(){return{load:!0,finished:!1,showDetail:!1,left:{days:"0",hours:"0",minitus:"0",seconds:"0"},product:{pictureList:[]},rule:{currentNum:0},ruleId:this.$route.query.ruleId,swiperOption:{notNextTick:!0,autoplay:{disableOnInteraction:!1,delay:6e3},pagination:{el:".swiper-pagination"},loop:!0},scrolltop:!1}},created:function(){r=this},mounted:function(){var t=location.href.split("#")[0];r.receiveData.wxconfig(r,l.a,["onMenuShareTimeline","onMenuShareAppMessage"],t),r.read(),window.addEventListener("scroll",r.getscroll)},updated:function(){r.drawP()},methods:{getscroll:function(){var e=t(window).scrollTop();r.scrolltop=!(e<=0)},read:function(){""!=r.ruleId&&r.query()},query:function(){var t="getRgroupRule/"+r.ruleId;r.receiveData.getData(r,t,"Data",function(){r.Data.success?r.Data.result&&(r.load=!1,r.rule=r.Data.result,r.products(r.rule.productId),setInterval(r.updateLeftTime,1e3)):(r.load=!1,alert(null==r.Data.message?"获取团购信息失败！":r.Data.message))})},products:function(t){var e="getProduct/"+t;r.receiveData.getData(r,e,"res",function(){r.res.success?r.res.result&&(r.product=r.res.result,r.common.initShareConfig(r.rule.name,r.basePageUrlpay+"guizhourgroups.html?/#/rgroupdetail?ruleId="+r.ruleId,r.product.smallPicture,"快来参加"+r.config.newname+"的优惠商品抢购吧",l.a)):alert(null==r.res.message?"获取产品信息失败！":r.res.message)})},updateLeftTime:function(){if(r.rule.leftSeconds>0){r.finished=!1,r.rule.leftSeconds=r.rule.leftSeconds-1;var t=r.rule.leftSeconds,e=parseInt(t/86400);r.left.days=e<10?"0"+e:e,t%=86400;var s=parseInt(t/3600);r.left.hours=s<10?"0"+s:s,t%=3600;var i=parseInt(t/60);r.left.minitus=i<10?"0"+i:i,t%=60,r.left.seconds=t<10?"0"+t:t}else r.finished=!0},drawP:function(){r.drawProcess(t("#products canvas")[0],35,35,28,r.rule.process,"#E5E2DD","#FF8A00","#FF8A00")},drawProcess:function(t,e,s,i,a,l,r,o){if(void 0!=a&&null!=a&&t.getContext){var n=t.getContext("2d");n.beginPath(),n.moveTo(e,s),n.arc(e,s,i,0,2*Math.PI,!1),n.closePath(),n.fillStyle=l,n.fill(),n.beginPath(),n.moveTo(e,s),n.arc(e,s,i,1.5*Math.PI,1.5*Math.PI+2*Math.PI*a/100,!1),n.closePath(),n.fillStyle=r,n.fill(),n.beginPath(),n.moveTo(e,s),n.arc(e,s,i-.04*i,0,2*Math.PI,!0),n.closePath(),n.fillStyle="rgba(255,255,255,1)",n.fill(),n.beginPath(),n.arc(e,s,i-.04*i,0,2*Math.PI,!0),n.closePath(),n.strokeStyle=l,n.stroke(),n.font="8pt Arial",n.fillStyle=o,n.textAlign="center",n.textBaseline="middle",n.moveTo(e,s-7),n.fillText(a+"%",e,s-7),n.moveTo(e,s+7);var c=a<100?"进行中":"已成团";n.fillText(c,e,s+7);var d=e+Math.sin(2*Math.PI*a/100)*(i-1.6),u=s-Math.cos(2*Math.PI*a/100)*(i-1.6);n.beginPath(),n.moveTo(d,u),n.arc(d,u,3,0,2*Math.PI,!0),n.closePath(),n.fillStyle=r,n.fill()}},toggleDetail:function(){r.showDetail=!r.showDetail},gotosgrouprulr:function(){r.$router.push({path:"/sgrouprule"})},goclassify:function(){location.href=r.basePageUrlpay+"guizhourgroups.html?type="+r.rule.productType},buy:function(){r.rule.id&&r.$router.push({path:"/buy",query:{type:"4",ruleId:r.rule.id}})}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide},computed:{}}}).call(e,s("7t+N"))},hYdr:function(t,e){}});