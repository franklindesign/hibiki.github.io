<template>
  <v-container>
    <div style="margin-top:15px">
      <h1 class="cursive black--text ma-2">Customer Love &#x1F497;</h1>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="customer in customers" :key="customer.name">
          <div class="quotes">
            <p class="quote">
              "{{customer.quote}}"
              <br>
              <br>-
              <span class="name">{{customer.name}}</span>
              
              <img :src="customer.source" class="customerSource">
            </p>
          </div>
        </div>
      </div>
      <p class="swipeCards">
        <br>&#x2194;
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          quote:
            "Amazing sushi spot! Great sushi and awesome service, this is our go-to spot! Compliments to the chef, and waiters and waitresses that work here.",
          name: "Eleanor I.",
          site: "Yelp",
          source: require("static/images/logos/Yelp_Logo.svg")
        },
        {
          quote:
            "The sushi was excellent. The staff was very friendly and attentive. Our order was prepared well and the prices were very reasonable...Definitely coming back though.",
          name: "Jacob M. (Local Guide)",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        },
        {
          quote:
            "This has become my ONLY sushi spot! I've brought different groups of friends and they all agree best price for great sushi. 4 adults & 2 kids, all you can eat for about $100! We had at least 8 rolls, drinks, tempura everything we could want and then some!",
          name: "Sharon H.",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        }
      ],
      swiperOption: {
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
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
    };
  }
};
</script>

<style scoped>
.swipeCards {
  text-align: center;
  font-size: 2em;
  color: black;
  margin-top: -50px;
}

.swiper-slide:hover {
  cursor: grab;
}

.customerSource {
  display: block;
  height: 30px;
  margin-top: 10px;
}
.quote {
  width: 90%;
  height: auto;
  padding: 10px;
  margin: 10px;
  color: #000000;
}

.quotes {
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 4px 6px 1px rgba(0, 0, 0, 0.1);
}

.name {
  font-weight: bold;
}
</style>