<template>
  <v-container>
    <div style="margin-top:15px" >
    <h1 class="cursive black--text ma-2">Customer Love &#x1F497; </h1>
    </div>
    <v-layout row wrap style="margin-bottom: 50px; margin-top: 15px;">
      <v-flex xs12 sm4 md4 lg4>
        <v-card color="white" class="black--text ma-1">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex>
                    <div>
                      <div class="subheading">"{{customer1.quote}}"</div>
                      <div class="mt-3">{{customer1.name}}</div>
                      <div class="source"><img :src="customer1.source" style="height: 25px"></div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 lg4>
                     
                    <v-card-media
                      :src="customer1.src"
                      height="70px"
                      class="customerphoto"
                      contain
                      >
                    </v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
      </v-flex>
      <v-flex xs12 sm4 md4 lg4>
        <v-card color="white" class="black--text ma-1">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex>
                    <div>
                      <div class="subheading">"{{customer2.quote}}"</div>
                      <div class="mt-3">{{customer2.name}}</div>
                      <div class="source"><img :src="customer2.source" style="height: 25px"></div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 lg4>
                   
                    <v-card-media
                      :src="customer2.src"
                      height="70px"
                      class="customerphoto"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        
      </v-flex>
      <v-flex xs12 sm4 md4 lg4>
        <v-card color="white" class="black--text ma-1">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex>
                    <div class="cardheight">
                      <div class="subheading">"{{customer3.quote}}"</div>
                      <div class="mt-3">{{customer3.name}}</div>
                      <div class="source"><img :src="customer3.source" style="height: 25px"></div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm12 lg4>
                     
                    <v-card-media
                      :src="customer3.src"
                      height="70px"
                      class="customerphoto"
                    
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
     data () {
      return {
        customer1: {
          quote: 'Amazing sushi spot! Great sushi and awesome service, this is our go-to spot! Compliments to the chef, and waiters and waitresses that work here.',
          name: 'Eleanor I.',
          src: require('static/images/customer1.png'),
          source: require('static/images/logos/Yelp_Logo.svg')

        },
        customer2: {
          quote: 'Love hibiki.  Good all you can eat with a cheap price.  Definitely a go-to sushi spot!',
          name: 'Laanne H.',
          src: require('static/images/customer2.png'),
          source: require('static/images/logos/Yelp_Logo.svg')
        },
        customer3: {
          quote: 'Best sushi place in Santa Clarita. Great prices and the food quality. Is great. Love the all you can drink special',
          name: 'John O.',
          src: require('static/images/customer3.png'),
          source: require('static/images/logos/Yelp_Logo.svg')
        }
      }
    }
  }
</script>

<style scoped>

  .quote {
    color: black;
    display: inline;
  }

  .name {
    width: 50px;
  }
  .customerphoto {
    border-radius: 50%;
    width: 70px;
  }




</style>