<template>
  <section class="main">
    <slide-x-left-transition>
      <div class="row mx-0" v-show="show">
        <div class="col-lg px-0">
          <div
            class="main-title text-center d-flex justify-content-center align-items-center"
          >
            <div>
              <i
                class="bi bi-calculator"
                style="font-size: 3rem; color: rgb(245, 125, 52);"
              ></i>
              <h1 style="font-size: 3rem; line-height: 1;">
                калькулятор <br />
                калорий
              </h1>
              <br />
              <span>
                Рассчитайте оптимальное соотношение калорий для вашего тела.<br />
                Введите свой возраст, рост, вес, пол и уровень активности.
              </span>
            </div>
            <div class="triangle d-none d-sm-flex"></div>
          </div>
        </div>
        <div class="col-lg px-0">
          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100vh; background-color: rgb(245, 125, 52)"
          >
            <div style="width:80%;">
              <div class="text-white fs-28">Характеристики вашего тела</div>
              <div class="row radio-types mt-20">
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="male" />
                    <span class="radio-btn w-100 py-30">
                      <h3>мужчина</h3>
                    </span>
                  </label>
                </div>
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="female" />
                    <span class="radio-btn w-100 py-30">
                      <h3>женщина</h3>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row mt-20">
                <div class="col">
                  <el-input placeholder="Возраст" v-model="name"></el-input>
                </div>
                <div class="col">
                  <el-input placeholder="Вес" v-model="name"></el-input>
                </div>
                <div class="col">
                  <el-input placeholder="Рост" v-model="name"></el-input>
                </div>
              </div>
              <div class="text-white fs-28 mt-20">Уровень активности</div>
              <!-- <button @click="show = !show">lol</button> -->
            </div>
          </div>
        </div>
      </div>
    </slide-x-left-transition>
    <slide-x-right-transition>
      <div class="row mx-0" v-show="!show">
        <div class="col-lg px-0">
          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 100vh; background-color: rgb(238 111 0);"
          >
            <button @click="show = !show">lol</button>
          </div>
        </div>
        <div class="col-lg px-0">
          <div
            class="main-title text-center d-flex justify-content-center align-items-center"
          >
            <div>
              <i
                class="bi bi-speedometer2"
                style="font-size: 3rem; color: rgb(238 111 0);"
              ></i>
              <h1 style="font-size: 3rem; line-height: 1;">
                калькулятор <br />
                коллорий
              </h1>
              <br />
              <span>
                Рассчитайте оптимальное соотношение коллорий для вашего тела.<br />
                Введите свой возраст, рост, вес, пол и уровень активности.
              </span>
            </div>
            <div class="triangle-left d-none d-sm-flex"></div>
          </div>
        </div>
      </div>
    </slide-x-right-transition>
  </section>
</template>

<script>
import { SlideXLeftTransition, SlideXRightTransition } from "vue2-transitions";
export default {
  components: {
    SlideXLeftTransition,
    SlideXRightTransition
  },
  data() {
    return {
      name: "",
      show: true
    };
  }
};
</script>

<style lang="scss">
.main {
  overflow-y: hidden !important;
  height: 100%;
  width: 100%;
  .main-title {
    height: 100vh;
    position: relative;
    .triangle {
      right: -9px;
      z-index: 2;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 10px solid #fff;
      border-bottom: 10px solid transparent;
    }
    .triangle-left {
      left: -9px;
      z-index: 2;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid #fff;
      border-bottom: 10px solid transparent;
    }
  }
}
</style>
