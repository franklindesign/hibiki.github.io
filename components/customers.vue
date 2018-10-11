<template>
  <v-container>
    <div style="margin-top:15px">
      <h1 class="cursive black--text ma-2">Customer Love &#x1F497; </h1>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="customer in customers" :key="customer.name">
          <div class="quotes">
            <p class="quote">
              "{{customer.quote}}"  <br><br>- <span class="name">{{customer.name}} </span>
              
              <img :src="customer.source" class="customerSource">
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-black" style="margin:6px;" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" style="margin:6px;" slot="button-next"></div>
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
            "This is one of my favorite sushi Bar in SCV.  All you can it is really good and the food is great. We just celebrate 2 of our technicians birthdays in Hibiki and we all had a great time and enjoyed the food. Our waitress was really nice!!",
          name: "Wilmy M.",
          site: "Yelp",
          source: require("static/images/logos/Yelp_Logo.svg")
        },
        {
          quote:
            "There is ample seating for dining, booth and table alike and pleasant aesthetic about the interior. The staff are inviting and friendly, and though I arrived at an extremely busy hour with family including two kids they were more than happy to find a booth...",
          name: "Devin P. (Local Guide)",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        },
        {
          quote:
            "...we have always enjoyed our experience as the entire restaurant is all you can eat which works well when you have a family. The spicy tuna crispy chip makes the whole place worthwhile.",
          name: "Jay R.",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        },
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
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
    };
  }
};
</script>

<style scoped>
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