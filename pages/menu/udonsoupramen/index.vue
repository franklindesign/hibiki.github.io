<template>
  <div>
    <h1 class="cursive ma-2">Udon Soup & Ramen</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 475px;" class="itemHover cardBack">
          <v-img :src="card.src" height="300px" :alt="card.title">
            <div class="starPosition">
              <v-icon large color="yellow">star</v-icon>
            </div>
            <div class="pricePosition" v-text="card.price"></div>
            <div class="itemNumber avatar" v-text="card.itemNumber"></div>
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="cardTitle cursive mb-3" v-text="card.title"></div>
              <p class="caption">{{card.itemDescription}}</p>
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
      cards: [
        {
          itemNumber: 1,
          title: "Udon Soup",
          itemDescription: "Japanese noodle soup",
          src: require("static/images/udonsoupramen/udonsoup.jpg"),
          price: "7.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Tempura Udon Soup",
          itemDescription:
            "Japanese noodle soup served with shrimp tempura (2 pieces)",
          src: require("static/images/udonsoupramen/tempuraudonsoup.jpg"),
          price: "12.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Nabeyaki Udon Soup",
          itemDescription:
            "Japanese noodle soup with shrimp tempura, napa cabbage, green onion, and egg",
          src: require("static/images/udonsoupramen/nabeyakiudon.jpg"),
          price: "15.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Miso Ramen",
          itemDescription:
            "Japanese miso or spicy flavored ramen noodle soup with roasted pork, fish cake, bean sprouts, green onions, and a boiled egg.",
          src: require("static/images/udonsoupramen/ramen.jpg"),
          price: "11.95",
          flex: 3
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

