webpackJsonp([4],{"3mVX":function(e,s){},ZUPx:function(e,s,a){"use strict";(function(e){var t=a("fxnj"),i=a.n(t),r=a("lbHh"),c=a.n(r),d=void 0;s.a={data:function(){return{memo:"",localIdsid:"",uploadPicId:"",pic_length:0,service_order:JSON.parse(window.localStorage.getItem("service_order")),address:{},addrd:"",addresses:[],page:"main"}},created:function(){d=this},components:{},computed:{},mounted:function(){d.receiveData.postData(d,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var e=d.heheData.result;i.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})}),d.initInfo()},methods:{initInfo:function(){d.receiveData.getData(d,"repair/project/1","res",function(){d.res.success?d.res.result.address&&(d.address=d.res.result.address):alert(null==d.res.message?"请稍后重试！":d.res.message)})},choseAddress:function(){d.page="list",d.dataAddress()},dataAddress:function(){d.receiveData.getData(d,"/addresses?module=repair","data",function(){d.data.success?d.addresses=d.data.result:d.addresses=[]})},checks:function(e){d.address=e,d.page="main"},fixScroll:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&window.scrollTo(0,0)},addPic:function(){i.a.chooseImage({count:6,sizeType:["compressed"],sourceType:["album","camera"],success:function(s){var a=s.localIds;d.localIdsid=s.localIds;var t="",r=e("[name='pics']").length;if(r+a.length>6)return alert("所选图片超过6张。"),!1;d.pic_length+=a.length;var c=0;if(window.__wxjs_is_wkwebview){!function s(r){i.a.getLocalImgData({localId:a[r],success:function(i){var c=i.localData;c=c.replace("jgp","jpeg"),t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+c+'" id="'+d.localIdsid[r]+'"  style="height:100px;width:90px;"/></div>',e("#pic").append(t),++r<a.length&&s(r)},fail:function(e){alert(e)}})}(c)}else for(c=0;c<a.length;c++)t='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+a[c]+'"  id="'+a[c]+'" style="height:100px;width:90px;"/></div>',e("#pic").append(t);r+a.length>=6&&e("#add").hide()},fail:function(e){alert(e)}})},uploadToWechat:function(){var s=0,a=e("[name='pics']");!function e(){var t=a.eq(s).find("img").attr("id");setTimeout(function(){i.a.uploadImage({localId:t,isShowProgressTips:1,success:function(t){var i=t.serverId;d.uploadPicId+=i+",",++s<a.length?e():s==a.length&&d.payMent()}})},50)}()},determine:function(){var s=e("[name='pics']").length;e("#zzmb").show();var a=c.a.get("sectId");if(""==a||"null"==a||0==a||null==a)return alert("您暂未绑定房屋，请前往“我是业主”进行操作，感谢！"),location.href=d.basePageUrl+"wuye/index.html?"+d.common.getoriApp()+"#/myhouse",!1;s>0?d.uploadToWechat():d.payMent()},payMent:function(){d.addrd=d.address.province+""+d.address.city+d.address.county+d.address.xiaoquName+d.address.detailAddress;var s={service_id:d.service_order.service_id,service_title:d.service_order.service_title,image:d.service_order.image,link_man:d.address.receiveName,link_tel:d.address.tel,service_addr:d.addrd,tran_amt:d.service_order.price,memo:d.memo,sect_name:d.address.xiaoquName,sect_id:d.address.xiaoquId,imgUrls:d.uploadPicId};d.receiveData.postData(d,"/customService/order",s,"res",function(){d.res.success?null==d.res.result.package?d.$router.push({path:"/checkoutsuccess",query:{address:d.addrd,orderId:d.res.result.orderId}}):(i.a.config({debug:!1,appId:d.res.result.appid,timestamp:d.res.result.timestamp,nonceStr:d.res.result.noncestr,signature:d.res.result.paysign,jsApiList:["chooseWXPay"]}),i.a.chooseWXPay({timestamp:d.res.result.timestamp,nonceStr:d.res.result.noncestr,package:d.res.result.package,signType:d.res.result.signtype,paySign:d.res.result.paysign,success:function(e){alert("支付成功！"),d.ChangeState(d.res.result.orderId)},fail:function(){e("#zzmb").hide()},cancel:function(){d.paycancel(d.res.result.orderId)}})):(alert(null==d.res.message?"支付请求失败，请稍后重试!":d.res.message),e("#zzmb").hide())})},paycancel:function(s){d.receiveData.postData(d,"customService/order/cancelPay?orderId="+s,null,"res",function(){d.res.success?(alert("支付取消"),e("#zzmb").hide()):(alert(d.res.message),e("#zzmb").hide())})},ChangeState:function(s){d.receiveData.postData(d,"customService/order/notifyPay?orderId="+s,null,"res",function(){d.res.success?(e("#zzmb").hide(),d.$router.push({path:"/checkoutsuccess",query:{address:d.addrd,orderId:s}})):(alert(null==d.res.message?"系统异常，请稍后重试！":d.res.message),e("#zzmb").hide())})}}}}).call(s,a("7t+N"))},"qe+e":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("ZUPx"),i={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"singlepage"},[a("div",{staticClass:"zzmb",attrs:{id:"zzmb"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"main"==e.page,expression:"page =='main'"}]},[a("div",{staticClass:"topLine"},[e._m(0),e._v(" "),a("div",{staticClass:"fl"},[a("span",[e._v(e._s(e.service_order.service_title))])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!(0==e.service_order.price),expression:"!(service_order.price == 0)"}],staticClass:"fr"},[a("span",[e._v("¥"+e._s(e.service_order.price))])])]),e._v(" "),a("div",{staticClass:"addr_area"},[a("div",{staticClass:"addrtop"},[e._v(" ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.address.receiveName,expression:"address.receiveName"}],staticClass:"custom-menu-link"},[a("div",{staticClass:"sustoma"},[a("span",[e._v(e._s(e.address.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.address.tel))]),e._v(" "),a("div",{staticClass:"addr_location"},[e._v(e._s(e.address.province)+e._s(e.address.city)+e._s(e.address.county)+e._s(e.address.xiaoquName)+e._s(e.address.detailAddress))])])]),e._v(" "),a("div",{staticClass:"addrbottom"},[e._v(" ")])]),e._v(" "),a("div",[a("div",{staticClass:"single-wt"},[e._v("请具体描述服务需求")]),e._v(" "),a("div",{staticClass:"single-content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],staticClass:"single-text",attrs:{placeholder:"输入具体内容..."},domProps:{value:e.memo},on:{blur:e.fixScroll,input:function(s){s.target.composing||(e.memo=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"single-wt"},[e._v("上传图片")]),e._v(" "),a("div",{staticClass:"pdr2"},[a("div",{staticClass:"pic_frame",attrs:{id:"pic"}}),e._v(" "),a("div",{staticClass:"pl15 pr15"},[a("div",{staticClass:"add-pic-bg fl",attrs:{id:"add"},on:{click:e.addPic}})]),e._v(" "),a("div",{staticClass:"clear"})]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}}),e._v(" "),a("div",{staticClass:"btn-fixed"},[a("div",{staticClass:"btn",on:{click:function(s){e.determine()}}},[e._v("立即下单")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"list"==e.page,expression:"page == 'list'"}],staticClass:"addrlist"},e._l(e.addresses,function(s,t){return a("div",{key:t,staticClass:"plr15s arrow-margins menu-links mt1s fs14s address-wraps lite-dividers",on:{click:function(a){e.checks(s)}}},[a("i",{staticClass:"checkboxs",class:{checkeds:e.address&&e.address.id===s.id}}),e._v(" "),a("div",[a("span",{staticStyle:{"margin-left":"20px"}},[e._v(e._s(s.receiveName))]),e._v(" "),a("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(s.tel))]),e._v(" "),s.main?a("span",{staticClass:"mainlian",staticStyle:{"margin-left":"15px"}},[e._v("默认")]):e._e()]),e._v(" "),a("div",{staticClass:"locations",staticStyle:{"margin-left":"35px"}},[e._v(e._s(s.province)+e._s(s.city)+e._s(s.county)+e._s(s.xiaoquName)+")"+e._s(s.detailAddress))])])}))])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"fl single-img"},[s("img",{attrs:{src:a("uSyS"),alt:""}})])}]};var r=function(e){a("3mVX")},c=a("VU/8")(t.a,i,!1,r,"data-v-0e8803ca",null);s.default=c.exports},uSyS:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACAElEQVRIS+WW31EbMRCHPzFDkJ8wHTgV4A4CFVglkAoIFUA6MBWEVJBNBUAFSTqADvzmMw9WRncS0Z3lO8nODJnJvd3sn0/702olxRt96o24/HtgaxhXitmBZWJhrGCxhseR8LBNpaXhDIWt7ZbnkfC0zXejYgdcwTXwKRWkpa2S83+BS9v4jzsxDwpujwTp5mqBPfQemALPwNzCzyhoMhLuwv+LYbqGL5G/WFg4u2pyzLzvXAtXMbwFrky9spmCr0fCRV/jeahb5NjC55Fw0/VfGiaKOucpcKvlj4qvYLc/Clyi71owBdCPsQrdOK+i64tTC+/Dvr+CQ7WxMQXvVNoLDfGhqFjJGOy68ZeWem+Sn5fuh5c3CxoSVabu8GMtnPgeaEyVqY/BoxbO+o6L2w4LRVCf38n9IZyKbsW94H2mXGXq858Et6TYB5KK9VKjhUlL6qXhRsH1LjIOLbK3uXzbu6rtAZy/k9bgGMq91e7zuoZ0o3fzOLnIlcFY+AYs/ga8MwmvtDAPK9yY1UvDhWrG4F7wGJqahMlrcV/4ELTVXIk5u1PlOdBesDOWVp4LHQSXwEugWeAceCk0G9wH3wVaBE7BD+Fp1dzh05zHQ9zAxa/MuOGgvuqKocUVhxVHcPe2GnwmpeZpccUhiRuva5im3lo5g31ncE7yPp//D/wbNmD5H1/fFRUAAAAASUVORK5CYII="}});