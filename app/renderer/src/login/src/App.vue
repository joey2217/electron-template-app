<template>
  <div class="container">
    <el-card class="card">
      <template #header>
        <h2>Login</h2>
      </template>
      <el-form ref="formRef" :model="form">
        <el-form-item
          prop="username"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input
            prefix-icon="el-icon-user"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="submit" @click="onSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { login, LoginData } from "./api/user";
const { ipcRenderer } = window.require('electron')

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const formRef = ref(null);
    const form = reactive<LoginData>({
      username: "",
      password: "",
    });
    console.log(formRef);

    const onSubmit = async () => {
      const valid = await formRef.value.validate();
      console.log(valid);
      if (valid) {
        // const res = await login(toRaw(form));
        // console.log(res);
        ipcRenderer.invoke('login-success',{ token : 'token1' })
      }
    };
    return {
      formRef,
      form,
      onSubmit,
    };
  },
});
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
}
.card {
  width: 100%;
  max-width: 500px;
}
.submit {
  width: 100%;
}
@media (prefers-color-scheme: dark) {
  body { background:  #000; color: white; }
}

@media (prefers-color-scheme: light) {
  body { background:  #fff; color: black; }
}
</style>
