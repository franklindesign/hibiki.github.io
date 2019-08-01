<template>
  <v-container>
    <h1 class="cursive ma-2">Most Ordered</h1>
    <v-layout wrap row class="mb-5">
      <v-flex
        v-bind="{ [`lg${card.flex}`]: true }"
        v-for="card in cards"
        :key="card.title"
        md4
        sm6
        xs6
      >
        <v-card style="margin: 5px" class="itemHover cardBack">
          <v-img
            :src="card.src"
            class="cardsize"
            role="img"
            :aria-label="`${card.title}`"
            :alt="`${card.title}`"
          ></v-img>
          <v-card-title primary-title class="mostorderedBG">
            <div>
              <div class="mostordered cursive" v-text="card.title"></div>
              <div class="caption">
                More
                <nuxt-link :to="`${card.link}`">{{card.category}}</nuxt-link>→
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex xs12 sm12 md12 lg12 xl12 mb-4>
      <v-btn block ripple text large outlined rounded to="/menu">View Menu</v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          itemNumber: 1,
          title: "Rainbow Roll",
          category: "Fresh Rolls",
          src: require("static/images/freshrolls/rainbowroll.jpg"),
          link: "/menu/freshrolls",
          flex: 3
        },
        {
          itemNumber: 2,
          title: "Amber Roll",
          category: "Tempura Rolls",
          src: require("static/images/tempurarolls/amberroll.jpg"),
          link: "/menu/tempurarolls",
          flex: 3
        },
        {
          itemNumber: 3,
          title: "Lucky 7",
          category: "Sashimi Combo",
          src: require("static/images/sushi/lucky7.jpg"),
          link: "/menu/sashimicombo",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Garlic Edamame",
          category: "Vegetable Appetizers",
          src: require("static/images/vegetableappetizers/garlicedamame.jpg"),
          link: "/menu/vegetableappetizers",
          flex: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.cardBack {
  background: rgb(24, 24, 24);
}

.mostordered {
  font-size: 1em;
}

.mostorderedBG {
  background: #f63440;
}
.cardsize {
  height: 250px !important;
}

@media only screen and (max-width: 600px) {
  .cardsize {
    height: 200px !important;
  }
}
</style>
