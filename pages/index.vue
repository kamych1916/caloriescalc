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
            class="d-flex justify-content-center align-items-center py-20"
            style="min-height: 100vh; background-color: rgb(245, 125, 52)"
          >
            <div style="width:80%;">
              <div class="text-white fs-28 mt-40">
                Характеристики вашего тела
              </div>
              <div class="row radio-types mt-10">
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="male" v-model="picked_gender" />
                    <span class="radio-btn w-100 py-30">
                      <h3>мужчина</h3>
                    </span>
                  </label>
                </div>
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input
                      type="radio"
                      value="female"
                      v-model="picked_gender"
                    />
                    <span class="radio-btn w-100 py-30">
                      <h3>женщина</h3>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row mt-10">
                <div class="col-lg my-10">
                  <el-input placeholder="Возраст" v-model="age"></el-input>
                </div>
                <div class="col-lg my-10">
                  <el-input placeholder="Вес" v-model="weight"></el-input>
                </div>
                <div class="col-lg my-10">
                  <el-input placeholder="Рост" v-model="height"></el-input>
                </div>
              </div>
              <div class="text-white fs-28 mt-10">Уровень активности</div>
              <div class="row radio-types-circle mt-10">
                <div class="col mr-0 pr-0 d-flex align-items-center">
                  <label class="custom-radio">
                    <input
                      type="radio"
                      value="male"
                      v-model="picked_activity"
                    />
                    <span></span>
                  </label>
                  <div
                    class="w-100 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                </div>
                <div class="col mx-0 px-0 d-flex align-items-center">
                  <div
                    class="w-50 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                  <label class="custom-radio">
                    <input type="radio" value="kek" v-model="picked_activity" />
                    <span></span>
                  </label>
                  <div
                    class="w-100 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                </div>
                <div class="col mx-0 px-0 d-flex align-items-center">
                  <div
                    class="w-100 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                  <label class="custom-radio">
                    <input type="radio" value="lol" v-model="picked_activity" />
                    <span></span>
                  </label>
                  <div
                    class="w-50 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                </div>
                <div class="col ml-0 pl-0 d-flex align-items-center">
                  <div
                    class="w-100 py-1"
                    style="background: rgb(198, 85, 16);"
                  ></div>
                  <label class="custom-radio">
                    <input
                      type="radio"
                      value="cheburek"
                      v-model="picked_activity"
                    />
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="row ">
                <div class="col">
                  <div class="fs-14 radio-title">Слабое</div>
                </div>
                <div class="col mx-0 px-0 d-flex">
                  <div class="w-50"></div>
                  <div style="margin-left: -20px" class="fs-14 radio-title">
                    Среднее
                  </div>
                  <div class="w-100"></div>
                </div>
                <div class="col mx-0 px-0 d-flex">
                  <div class="w-100"></div>
                  <div class="fs-14 radio-title">Высокое</div>
                  <div class="w-50"></div>
                </div>
                <div class="col ml-0 pl-0 d-flex">
                  <div class="w-100"></div>
                  <div class="fs-14 radio-title">Хардкор</div>
                </div>
              </div>
              <div class="text-white fs-28 mt-20">Цель</div>
              <div class="row radio-types mt-10">
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="male" v-model="picked_deal" />
                    <span class="radio-btn w-100 py-30">
                      <h4>похудеть</h4>
                    </span>
                  </label>
                </div>
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="female" v-model="picked_deal" />
                    <span class="radio-btn w-100 py-30">
                      <h4>тонус</h4>
                    </span>
                  </label>
                </div>
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="female" v-model="picked_deal" />
                    <span class="radio-btn w-100 py-30">
                      <h4>удержать</h4>
                    </span>
                  </label>
                </div>
                <div class="col-lg">
                  <label class="custom-radio w-100 ">
                    <input type="radio" value="female" v-model="picked_deal" />
                    <span class="radio-btn w-100 py-30">
                      <h4>набрать</h4>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row mt-20">
                <div class="col d-flex justify-content-between ">
                  <div>почистить</div>
                  <button
                    class="el-button el--button-primary text-white px-50"
                    style="background: black; border: none"
                    @click="show = !show"
                  >
                    рассчитать
                  </button>
                </div>
              </div>
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
      age: "",
      weight: "",
      height: "",
      show: true,
      picked_deal: "kek"
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
  .radio-types-circle {
    .custom-radio {
      display: flex;
      cursor: pointer;
      user-select: none;
      text-align: left;
      input {
        display: none;
        & + span {
          display: block;
          position: relative;
          &:before {
            content: "";
            display: block;
            border-radius: 100%;
            width: 30px;
            height: 30px;
            border: 1px solid rgb(198, 85, 16);
            background: transparent;
          }
          &:after {
            content: "";
            display: block;
            width: 19px;
            height: 19px;
            background: #222;
            position: absolute;
            border-radius: 100%;
            top: 5px;
            left: 5.7px;
            opacity: 0;
            transform: scale(0, 0);
            transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
          }
        }
        &:checked + span:after {
          opacity: 1;
          transform: scale(1, 1);
        }
      }
    }
  }
}
</style>
