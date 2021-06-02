<template>
  <div class="my-100 container">
    <div
      class="card-temp mt-30 mb-0 py-20 w-100"
      style="background-color: rgb(245, 125, 52)"
      ref="isEnterCalroies"
    >
      <h2>
        Дневник питания
      </h2>
    </div>

    <div
      class="card-temp my-50 pt-30 pb-20 mx-0 d-flex justify-content-between w-100"
    >
      <div class="fs-22 mb-20 ">
        Ваша суточная норма калорий:
        <span class="fs-28 text-orange"> 1300 </span>
      </div>
      <div class="fs-22 ">
        Итого калорий за день:<span class="fs-28 text-orange">
          {{ dailyCalories }}</span
        >
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div
          class="card-temp my-20 pt-0 px-0 pb-0 w-100 sticky"
          style="max-height: 535px"
        >
          <div
            class="w-100  p-14"
            style="background-color: rgb(245, 125, 52); border-radius: 8px 8px 0px 0px"
          >
            Категории продуктов
          </div>
          <div class="w-100" v-for="(item, i) in categories" :key="i">
            <el-button
              v-if="i == categories.length - 1"
              class="el-button items-wrap py-14 px-14"
              :class="{ 'items-wrap-active': i === isCategActive }"
              style="border-radius: 0px 0px 8px 8px"
              type="text"
              @click="getProducts(item, i)"
            >
              {{ item }}
            </el-button>
            <el-button
              v-else
              class="el-button items-wrap py-14 px-14"
              :class="{ 'items-wrap-active': i === isCategActive }"
              type="text"
              style="border-bottom: 1px solid #ccc;"
              @click="getProducts(item, i)"
            >
              {{ item }}
            </el-button>
          </div>
        </div>
      </div>
      <div class="col-lg-8" ref="products">
        <div class="card-temp my-20 pt-0 px-0 w-100" style="height: 20+0px">
          <div
            class="w-100  p-14"
            style="background-color: rgb(245, 125, 52); border-radius: 8px 8px 0px 0px"
          >
            Продукты
          </div>
          <div v-if="products">
            <div class="mx-0 p-14 row" v-if="Object.keys(products).length > 0">
              <div class="col-lg-6" v-for="(item, i) in products" :key="i">
                <div
                  class="card-temp p-20 w-100 my-14 cursor items-wrap border-rad-10"
                  style="box-shadow: 0px 0px 5px #e2e2e2;"
                  @click="openDialog(item)"
                >
                  <div>
                    <div>
                      <span class="fs-18 text-orange">{{ item.title }}</span>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 fs-14">
                        Ккал: {{ item.kilocalories }}
                      </div>
                      <div class="col-lg-6 fs-14">
                        Углеводы: {{ item.carbohydrates }}
                      </div>
                      <div class="col-lg-6 fs-14">Жиры: {{ item.fats }}</div>
                      <div class="col-lg-6 fs-14">
                        Белки: {{ item.proteins }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-0 p-14 row" v-else>список пуст</div>
          </div>
        </div>
        <div
          v-if="dialogProduct"
          class="dialog d-flex justify-content-center align-items-center"
          :class="[dialogProduct ? 'dialog-active' : '']"
        >
          <div class="card-temp pb-30" style="box-shadow: none">
            <div class="row">
              <div class="col-lg d-flex justify-content-between">
                <div class="fs-18">Добавить в меню</div>
                <div @click="dialogProduct = false" class="cursor">
                  <i class="bi bi-x fs-18"></i>
                </div>
              </div>
              <!-- {{ productItem.title }} -->
            </div>
            <div class="row">
              <div class="col">
                <div class="my-14">
                  <div>
                    <span class="fs-18 text-orange">{{
                      productItem.title
                    }}</span>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 fs-14">
                      Ккал: {{ productItem.kilocalories }}
                    </div>
                    <div class="col-lg-6 fs-14">
                      Углеводы: {{ productItem.carbohydrates }}
                    </div>
                    <div class="col-lg-6 fs-14">
                      Жиры: {{ productItem.fats }}
                    </div>
                    <div class="col-lg-6 fs-14">
                      Белки: {{ productItem.proteins }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg px-14">
                    <div class="form-group my-10 w-100">
                      <el-input
                        required
                        v-model="enterCalories"
                        placeholder="Введите количество грамм"
                        clearable
                        type="text"
                        minlength="2"
                        maxlength="15"
                        mini
                      >
                      </el-input>
                    </div>
                  </div>
                  <button
                    class="el-button my-10 mx-14 py-14"
                    style="background: #222; border: none; color: #fff"
                    @click="addCalroies"
                  >
                    добавить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="backdrop cursor" @click="dialogProduct = false"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createProducts, getProducts, getCategories } from "@/plugins/firebase";

import NTFS from "~/utils/notifications";

export default {
  data() {
    return {
      categories: null,
      products: null,
      isCategActive: null,
      isLoadCategories: false,
      dialogProduct: false,
      productItem: null,

      enterCalories: null,
      dailyCalories: 0
    };
  },
  mounted() {
    this.categories = getCategories();
  },
  methods: {
    openDialog(item) {
      this.productItem = item;
      this.dialogProduct = true;
    },
    getProducts(item, i) {
      this.isCategActive = i;
      getProducts(item).then(data => {
        this.products = data;
        this.$refs.products.scrollIntoView({ behavior: "smooth" });
      });
    },
    addCalroies() {
      this.dialogProduct = false;
      this.dailyCalories =
        Number(this.dailyCalories) + Number(this.enterCalories);
      this.enterCalories = null;
      this.$refs.isEnterCalroies.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
.items-wrap {
  display: flex;
  width: 100%;
  text-align: start;
  border-radius: 0;
  color: black;
  transition: all ease 0.2s;
  &:hover,
  &:active,
  &:focus {
    background: rgb(25, 24, 24);
    color: white;
  }
}
.items-wrap.items-wrap-active {
  background: rgb(25, 24, 24);
  color: white;
}

.dialog {
  background-color: transparent;
}
.backdrop {
  z-index: -1;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(000, 000, 000, 0.5);
}
</style>
