<template>
  <div>
    <h1 class="cursive ma-2">Miso Soup & Rice</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }"
                  v-for="card in cards"
                  :key="card.title"
                  md4
                  sm6
                  >
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
          <v-card-media 
              :src="card.src"
              height="300px"
              >
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
    

    data () {
      return {
        cards: [
          { 
            itemNumber: 1,
            title: 'Miso Soup', 
            itemDescription: 'Miso soup with tofu and green onions', 
            src: require('static/images/misosouprice/misosoup.jpg'),
            price: '2.95', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Clam Miso Soup',
            itemDescription: 'Miso soup with clams and green onions', 
            src: require('static/images/misosouprice/clammisosoup.jpg'),
            price: '6.95', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Steamed White Rice', 
            itemDescription: 'Fresh cooked white rice',
            src: require('static/images/misosouprice/whiterice.jpg'),
            price: '2.00', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'Steamed Brown Rice', 
            itemDescription: 'Fresh cooked brown rice',
            src: require('static/images/misosouprice/brownrice.jpg'),
            price: '2.95', 
            flex: 3 },
          { 
            itemNumber: 5,
            title: 'Sushi Rice', 
            itemDescription: 'Fresh sushi rice',
            src: require('static/images/misosouprice/sushirice.jpg'),
            price: '2.95', 
            flex: 3 },
          { 
            itemNumber: 6,
            title: 'Fried Rice', 
            itemDescription: 'Deep fried chicken popcorn style with eel and spicy mayo Sauce',
            src: require('static/images/misosouprice/friedrice.jpg'),
            price: '7.95', 
            flex: 3 }
        ]
      }
    }
  }
</script>
<style scoped>

.cardBack {
background: rgb(29, 29, 29);
}
</style>

