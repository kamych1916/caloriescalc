<template>
  <div class="mt-100 container">
    <div>
      мои аккаунт <button class="el-button" @click="signOut">выход</button
      ><button class="el-button" @click="createMeds">выход</button>
    </div>
  </div>
</template>

<script>
import { createMeds, getMeds } from "@/plugins/firebase";
import { auth } from "@/plugins/firebase";
export default {
  mounted() {
    getMeds("mushrooms").then(data => {
      console.log(data);
    });
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    },
    createMeds() {
      createMeds({
        kekumsdfsdfba: {
          title: "sdfsdxxxx",
          kilocalories: 16,
          carbohydrates: 0.5,
          fats: 0.5,
          proteins: 2.3
        }
      });
    }
  }
};
</script>

<style></style>
