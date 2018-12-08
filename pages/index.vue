<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input 
          v-model="form.password" 
          type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="getToken">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { User } from "@/config/api";

const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  layout: "",
  methods: {
    getToken() {
      let vm = this;
      User.userLogin.request(
        this.form,
        res => {
          let token = res.data["token"];
          vm.$store.commit("setAuth", token);
          Cookie.set("auth", token);
          vm.getUserInfo();
        },
        error => {
          if (error.response.data.status_code === 400) {
            vm.$notify.error({ title: "请输入正确的用户名和密码！" });
          } else if (error.response.data.status_code === 403) {
            vm.$notify.error({ title: "您没有登录权限哦！" });
          }
        }
      );
    },
    getUserInfo() {
      let vm = this;
      User.userInfo.request(
        res => {
          let data = res.data;
          if (data) {
            vm.$store.commit("setUser", data);
            vm.$router.push("/reading-list");
          }
        },
        error => {}
      );
    }
  }
};
</script>

<style>
.login {
  width: 500px;
  height: 500px;
  margin: 100px auto;
}
</style>
