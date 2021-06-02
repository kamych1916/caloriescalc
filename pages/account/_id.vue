<template>
  <div class="my-100 container">
    <div
      class="card-temp mt-30 mb-0 py-10 w-100 d-sm-block d-lg-flex justify-content-between"
      style="background-color: rgb(245, 125, 52)"
      ref="isEnterCalroies"
    >
      <div class="fs-22 mt-10 mb-20">
        Дневник питания
      </div>
      <div class="fs-22 ">
        Ваша суточная норма калорий:
        <span class="fs-28 text-white"> {{ summaryCalories }} </span>
      </div>
    </div>
    <div v-if="summaryCalories == 0">
      <div class="card-temp mt-30 mb-0 pt-10 pb-50 w-100 text-center">
        <div class="my-20">
          <i
            class="bi bi-exclamation-triangle text-orange"
            style="font-size: 3rem"
          ></i>
        </div>
        <div class="my-20">
          Для корректного ведения дневника питания, Вам необходим<br />
          расчёт суточной калорийности.
        </div>
        <nuxt-link to="/" class="text-orange my-20 mb-20">
          перейти к расчёту
        </nuxt-link>
      </div>
    </div>
    <div v-else>
      <div v-if="storeProducts">
        <div
          v-if="Object.keys(storeProducts).length > 0"
          class="card-temp mt-50 mb-30 pt-30 pb-20 px-10  w-100"
        >
          <div class="fs-22 mb-10 px-14">
            Итого за день:
            <span class="fs-28 text-orange">
              {{ Number(productKilokal).toFixed(0) }}
            </span>
            ккал (
            <span class="fs-14 ">
              жиры:
              <span class="fs-18 text-orange">{{
                Number(productFats).toFixed(1)
              }}</span>
              , углеводы:
              <span class="fs-18 text-orange">
                {{ Number(productCarbohydrates).toFixed(1) }}
              </span>
              , белки:
              <span class="fs-18 text-orange">{{
                Number(productProteins).toFixed(1)
              }}</span>
            </span>
            ) на
            <span class="fs-28 text-orange">
              {{ Number(productGram).toFixed(0) }}
            </span>
            грамм
          </div>
          <div class="row mx-0 w-100 d-sm-block d-lg-flex">
            <div class="col-lg-4" v-for="(item, i) in storeProducts" :key="i">
              <div
                class="card-temp p-20 my-14  items-wrap border-rad-10"
                style="box-shadow: 0px 0px 5px #e2e2e2;"
              >
                <div>
                  <div class="w-100 d-flex justify-content-end">
                    <div class="cursor" @click="deleteItem(item.title)">
                      <i class="bi bi-x fs-18"></i>
                    </div>
                  </div>
                  <div class="mb-20">
                    <span class="fs-18">{{ item.title }}:</span>
                    <span class="fs-18 text-orange">{{ item.gram }}г. </span>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 fs-14">
                      Ккал: {{ item.kilocalories }}
                    </div>
                    <div class="col-lg-6 fs-14">
                      Углеводы: {{ item.carbohydrates }}
                    </div>
                    <div class="col-lg-6 fs-14">Жиры: {{ item.fats }}</div>
                    <div class="col-lg-6 fs-14">Белки: {{ item.proteins }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              Продукты (по 100 грамм)
            </div>
            <div v-if="products">
              <div
                class="mx-0 p-14 row"
                v-if="Object.keys(products).length > 0"
              >
                <div class="col-lg-6" v-for="(item, i) in products" :key="i">
                  <div
                    class="card-temp p-20 w-100 my-14 cursor items-wrap border-rad-10"
                    style="box-shadow: 0px 0px 5px #e2e2e2;"
                    @click="openDialog(item)"
                  >
                    <div>
                      <div class="mb-20">
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
            <div class="mx-0 p-14 row" v-else>список пуст</div>
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
                          type="number"
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
                      @click="addCalroies(productItem)"
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
      productGram: 0,
      productKilokal: 0,
      productFats: 0,
      productCarbohydrates: 0,
      productProteins: 0,

      summaryCalories: 0,

      storeProducts: null
    };
  },
  mounted() {
    this.categories = getCategories();
    this.storeProducts = JSON.parse(localStorage.getItem("productItem"));
    for (let ids in this.storeProducts) {
      this.productKilokal =
        Number(this.productKilokal) +
        Number(this.storeProducts[ids].kilocalories);
      this.productFats =
        Number(this.productFats) + Number(this.storeProducts[ids].fats);
      this.productCarbohydrates =
        Number(this.productCarbohydrates) +
        Number(this.storeProducts[ids].carbohydrates);
      this.productProteins =
        Number(this.productProteins) + Number(this.storeProducts[ids].proteins);
    }
    this.productGram = localStorage.getItem("productGram");
    this.summaryCalories = localStorage.getItem("summaryCalories")
      ? localStorage.getItem("summaryCalories")
      : 0;
  },
  methods: {
    deleteItem(title) {
      let store = this.storeProducts;
      for (let id in store) {
        if (store[id].title == title) {
          this.productGram = Number(this.productGram) - Number(store[id].gram);

          this.productKilokal =
            Number(this.productKilokal) - store[id].kilocalories;
          this.productFats = Number(this.productFats) - store[id].fats;
          this.productCarbohydrates =
            Number(this.productCarbohydrates) - store[id].carbohydrates;
          this.productProteins =
            Number(this.productProteins) - store[id].proteins;

          this.storeProducts.splice(id, 1);
        }
      }
      if (this.storeProducts.length == 0) {
        this.productGram = 0;
        this.productKilokal = 0;
        this.productFats = 0;
        this.productCarbohydrates = 0;
        this.productProteins = 0;
      }
      localStorage.setItem("productGram", this.productGram);
      localStorage.setItem("productItem", JSON.stringify(this.storeProducts));
    },
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
    addCalroies(productItem) {
      this.dialogProduct = false;

      this.productGram = Number(this.productGram) + Number(this.enterCalories);

      localStorage.setItem("productGram", this.productGram);

      let store = JSON.parse(localStorage.getItem("productItem"));

      productItem.gram = this.enterCalories;

      if (store != null) {
        let checkSimilar = true;
        for (let idp in store) {
          if (store[idp].title == productItem.title) {
            store[idp].gram =
              Number(store[idp].gram) + Number(productItem.gram);

            store[idp].kilocalories =
              (Number(productItem.kilocalories) / 100) *
                Number(this.enterCalories) +
              store[idp].kilocalories;

            store[idp].fats =
              (Number(productItem.fats) / 100) * Number(this.enterCalories) +
              store[idp].kilocalories;
            store[idp].carbohydrates =
              (Number(productItem.carbohydrates) / 100) *
                Number(this.enterCalories) +
              store[idp].kilocalories;
            store[idp].proteins =
              (Number(productItem.proteins) / 100) *
                Number(this.enterCalories) +
              store[idp].kilocalories;

            localStorage.setItem("productItem", JSON.stringify(store));
            checkSimilar = false;
          }
        }
        if (checkSimilar) {
          let objCopy = JSON.parse(JSON.stringify(productItem));
          objCopy.kilocalories =
            (Number(objCopy.kilocalories) / 100) * Number(this.enterCalories);

          objCopy.fats =
            (Number(objCopy.fats) / 100) * Number(this.enterCalories);
          objCopy.carbohydrates =
            (Number(objCopy.carbohydrates) / 100) * Number(this.enterCalories);
          objCopy.proteins =
            (Number(objCopy.proteins) / 100) * Number(this.enterCalories);

          store.push(objCopy);
          localStorage.setItem("productItem", JSON.stringify(store));
        }
      } else {
        let list = [];

        let objCopy = JSON.parse(JSON.stringify(productItem));
        objCopy.kilocalories =
          (Number(objCopy.kilocalories) / 100) * Number(this.enterCalories);

        objCopy.fats =
          (Number(objCopy.fats) / 100) * Number(this.enterCalories);
        objCopy.carbohydrates =
          (Number(objCopy.carbohydrates) / 100) * Number(this.enterCalories);
        objCopy.proteins =
          (Number(objCopy.proteins) / 100) * Number(this.enterCalories);

        list.push(objCopy);
        localStorage.setItem("productItem", JSON.stringify(list));
      }

      this.storeProducts = JSON.parse(localStorage.getItem("productItem"));
      for (let ids in this.storeProducts) {
        this.productKilokal =
          Number(this.productKilokal) +
          Number(this.storeProducts[ids].kilocalories);
        this.productFats =
          Number(this.productFats) + Number(this.storeProducts[ids].fats);
        this.productCarbohydrates =
          Number(this.productCarbohydrates) +
          Number(this.storeProducts[ids].carbohydrates);
        this.productProteins =
          Number(this.productProteins) +
          Number(this.storeProducts[ids].proteins);
      }
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
