<template>
  <div>
    <div class="card-temp mt-100">
      <form @submit.prevent="signIn">
        <h3>Авторизация</h3>

        <div class="form-group py-16">
          <el-input
            v-model="email"
            name="email"
            placeholder="E-mail адрес"
            auto-complete
            required
            clearable
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          ></el-input>
        </div>

        <div class="form-group py-16">
          <el-input
            v-model="password"
            name="password"
            placeholder="Пароль"
            required
            show-password
            type="password"
            pattern=".{8,}"
            title="Пароль должен составлять из 8 или более символов"
          ></el-input>
        </div>

        <div class="pt-10">
          <button
            class="el-button el-button--warning py-12 w-100"
            type="submit"
          >
            Войти
          </button>
        </div>

        <div class="row d-flex justify-content-end px-0 mx-0">
          <p class="forgot-password mt-2 mb-4">
            Нет аккаунта ?
            <router-link to="/account/regist" style="color: rgb(198, 85, 16);"
              >Регистрация</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  mounted() {
    auth.useDeviceLanguage();
  },
  methods: {
    signIn() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.push("/account/" + data.user.uid);
        })
        .catch(error => alert("🤕" + error.message));
    }
  }
};
</script>
