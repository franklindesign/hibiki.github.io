<template>
  <div>
    <h1 class="cursive ma-2">Sushi/Sashimi Combo</h1>
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
              <span v-text="card.title" class="cardTitle cursive mb-3"></span>
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
          title: "Lucky 7",
          itemDescription:
            "Fresh tuna, salmon, yellowtail, white fish, albacore, shrimp, and white tuna.",
          src: require("static/images/sushi/lucky7.jpg"),
          price: "14.95",
          flex: 6
        },

        {
          itemNumber: 2,
          title: "Hibiki Premium",
          itemDescription:
            "Fresh Uni, halibut, salmon egg, tuna, yellowtail, salmon, freshwater eel, and one choice of any cut/hand roll.",
          src: require("static/images/sushi/hibikipremiumsushicombo.jpg"),
          price: "21.95",
          flex: 6
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

