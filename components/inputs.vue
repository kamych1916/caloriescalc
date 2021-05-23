<template>
  <div style="width:80%;">
    <div class="text-white fs-28 mt-40">
      Характеристики вашего тела
    </div>
    <div class="row radio-types mt-10">
      <div class="col-lg">
        <label class="custom-radio w-100 ">
          <input type="radio" value="male" v-model="data.picked_gender" />
          <span class="radio-btn w-100 py-30">
            <h3>мужчина</h3>
          </span>
        </label>
      </div>
      <div class="col-lg">
        <label class="custom-radio w-100 ">
          <input type="radio" value="female" v-model="data.picked_gender" />
          <span class="radio-btn w-100 py-30">
            <h3>женщина</h3>
          </span>
        </label>
      </div>
    </div>
    <div class="row mt-10">
      <div class="col-lg my-10">
        <el-input placeholder="Возраст" v-model="data.age"> </el-input>
      </div>
      <div class="col-lg my-10">
        <el-input placeholder="Вес" v-model="data.weight">
          <span style="color: rgb(198, 85, 16)" slot="suffix">
            кг
          </span>
        </el-input>
      </div>
      <div class="col-lg my-10">
        <el-input placeholder="Рост" v-model="data.height">
          <span style="color: rgb(198, 85, 16)" slot="suffix">
            см
          </span>
        </el-input>
      </div>
    </div>
    <div class="text-white fs-28 mt-10">Уровень активности</div>
    <div class="row radio-types-circle mt-10">
      <div class="col mr-0 pr-0 d-flex align-items-center">
        <label class="custom-radio">
          <input type="radio" :value="1.375" v-model="data.picked_activity" />
          <span></span>
        </label>
        <div class="w-100 py-1" style="background: rgb(198, 85, 16);"></div>
      </div>
      <div class="col mx-0 px-0 d-flex align-items-center">
        <div class="w-50 py-1" style="background: rgb(198, 85, 16);"></div>
        <label class="custom-radio">
          <input type="radio" :value="1.55" v-model="data.picked_activity" />
          <span></span>
        </label>
        <div class="w-100 py-1" style="background: rgb(198, 85, 16);"></div>
      </div>
      <div class="col mx-0 px-0 d-flex align-items-center">
        <div class="w-100 py-1" style="background: rgb(198, 85, 16);"></div>
        <label class="custom-radio">
          <input type="radio" :value="1.725" v-model="data.picked_activity" />
          <span></span>
        </label>
        <div class="w-50 py-1" style="background: rgb(198, 85, 16);"></div>
      </div>
      <div class="col ml-0 pl-0 d-flex align-items-center">
        <div class="w-100 py-1" style="background: rgb(198, 85, 16);"></div>
        <label class="custom-radio">
          <input type="radio" :value="1.9" v-model="data.picked_activity" />
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
        <div class="fs-14 radio-title">Экстра</div>
      </div>
    </div>
    <div class="text-white fs-28 mt-20">Цель</div>
    <div class="row radio-types mt-10">
      <div class="col-lg">
        <label class="custom-radio w-100 ">
          <input type="radio" value="lose" v-model="data.picked_deal" />
          <span class="radio-btn w-100 py-30">
            <h4>похудеть</h4>
          </span>
        </label>
      </div>
      <div class="col-lg">
        <label class="custom-radio w-100 ">
          <input type="radio" value="maintain" v-model="data.picked_deal" />
          <span class="radio-btn w-100 py-30">
            <h4>удержать</h4>
          </span>
        </label>
      </div>
      <div class="col-lg">
        <label class="custom-radio w-100 ">
          <input type="radio" value="gain" v-model="data.picked_deal" />
          <span class="radio-btn w-100 py-30">
            <h4>набрать</h4>
          </span>
        </label>
      </div>
    </div>
    <div class="row mt-20">
      <div class="col d-flex justify-content-between ">
        <div class="cursor" @click="clearData()">почистить</div>
        <button
          class="el-button px-50"
          style="background: #222; border: none; color: #fff"
          @click="emitCalculate()"
        >
          рассчитать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NTFS from "~/utils/notifications";
export default {
  data() {
    return {
      data: {
        age: "",
        weight: "",
        height: "",
        picked_gender: "",
        picked_deal: "",
        picked_activity: ""
      }
    };
  },
  methods: {
    emitCalculate() {
      if (
        this.data.age &&
        this.data.weight &&
        this.data.height &&
        this.data.picked_gender &&
        this.data.picked_deal &&
        this.data.picked_activity
      ) {
        let result = 0;
        if (this.data.picked_gender == "male") {
          result =
            (10 * this.data.weight +
              6.25 * this.data.height -
              5 * this.data.age +
              5) *
            this.data.picked_activity;
        } else {
          result =
            (10 * this.data.weight +
              6.25 * this.data.height -
              5 * this.data.age -
              161) *
            this.data.picked_activity;
        }
        if (this.data.picked_deal === "lose") {
          result = result - result * 0.1;
        } else if (this.data.picked_deal === "gain") {
          result = result + result * 0.3;
        }
        // let proteins = result / 6 / 4;
        // let fats = result / 6 / 9;
        // let carbohydrates = ((result / 6) * 4) / 4;
        let proteins = (result * 0.3) / 6.2;
        let fats = (result * 0.3) / 8;
        let carbohydrates = (result * 0.4) / 4;
        let data = {
          calories: Math.trunc(result),
          proteins: Math.trunc(proteins),
          fats: Math.trunc(fats),
          carbohydrates: Math.trunc(carbohydrates)
        };
        this.$emit("calculate", data);
      } else {
        NTFS.getInstance().NTFS(
          "Информация",
          "Для рассчета необходимо заполнить все поля",
          "warning"
        );
      }
    },
    clearData() {
      this.data = {
        age: "",
        weight: "",
        height: "",
        picked_gender: "",
        picked_deal: "",
        picked_activity: ""
      };
    }
  }
};
</script>

<style lang="scss">
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
</style>
