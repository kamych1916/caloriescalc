<template>
  <header class="header">
    <div class="container d-flex justify-content-between ">
      <nuxt-link
        to="/"
        class="d-flex align-items-center fs-22 cursor text-black"
      >
        youcalories
      </nuxt-link>
      <div class="d-flex align-items-center">
        <!-- <nuxt-link to="/" class="px-20 cursor text-black">
          Журнал
        </nuxt-link> -->
        <!-- <div @click="checkAccess()" v-if="!isLogin" class="px-20 cursor">
          <i class="bi bi-person-circle mr-10"></i>
          Войти
        </div> -->

        <el-button
          v-if="!loggedIn"
          @click="checkAccess()"
          type="text"
          class="text-black"
        >
          <i class="bi bi-person-circle"></i>
          <span class="ml-10">Войти</span>
        </el-button>
        <el-popover v-else width="160" placement="top" class="ml-10">
          <div>
            <nuxt-link :to="'/account/' + this.uid">
              <div class="w-100 my-10" style="color: rgb(245, 125, 52)">
                Личный кабинет
              </div>
            </nuxt-link>
            <nuxt-link v-if="isAdmin" to="/account/admin">
              <div class="w-100 my-10" style="color: rgb(245, 125, 52)">
                Панель админа
              </div>
            </nuxt-link>
            <div
              class="pt-10 w-100 cursor"
              style="border-top: 1px solid #ccc;"
              @click="signOut()"
            >
              Выйти
            </div>
          </div>
          <el-button slot="reference" type="text" class="text-black">
            <i class="bi bi-person-circle"></i>
            <span class="ml-10">Аккаунт</span>
          </el-button>
        </el-popover>
      </div>
      <!-- <div class="sidebarToggle text-white" @click="eventSidebar()">
        <i class="bi bi-list"></i>
      </div>
      <div :class="[showSidebar ? 'sidebarActive' : '', 'sidebar']">
        <div class=" p-16 text-white">
          <div
            @click="eventSidebar()"
            class="close-sidebar nav-link text-white d-flex justify-content-center"
          >
            <i class="bi bi-x-circle mr-8 pb-20"></i>
          </div>
          <div class="d-flex flex-column justify-content-start">
            <nuxt-link to="/" class="px-20 text-white cursor py-20">
              Журнал
            </nuxt-link>
            <nuxt-link to="/" class="px-20 text-white cursor py-20">
              Аккаунт
            </nuxt-link>
            <div v-if="loggedIn" class="px-20 text-white cursor py-20">
              Выход
            </div>
            <div else class="px-20 text-white cursor py-20">
              Непонятно
            </div>
          </div>
        </div>
      </div>
      <div class="backdrop" v-if="showSidebar" @click="eventSidebar()"></div> -->
    </div>
  </header>
</template>

<script>
import { auth } from "@/plugins/firebase";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      showSidebar: false,
      loggedIn: false,
      uid: null,
      isAdmin: false
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    eventSidebar() {
      this.showSidebar = !this.showSidebar;
      if (window.screen.width < 1024) {
        if (this.showSidebar) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    },
    setupFirebase() {
      auth.onAuthStateChanged(user => {
        if (user) {
          auth.currentUser
            .getIdToken(true)
            .then(token => Cookies.set("access_token", token));
          this.loggedIn = true;
          this.uid = user.uid;
          if (
            user.uid == "oRUuocif00RiDEf4DCJhg4bkEtW2" ||
            user.uid == "ExfsnQeLtrdHIDp93tx0Lrx66p83"
          ) {
            this.isAdmin = true;
          }
        } else {
          Cookies.remove("access_token");
          this.loggedIn = false;
        }
      });
    },
    checkAccess() {
      if (this.loggedIn) {
        this.$router.push("/account/" + this.uid);
      } else {
        this.$router.push("/account/login");
      }
    },
    signOut() {
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    }
    // changeBtnLogin() {
    //   if (this.getCookie("session_token")) {
    //     this.isLogin = true;
    //   } else {
    //     this.isLogin = false;
    //   }
    // }
  }
};
</script>

<style lang="scss">
header {
  top: 0;
  left: 0;
  background-color: #fff;
  position: fixed !important;
  width: 100%;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 10px;
  box-shadow: 0 1px 2px #dcdcdc;
  .sidebarToggle {
    display: none;
  }
  .sidebar {
    transition: all 0.6s;
    word-wrap: break-word;
    background-color: #000 !important;
    height: 100vh;
    width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    background-size: cover;
    background-position: 50%;
    display: none;
  }
  .sidebarActive {
    transition: all 0.6s;
    left: 0 !important;
  }
  .close-sidebar {
    display: none !important;
  }
  .backdrop {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    transition: all ease 1s;
    opacity: 0;
  }

  .nav li {
    text-align: start;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    .content {
      padding-left: 1rem;
    }
    .sidebar {
      display: block;
      left: -300px;
    }
    .sidebarToggle {
      display: block;
    }
    .close-sidebar {
      display: flex !important;
    }
    .backdrop {
      opacity: 0.2;
    }
  }
}
// .header {
//   background: white;
//   padding: 10px;
//   box-shadow: 0 2px 3px #dcdcdc;
//   .header-btn {
//     padding: 10px 20px;
//     color: #fff;
//     text-decoration: none;
//     border-radius: 35px;
//     transition: 0.2s;
//     background-color: #3a8ee6;
//     &:hover {
//       background-color: #66b1ff;
//     }
//   }
//   .events-text {
//     display: inline;
//   }
//   @media (max-width: 767px) {
//     .events-text {
//       display: none;
//     }
//   }
// }
</style>
