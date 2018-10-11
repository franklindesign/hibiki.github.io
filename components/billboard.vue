<template>
  <div class="wrapper billboard">
    <div class="item1">
      <img :src="foodleft.src">
    </div>
    <div class="item2">
      <div>
        <v-card flat style="background: rgb(17, 17, 17);" class="herogreet">
          <v-card-text>
            <h1 class="text-xs-center cursive ayce">All You Can Eat:</h1>
            <h2 class="text-xs-center herotext">Sushi, Sashimi, Sushi Rolls</h2>
            <h2 class="text-xs-center herotext">Appetizers, Salad, Entree,</h2>
            <h2 class="text-xs-center herotext">And Many More!</h2>
          </v-card-text>
          <v-card-actions>
            <div class="centerbutton text-xs-center">
              <v-btn color="red" router to="/menu">View Menu</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div class="item3">
      <img :src="foodright.src">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodleft: {
        src: require("static/images/hero/heroimage_left-min.png")
      },
      foodright: {
        src: require("static/images/hero/heroimage_right-min.png")
      }
    };
  }
};
</script>

<style scoped>
/* fallback display: flex (start)*/

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

img {
  max-width: 100%;
}

.item2 {
  margin-top: 150px;
}

.centerbutton {
  width: 100%;
}

.herogreet {
  width: 400px;
}

.billboard {
  margin-top: 50px;
}

.ayce {
  font-size: 40px;
  color: #ffd700;
}

@media only screen and (max-width: 960px) {
  .item1 {
    margin-top: 50px;
  }
  .item2 {
    margin-top: 75px;
  }
  .item3 {
    margin-top: 50px;
  }
  .herotext {
    font-size: 16px;
  }
  .billboard {
    margin-top: 0px;
  }
}

@media only screen and (max-width: 600px) {
  .herotext {
    font-size: 12px;
  }
  .item1 {
    margin-top: 50px;
  }
  .item2 {
    margin-top: 50px;
  }
  .item3 {
    margin-top: 50px;
  }
  .herogreet {
    width: 125px;
  }
  .billboard {
    margin-top: 0px;
  }
  .ayce {
    font-size: 10px;
    color: gold;
    margin-top: 25px;
    margin-bottom: 10px;
  }
}

/* fallback display: flex (end)*/

/* Modern Browser Support For Display: Grid (Start)*/

/*
  @supports (display:grid) {
  .wrapper {
    display: grid; 
    justify-content: space-around;
    grid-template: 
      "foodleft HeroText foodright" 20px / 1fr 1fr 1fr
  
  }
  
  .item1 {
  grid-area: foodleft;
  justify-self: end;
  
  }
  
  .item2 {
  grid-area: HeroText;
  margin-top: 150px;
  }
  
  .item3 {
  justify-self: start;
  
  grid-area: foodright;
  }
  
  img {
    max-width: 100%;
  }
  
  .herotext {
    font-size: 2em;
  }
  
  .ayce {
    font-size: 3em;
  }
  
  .centerbutton {
      width: 100%;
  }
  
  }
  
  @media only screen and (max-width: 960px) {
    .wrapper {
      height: 400px;
      grid-template:
        "HeroText HeroText" 2px / 1fr 1fr
        "foodleft foodright" 10px / 1fr 1fr
    }
    .herotext {
      font-size: 1em;
    }
    .ayce {
      font-size: 1.5em;
    }
  
    .item2 {
      margin-top: 50px;
    }
  
   
  
  @media only screen and (max-width: 600px){
    .wrapper {
      grid-template: 
      "HeroText " 1fr
        "foodleft foodright" 10px / 1fr 1fr
    }
  
    .item1 {
      margin-top: 65px;
    }
    .item2 {
      margin-top: 20px;
    }
    .item3 {
      margin-top: 65px;
    }
  
    .herotext {
      font-size: 1em;
    }
     .ayce {
      font-size: 12px;
    }
  }
  
  }   
  */

/* Modern Browser Support For Display: Grid (End)*/
</style>