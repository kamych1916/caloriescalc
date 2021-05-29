<template>
  <div class="mt-100 container">
    <div>
      мои аккаунт <button class="el-button" @click="signOut">выход</button>
    </div>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
export default {
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style></style>
