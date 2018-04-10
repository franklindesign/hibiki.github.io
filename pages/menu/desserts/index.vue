<template>
  <div>
    <h1 class="cursive ma-2">Desserts</h1>
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
              
                <div class="pricePosition" v-text="card.price">
              </div>
              <div class="itemNumber avatar" v-text="card.itemNumber">
              </div>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="card.title"></div>
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
            title: 'Ice Cream', 
            itemDescription: '2 Scoops of Green tea or Vanilla. FREE Scoops for AYCE Customers.', 
            src: require('static/images/desserts/icecream.jpg'),
            price: '4.50', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Mochi Ice Cream',
            itemDescription: '2 Balls of Green Tea or Vanilla', 
            src: require('static/images/desserts/mochiicecream.jpg'),
            price: '3.50', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Tempura Ice Cream', 
            itemDescription: 'Green Tea or Vanilla',
            src: require('static/images/desserts/tempuraicecream.jpg'),
            price: '5.95', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'Crazy Fish', 
            itemDescription: 'Japanese fish-shaped cake, No actual fish ingredient',
            src: require('static/images/desserts/crazyfish.jpg'),
            price: '6.95', 
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

