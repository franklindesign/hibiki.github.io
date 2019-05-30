<template>
  <div>
    <h1 class="cursive ma-2">Seafood Appetizers</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 475px;" class="itemHover cardBack">
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
          title: "Tako Sunomono",
          itemDescription:
            "Octopus with cucumbers served with soy mustard sauce",
          src: require("static/images/seafoodappetizers/takosunomono.jpg"),
          price: "6.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Fried Soft Shell Crab",
          itemDescription: "Fried soft shell crab served with ponzu sauce",
          src: require("static/images/seafoodappetizers/friedsoftshellcrab.jpg"),
          price: "10.50",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Fried Calamari",
          itemDescription:
            "Fried calamari served with our teriyaki and spicy sauce",
          src: require("static/images/seafoodappetizers/friedcalamari.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Fried Oyster",
          itemDescription:
            "Deep fried breaded oysters served with special sauce",
          src: require("static/images/seafoodappetizers/friedoysters.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Baked Green Mussels (5pcs)",
          itemDescription:
            "Baked mussels with Hibiki special mayo, masago & green onions on top",
          src: require("static/images/seafoodappetizers/bakedgreenmussels.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Heart Attack",
          itemDescription:
            "Deep fried jalapeño stuffed with spicy tuna and cream cheese",
          src: require("static/images/seafoodappetizers/heartattack.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "Crispy Chip",
          itemDescription:
            "Choose a flavor: Spicy Tuna with avocado, Salmon Crunch with avocado, Baked Lobster with masago and green onions, Baked Scallop with masago and green onions",
          src: require("static/images/seafoodappetizers/crispychip.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 8,
          title: "Dynamite",
          itemDescription:
            "Baked seafood with Hibiki special mayo, masago & green onion on top",
          src: require("static/images/seafoodappetizers/dynamite.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 9,
          title: "Spicy Tuna Tempura Roll",
          itemDescription: "Spicy tuna and crabmeat deep fried",
          src: require("static/images/seafoodappetizers/spicytunatempuraroll.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 10,
          title: "Monkey Brain",
          itemDescription:
            "Mushroom, crabmeat, cream cheese, and spicy tuna deep fried",
          src: require("static/images/seafoodappetizers/monkeybrains.jpg"),
          price: "7.90",
          flex: 3
        },
        {
          itemNumber: 12,
          title: "Sashimi Cocktail",
          itemDescription:
            "Sushi Chef’s choice of various fresh fish, avocado, seaweed, sushi rice, and crabmeat with soy-mustard, spicy mayo sauce or chili oil.",
          src: require("static/images/seafoodappetizers/sashimicocktail.jpg"),
          price: "9.95",
          flex: 3
        },
        {
          itemNumber: 11,
          title: "Hibiki Poke",
          itemDescription:
            "Sushi Chef’s choice of various fresh fish, avocado, seaweed, sushi rice, and crabmeat with soy-mustard, spicy mayo sauce or chili oil.",
          src: require("static/images/seafoodappetizers/hibikipoke.jpg"),
          price: "13.95",
          flex: 3
        },
        {
          itemNumber: 13,
          title: "Oyster/Uni Shooter",
          itemDescription:
            "Oyster (uni), quail egg, masago, & green onions with ponzu and plum wine",
          src: require("static/images/seafoodappetizers/oysterunishooter.jpg"),
          price: "6.50",
          flex: 3
        },
        {
          itemNumber: 14,
          title: "Albacore Crispy Onion",
          itemDescription:
            "Albacore fillets served with crispy onion and special sauce",
          src: require("static/images/seafoodappetizers/albacorecrispyonion.jpg"),
          price: "13.50",
          flex: 3
        },
        {
          itemNumber: 15,
          title: "White Fish Carpaccio",
          itemDescription:
            "White fish fillets served with sliced jalapeños and special ponzu sauce",
          src: require("static/images/seafoodappetizers/whitefishcarpaccio.jpg"),
          price: "10.50",
          flex: 3
        },
        {
          itemNumber: 16,
          title: "Cucumber Heaven",
          itemDescription:
            "White fish, albacore, tuna, salmon, yellowtail, crabmeat, and masago inside cucumber wrapped roll",
          src: require("static/images/seafoodappetizers/cucumberheaven.jpg"),
          price: "15.95",
          flex: 3
        },
        {
          itemNumber: 17,
          title: "Yellowtail Collar",
          itemDescription: "Grilled yellowtail collar served with ponzu sauce",
          src: require("static/images/seafoodappetizers/yellowtailcollar.jpg"),
          price: "9.95",
          flex: 3
        },
        {
          itemNumber: 18,
          title: "Salmon Collar",
          itemDescription:
            "Grilled salmon collar served with spicy ponzu sauce",
          src: require("static/images/seafoodappetizers/salmoncollar.jpg"),
          price: "7.95",
          flex: 3
        },
        {
          itemNumber: 19,
          title: "Shrimp Tempura (5pcs)",
          itemDescription: "Fried shrimp served with tempura sauce",
          src: require("static/images/seafoodappetizers/shrimptempura.jpg"),
          price: "10.50",
          flex: 3
        },
        {
          itemNumber: 20,
          title: "Combination Tempura (10pcs)",
          itemDescription:
            "Combination of fried shrimp and vegetables served with tempura sauce",
          src: require("static/images/seafoodappetizers/combinationtempura.jpg"),
          price: "12.50",
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

