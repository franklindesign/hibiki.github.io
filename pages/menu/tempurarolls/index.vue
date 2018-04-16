<template>
  <div>
    <h1 class="cursive ma-2">Tempura Rolls</h1>
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
    

    data () {
      return {
        cards: [
          { 
            itemNumber: 1,
            title: 'Crunch Shrimp Tempura Roll', 
            itemDescription: 'Shrimp tempura, crabmeat, avocado, cucumber, tempura crunch', 
            src: require('static/images/tempurarolls/crunchshrimptempuraroll.jpg'),
            price: '9.25', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Calamari Tempura Roll',
            itemDescription: 'Calamari tempura, crabmeat, avocado, cucumber, tempura crunch', 
            src: require('static/images/tempurarolls/calamaritempuraroll.jpg'),
            price: '9.25', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Amber Roll', 
            itemDescription: 'Shrimp tempura, crabmeat, crunch mixed with spicy crabmeat',
            src: require('static/images/tempurarolls/amberroll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'Hot Night Roll', 
            itemDescription: 'Spicy tuna, shrimp tempura, crabmeat, tempura crunch',
            src: require('static/images/tempurarolls/hotnightroll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 5,
            title: 'Kevin Roll', 
            itemDescription: 'Deep fried California roll',
            src: require('static/images/tempurarolls/kevinroll.jpg'),
            price: '8.50', 
            flex: 3 },
          { 
            itemNumber: 6,
            title: 'Vegetable Tempura Roll', 
            itemDescription: 'Fried vegetables, avocado, cucumber',
            src: require('static/images/tempurarolls/vegetabletempuraroll.jpg'),
            price: '8.50', 
            flex: 3 },
          { 
            itemNumber: 7,
            title: 'Vegas Roll', 
            itemDescription: 'Tuna, salmon, white fish, albacore, crabmeat, cream cheese',
            src: require('static/images/tempurarolls/vegasroll.jpg'),
            price: '11.50', 
            flex: 3 },
          { 
            itemNumber: 8,
            title: 'Sean\'s Roll', 
            itemDescription: 'Salmon and avocadocrabmeat, shrimp tempura',
            src: require('static/images/tempurarolls/seanroll.jpg'),
            price: '11.25', 
            flex: 3 },
          { 
            itemNumber: 9,
            title: 'Mango Tango Roll', 
            itemDescription: 'Salmon, mango, avocado, shrimp tempura, cucumber',
            src: require('static/images/tempurarolls/mangotangoroll.jpg'),
            price: '10.50', 
            flex: 3 },
          { 
            itemNumber: 10,
            title: 'Rock Lobster Roll', 
            itemDescription: 'California roll, deep fried popcorn style crawfish',
            src: require('static/images/tempurarolls/rocklobsterroll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 11,
            title: 'Rock Scallop Roll', 
            itemDescription: 'California roll, deep fried popcorn style scallop',
            src: require('static/images/tempurarolls/rockscalloproll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 12,
            title: 'Spider Roll', 
            itemDescription: 'Fried whole soft shell crab, avocado, crabmeat',
            src: require('static/images/tempurarolls/spiderroll.jpg'),
            price: '12.50', 
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

