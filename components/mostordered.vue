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
        <v-card style="margin: 5px;" class="cardBack">
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
    data () {
      return {
        
        cards: [
          { 
            itemNumber: 1,
            title: 'Gyoza', 
            itemDescription: 'Lightly fried beef and vegetable dumplings', 
            src: require('static/images/meatappetizers/gyoza.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Baked Salmon Roll',
            itemDescription: 'inside: cream cheese, avocado, and gobo. top: salmon', 
            src: require('static/images/cookedrolls/bakedsalmonroll.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Lobster Roll', 
            itemDescription: 'inside: California roll. top: cooked baby lobster (crawfish)',
            src: require('static/images/cookedrolls/lobsterroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'B.S.C.R', 
            itemDescription: 'inside: California roll. top: baked scallop',
            src: require('static/images/cookedrolls/bscr.jpg'),
            price: '11.95', 
            flex: 3 }
        ]
      }
    }
  }
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

@media only screen and (max-width: 600px){
  .cardsize {
    height: 150px !important;
  }
}
</style>
