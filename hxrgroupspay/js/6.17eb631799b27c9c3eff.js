webpackJsonp([6],{agXU:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=t("bOdI"),d=t.n(a),c=(t("mvHQ"),t("fxnj")),r=t.n(c),n=void 0,o=(i={data:function(){return{zzshow:!1,currentPage:"main",selectRegion:"false",bind_switch:"1",ruleId:this.$route.query.ruleId,type:this.$route.query.type,product:{},rule:{limitNumOnce:10,price:0},address:{},checkedAddress:{},count:1,productAmount:0,postFee:0,amount:0,coupons:[],couponNum:0,coupon:null,couponDesc:"未使用",selectedIndex:-1,totalAmount:0,paying:!1,order:{},receiveTimeType:2,comment:"",datechoooser:{time:"任何时间",comment:"",timePicker:[{name:"工作日",value:0,checked:!1},{name:"节假日",value:1,checked:!1},{name:"任何时间",value:2,checked:!0}],modalShown:!1},addresses:[],submitAddress:{receiveName:"",tel:"",distinct:"",xiaoquName:"",amapDetailAddr:"",homeAddress:"",province:"",provinceid:"",city:"",cityid:"",county:"",countyid:""}}},watch:{},created:function(){n=this},mounted:function(){n.roady(),n.dataAddress()},components:{}},d()(i,"watch",{}),d()(i,"methods",{roady:function(){n.ruleId&&n.type&&(n.queryBuyInfo(),n.queryCoupon())},CheckBoxSelected:function(){"0"!=n.bind_switch?n.bind_switch="0":n.bind_switch="1"},protocol:function(){n.$router.push({path:"/rprotocol"})},initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/105","Data",function(){})},queryBuyInfo:function(){n.receiveData.getData(n,"/queryBuyInfo/"+n.type+"/"+n.ruleId,"res",function(){n.res.success?(n.product=n.res.result.product,n.rule=n.res.result.rule,n.res.result.address&&(n.checkedAddress=n.res.result.address),n.computeAmount()):alert("订单处理中，请稍后再试！")})},queryCoupon:function(){n.receiveData.getData(n,"/coupon/valid/"+n.type+"/"+n.ruleId,"res",function(){n.res.success?(n.coupons=n.res.result,n.computeAmount()):alert("获取现金券信息失败！")})},minusCount:function(){n.count>1&&--n.count&&n.computeAmount()},addCount:function(){n.count<n.rule.limitNumOnce?(n.count++,n.computeAmount()):alert("最多能购买"+n.rule.limitNumOnce+"个")},computeAmount:function(){var s,e,t,i;t=(s=n.rule.price*n.count)+(e=n.count<n.rule.freeShippingNum?n.rule.postageFee:0),null==n.coupon?i=t:n.coupon.usageCondition>t?n.coupon=null:n.coupon.amount>0&&(i=t-n.coupon.amount),n.productAmount=s.toFixed(2),n.postFee=e.toFixed(2),n.amount=t.toFixed(2),n.totalAmount=i>0?i.toFixed(2):"0.01"},showCoupons:function(){n.currentPage="coupons"},focus:function(){},storeMemo:function(){n.comment=n.$refs.bgbei.innerHTML},showModal:function(){n.datechoooser.modalShown=!0},hideModal:function(s){"ptb15 lite-divider"===s.target.className&&(n.datechoooser.modalShown=!1)},selectTime:function(s){for(var e=0;e<n.datechoooser.timePicker.length;e++)n.datechoooser.timePicker[e].checked=!1;n.datechoooser.timePicker[s].checked=!0,n.datechoooser.time=n.datechoooser.timePicker[s].name,n.receiveTimeType=n.datechoooser.timePicker[s].value,n.datechoooser.modalShown=!1},chooseCoupon:function(s){this.selectedIndex!=s?this.selectedIndex=s:this.selectedIndex=-1},confirm:function(){this.selectedIndex<0||this.selectedIndex>=this.coupons.length?this.chooseCoupons(null):this.chooseCoupons(this.coupons[this.selectedIndex])},chooseCoupons:function(s){null==s?(n.coupon=null,n.couponDesc="未使用"):(n.coupon=s,n.couponDesc="￥"+s.amount+"元"),n.computeAmount(),n.currentPage="main"},dataAddress:function(){n.receiveData.getData(n,"/addresses","data",function(){n.data.success?n.addresses=n.data.result:(alert("获取地址信息失败！"),n.addresses=[])})},aShowAddress:function(){n.currentPage="addrlists"},checks:function(s){n.checkedAddress=s,n.currentPage="main"},toAddAddress:function(){n.currentPage="addAddressForm";var s="getRegionByRuleId/"+n.ruleId;n.receiveData.getData(n,s,"n",function(){n.res.success?(n.submitAddress.receiveName=n.n.result.buyer.name,n.submitAddress.tel=n.n.result.buyer.tel,n.submitAddress.distinct=n.n.result.address.county,n.submitAddress.xiaoquName=n.n.result.address.xiaoquName,n.submitAddress.xiaoquId=n.n.result.address.xiaoquId,n.submitAddress.amapDetailAddr=n.n.result.address.xiaoquAddress,n.submitAddress.county=n.n.result.address.county,n.submitAddress.countyid=n.n.result.address.countyId,n.submitAddress.city=n.n.result.address.city,n.submitAddress.cityid=n.n.result.address.cityId,n.submitAddress.province=n.n.result.address.province,n.submitAddress.provinceid=n.n.result.address.provinceId):(alert("获取地址信息失败！"),n.submitAddress={})})},addAddress:function(){""!=n.submitAddress.province&&""!=n.submitAddress.city&&""!=n.submitAddress.county?""!=n.submitAddress.amapDetailAddr&&""!=n.submitAddress.receiveName&&""!=n.submitAddress.tel&&""!=n.submitAddress.homeAddress?/^1[3-9][0-9]\d{8}$/.test(n.submitAddress.tel)?n.saveAddress():alert("请填写正确的手机号！"):alert("请填写完整相关信息！"):alert("请选择地址！")},saveAddress:function(){var s={};s.receiveName=n.submitAddress.receiveName,s.tel=n.submitAddress.tel,s.xiaoquName=n.submitAddress.xiaoquName,s.amapDetailAddr=n.submitAddress.amapDetailAddr,s.detailAddress=n.submitAddress.amapDetailAddr+n.submitAddress.homeAddress,s.amapId="",s.provinceId=n.submitAddress.provinceid,s.province=n.submitAddress.province,s.cityId=n.submitAddress.cityid,s.city=n.submitAddress.city,s.countyId=n.submitAddress.countyid,s.county=n.submitAddress.county;n.receiveData.postData(n,"addAddress",s,"res",function(){n.res.success?(n.addresses.push(n.res.result),n.checkedAddress=n.res.result,n.currentPage="addrlists"):alert(null==n.res.message?"地址保存失败，请重试！":n.res.message)})},pay:function(){if("1"==n.bind_switch)if(n.zzshow=!0,n.paying)alert("订单处理中，请勿重复提交！");else{var s={orderType:n.type,productId:n.product.id,ruleId:n.rule.id,count:n.count,serviceAddressId:n.checkedAddress.id,memo:n.comment,receiveTimeType:n.receiveTimeType};null!=n.coupon&&(s.couponId=n.coupon.id),null!=n.checkedAddress&&void 0!=n.checkedAddress.id&&0!=n.checkedAddress.id?n.createOrder(s):alert("请选择地址！")}else alert("请同意《代扔垃圾服务协议》后支付")},createOrder:function(s){n.paying=!0,n.order!={}&&n.order.id>0?n.requestPay():n.receiveData.postData(n,"/createOrder",s,"n",function(){n.n.success?(n.order=n.n.result,n.requestPay()):(alert(null==n.n.message?"订单创建失败，请稍后重试！":n.n.message),n.paying=!1,n.zzshow=!1)})},requestPay:function(){n.receiveData.getData(n,"/requestPay/"+n.order.id,"n",function(){n.n.success?(r.a.config({debug:!1,appId:n.n.result.appId,timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,signature:n.n.result.signature,jsApiList:["chooseWXPay"]}),r.a.chooseWXPay({timestamp:n.n.result.timestamp,nonceStr:n.n.result.nonceStr,package:n.n.result.pkgStr,signType:n.n.result.signType,paySign:n.n.result.signature,success:function(s){alert("下单成功！"),n.$router.push({path:"/success",query:{orderId:n.order.id,type:n.type}})},fail:function(s){n.zzshow=!1},cancel:function(s){n.zzshow=!1}})):(n.paying=!1,n.zzshow=!1)})}}),d()(i,"computed",{}),i),l={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"buy"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"load6",attrs:{id:"LoadingBar"}},[t("div",{staticClass:"bounce1"}),s._v(" "),t("div",{staticClass:"bounce2"}),s._v(" "),t("div",{staticClass:"bounce3"})]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"black_overlay",attrs:{id:"fade"}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"main"==s.currentPage,expression:"currentPage=='main'"}],staticClass:"zhi"},[t("div",{staticStyle:{background:"white",height:"15px",width:"100%"}},[s._v(" ")]),s._v(" "),t("div",{staticClass:"addr_area",on:{click:s.aShowAddress}},[t("div",{staticClass:"addr-top"},[s._v(" ")]),s._v(" "),t("div",{staticStyle:{"text-align":"center","background-color":"#f7f7f1"}},[s.checkedAddress.receiveName?s._e():t("a",{staticClass:"btn-plain add_btn_style",attrs:{href:"javascript:void(0)"}},[s._v("选择收货地址")])]),s._v(" "),s.checkedAddress.receiveName?t("div",{staticClass:"menu-link fs14 addr_detail"},[t("span",{staticStyle:{color:"#3b3937"},attrs:{id:"infoname"}},[s._v(s._s(s.checkedAddress.receiveName))]),s._v(" "),t("span",{staticStyle:{"margin-left":"15px",color:"#3b3937"},attrs:{id:"infotel"}},[s._v(s._s(s.checkedAddress.tel))]),s._v(" "),t("div",{staticClass:"addr_location",attrs:{id:"infoaddr"}},[s._v(s._s(s.checkedAddress.province)+s._s(s.checkedAddress.city)+s._s(s.checkedAddress.county)+"（"+s._s(s.checkedAddress.xiaoquName)+"）"+s._s(s.checkedAddress.detailAddress))])]):s._e(),s._v(" "),t("div",{staticClass:"addr-f"},[s._v(" ")])]),s._v(" "),t("div",{staticClass:"product_detail"},[t("img",{staticClass:"product_picture",attrs:{src:s.product.smallPicture}}),s._v(" "),t("div",{staticClass:"product_content"},[t("div",{staticClass:"product_name"},[s._v(s._s(s.product.name))]),s._v(" "),t("div",{staticClass:"product_pri_area"},[t("div",{staticClass:"fl fs16 highlight pt5"},[s._v(" ¥"+s._s(s.rule.price)+" ")]),s._v(" "),t("div",{staticClass:"fl fs13",staticStyle:{"margin-left":"10px","padding-top":"7px",color:"#888888"}},[t("del",[s._v("¥"+s._s(s.product.oriPrice))])]),s._v(" "),t("div",{staticClass:"fr fs13",staticStyle:{"padding-top":"7px",color:"#888888"}},[s._v("X "+s._s(s.count))])])])]),s._v(" "),t("div",{staticClass:"line p15 fs15",staticStyle:{position:"relative"}},[t("label",{staticClass:"chendad ",class:{addse:1==s.bind_switch},attrs:{for:"checkbox_a1"}}),s._v(" "),t("input",{staticClass:"chk_1 ",attrs:{type:"checkbox",id:"checkbox_a1",name:"flag",checked:""},on:{click:function(e){s.CheckBoxSelected()}}}),s._v(" "),t("a",{staticClass:"checkadd",attrs:{href:"javascript:void(0)"},on:{click:s.protocol}},[s._v("同意"),t("span",{staticStyle:{"border-bottom":"1px solid rgb(122, 112, 112)"}},[s._v("《代扔垃圾服务协议》")])])]),s._v(" "),t("div",{staticClass:"line p15 fs15"},[t("span",[s._v("商品价格")]),s._v(" "),t("span",{staticClass:"fr highlight"},[s._v("¥ "+s._s(s.productAmount))])]),s._v(" "),t("div",{staticClass:"line fs15",staticStyle:{height:"50px","line-height":"50px"}},[t("span",[s._v("购买数量")]),s._v(" "),t("span",{staticClass:"fr"},[t("span",{staticClass:"sbtn btn-minus minus-btn-size",class:{active:s.count>1},on:{click:s.minusCount}}),s._v(" "),t("span",{staticClass:"number fs16"},[s._v(s._s(s.count))]),s._v(" "),t("span",{staticClass:"sbtn btn-add active minus-btn-size",on:{click:s.addCount}})])]),s._v(" "),t("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"}},[t("span",{staticClass:"fl"},[s._v("快递费")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:s.rule.freeShippingNum<999,expression:"rule.freeShippingNum<999"}],staticClass:"fl baoyou_desc"},[s._v("  "+s._s(s.rule.freeShippingNum)+"件包邮")]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0!=s.postFee,expression:"postFee!=0"}],staticClass:"fr"},[s._v(" ¥ "+s._s(s.rule.postageFee))]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:0==s.postFee,expression:"postFee==0"}],staticClass:"fr"},[t("del",[s._v(" ¥ "+s._s(s.rule.postageFee))])])]),s._v(" "),t("div",{staticClass:"line",staticStyle:{height:"30px"}},[t("span",{staticClass:"fl"},[t("span",{staticClass:"total fs15"},[s._v("商品总额")]),s._v(" "),t("span",{staticClass:"fs10"},[s._v("共"+s._s(s.count)+"个商品")])]),s._v(" "),t("span",{staticClass:"fs20 fr",staticStyle:{"margin-right":"5px"}},[s._v("¥ "+s._s(s.amount))])]),s._v(" "),t("div",{staticClass:"line p15 fs15",staticStyle:{height:"20px"},on:{click:s.showCoupons}},[t("span",{staticClass:"fl"},[s._v("现金券")]),s._v(" "),t("span",{staticClass:"fl baoyou_desc"},[s._v("  "+s._s(s.coupons.length)+"张可用")]),s._v(" "),t("div",{staticClass:"fr right_menu"},[s._v(s._s(s.couponDesc)+"  ")])]),s._v(" "),t("div",{staticClass:"p15  highlight",staticStyle:{height:"36px"}},[t("span",{staticClass:"fl fs15"},[s._v("支付金额")]),s._v(" "),t("span",{staticClass:"fr fs20 mlr10"},[s._v(" ¥ "+s._s(s.totalAmount)+"  ")])]),s._v(" "),t("div",{staticClass:"info-wrap bgwhite"},[t("div",{staticClass:"section-title"},[s._v("收货时间")]),s._v(" "),t("a",{staticClass:"menu-link custom-menu-link fs14",staticStyle:{height:"30px"},attrs:{href:"#"},on:{click:s.showModal}},[t("i",{staticClass:"address_icon time-icon fl"}),s._v(s._s(s.datechoooser.time))])]),s._v(" "),t("div",{staticClass:" bgwhite"},[t("div",{staticClass:"fs15",staticStyle:{height:"30px",padding:"15px 0 5px 15px"}},[s._v("备注")]),s._v(" "),t("div",{ref:"bgbei",staticClass:"content p15",staticStyle:{"font-size":"15px"},attrs:{contenteditable:""},on:{click:s.focus,blur:s.storeMemo}}),s._v(" "),t("div",{staticStyle:{height:"80px",position:"relative"}},[s._v(" ")])]),s._v(" "),t("div",{staticClass:"btn-fixed"},[t("div",{staticClass:"btn",class:{useless:s.paying},on:{click:s.pay}},[s._v("立即微信支付")])]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.datechoooser.modalShown,expression:"datechoooser.modalShown"}],staticClass:"modal-mask",on:{click:s.hideModal}},[t("div",{staticClass:"modal"},s._l(s.datechoooser.timePicker,function(e,i){return t("div",{staticClass:"ptb15 lite-divider",class:{checkedItem:e.checked},on:{click:function(e){s.selectTime(i)}}},[s._v(s._s(e.name))])}),0)])]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"coupons"==s.currentPage,expression:"currentPage=='coupons'"}]},[t("div",{staticClass:"title-line"},[t("div",{staticClass:"title_text"},[s._v("可用现金券")]),s._v(" "),t("div",{staticClass:"title_count"},[s._v("共"+s._s(s.coupons.length)+"个")])]),s._v(" "),t("div",s._l(s.coupons,function(e,i){return t("div",{key:e.id,staticClass:"coupon_item ",class:{selected:i==s.selectedIndex},on:{click:function(e){s.chooseCoupon(i)}}},[t("div",{staticClass:"outter_bg "},[t("i",{staticClass:"icon_se "}),s._v(" "),t("div",{staticClass:"coupon_desc"},[t("div",{staticClass:"coupon_line_1"},[t("span",{staticClass:"coupon-name"},[s._v(s._s(e.title))]),s._v(" "),t("span",{staticClass:"coupon-time"},[s._v(s._s(e.leftDayDes))])]),s._v(" "),t("div",{staticClass:"coupon-limit"},[s._v("使用期限"+s._s(e.useStartDateStr)+"至"+s._s(e.useEndDateStr))])]),s._v(" "),t("div",{staticClass:"coupon_value"},[t("div",{staticClass:"coupon-amount"},[s._v("￥"+s._s(e.amount))]),s._v(" "),t("div",{staticClass:"coupon-dyq"},[s._v("现金券")])])]),s._v(" "),t("div",[s._v(" ")])])}),0),s._v(" "),t("div",{staticStyle:{height:"15px",width:"100%"}},[s._v(" \n        ")]),s._v(" "),t("div",{staticClass:"btn_area",staticStyle:{"margin-bottom":"15px"}},[t("div",{staticClass:"more_btn",on:{click:s.confirm}},[s._v("确定")])])]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.zzshow,expression:"zzshow"}],staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"addrlists"==s.currentPage,expression:"currentPage=='addrlists'"}],staticClass:"diz"},[t("div",{staticClass:"dividers"}),s._v(" "),s._l(s.addresses,function(e){return t("div",{key:e.id,staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(t){s.checks(e)}}},[t("i",{staticClass:"checkboxs fl",class:{checkeds:s.checkedAddress&&s.checkedAddress.id===e.id}}),s._v(" "),t("div",{staticStyle:{margin:"10px 0 10px 30px"}},[t("span",[s._v(s._s(e.receiveName))]),s._v(" "),t("span",{staticStyle:{"margin-left":"15px"}},[s._v(s._s(e.tel))]),s._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.main,expression:"item.main"}],staticClass:"default_item",staticStyle:{"margin-left":"15px"}},[s._v("默认")])]),s._v(" "),t("div",{staticClass:"locations"},[s._v(s._s(e.province)+s._s(e.city)+s._s(e.county)+s._s(e.locationAddr)+"("+s._s(e.xiaoquName)+")"+s._s(e.detailAddress))])])}),s._v(" "),t("div",{staticClass:"tc mt2"},[t("a",{staticClass:"addr_btn_plain",on:{click:s.toAddAddress}},[s._v("新增收货地址")]),t("br")])],2),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"addAddressForm"==s.currentPage,expression:"currentPage=='addAddressForm'"}],staticStyle:{padding:"0 15px"}},[t("div",{staticClass:"input-wrap lite-dividers lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("联系人")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.receiveName,expression:"submitAddress.receiveName"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入联系人姓名"},domProps:{value:s.submitAddress.receiveName},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"receiveName",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("手机号")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.tel,expression:"submitAddress.tel"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入手机号码"},domProps:{value:s.submitAddress.tel},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"tel",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15",staticStyle:{color:"#3b3937"}},[s._v("所在地区")]),s._v(" "),s.submitAddress.distinct?s._e():t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请选择所在地区")]),s._v(" "),s.submitAddress.distinct?t("span",{staticClass:"fr fs14"},[s._v(s._s(s.submitAddress.distinct))]):s._e()]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"false"==s.selectRegion,expression:"selectRegion=='false'"}]},[t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15"},[s._v("小区或大厦")]),s._v(" "),""==s.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请输入小区或大厦")]):s._e(),s._v(" "),s.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14"},[s._v(s._s(s.submitAddress.xiaoquName))]):s._e()]),s._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15"},[s._v("小区地址")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.amapDetailAddr,expression:"submitAddress.amapDetailAddr"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：三林路128弄"},domProps:{value:s.submitAddress.amapDetailAddr},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"amapDetailAddr",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-dividers lite-divider menu-linkad menu-link"},[t("span",{staticClass:"fl fs15"},[s._v("楼栋门牌号")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.homeAddress,expression:"submitAddress.homeAddress"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：1号楼402室"},domProps:{value:s.submitAddress.homeAddress},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"homeAddress",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"btn",on:{click:s.addAddress}},[s._v("保存")])])])])},staticRenderFns:[]};var u=t("VU/8")(o,l,!1,function(s){t("ue6n")},"data-v-86c25632",null);e.default=u.exports},ue6n:function(s,e){}});