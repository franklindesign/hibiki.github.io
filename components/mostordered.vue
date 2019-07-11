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
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          itemNumber: 1,
          title: "Angie Roll",
          src: require("static/images/freshrolls/angieroll.jpg"),
          flex: 3
        },
        {
          itemNumber: 2,
          title: "Sashimi Cocktail",
          src: require("static/images/seafoodappetizers/sashimicocktail.jpg"),
          flex: 3
        },
        {
          itemNumber: 3,
          title: "Sean Roll",
          src: require("static/images/tempurarolls/seanroll.jpg"),
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Chicken Teriyaki",
          src: require("static/images/entree/chickenteriyaki.jpg"),
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
  height: 200px !important;
}

@media only screen and (max-width: 600px) {
  .cardsize {
    height: 150px !important;
  }
}
</style>
