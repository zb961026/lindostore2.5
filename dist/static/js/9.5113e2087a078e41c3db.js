webpackJsonp([9],{"/Hzs":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("2sCs");var a={data:function(){return{itemsData:[],itemId:this.$route.query.itemId,imgIndex:0,count:1}},mounted:function(){this.getitem()},components:{prompt:function(){return e.e(0).then(e.bind(null,"ZpX4"))},tabitem:function(){return e.e(13).then(e.bind(null,"FJN8"))}},watch:{"$route.query.itemId":function(){this.itemId=this.$route.query.itemId,this.imgIndex=0}},computed:{itemInfo:function(){var t=this,i=this.itemsData.filter(function(i){return Number(i.sku_id)===Number(t.itemId)})[0];return i||{title:"正在加载...",sub_title:"",ali_images:[],sku_list:[]}}},methods:{handleChange:function(t){console.log(t)},getitem:function(){var t=this;this.$http.get("http://39.100.154.113:3000/api/goodsitem").then(function(i){t.itemsData=i})},tableImg:function(t){this.imgIndex=t},addCarPanelHandle:function(){var t={info:this.itemInfo,count:this.count};this.$store.commit("addCarPanelData",t),this.$notify({message:"加入购物车成功",type:"success",duration:1e3})},addCount:function(){this.count++},subCount:function(){this.count--}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"main"}},[e("div",{staticClass:"store-content item"},[e("div",{staticClass:"item-box"},[e("div",{staticClass:"gallery-wrapper"},[e("div",{staticClass:"gallery"},[e("div",{staticClass:"thumbnail"},[e("ul",t._l(t.itemInfo.ali_images,function(i,a){return e("li",{key:a,class:{on:a==t.imgIndex},on:{click:function(i){return t.tableImg(a)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i,expression:"img"}],attrs:{width:"54px",height:"54px"}})])}),0)]),t._v(" "),e("div",{staticClass:"thumb"},[e("ul",t._l(t.itemInfo.ali_images,function(i,a){return e("li",{key:a,class:{on:a==t.imgIndex}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i,expression:"img"}],attrs:{width:"440px",height:"440px"}})])}),0)])])]),t._v(" "),e("div",{staticClass:"banner"},[e("div",{staticClass:"sku-custom-title"},[e("div",{staticClass:"params-price"},[e("span",[e("em",[t._v("¥")]),t._v(" "),e("i",[t._v(t._s(t.itemInfo.price))])])]),t._v(" "),e("div",{staticClass:"params-info"},[e("h4",[t._v(t._s(t.itemInfo.title))]),t._v(" "),e("h6",[t._v(t._s(t.itemInfo.sub_title))])])]),t._v(" "),e("div",{staticClass:"sku-dynamic-params-panel"},[e("div",{staticClass:"sku-dynamic-params clear"},[e("span",{staticClass:"params-name"},[t._v("颜色")]),t._v(" "),e("ul",{staticClass:"params-colors"},t._l(t.itemInfo.sku_list,function(i,a){return e("li",{key:a,class:{cur:i.id==t.$route.query.itemId}},[e("router-link",{attrs:{title:i.color,to:{name:"Item",query:{itemId:i.id}}}},[e("div",{staticClass:"c_oler"},[t._v(t._s(i.color))])])],1)}),0)]),t._v(" "),e("div",{staticClass:"sku-dynamic-params clear"},[e("div",{staticClass:"params-name"},[t._v("数量")]),t._v(" "),e("el-input-number",{attrs:{min:1,max:5,label:"描述文字"},on:{change:t.handleChange},model:{value:t.count,callback:function(i){t.count=i},expression:"count"}})],1)]),t._v(" "),e("div",{staticClass:"sku-status"},[e("div",{staticClass:"cart-operation-wrapper clearfix"},[e("span",{staticClass:"blue-title-btn js-add-cart",on:{click:t.addCarPanelHandle}},[e("a",[t._v("加入购物车")])])])])])])]),t._v(" "),e("prompt")],1)},staticRenderFns:[]};var n=e("C7Lr")(a,s,!1,function(t){e("3AM3")},null,null);i.default=n.exports},"3AM3":function(t,i){}});
//# sourceMappingURL=9.5113e2087a078e41c3db.js.map