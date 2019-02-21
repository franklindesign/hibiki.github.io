<template>
  <div>
    <h1 class="cursive ma-2">Combinations</h1>
    <v-layout wrap row>
      <v-flex md4 sm6 lg6>
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-card-media :src="noodlecombo.src" height="300px">
            <div class="priceSmall">Lunch</div>
            <div class="smallPricePosition" v-text="noodlecombo.smallPrice"></div>
            <div class="priceLarge">Dinner</div>
            <div class="largePricePosition" v-text="noodlecombo.largePrice"></div>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="noodlecombo.title"></div>
              <div v-text="noodlecombo.itemDescription"></div>
              <v-layout row wrap>
                <v-flex>
                  <v-expansion-panel class="mt-4 onTop">
                    <v-expansion-panel-content>
                      <div slot="header">Choose 1 Noodle Dish:</div>
                      <v-card light>
                        <v-card-text>
                          <ul>
                            <li
                              v-for="noodledish in noodledishes"
                              :key="noodledish"
                            >{{ noodledish }}</li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
                <v-flex>
                  <v-expansion-panel class="mt-4">
                    <v-expansion-panel-content>
                      <div slot="header">Choose 1 Regular Roll:</div>
                      <v-card light>
                        <v-card-text>
                          <ul>
                            <li v-for="sushiroll in sushirolls" :key="sushiroll">{{ sushiroll }}</li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex md4 sm6 lg6>
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-card-media :src="entreecombo.src" height="300px">
            <div class="priceSmall">Lunch</div>
            <div class="smallPricePosition" v-text="entreecombo.smallPrice"></div>
            <div class="priceLarge">Dinner</div>
            <div class="largePricePosition" v-text="entreecombo.largePrice"></div>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="entreecombo.title"></div>
              <div v-text="entreecombo.itemDescription"></div>
              <v-layout row wrap>
                <v-flex>
                  <v-expansion-panel class="mt-4">
                    <v-expansion-panel-content>
                      <div slot="header">Choose One Entree:</div>
                      <v-card light>
                        <v-card-text>
                          <ul>
                            <li v-for="entree in entrees" :key="entree">{{ entree }}</li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
                <v-flex>
                  <v-expansion-panel class="mt-4">
                    <v-expansion-panel-content>
                      <div slot="header">Choose 1 Regular Roll:</div>
                      <v-card light>
                        <v-card-text>
                          <ul>
                            <li v-for="sushiroll in sushirolls" :key="sushiroll">{{ sushiroll }}</li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noodledishes: [
        "Udon Soup",
        "Yaki Udon",
        "Yaki Soba",
        "Miso or Spicy Ramen"
      ],

      sushirolls: [
        "California Roll",
        "Spicy Tuna Roll",
        "Yellowtail Roll",
        "Salmon Roll",
        "Tuna Roll",
        "Albacore Roll",
        "Vegetable Roll"
      ],

      entrees: [
        "Chicken Teriyaki",
        "Chicken Cutlet",
        "Spicy Chicken",
        "Beef Cutlet",
        "Salmon Teriyaki (+3.50)",
        "Sukiyaki Beef",
        "Combination Tempura",
        "Beef Teriyaki",
        "Fried Rice (Shrimp, Beef or Chicken)"
      ],

      noodlecombo: {
        title: "Noodle Combo",
        itemDescription: "Choose (1) Noodle Dish & (1) Regular Sushi Roll.",
        src: require("static/images/combo/noodlecombo.jpg"),
        smallPrice: "11.95",
        largePrice: "14.95"
      },

      entreecombo: {
        title: "Entree Combo",
        itemDescription:
          "Choose (1) Entree & (1) Sushi Roll. Served with miso soup & salad.",
        src: require("static/images/combo/entreecombo.jpg"),
        smallPrice: "11.95",
        largePrice: "14.95"
      }
    };
  }
};
</script>

<style scoped>
.topOrder {
  position: relative;
  z-index: 99;
}
.cardBack {
  background: rgb(29, 29, 29);
}

.smallPricePosition {
  position: absolute;
  bottom: 8px;
  right: 65px;
  background: #000000;
  padding: 5px;
}

.largePricePosition {
  position: absolute;
  bottom: 8px;
  right: 16px;
  background: #000000;
  padding: 5px;
}

.priceSmall {
  position: absolute;
  bottom: 34px;
  right: 65px;
  color: rgb(218, 165, 32);
  padding: 5px;
  font-size: 12px;
  width: 45px;
  background-color: #ffffff;
}

.priceLarge {
  position: absolute;
  bottom: 34px;
  right: 16px;
  color: rgb(218, 165, 32);
  padding: 5px;
  font-size: 12px;
  width: 45px;
  background-color: #ffffff;
}

.beerLogo {
  position: absolute;
  top: 12px;
  left: 10px;
  height: 100px;
  width: 100px;
}

li {
  list-style-type: none;
  margin-top: 10px;
}
</style>