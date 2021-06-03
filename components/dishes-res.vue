<template
  ><div>
    <div class="my-20">
      Завтрак:
    </div>
    <hooper>
      <slide class="w-100 ">
        <div class="row">
          <div class="col-lg">
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/omlet-fasol.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Омлет со стручковой фасолью:
                  <div class="fs-14">
                    итого: ккал 334, б 18.7, ж 26.6, у 5.4.
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/яичные-блинчики.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Яичные блинчики с начинкой
                  <div class="fs-14">
                    К/Б/Ж/У 84/7.9/3.9/4.2
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/блины-на-чае.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Блины на чае
                  <div class="fs-14">
                    К/Б/Ж/У 385/7/10/67
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
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/сырники-изюм.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Сырники с изюмом
                  <div class="fs-14">
                    КБЖУ на 1 шт 108/7,5/2,7/14
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/шоколадные-блинчики.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Шоколадные блины с клубникой
                  <div class="fs-14">
                    К/Б/Ж/У 135/9.4/4.4/14.1
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  style="object-fit: cover;"
                  src="/images/гранола.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  гранола
                  <div class="fs-14">
                    К/Б/Ж/У 401/6/17/57
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div class="my-20">
      Обед:
    </div>
    <hooper>
      <slide class="w-100">
        <div class="row">
          <div class="col-lg">
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/ачма.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Диетическая ачма
                  <div class="fs-14">
                    КБЖУ 100гр. 265/17.5/10.8/23.4
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/филе-индейки.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Филе индейки с моцареллой
                  <div class="fs-14">
                    К/Б/Ж/У 154/19.4/8/1.2
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/kurinoe-file-v-moloke.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Куриное филе в молоке
                  <div class="fs-14">
                    К/Б/Ж/У 115/23/1/1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide class="w-100">
        <div class="row ">
          <div class="col-lg">
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/салат-с-курицей.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Салат с курицей и огурцами
                  <div class="fs-14">
                    К/Б/Ж/У 97/17/2.4/1.9
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/крем-суп-шампиньоны.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Крем-суп из шампиньонов
                  <div class="fs-14">
                    К/Б/Ж/У 100/2.4/7.2/6.5
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/куриное-филе-шпинат.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Куриная грудка с сыром и шпинатом
                  <div class="fs-14">
                    К/Б/Ж/У 132/23/3/1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div class="my-20">
      Ужин:
    </div>
    <hooper>
      <slide class="w-100">
        <div class="row ">
          <div class="col-lg">
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  src="/images/котлеты-с-цукини.jpg"
                  width="200"
                  height="150"
                  class="border-rad-10"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Диетические сочные котлетки с цуккини
                  <div class="fs-14">
                    К/Б/Ж/У 144/9.7/10.2/3.3
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  src="/images/куриное-филе-под-шубой.jpg"
                  width="200"
                  height="150"
                  class="border-rad-10"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Куриное филе под шубой
                  <div class="fs-14">
                    К/Б/Ж/У 143/16/7,5,/1,8
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/farshirovannye-percy.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Болгарские фаршированные перцы
                  <div class="fs-14">
                    К/Б/Ж/У 270/23/20/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide class="w-100">
        <div class="row ">
          <div class="col-lg">
            <div class="row mx-0" v-if="pickedDeal == 'lose'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  src="/images/минтай-в-духовке.jpg"
                  width="200"
                  height="150"
                  class="border-rad-10"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Запеченный минтай в духовке
                  <div class="fs-14">
                    КБЖУ на 100 грамм 118/14/2/11
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'maintain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  src="/images/котлеты-из-вареной-курицы.jpg"
                  width="200"
                  height="150"
                  class="border-rad-10"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Котлеты из вареной курицы
                  <div class="fs-14">
                    К/Б/Ж/У 203/14/11/10
                  </div>
                </div>
              </div>
            </div>
            <div class="row mx-0" v-if="pickedDeal == 'gain'">
              <div class="col-lg-5">
                <img
                  draggable="false"
                  style="object-fit: cover;"
                  width="200"
                  height="150"
                  class="border-rad-10"
                  src="/images/gorbusha_v_duhovke_v_folge.jpg"
                />
              </div>
              <div class="col-lg">
                <div class="fs-22">
                  Горбуша в фольге
                  <div class="fs-14">
                    К/Б/Ж/У 177/21/10/1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>

    <div class="w-100 mt-50">
      <button
        class="el-button "
        style="background: #222; border: none; color: #fff"
        @click="goToDiary()"
      >
        <i class="bi bi-save"></i> &nbsp; Перейти к дневнику питания
      </button>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import { auth } from "@/plugins/firebase";
import Cookies from "js-cookie";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: ["pickedDeal"],

  methods: {
    goToDiary() {
      auth.onAuthStateChanged(user => {
        if (user) {
          auth.currentUser
            .getIdToken(true)
            .then(token => Cookies.set("access_token", token));
          this.$router.push("/account/" + user.uid);
        } else {
          this.$router.push("/account/login");
          Cookies.remove("access_token");
        }
      });
    }
  }
};
</script>

<style></style>
