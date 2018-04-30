<template>
  <v-container>
    
    <h1 class="cursive ma-2">Popular Items</h1>
    <div>
   <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper ">
      <div class="swiper-slide mostpopularBG" v-for="card in cards" :key="card.title">
        <img :src="card.src" class="itemsize " >
        <div class="cursive mostpopular"> {{card.title}}
        </div>
      </div>
    </div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    
  </div>
      </div>
    
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
        cards: [
          { 
            title: 'Snow Roll', 
            src: require('static/images/cookedrolls/snowroll.jpg')
            },
          { 
            title: 'Fire Fighter Roll',
            src: require('static/images/freshrolls/firefighterroll.jpg')
            },
          { 
            title: 'Angie Roll', 
            src: require('static/images/freshrolls/angieroll.jpg')
            },
          { 
            title: 'Sean\'s Roll', 
            src: require('static/images/tempurarolls/seanroll.jpg')
            },
          { 
            title: 'Eskimo Roll', 
            src: require('static/images/cookedrolls/eskimoroll.jpg')
            },
          { 
            title: 'Salmon Lover Roll',
            src: require('static/images/cookedrolls/salmonloverroll.jpg')
            },
          { 
            title: 'Crispy Chip', 
            src: require('static/images/seafoodappetizers/crispychip.jpg')
            },
            { 
            title: 'Sourpatch Roll', 
            src: require('static/images/freshrolls/sourpatchroll.jpg')
            }
        ],
        swiperOption: {
          
          spaceBetween: 220,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            3840: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>

<style scoped>


.itemsize {
  width: 100%;
    height: auto;
}



.cardBack {
  background: rgb(29, 29, 29);
}

.mostpopular {
  font-size: 1em;
  margin: 10px;
  color: black;
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
