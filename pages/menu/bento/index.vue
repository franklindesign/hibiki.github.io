<template>
  <div>
    <h1 class="cursive ma-2">All Day Special Bento</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-img :src="card.src" style="background:black;" :alt="card.title">
            <div class="pricePosition" v-text="card.price"></div>
            <div class="itemNumber avatar" v-text="card.itemNumber"></div>
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="card.title"></div>
              <p class="caption">{{card.itemDescription}}</p>
              <v-expansion-panels>
                <v-expansion-panel class="mt-4">
                  <v-expansion-panel-header>Side Choices</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="caption">
                      <p>
                        <b>(Choose One)</b>
                      </p>
                      <p v-for="sidechoice in sidechoices" :key="sidechoice">{{sidechoice}}</p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
      sidechoices: [
        "Chicken Teriyaki",
        "Beef Teriyaki",
        "Salmon Teriyaki (+3.50)*",
        "Beef Sukiyaki*",
        "Chicken Cutlet*",
        "Beef Cutlet*",
        "Spicy Chicken*",
        "Popcorn Chicken*"
      ],

      cards: [
        {
          itemNumber: 1,
          title: "Kids' Meal (Under 6 Years Old)",
          itemDescription:
            "California Roll (4pcs), Egg Cake (2pcs), Small Salad, Mini Fruits + (One Cooked Side Choice: Chicken or Beef Teriyaki). Other Items (*) Not available with kids' meal.",
          src: require("static/images/bento/kidsmeal.jpg"),
          price: "7.95",
          item1: "Chicken Teriyaki",
          item2: "Beef Teriyaki",
          flex: 4
        },
        {
          itemNumber: 2,
          title: "Hibiki Medama Bento",
          itemDescription:
            "California Roll (4 pcs) , Combination Tempura (6pcs Vegetable, 1pc Shrimp) , Baked Green Mussels (2pcs), Crunch Shrimp Tempura Roll, Mini Fruits, + (One Cooked Side Choice)",
          src: require("static/images/bento/medamabento.jpg"),
          price: "16.95",
          flex: 4
        },
        {
          itemNumber: 3,
          title: "Hibiki Extraordinary Bento",
          itemDescription:
            "Spicy Tuna Roll (4pcs), Combination Tempura (6pcs Vegetable, 1pc Shrimp) , Baked Green Mussels (2pcs), 3 pcs Sushi (Tuna, White Fish, Shrimp), 3pcs Mini Sashimi (Salmon, Albacore, Yellowtail), Mini Fruits, + (One Cooked Side Choice)",
          src: require("static/images/bento/extraordinarybento.jpg"),
          price: "19.95",
          flex: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
.cardBack {
  background: rgb(29, 29, 29);
}
</style>

