<template
  ><div>
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
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
};
</script>

<style></style>
