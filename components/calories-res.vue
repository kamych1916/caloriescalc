<template>
  <div class="row d-flex">
    <div class="col-lg ">
      <div class="d-flex align-items-end">
        <h1 style="font-size: 3rem; line-height: 1;">
          <client-only>
            <animated-number
              :value="calResData.calories || 0"
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
      <div class="fs-22 pb-5 mb-5" style="border-bottom: 6px solid #000">
        МАКРОЭЛЕМЕНТЫ
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
                :value="calResData.proteins"
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
                :value="calResData.fats"
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
                :value="calResData.carbohydrates"
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
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  props: {
    calResData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    sum() {
      return (
        this.calResData.proteins +
        this.calResData.fats +
        this.calResData.carbohydrates
      );
    },
    pProteins() {
      return Math.trunc(100 * (this.calResData.proteins / this.sum));
    },
    pFats() {
      return Math.trunc(100 * (this.calResData.fats / this.sum));
    },
    pCarbohydrates() {
      return Math.trunc(100 * (this.calResData.carbohydrates / this.sum));
    }
  },
  methods: {
    formater(value) {
      return Number(value).toFixed(0);
    }
  }
};
</script>

<style></style>
