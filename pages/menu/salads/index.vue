<template>
  <div>
    <h1 class="cursive ma-2">Salads</h1>
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
          title: "Hibiki House Salad",
          itemDescription:
            "Fresh spring mix and romaine hearts with house dressing",
          src: require("static/images/salads/hibikihousesalad.jpg"),
          price: "6.50",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Cucumber Salad",
          itemDescription: "Fresh cucumber with mustard dressing",
          src: require("static/images/salads/cucumbersalad.jpg"),
          price: "4.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Seaweed Salad",
          itemDescription: "Marinated seaweed with sesame oil & seeds",
          src: require("static/images/salads/seaweedsalad.jpg"),
          price: "5.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Tako Salad",
          itemDescription:
            "Thin slices of marinated tako with sesame oil & seeds",
          src: require("static/images/salads/takosalad.jpg"),
          price: "6.95",
          flex: 3
        },
        {
          itemNumber: 5,
          title: "Salmon Skin Salad",
          itemDescription:
            "Baked salmon skin on top of house salad served with mustard dressing",
          src: require("static/images/salads/salmonskinsalad.jpg"),
          price: "8.95",
          flex: 3
        },
        {
          itemNumber: 6,
          title: "Spicy Tuna Salad",
          itemDescription:
            "Spicy tuna on top of house salad served with mustard dressing",
          src: require("static/images/salads/spicytunasalad.jpg"),
          price: "8.95",
          flex: 3
        },
        {
          itemNumber: 7,
          title: "Sashimi Salad",
          itemDescription:
            "Tuna, salmon, white fish, albacore, yellowtail, octopus, and white tuna on top of house salad served with mustard dressing",
          src: require("static/images/salads/sashimisalad.jpg"),
          price: "13.95",
          flex: 3
        },
        {
          itemNumber: 8,
          title: "Seared Albacore Salad",
          itemDescription:
            "Seared albacore on top of house salad served with mustard dressing",
          src: require("static/images/salads/searedalbacoresalad.jpg"),
          price: "13.95",
          flex: 3
        },
        {
          itemNumber: 9,
          title: "Tuna Tataki",
          itemDescription:
            "Seared tuna on top of house salad served with mustard dressing",
          src: require("static/images/salads/tunatataki.jpg"),
          price: "15.95",
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

