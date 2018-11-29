<template>
  <v-container>
    <div class="mt-5">
      <p class="ayce">Pricing</p>
      <p class="price-tag">Offering The Best Price In All-You-Can-Eat</p>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="menu in menus" :key="menu.name">
          <div class="card">
            <p class="item menu-name">{{menu.name}}</p>
            <p class="item price1">
              {{menu.price1}}
              <span class="small">{{menu.customerA}}</span>
            </p>
            <p class="item price1">
              {{menu.price2}}
              <span class="small">{{menu.customerB}}</span>
            </p>
            <p class="item">{{menu.items}}</p>
            <p class="item">{{menu.dining}}</p>
            <p class="item">{{menu.timeLimit}}</p>
            <p class="item">{{menu.other}}</p>
            <div>
              <v-btn color="info">View Menu</v-btn>
            </div>
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
      menus: [
        {
          name: "Limited Menu",
          price1: "$17",
          customerA: "/ lunch",
          price2: "$21",
          customerB: "/ dinner",
          items: "42 Items",
          dining: "Dine-in only",
          timeLimit: "60 minutes",
          other: "Babies (0-3) eat for free"
        },
        {
          name: "Lunch (Weekdays)",
          price1: "$24.95",
          customerA: "/ adults",
          price2: "$12.95",
          customerB: "/ kids",
          items: "100+ Items",
          dining: "Dine-in only",
          timeLimit: "75 minutes",
          other: "Babies (0-3) eat for free"
        },
        {
          name: "Weekend/Dinner/Holidays",
          price1: "$27.95",
          customerA: "/ adults",
          price2: "$14.95",
          customerB: "/ kids",
          items: "100+ Items",
          dining: "Dine-in only",
          timeLimit: "90 minutes",
          other: "Babies (0-3) eat for free"
        },
        {
          name: "Sushi & Sashimi",
          price1: "$31.95",
          customerA: "/ adults",
          price2: "",
          customerB: "",
          items: "23 Items",
          dining: "Dine-in only",
          timeLimit: "75 minutes",
          other: ""
        },
        {
          name: "All You Can Drink",
          price1: "+$6.95",
          customerA: "/ adults",
          price2: "",
          customerB: "",
          items: "Sapporo Draft Beer",
          dining: "Dine-in with AYCE only",
          timeLimit: "One Cent Refills",
          other: "For drinking age only+"
        }
      ],
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 350px;
}

.swiper-wrapper {
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 20px;
}

.ayce {
  font-size: 2rem;
  text-align: center;
}

.price1 {
  font-size: 2em !important;
}
.price-tag {
  text-align: center;
}
.swipeCards {
  text-align: center;
  font-size: 2em;
  margin-top: -50px;
}

.small {
  font-size: 12px !important;
}
.card {
  width: 300px !important;
  height: 100%;
  background-color: #ffffff;
  border-radius: 25px;
  text-align: center;
  padding: 15px;
}
.card:hover {
  box-shadow: 5px 10px rgb(208, 152, 12);
  cursor: grab;
}
.item {
  color: #000000;
  font-size: 1.2em;
}
.menu-name {
  font-size: 1.5em;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 300px !important;
    height: 100%;
  }
  .menu-name {
    font-size: 1.2em !important;
  }
  .item {
    font-size: 1em;
  }
}
</style>