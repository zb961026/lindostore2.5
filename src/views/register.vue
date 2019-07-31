<template>
<div id="login_container">
  <router-link to="./login" tag="h2">欢迎注册</router-link>
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import fromval from '../js/formValidator.js'
export default {
    name: 'register',
    data() {
            var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          phone: '',
          pass:'',
          checkpass:''
        },
        rules: {
          phone: [{
            validator: phone
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get("http://39.100.154.113:3000/api/register",{params:this.ruleForm}).then(res=>{
              if(res.success=true)
              {
              this.$alert('注册成功,快去登录吧','提示信息',{
                confirmButtonText:'确定',
                callback:action=>{
                  this.$message({
                    type:info,
                    message:`action: ${ action }`
                  })
                }
              })
              this.$router.replace('/login')
              }
              else{
                this.$alert('用户已存在,','提示信息',{
                confirmButtonText:'确定',
                callback:action=>{
                  this.$message({
                    type:info,
                    message:`action: ${ action }`
                  })
                }
              })
              }
            }).catch(err=>{
              console.log(err)
            })
          }
        });
      },
    }
  }

</script>

<style lang="css" scoped>
#login_container{
  height: 650px;
  background-image: url('http://img.zcool.cn/community/018c755a532c17a80120c2b0d05539.jpg@3000w_1l_2o_100sh.jpg');
  background-repeat: no-repeat;
  background-position: cover
}
h2{
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 2px;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  margin-left: 15rem;
  cursor: pointer;
}
h2:hover{
  color: #ff6700;
}
  .text {    
    width: 500px;
    margin: 6.25rem auto 0 auto;
  }
.el-button{
  width: 25rem
}
</style>