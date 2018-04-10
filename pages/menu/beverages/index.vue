<template>
  <div>
    <h1 class="cursive ma-2">Beverages</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }"
                  v-for="card in cards"
                  :key="card.title"
                  md4
                  sm6
                  >
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-card-media 
              :src="card.src"
              height="300px"
              >
            
                <div class="pricePosition" v-text="card.price">
              </div>
              
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive" v-text="card.title"></div>
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
            title: 'Shirakiku Ramune',
            src: require('static/images/beverages/ramune.jpg'),
            price: '2.50',
            flex: 3 
          },

          { 
            title: 'Canned Sodas (Pepsi, Mountain Dew, Sierra Mist, Root Beer, Orange Soda)', 
            src: require('static/images/beverages/cannedsoda.png'),
            price: '2.00', 
            flex: 3 },

          { 
            
            title: 'Mineral Water',
            src: require('static/images/beverages/perrier.jpg'),
            price: '3.50', 
            flex: 3 },

          { 
            
            title: 'Apple Juice', 
            src: require('static/images/beverages/applejuice.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Cherry Temple', 
            src: require('static/images/beverages/cherrytemple.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Hot Tea', 
            src: require('static/images/beverages/hottea.jpg'),
            price: '2.00', 
            flex: 3 },
          { 
            
            title: 'Iced Tropical Passion Tea', 
            src: require('static/images/beverages/icedpassiontea.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Iced Tea', 
            src: require('static/images/beverages/icedtea.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Iced Green Tea', 
            src: require('static/images/beverages/icedgreentea.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Arnold Palmer', 
            src: require('static/images/beverages/arnoldpalmer.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Pink Lemonade', 
            src: require('static/images/beverages/pinklemonade.jpg'),
            price: '3.00', 
            flex: 3 },
          { 
            
            title: 'Classic Lemonade', 
            src: require('static/images/beverages/lemonade.jpg'),
            price: '3.00', 
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

