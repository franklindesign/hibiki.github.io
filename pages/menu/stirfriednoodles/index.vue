<template>
  <div>
    <h1 class="cursive ma-2">Stir Fried Noodles</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px; height: 475px;" class="itemHover cardBack">
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
          title: "Beef Yaki Udon/Soba",
          itemDescription:
            "Wok stirred sdon/ soba (thin noodle), beef and vegetables with special sauce",
          src: require("static/images/stirfriednoodles/beefyakiudonsoba.jpg"),
          price: "12.95",
          flex: 3
        },

        {
          itemNumber: 2,
          title: "Shrimp Yaki Udon/Soba",
          itemDescription:
            "Wok Stirred Udon/ Soba (thin noodle), baby shrimp, and vegetables with special sauce",
          src: require("static/images/stirfriednoodles/shrimpyakiudonsoba.jpg"),
          price: "14.95",
          flex: 3
        },

        {
          itemNumber: 3,
          title: "Vegetable Udon/Soba",
          itemDescription:
            "Wok stirred udon/ soba (thin noodle) and vegetables with special sauce",
          src: require("static/images/stirfriednoodles/vegetableyakiudonsoba.jpg"),
          price: "11.95",
          flex: 3
        },
        {
          itemNumber: 4,
          title: "Chicken Yaki Udon/Soba",
          itemDescription:
            "Wok stirred sdon/ soba (thin noodle), chicken and vegetabes with special sauce",
          src: require("static/images/stirfriednoodles/chickenyakiudonsoba.jpg"),
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

