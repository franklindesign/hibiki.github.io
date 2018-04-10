<template>
  <div>
    <h1 class="cursive ma-2">Cooked Rolls</h1>
    <v-layout wrap row class="mb-5">
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
    
  transition: 'page',

    data () {
      return {
        
        cards: [
          { 
            itemNumber: 1,
            title: 'Snow Roll', 
            itemDescription: 'inside: crabmeat, and avocado. top: white fish', 
            src: require('static/images/cookedrolls/snowroll.jpg'),
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
            flex: 3 },
          { 
            itemNumber: 5,
            title: 'Volcano Roll', 
            itemDescription: 'inside california roll. top: baked seafood',
            src: require('static/images/cookedrolls/volcanoroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 6,
            title: 'Chicken Teriyaki Roll', 
            itemDescription: 'inside: crabmeat, avocado, teriyaki chicken and cucumber',
            src: require('static/images/cookedrolls/chickenteriyakiroll.jpg'),
            price: '9.50', 
            flex: 3 },
          { 
            itemNumber: 7,
            title: 'XXX (triple X)', 
            itemDescription: 'inside: spicy crabmeat and cream cheese. top: white fish',
            src: require('static/images/cookedrolls/xxxroll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 8,
            title: 'Caterpillar Roll', 
            itemDescription: 'inside: fresh water eel, crabmeat, cucumber. top: avocado',
            src: require('static/images/cookedrolls/caterpillarroll.jpg'),
            price: '11.25', 
            flex: 3 },
          { 
            itemNumber: 9,
            title: 'Eel Special Roll', 
            itemDescription: 'inside: crabmeat, cucumber, and avocado. top: fresh water eel and avocado',
            src: require('static/images/cookedrolls/eelspecialroll.jpg'),
            price: '11.25', 
            flex: 3 },
          { 
            itemNumber: 10,
            title: 'Asahi Roll', 
            itemDescription: 'inside: cucumber, avocado, and crabmeat. top: fresh water eel and salmon',
            src: require('static/images/cookedrolls/asahiroll.jpg'),
            price: 11.25, 
            flex: 3 },
          { 
            itemNumber: 11,
            title: 'Kirin Roll', 
            itemDescription: 'inside: crabmeat and fried shrimp. top: fresh water eel and avocado',
            src: require('static/images/cookedrolls/kirinroll.jpg'),
            price: 11.95, 
            flex: 3 },
          { 
            itemNumber: 12,
            title: 'OH-NO! Roll', 
            itemDescription: 'inside: crabmeat, avocado, and cucumber. top: white tuna',
            src: require('static/images/cookedrolls/ohnoroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 13,
            title: 'Eskimo Roll', 
            itemDescription: 'inside: crabmeat, avocado, cucumber. top: white tuna and spicy tuna',
            src: require('static/images/cookedrolls/eskimoroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 14,
            title: 'Beef Steak Roll', 
            itemDescription: 'inside: beef steak, sautéed mushrooms, cucumber and crispy onion',
            src: require('static/images/cookedrolls/beefsteakroll.jpg'),
            price: '11.95', 
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
