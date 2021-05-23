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
        <div class="col-lg px-0" v-show="answerBlock">
          <div
            class="main-title  d-flex justify-content-center align-items-center"
          >
            <div class="row" style="width:80%;">
              <div class="col-lg ">
                <div class="d-flex align-items-end">
                  <h1 style="font-size: 3rem; line-height: 1;">
                    <client-only>
                      <animated-number
                        :value="caloriesResult"
                        :formatValue="formater"
                        :duration="700"
                      />
                    </client-only>
                  </h1>
                  <h2 class="fs-22">
                    &nbsp; ккал/день
                  </h2>
                </div>
                <span class="text-light fs-14">
                  Рекомендуемое количество <b> калорий в день</b>
                </span>
              </div>
              <div class="col-lg">
                <div
                  class="fs-22 pb-5 mb-5"
                  style="border-bottom: 6px solid #000"
                >
                  МИКРОЭЛЕМЕНТЫ
                </div>
                <div
                  class="py-10 d-flex justify-content-between"
                  style="border-bottom: 1px solid #ccc"
                >
                  <span class="fs-14 text-light">
                    Белки
                  </span>
                  <span class="fs-14 text-light">
                    <b>
                      <client-only>
                        <animated-number
                          :value="proteinsResult"
                          :formatValue="formater"
                          :duration="1000"
                        />
                      </client-only>
                      г
                    </b>
                    /
                    <client-only>
                      <animated-number
                        :value="pProteins"
                        :formatValue="formater"
                        :duration="1000"
                      />
                    </client-only>
                    %
                  </span>
                </div>
                <div
                  class="py-10 d-flex justify-content-between"
                  style="border-bottom: 1px solid #ccc"
                >
                  <span class="fs-14 text-light">
                    Жиры
                  </span>
                  <span class="fs-14 text-light">
                    <b>
                      <client-only>
                        <animated-number
                          :value="fatsResult"
                          :formatValue="formater"
                          :duration="1000"
                        />
                      </client-only>
                      г
                    </b>
                    /
                    <client-only>
                      <animated-number
                        :value="pFats"
                        :formatValue="formater"
                        :duration="1000"
                      />
                    </client-only>
                    %
                  </span>
                </div>
                <div
                  class="py-10 d-flex justify-content-between"
                  style="border-bottom: 1px solid #ccc"
                >
                  <span class="fs-14 text-light">
                    Углеводы
                  </span>
                  <span class="fs-14 text-light">
                    <b>
                      <client-only>
                        <animated-number
                          :value="carbohydratesResult"
                          :formatValue="formater"
                          :duration="1000"
                        />
                      </client-only>
                      г
                    </b>
                    /
                    <client-only>
                      <animated-number
                        :value="pCarbohydrates"
                        :formatValue="formater"
                        :duration="1000"
                      />
                    </client-only>
                    %
                  </span>
                </div>
              </div>
            </div>
            <div class="triangle-left d-none d-sm-flex"></div>
          </div>
        </div>
      </slide-x-right-transition>
    </div>
    <!-- <slide-x-right-transition>
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
    </slide-x-right-transition> -->
  </section>
</template>

<script>
import { SlideXLeftTransition, SlideXRightTransition } from "vue2-transitions";
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    SlideXLeftTransition,
    SlideXRightTransition,
    AnimatedNumber
  },
  data() {
    return {
      titleBlock: true,
      answerBlock: false,
      caloriesResult: 0,
      proteinsResult: 0,
      fatsResult: 0,
      carbohydratesResult: 0,
      pProteins: 0,
      pFats: 0,
      pCarbohydrates: 0
    };
  },
  methods: {
    calculate(data) {
      this.titleBlock = false;
      this.answerBlock = true;

      this.caloriesResult = data.calories;

      this.proteinsResult = data.proteins;
      this.fatsResult = data.fats;
      this.carbohydratesResult = data.carbohydrates;

      let sum =
        this.proteinsResult + this.fatsResult + this.carbohydratesResult;

      this.pProteins = Math.trunc(100 * (this.proteinsResult / sum));
      this.pFats = Math.trunc(100 * (this.fatsResult / sum));
      this.pCarbohydrates = Math.trunc(100 * (this.carbohydratesResult / sum));
    },

    formater(value) {
      return Number(value).toFixed(0);
    }
  }
};
</script>

<style lang="scss">
.main {
  overflow: hidden !important;
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
  @media screen and (max-width: 1024px) {
    overflow: auto !important;
  }
}
</style>
