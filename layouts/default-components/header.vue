<template>
  <header class="header">
    <div class="container d-flex justify-content-between ">
      <nuxt-link
        to="/"
        class="d-flex align-items-center fs-22 text-white cursor text-black"
      >
        CaloriesCalc
      </nuxt-link>
      <div class="d-none d-sm-flex align-items-center">
        <nuxt-link to="/" class="px-20 text-white cursor text-black">
          Журнал
        </nuxt-link>
        <nuxt-link to="/" class="px-20 text-white cursor text-black">
          Аккаунт
        </nuxt-link>
      </div>
      <div class="sidebarToggle text-white" @click="eventSidebar()">
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
          </div>
        </div>
      </div>
      <div class="backdrop" v-if="showSidebar" @click="eventSidebar()"></div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false
    };
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
    }
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
