<template>
<div id="login_container">
  <router-link to="./register" tag="h2">欢迎登录</router-link>
<div class="text">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phone" >
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
    </el-form>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import fromval from '../js/formValidator.js'
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        phone: "",
        pass: ""
      },
      rules: {
        phone: [
          {
            validator: phone
          }
        ]
      }
    };
  },
  methods: {
    async login(e) {
      //判断
      try {
        //请求后台接口数据
        const result = await this.$http.get("http://localhost:3000/api/login", {
          params: this.ruleForm
        });
        //判断状态码
        if (result.code == "0") {
          //设置token
          this.$store.commit("settoken", result.token);
          //存储token
          window.localStorage.setItem("token", result.token);
          //弹出成功信息
          this.$alert("登录成功", "提示信息", {
            confirmButtonText: "确定",
            callback: action => {
              this.$message({
                type: info,
                message: `action: ${action}`
              });
            }
          });
          //返回上一级路由
          this.$router.go(-1);
        } else {
                this.$alert('登录失败,手机号或密码错误','提示信息',{
                confirmButtonText:'确定',
                callback:action=>{
                  this.$message({
                    type:info,
                    message:`action: ${ action }`
                  })
                }
              })
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="css" scoped>
#login_container {
  height: 650px;
  background-image: url("http://img.zcool.cn/community/018c755a532c17a80120c2b0d05539.jpg@3000w_1l_2o_100sh.jpg");
  background-repeat: no-repeat;
  background-position: cover;
}
h2 {
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 2px;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  margin-left: 15rem;
  cursor: pointer;
}
h2:hover {
  color: #ff6700;
}
.text {
  width: 500px;
  margin: 6.25rem auto 0 auto;
}
.el-button {
  width: 25rem;
}
</style>