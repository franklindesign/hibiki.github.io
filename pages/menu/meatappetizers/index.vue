<template>
  <div>
    <h1 class="cursive ma-2">Meat Appetizers</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
          <v-card-media :src="card.src" height="300px">
            <div class="starPosition">
              <v-icon large color="yellow">star</v-icon>
            </div>
            <div class="pricePosition" v-text="card.price">
            </div>
            <div class="itemNumber avatar" v-text="card.itemNumber">
            </div>
          </v-card-media>
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
          title: "Gyoza Dumplings (5pcs)",
          itemDescription: "Lightly fried beef and vegetable dumplings",
          src: require("static/images/meatappetizers/gyoza.jpg"),
          price: "5.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Chicken Kushiyaki (2 skewers)",
          itemDescription:
            "Japanese style skewers with chicken and green onions",
          src: require("static/images/meatappetizers/chickenkushiyaki.jpg"),
          price: "5.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Beef Kushiyaki (2 skewers)",
          itemDescription:
            "Marinated beef served with Japanese shishito peppers",
          src: require("static/images/meatappetizers/beefkushiyaki.jpg"),
          price: "6.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Pork Belly Kushiyaki (2 skewers)",
          itemDescription:
            "Japanese style skewers with pork belly and green onions",
          src: require("static/images/meatappetizers/porkbellykushiyaki.jpg"),
          price: "5.95",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Popcorn Chicken",
          itemDescription:
            "Deep fried chicken popcorn style with eel and spicy mayo Sauce",
          src: require("static/images/meatappetizers/popcornchicken.jpg"),
          price: "8.95",
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

