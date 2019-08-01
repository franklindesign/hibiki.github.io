<template>
  <div class="margin">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.title">
          <img
            data-sizes="auto"
            :src="slide.src"
            :data-src="slide.src"
            :data-srcset="`${slide.src320} 300w, ${slide.src480} 480w, ${slide.src800} 800w, ${slide.src1200} 1200w, ${slide.src1600} 1600w`"
            sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            (max-width: 800px) 600px,
            (max-width: 1200px) 1000px, (max-width: 1600px) 1400px"
            class="slidesize lazyload"
            :alt="`${slide.title}`"
            :aria-label="`${slide.title}`"
          />
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
          title: "50% OFF BEER & SAKE",
          description: "Drinks Sale",
          src: require("static/images/carousel/carousel_item_08.jpg"),
          src320: require("static/images/carousel/carousel_item_08_320.jpg"),
          src480: require("static/images/carousel/carousel_item_08_480.jpg"),
          src800: require("static/images/carousel/carousel_item_08_800.jpg"),
          src1200: require("static/images/carousel/carousel_item_08.jpg"),
          src1600: require("static/images/carousel/carousel_item_08.jpg")
        },
        {
          title: "Limited Time Price Discount",
          description:
            "Starting today, AYCE starts at $22.95 ($2 OFF regular lunch and dinner price)",
          src: require("static/images/carousel/carousel_item_06.jpg"),
          src320: require("static/images/carousel/carousel_item_06_320.jpg"),
          src480: require("static/images/carousel/carousel_item_06_480.jpg"),
          src800: require("static/images/carousel/carousel_item_06_800.jpg"),
          src1200: require("static/images/carousel/carousel_item_06.jpg"),
          src1600: require("static/images/carousel/carousel_item_06.jpg")
        },
        {
          title: "All You Can Drink: Draft Beer",
          description: "Available with AYCE only for $6.95. One Cent Refills.",
          src: require("static/images/carousel/carousel_item_03.jpg"),
          src320: require("static/images/carousel/carousel_item_03_320.jpg"),
          src480: require("static/images/carousel/carousel_item_03_480.jpg"),
          src800: require("static/images/carousel/carousel_item_03_800.jpg"),
          src1200: require("static/images/carousel/carousel_item_03.jpg"),
          src1600: require("static/images/carousel/carousel_item_03.jpg")
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
          src: require("static/images/carousel/carousel_item_04.jpg"),
          src320: require("static/images/carousel/carousel_item_04_320.jpg"),
          src480: require("static/images/carousel/carousel_item_04_480.jpg"),
          src800: require("static/images/carousel/carousel_item_04_800.jpg"),
          src1200: require("static/images/carousel/carousel_item_04.jpg"),
          src1600: require("static/images/carousel/carousel_item_04.jpg")
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
          src: require("static/images/carousel/carousel_item_02.jpg"),
          src320: require("static/images/carousel/carousel_item_02_320.jpg"),
          src480: require("static/images/carousel/carousel_item_02_480.jpg"),
          src800: require("static/images/carousel/carousel_item_02_800.jpg"),
          src1200: require("static/images/carousel/carousel_item_02.jpg"),
          src1600: require("static/images/carousel/carousel_item_02.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 4000,
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