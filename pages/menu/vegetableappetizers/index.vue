<template>
  <div>
    <h1 class="cursive ma-2">Vegetable Appetizers</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
          <v-img :src="card.src" height="300px">
            <div class="starPosition">
              <v-icon large color="yellow">star</v-icon>
            </div>
            <div class="pricePosition" v-text="card.price">
            </div>
            <div class="itemNumber avatar" v-text="card.itemNumber">
            </div>
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="cardTitle cursive mb-3" v-text="card.title"></div>
              <div v-text="card.itemDescription"></div>
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
          title: "Edamame",
          itemDescription: "Boiled and Salted Soybeans",
          src: require("static/images/vegetableappetizers/edamame.jpg"),
          price: "4.50",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Garlic Edamame",
          itemDescription:
            "Exquisitely sautéed edamame with sea salt and garlic",
          src: require("static/images/vegetableappetizers/garlicedamame.jpg"),
          price: "6.00",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Shishito Peppers",
          itemDescription:
            "Sautéed Japanese shishito peppers in olive oil with a sprinkle of sea salt and lime",
          src: require("static/images/vegetableappetizers/shishitopeppers.jpg"),
          price: "5.50",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Sweet Potato Fries",
          itemDescription: "Deep fried sweet potatoes (yams)",
          src: require("static/images/vegetableappetizers/sweetpotatofries.jpg"),
          price: "5.95",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Hibiki Asparagus",
          itemDescription:
            "Fresh asparagus sautéed in garlic butter served with a sprinkle of sea salt and lime",
          src: require("static/images/vegetableappetizers/hibikiasparagus.jpg"),
          price: "6.00",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Sautéed Mushrooms",
          itemDescription: "Sautéed mushrooms and onions",
          src: require("static/images/vegetableappetizers/sauteedmushrooms.jpg"),
          price: "6.00",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "Vegetable Tempura (8pcs)",
          itemDescription: "Fried vegetables served with tempura sauce",
          src: require("static/images/vegetableappetizers/vegetabletempura8pcs.jpg"),
          price: "7.95",
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