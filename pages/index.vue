<template>
  <section class="main">
    <div class="row mx-0">
      <div v-show="titleBlock" class="col-lg px-0">
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
      <slide-x-right-transition>
        <div class="col-lg px-0" v-show="titleBlock || answerBlock">
          <div
            class="d-flex justify-content-center align-items-center py-20"
            style="min-height: 100vh; background-color: rgb(245, 125, 52)"
          >
            <Inputs @calculate="calculate" />
          </div>
        </div>
      </slide-x-right-transition>
      <slide-x-right-transition>
        <div
          class="col-lg px-0 d-block"
          v-if="answerBlock"
          v-show="answerBlock"
        >
          <div class="main-title  d-flex justify-content-center">
            <div
              class="w-100 d-flex justify-content-center"
              style="overflow-x: auto"
            >
              <div style="width:80%; height: fit-content" class=" pt-100 pb-50">
                <CaloriesRes :calResData="calResData" />
                <div class="my-20">
                  Завтрак:
                </div>
                <hooper>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg d-flex">
                        <div class="row">
                          <div class="col-lg">
                            <img
                              draggable="false"
                              style="object-fit: cover;"
                              src="/images/2bludo.png"
                            />
                          </div>
                          <div class="col-lg">
                            <div class="fs-22">
                              Вермешеливый суп
                              <div class="fs-14">
                                макароны, помидор, специи и т.д.
                              </div>
                              <div class="fs-14 pt-10">
                                <button
                                  class="el-button "
                                  style="background: #222; border: none; color: #fff"
                                  @click="emitCalculate()"
                                >
                                  подоробнее
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg">
                        <img
                          draggable="false"
                          style="object-fit: cover;"
                          src="/images/2bludo.png"
                        />
                      </div>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
                <div class="my-20">
                  Обед:
                </div>
                <hooper>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg d-flex">
                        <div class="row">
                          <div class="col-lg">
                            <img
                              draggable="false"
                              style="object-fit: cover;"
                              src="/images/2bludo.png"
                            />
                          </div>
                          <div class="col-lg">
                            <div class="fs-22">
                              Вермешеливый суп
                              <div class="fs-14">
                                макароны, помидор, специи и т.д.
                              </div>
                              <div class="fs-14 pt-10">
                                <button
                                  class="el-button "
                                  style="background: #222; border: none; color: #fff"
                                  @click="emitCalculate()"
                                >
                                  подоробнее
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg">
                        <img
                          draggable="false"
                          style="object-fit: cover;"
                          src="/images/2bludo.png"
                        />
                      </div>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
                <div class="my-20">
                  Ужин:
                </div>
                <hooper>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg d-flex">
                        <div class="row">
                          <div class="col-lg">
                            <img
                              draggable="false"
                              style="object-fit: cover;"
                              src="/images/2bludo.png"
                            />
                          </div>
                          <div class="col-lg">
                            <div class="fs-22">
                              Вермешеливый суп
                              <div class="fs-14">
                                макароны, помидор, специи и т.д.
                              </div>
                              <div class="fs-14 pt-10">
                                <button
                                  class="el-button "
                                  style="background: #222; border: none; color: #fff"
                                  @click="emitCalculate()"
                                >
                                  подоробнее
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <slide class="w-100 ">
                    <div class="row">
                      <div class="col-lg">
                        <img
                          draggable="false"
                          style="object-fit: cover;"
                          src="/images/2bludo.png"
                        />
                      </div>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>

                <div class="w-100 mt-50">
                  <button
                    class="el-button "
                    style="background: #222; border: none; color: #fff"
                  >
                    <i class="bi bi-save"></i> &nbsp; Сохранить данные
                  </button>
                </div>
              </div>
            </div>

            <div class="triangle-left "></div>
          </div>
        </div>
      </slide-x-right-transition>
    </div>
  </section>
</template>

<script>
import { SlideXLeftTransition, SlideXRightTransition } from "vue2-transitions";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    SlideXLeftTransition,
    SlideXRightTransition
  },
  data() {
    return {
      titleBlock: true,
      answerBlock: false,

      calResData: {}
    };
  },
  methods: {
    calculate(data) {
      this.titleBlock = false;
      this.answerBlock = true;

      this.calResData = data;
    }
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
      top: 50%;
      left: -9px;
      z-index: 2;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid #fff;
      border-bottom: 10px solid transparent;
    }
    .hooper {
      height: auto !important;
    }
  }
  .gallery-thumb {
    height: 130px !important;
    .hooper-slide {
      padding: 15px 10px !important;
    }
  }
  @media screen and (max-width: 1024px) {
    overflow: auto !important;
  }
}
</style>
