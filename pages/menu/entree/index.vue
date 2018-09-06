<template>
  <div>
    <h1 class="cursive ma-2">Entree</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 475px;" class="itemHover cardBack">
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
          title: "Hibiki Shrimp & Lobster",
          itemDescription:
            "Wok stirred deep fried shrimp, lobster (crawfish), and vegetables with our special sweet & sour sauce",
          src: require("static/images/entree/hibikishrimplobster.jpg"),
          price: "15.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Chicken Teriyaki",
          itemDescription:
            "Charbroiled chicken and vegetables served on a sizzling hot plate",
          src: require("static/images/entree/chickenteriyaki.jpg"),
          price: "12.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Beef Teriyaki",
          itemDescription:
            "Charbroiled beef and vegetables served on a sizzling hot plate",
          src: require("static/images/entree/beefteriyaki.jpg"),
          price: "15.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Salmon Teriyaki",
          itemDescription:
            "Grilled fresh sashimi grade salmon with vegetables served on a sizzling hot plate",
          src: require("static/images/entree/salmonteriyaki.jpg"),
          price: "16.50",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Beef Sukiyaki",
          itemDescription:
            "Thinly sliced beef with vegetables, noodle, and fresh egg cooked in sukiyaki broth",
          src: require("static/images/entree/beefsukiyaki.jpg"),
          price: "15.95",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Chicken Cutlet",
          itemDescription:
            "Lightly fried breaded beef served with special tonkatsu sauce",
          src: require("static/images/entree/chickencutlet.jpg"),
          price: "13.95",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "Beef Cutlet",
          itemDescription:
            "Lightly fried breaded beef served with special tonkatsu sauce",
          src: require("static/images/entree/beefcutlet.jpg"),
          price: "15.95",
          flex: 3
        },
        {
          itemNumber: 8,
          title: "Spicy Chicken",
          itemDescription:
            "Wok stirred chicken and vegetables with our special spicy sauce",
          src: require("static/images/entree/spicychicken.jpg"),
          price: "12.95",
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

