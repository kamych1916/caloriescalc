<template>
  <div class="my-100 container">
    <div
      class="card-temp mt-30 mb-0 py-20 w-100"
      style="background-color: rgb(245, 125, 52)"
    >
      <h2>
        Личный кабинет
      </h2>
    </div>

    <div class="card-temp my-50 pt-30 pb-40  w-100">
      <div class="fs-22 mb-20">
        Ваша суточная норма калорий:
        <span class="fs-28 text-orange"> 1300 </span>
      </div>
      <div class="fs-22">
        Итого калорий за день:<span class="fs-28 text-orange"> 500</span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div
          class="card-temp my-20 pt-0 px-0 w-100 sticky"
          style="height: 535px"
        >
          <div
            class="w-100  p-14"
            style="background-color: rgb(245, 125, 52); border-radius: 8px 8px 0px 0px"
          >
            Категории продуктов
          </div>
          <div class="w-100" v-for="(item, i) in categories" :key="i">
            <el-button
              class="el-button items-wrap py-14 px-14"
              type="text"
              style="border-bottom: 1px solid #ccc;"
              @click="getProducts(item)"
            >
              {{ item }}
            </el-button>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card-temp my-20 pt-0 px-0 w-100" style="height: 20+0px">
          <div
            class="w-100  p-14"
            style="background-color: rgb(245, 125, 52); border-radius: 8px 8px 0px 0px"
          >
            Продукты
          </div>
          <div class="mx-0 p-14 row">
            <div class="col-lg-6" v-for="(item, i) in products" :key="i">
              <div
                class="card-temp p-20 w-100 my-14 cursor items-wrap border-rad-10"
                style="box-shadow: 0px 0px 5px #e2e2e2;"
              >
                <div>
                  <div>
                    <span class="fs-18 text-orange">{{ item.title }}</span>
                  </div>
                  <div>Ккал: {{ item.kilocalories }}</div>
                  <div>Углеводы: {{ item.carbohydrates }}</div>
                  <div>Жиры: {{ item.fats }}</div>
                  <div>Белки: {{ item.proteins }}</div>
                </div>
              </div>
            </div>
          </div>
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
      products: null
    };
  },
  mounted() {
    this.categories = getCategories();
  },
  methods: {
    getProducts(item) {
      getProducts(item).then(data => {
        this.products = data;
      });
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
</style>
