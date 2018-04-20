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
        <v-card style="margin: 5px" class="cardBack">
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
            title: 'Rainbow Roll',  
            src: require('static/images/freshrolls/rainbowroll.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Lemonade Roll',
            src: require('static/images/freshrolls/lemonaderoll.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Mango Mania Roll',
            src: require('static/images/freshrolls/mangomaniaroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'Sun Burn Roll', 
            src: require('static/images/freshrolls/sunburnroll.jpg'),
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
