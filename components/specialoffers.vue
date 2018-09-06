<template>
<v-container>
  <h1 class="cursive mb-3">This Week's Special:</h1>
    <v-layout row wrap>
      <h1>No Offers this week.</h1>
      <!-- disable on expiration -->
      <!-- <v-flex xs12 sm6 md6 lg4 xl4>
        <div>
          <v-card style="margin: 5px;">
            <v-card-media
              height="300"
              :src="offerOne.src"
            >
             <div class="halfoff">
             <h1>50% OFF</h1>
           </div>             
           <div class="duration">
             <h4>{{offerOne.duration}}</h4>
           </div>
            </v-card-media>

            <v-card-text style="background-color: red">
             {{offerOne.description}}
            </v-card-text>

          </v-card>
        </div>
      </v-flex> -->
      <!-- <v-flex xs12 sm6 md6 lg4 xl4>
        <div>
          <v-card style="margin: 5px;">
            <v-card-media
              height="300"
              :src="offerTwo.src"
            >
            <div class="halfoff">
             <h1>50% OFF</h1>
             </div>
             <div class="duration">
             <h4>{{offerTwo.duration}}</h4>
           
           </div>
            </v-card-media>
          
            <v-card-text style="background-color: red">
             {{offerTwo.description}} 
            </v-card-text>

          </v-card>
        </div>
      </v-flex> -->
    </v-layout>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      // disable on expiration
      /* offerOne: 
          { 
            
            description: 'Lunch Special: 50% Off all premium sushi rolls. (A la carte / dine-in only) from 11:30 AM to 4 PM.',
            duration: 'April 15-19', 
            src: require('static/images/offerImgs/rollsgroup.jpg'),
          }, */
      /*  offerTwo: 
          { 
            
            description: 'Sake Discount: 50% Off on all new premium sake bottles.', 
            duration: 'April 12-15',
            src: require('static/images/offerImgs/sakegroup.jpg'),
          }  */
    };
  }
};
</script>

<style scoped>
.halfoff {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 5px;
}
.duration {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: black;
  color: white;
  padding: 5px;
}
</style>