<template>
  <div class="my-100 container">
    <div>
      <!-- <button class="el-button" @click="signOut">выход</button> -->
      <div
        class="auth-template my-30 py-20 w-100"
        style="background-color: rgb(245, 125, 52)"
      >
        <h2>
          Панель Администратора
        </h2>
      </div>
      <div class="auth-template my-30 w-100">
        <h2>Создание новой категории:</h2>
        <div class="row">
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="newCategorie"
                placeholder="Введите наименование"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              >
              </el-input>
            </div>
          </div>
          <div class="col-lg">
            <button
              class="el-button mt-18 py-14 mx-0"
              style="background: #222; border: none; color: #fff"
              @click="createCategorie()"
            >
              создать категорию
            </button>
          </div>
        </div>
      </div>
      <div class="auth-template my-30 w-100">
        <h2>Создание нового продукта:</h2>
        <div class="row my-10">
          <div class="col-lg">
            <el-select
              class="w-100 mt-18"
              v-model="select"
              placeholder="Выберите категорию"
            >
              <el-option
                v-for="(item, i) in categories"
                :key="i"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </div>
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="productData.title"
                placeholder="Введите наименование"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="row my-10">
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="productData.kilocalories"
                placeholder="Введите калорийность"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              ></el-input>
            </div>
          </div>
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="productData.carbohydrates"
                placeholder="Введите углеводы"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="row my-10">
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="productData.fats"
                placeholder="Введите жиры"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              ></el-input>
            </div>
          </div>
          <div class="col-lg">
            <div class="form-group mt-18">
              <el-input
                required
                v-model="productData.proteins"
                placeholder="Введите белки"
                clearable
                type="text"
                minlength="2"
                maxlength="15"
              ></el-input>
            </div>
          </div>
        </div>
        <div class="d-sm-block d-lg-flex justify-content-between">
          <button
            class="el-button mt-20 mx-0"
            style="background: #222; border: none; color: #fff"
            @click="createProducts()"
          >
            создать продукт
          </button>
          <button
            class="el-button mt-20 mx-0"
            style="background: #222; border: none; color: #fff"
            @click="clearInpts()"
          >
            почистить все поля
          </button>
        </div>
      </div>
      <!-- <button class="el-button" @click="getProducts">получить</button> -->

      <!-- <div v-for="(item, i) in products" :key="i">
        {{ item }}
      </div> -->

      <!-- <div class="mt-20" v-for="(item, i) in categories" :key="i">
        <button class="el-button" @click="getProducts(item)">{{ item }}</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  createProducts,
  getProducts,
  getCategories,
  createCategorie
} from "@/plugins/firebase";

import NTFS from "~/utils/notifications";

export default {
  data() {
    return {
      lol: null,
      productData: {
        title: null,
        kilocalories: null,
        carbohydrates: null,
        fats: null,
        proteins: null
      },
      products: null,

      newCategorie: null,
      categories: null,

      select: ""
    };
  },
  mounted() {
    this.categories = getCategories();
  },
  methods: {
    createCategorie() {
      if (this.newCategorie) {
        createCategorie(this.newCategorie);
        this.categories = getCategories();
      } else {
        NTFS.getInstance().NTFS(
          "Информация",
          "Для создание новой категории необходимо заполнить поле",
          "warning"
        );
      }
    },
    createProducts() {
      let product = {};
      if (
        this.productData.title &&
        this.productData.kilocalories &&
        this.productData.carbohydrates &&
        this.productData.fats &&
        this.productData.proteins
      ) {
        product = {
          [this.productData.title]: {
            title: this.productData.title,
            kilocalories: this.productData.kilocalories,
            carbohydrates: this.productData.carbohydrates,
            fats: this.productData.fats,
            proteins: this.productData.proteins
          }
        };
        createProducts(this.select, product);
        NTFS.getInstance().NTFS(
          "",
          "Продукт успешно добавлен в базу данных",
          "success"
        );
      } else {
        NTFS.getInstance().NTFS(
          "Информация",
          "Для создание нового продукта необходимо заполнить все поля",
          "warning"
        );
      }
    },
    getProducts(item) {
      getProducts(item).then(data => {
        this.products = data;
      });
    },
    clearInpts() {
      this.select = "";
      this.productData = {
        title: null,
        kilocalories: null,
        carbohydrates: null,
        fats: null,
        proteins: null
      };
    }
  }
};
</script>

<style></style>
