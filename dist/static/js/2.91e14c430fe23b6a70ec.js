webpackJsonp([2],{"2Vu/":function(e,r){},"4+AD":function(e,r,t){var o=t("8leu");o(o.S,"Number",{isInteger:t("YGy9")})},"4Xi4":function(e,r,t){e.exports={default:t("6zNI"),__esModule:!0}},"6zNI":function(e,r,t){t("4+AD"),e.exports=t("Rv9F").Number.isInteger},MvQL:function(e,r,t){"use strict";var o=t("4Xi4");t.n(o)},YGy9:function(e,r,t){var o=t("PUvy"),s=Math.floor;e.exports=function(e){return!o(e)&&isFinite(e)&&s(e)===e}},c2lw:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});t("MvQL");var o={name:"register",data:function(){var e=this;return{ruleForm:{phone:"",pass:"",checkpass:""},rules:{phone:[{validator:phone}],pass:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){e&&r.$http.get("http://39.100.154.113:3000/api/register",{params:r.ruleForm}).then(function(e){(e.success=!0)?(r.$alert("注册成功,快去登录吧","提示信息",{confirmButtonText:"确定",callback:function(e){r.$message({type:info,message:"action: "+e})}}),r.$router.replace("/login")):r.$alert("用户已存在,","提示信息",{confirmButtonText:"确定",callback:function(e){r.$message({type:info,message:"action: "+e})}})}).catch(function(e){console.log(e)})})}}},s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"login_container"}},[t("router-link",{attrs:{to:"./login",tag:"h2"}},[e._v("欢迎注册")]),e._v(" "),t("div",{staticClass:"text"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",e._n(r))},expression:"ruleForm.phone"}})],1)],1),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("注册")])],1)],1)],1)],1)},staticRenderFns:[]};var a=t("C7Lr")(o,s,!1,function(e){t("2Vu/")},"data-v-1ea567ae",null);r.default=a.exports}});
//# sourceMappingURL=2.91e14c430fe23b6a70ec.js.map