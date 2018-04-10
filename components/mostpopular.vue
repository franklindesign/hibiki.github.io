<template>
  <v-container>
    
    <h1 class="cursive ma-2">Most Popular Items</h1>
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
          <v-card-title primary-title class="mostpopularBG">
            <div>
              <div class="mostpopular cursive" v-text="card.title"></div>
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
            title: 'Snow Roll', 
            src: require('static/images/cookedrolls/snowroll.jpg'),
            flex: 3 },
          { 
            title: 'Fire Fighter Roll',
            src: require('static/images/freshrolls/firefighterroll.jpg'),
            flex: 3 },
          { 
            title: 'Angie Roll', 
            src: require('static/images/freshrolls/angieroll.jpg'),
            flex: 3 },
          { 
            title: 'Sean\'s Roll', 
            src: require('static/images/tempurarolls/seanroll.jpg'),
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

.mostpopular {
  font-size: 1em;
}

.mostpopularBG {
  background: rgb(255, 145, 0);
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
