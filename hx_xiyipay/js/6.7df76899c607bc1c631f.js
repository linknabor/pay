webpackJsonp([6],{F3sf:function(t,s){},WylP:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("lbHh"),i=a.n(e),n=void 0,o={data:function(){return{type:this.$route.query.type,types:{},washbags:[],unit:"件",carNum:0,totals:0,totalStr:"0.0"}},created:function(){n=this},mounted:function(){n.getInfo()},methods:{getInfo:function(){201==n.type&&(n.unit="袋");var t=i.a.get("regionId");t||(t=19),n.receiveData.getData(n,"yunxiyi/serviceItems/"+t+"/"+n.type,"res",function(){n.res.success&&(n.washbags=n.res.result.items,n.type=n.res.result.type)})},reduce:function(t){n.washbags[t].count<=0?n.washbags[t].count:(n.washbags[t].count--,n.carNum--,n.totals-=n.washbags[t].price),n.updateAmountShow()},add:function(t){n.washbags[t].count++,n.carNum++,n.totals+=n.washbags[t].price,n.updateAmountShow()},updateAmountShow:function(){n.totals&&n.totals>0?n.totalStr=n.totals.toFixed(2):n.totalStr="0.0"},toShopCart:function(){if(n.carNum<=0)alert("请选择需要清洗的衣物类型！");else{for(var t=[],s=0;s<n.washbags.length;s++)n.washbags[s].count>0&&t.push({serviceId:n.washbags[s].id,count:n.washbags[s].count});n.receiveData.postData(n,"home/putToCart",{items:t},"res",function(){n.res.success&&n.$router.push({path:"xiyi_pay"})})}}},components:{},computed:{}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bags"},[a("span",{staticClass:"title"},[t._v(t._s(t.type.description))]),t._v(" "),t._l(t.washbags,function(s,e){return a("div",{key:s.id,staticClass:"showlist"},[a("div",{staticClass:"fl imgshow"},[a("img",{attrs:{src:s.imageUrl,alt:""}}),t._v(" "),a("p",{staticClass:"imgtype"},[t._v(t._s(s.title)+" "),a("span",{staticStyle:{color:"#ff8a00"}},[t._v(t._s(s.price))]),a("span",{staticStyle:{color:"#ff8a00"}},[t._v("元")])]),t._v(" "),a("p",{staticClass:"imgstyle"},[t._v(t._s(s.extraDesc1))])]),t._v(" "),a("div",{staticClass:"fl infoshow",domProps:{innerHTML:t._s(s.description)}}),t._v(" "),a("div",{staticClass:"fl btnhome"},[a("div",{staticClass:"btns"},[a("input",{staticClass:"fl reduce",attrs:{type:"button"},on:{click:function(s){t.reduce(e)}}}),t._v(" "),a("span",{staticClass:"fl nums"},[t._v(t._s(s.count))]),t._v(" "),a("input",{staticClass:"fl addbtn",attrs:{type:"button"},on:{click:function(s){t.add(e)}}})])])])}),t._v(" "),a("div",{staticStyle:{height:"50px"}}),t._v(" "),a("div",{attrs:{id:"foot"}},[a("p",{staticClass:"fl paynums"},[a("span",{staticStyle:{"font-size":"19px"}},[t._v(t._s(t.totalStr))]),t._v("  /  \n         "),a("span",{attrs:{id:"carNum"}},[t._v(t._s(t.carNum))]),t._v(t._s(t.unit)+"\n     ")]),t._v(" "),a("div",{staticClass:"fr paybtn",on:{click:function(s){t.toShopCart()}}},[t._v("立即支付")])])],2)},staticRenderFns:[]};var r=a("VU/8")(o,c,!1,function(t){a("F3sf")},"data-v-76edf1f4",null);s.default=r.exports}});