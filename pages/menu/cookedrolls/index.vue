<template>
  <div>
    <h1 class="cursive ma-2">Cooked Rolls</h1>
    <v-layout wrap row class="mb-5">
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
          <v-img :src="card.src" height="300px">
            <div class="starPosition">
              <v-icon large color="yellow">star</v-icon>
            </div>
            <div class="pricePosition" v-text="card.price"></div>
            <div class="itemNumber avatar" v-text="card.itemNumber"></div>
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
  transition: "page",

  data() {
    return {
      cards: [
        {
          itemNumber: 1,
          title: "Snow Roll",
          itemDescription: "White fish, crabmeat, avocado",
          src: require("static/images/cookedrolls/snowroll.jpg"),
          price: "10.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Baked Salmon Roll",
          itemDescription:
            "Salmom, cream cheese, avocado, gobo (burdock root).",
          src: require("static/images/cookedrolls/bakedsalmonroll.jpg"),
          price: "10.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Lobster Roll",
          itemDescription: "Baby Lobster (crawfish), California roll.",
          src: require("static/images/cookedrolls/lobsterroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "B.S.C.R",
          itemDescription: "Baked scallop, California roll.",
          src: require("static/images/cookedrolls/bscr.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Volcano Roll",
          itemDescription: "Baked seafood, california roll.",
          src: require("static/images/cookedrolls/volcanoroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Chicken Teriyaki Roll",
          itemDescription: "teriyaki chicken, crabmeat, avocado, cucumber",
          src: require("static/images/cookedrolls/chickenteriyakiroll.jpg"),
          price: "9.50",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "XXX (triple X)",
          itemDescription: "White fish, spicy crabmeat, cream cheese.",
          src: require("static/images/cookedrolls/xxxroll.jpg"),
          price: "10.95",
          flex: 3
        },
        {
          itemNumber: 8,
          title: "Caterpillar Roll",
          itemDescription: "Fresh water eel, crabmeat, cucumber, avocado",
          src: require("static/images/cookedrolls/caterpillarroll.jpg"),
          price: "11.25",
          flex: 3
        },
        {
          itemNumber: 9,
          title: "Eel Special Roll",
          itemDescription:
            "Unagi (freshwater eel), avocado, crabmeat, cucumber, avocado",
          src: require("static/images/cookedrolls/eelspecialroll.jpg"),
          price: "11.25",
          flex: 3
        },
        {
          itemNumber: 10,
          title: "Asahi Roll",
          itemDescription:
            "Salmon, unagi (freshwater eel) cucumber, avocado, crabmeat",
          src: require("static/images/cookedrolls/asahiroll.jpg"),
          price: 11.25,
          flex: 3
        },
        {
          itemNumber: 11,
          title: "Kirin Roll",
          itemDescription:
            "Unagi (freshwater eel) and avocado, crabmeat, fried shrimp",
          src: require("static/images/cookedrolls/kirinroll.jpg"),
          price: 11.95,
          flex: 3
        },
        {
          itemNumber: 12,
          title: "OH-NO! Roll",
          itemDescription: "White tuna, crabmeat, avocado, cucumber",
          src: require("static/images/cookedrolls/ohnoroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 13,
          title: "Eskimo Roll",
          itemDescription:
            "White tuna, spicy tuna, crabmeat, avocado, cucumber",
          src: require("static/images/cookedrolls/eskimoroll.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 14,
          title: "Beef Steak Roll",
          itemDescription:
            "Beef steak, sautéed mushrooms, cucumber, crispy onion",
          src: require("static/images/cookedrolls/beefsteakroll.jpg"),
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
