<template>
  <div>
    <h1 class="cursive ma-2">Fresh Rolls</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
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
          title: "Rainbow Roll",
          itemDescription:
            "Fresh tuna, salmon, white fish, avocado, albacore, crabmeat, avocado, cucumber.",
          src: require("static/images/freshrolls/rainbowroll.jpg"),
          price: "10.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Albacore Delight Roll",
          itemDescription:
            "Seared albacore, spicy chopped albacore, green onions, masago, garlic",
          src: require("static/images/freshrolls/albacoredelightroll.jpg"),
          price: "10.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Fire Fighter Roll",
          itemDescription: "Spicy tuna, jalapeño, spicy crabmeat, cucumber. ",
          src: require("static/images/freshrolls/firefighterroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Angie Roll",
          itemDescription: "Spicy tuna, cucumber, avocado",
          src: require("static/images/freshrolls/angieroll.jpg"),
          price: "10.50",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Red Dragon Roll",
          itemDescription: "Spicy tuna, tuna, cucumber, avocado",
          src: require("static/images/freshrolls/reddragonroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Sun Burn Roll",
          itemDescription: "Tuna, seared albacore, cucumber, crispy onion",
          src: require("static/images/freshrolls/sunburnroll.jpg"),
          price: "10.95",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "Salmon Lover Roll",
          itemDescription:
            "Chopped spicy salmon, salmon, green onions, masago, tempura crumbs",
          src: require("static/images/freshrolls/salmonloverroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 8,
          title: "Passion Roll",
          itemDescription:
            "Tuna, salmon, white fish, albacore, avocado, jalapeño, spicy tuna, cucumber",
          src: require("static/images/freshrolls/passionroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 9,
          title: "Sourpatch Roll",
          itemDescription: "Salmon, crabmeat, cucumber, avocado, sliced lemon",
          src: require("static/images/freshrolls/sourpatchroll.jpg"),
          price: "10.50",
          flex: 3
        },
        {
          itemNumber: 10,
          title: "Lemonade Roll",
          itemDescription: "White fish, spicy tuna, cucumber, sliced lemon",
          src: require("static/images/freshrolls/lemonaderoll.jpg"),
          price: "10.50",
          flex: 3
        },
        {
          itemNumber: 11,
          title: "Sapporo Roll",
          itemDescription: "Albacore, yellowtail, spicy crabmeat, cucumber.",
          src: require("static/images/freshrolls/sappororoll.jpg"),
          price: "10.95",
          flex: 3
        },
        {
          itemNumber: 12,
          title: "Mango Mania Roll",
          itemDescription: "Salmon, mango, avocado, cucumber, and mango",
          src: require("static/images/freshrolls/mangomaniaroll.jpg"),
          price: "11.50",
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

