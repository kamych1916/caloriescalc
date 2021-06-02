<template>
  <div>
    <div class="card-temp mt-100">
      <form @submit.prevent="signUp">
        <h3>Регистрация</h3>

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

        <div class="form-group py-16">
          <el-input
            v-model="check_password"
            name="password"
            placeholder="Повторите пароль"
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
            Создать
          </button>
        </div>

        <div class="row d-flex justify-content-end px-0 mx-0">
          <p class="forgot-password mt-2 mb-4">
            Имеете аккаунт ?
            <router-link to="/account/login" style="color: rgb(198, 85, 16);"
              >Авторизация</router-link
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
      password: null,
      check_password: null
    };
  },
  mounted() {
    auth.useDeviceLanguage();
  },
  methods: {
    signUp() {
      if (this.check_password != this.password) {
        alert("пароли не совпадают");
      } else {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            this.$router.push("/account/login");
          })
          .catch(error => alert("🤕" + error.message));
      }
    }
  }
};
</script>
