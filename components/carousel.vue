<template>
  <div class="margin">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.title">
          <img :src="slide.src" class="slidesize" :alt="`${slide.title}`" />
          <div class="slideDescriptions">
            <span class="title_description">{{slide.title}}</span>
            <br />
            <span>{{slide.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Limited Time Price Discount",
          description:
            "Starting today, AYCE starts at $22.95 ($2 OFF regular lunch and dinner price)",
          src: require("static/images/carousel/carousel_item_06.jpg")
        },
        {
          title: "All You Can Drink: Draft Beer",
          description: "Available with AYCE only for $6.95. One Cent Refills.",
          src: require("static/images/carousel/carousel_item_03.jpg")
        },
        // {
        //   title: "$23 AYCE Special Sale",
        //   description:
        //     "Extended offer for our All-You-Can-Eat. Get AYCE for $23 lunch & dinner.",
        //   src: require("static/images/carousel/carousel_item_05.jpg")
        // },
        {
          title: "Get online delivery with DoorDash",
          description:
            "Download the DoorDash app, search for Hibiki to start ordering",
          src: require("static/images/carousel/carousel_item_04.jpg")
        },
        // {
        //   title: "All You Can Eat Starting at $24.95",
        //   description: "Choose from over 100 items for All-You-Can-Eat",
        //   src: require("static/images/carousel/carousel_item_01.jpg")
        // },
        {
          title: "We Deliver",
          description:
            "Order from our Grubhub, UberEats, & Postmates or call for pick-up",
          src: require("static/images/carousel/carousel_item_02.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        slidesPerGroup: 1,
        loop: true,
        breakpoints: {
          3840: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 1
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.title_description {
  font-weight: 800;
}

.slideDescriptions {
  position: relative;
  padding: 10px;
  text-align: center;
  color: #ffffff;
}
.margin {
  margin-top: 50px;
}
.slidesize {
  width: 100%;
}
</style>