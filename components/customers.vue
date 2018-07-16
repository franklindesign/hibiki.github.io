<template>
  <v-container>
    <div style="margin-top:15px" >
    <h1 class="cursive black--text ma-2">Customer Love &#x1F497; </h1>
    </div>
    <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="customer in customers" :key="customer.name">
        <div class="quotes">
          <p class="quote">
          "{{customer.quote}}" <br> - {{customer.name}}
           
          <br>
            <img :src="customer.source" style="height: 30px">
          </p>
        </div>
      </div>
      </div>
        <div class="swiper-button-prev swiper-button-black" style="margin:10px;" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" style="margin:10px;" slot="button-next"></div>
      </div>

  </v-container>
</template>

<script>
  export default {
     data () {
      return {
        customers: [
        {
          quote: 'Amazing sushi spot! Great sushi and awesome service, this is our go-to spot! Compliments to the chef, and waiters and waitresses that work here.',
          name: 'Eleanor I.',
          site: 'Yelp',
          src: require('static/images/customer1.png'),
          source: require('static/images/logos/Yelp_Logo.svg')

        },
        {
          quote: 'Love hibiki.  Good all you can eat with a cheap price.  Definitely a go-to sushi spot!',
          name: 'Laanne H.',
          site: 'Yelp',
          src: require('static/images/customer2.png'),
          source: require('static/images/logos/Yelp_Logo.svg')
        },
        {
          quote: 'Best sushi place in Santa Clarita. Great prices and the food quality. Is great. Love the all you can drink special',
          name: 'John O.',
          site: 'Yelp',
          src: require('static/images/customer3.png'),
          source: require('static/images/logos/Yelp_Logo.svg')
        }
        ],
        swiperOption: {
          
          spaceBetween: 10,
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
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 2,
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

  .quote {
    width: 90%;
    height: 150px;
    padding: 10px;
    margin: 10px;
    color: black;
    
  }

  .quotes {
    margin: 10px;
    padding: 20px;
    background-color: white;
  }

  .name {
    width: 50px;
  }
  .customerphoto {
    border-radius: 50%;
    width: 25px;
  }

</style>