<template>
  <v-container>
    <h1 class="cursive ma-2">Most ordered online</h1>
    <v-layout wrap row class="mb-5">
      <v-flex v-bind="{ [`lg${card.flex}`]: true }"
                  v-for="card in cards"
                  :key="card.title"
                  md4
                  sm6
                  xs6
                  >
        <v-card style="margin: 5px" class="itemHover cardBack">
          <v-card-media 
              :src="card.src"
              class="cardsize"
              >
          </v-card-media>
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
          title: "Rainbow Roll",
          src: require("static/images/freshrolls/rainbowroll.jpg"),
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Crunch Shrimp Tempura Roll",
          src: require("static/images/tempurarolls/crunchshrimptempuraroll.jpg"),
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Gyoza Dumplings (5pcs)",
          src: require("static/images/meatappetizers/gyoza.jpg"),
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Caterpillar Roll",
          src: require("static/images/cookedrolls/caterpillarroll.jpg"),
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
