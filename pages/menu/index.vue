<template>
  <div >
    <div class="centerTitle480">
    <h1 class="cursive ma-2">All You Can Eat: Pricing</h1>
    </div>

    <div>
      <v-layout row wrap mt-2>
        <v-flex xs12 sm12 md4 l4 >
          <div class="gradientBorder" >
            <div class="pricemargin">
              <h2 style="color: orange">ALL YOU CAN EAT: SUSHI & SASHIMI (ONLY)</h2>
              <h4>75 Min.</h4>
              <br>
              <p>
                <ul>
                  <li>Adults: 29.95</li>
                </ul>
              </p>
              <p> Order from 23 options of Sushi/Sashimi.</p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 l4>
          <div class="gradientBorder">
            <div class="pricemargin">
              <h2 style="color:yellow">ALL YOU CAN EAT: LUNCH</h2>
              <h4>75 Min.</h4>
              <p>Monday through Friday (11:30 AM - 4 PM)</p>
              <p>
                <ul>
                  <li>Adults: 22.95</li>
                  <li>Kids (4-9): 11.95</li>
                  <li>Babies (0-3): FREE</li>
                </ul>
              </p>
              <p> Yellow Star/Name items are included for AYCE.</p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4>
          <div class="gradientBorder">
            <div class="pricemargin">
              <h2 style="color: yellow">ALL YOU CAN EAT:<br>
              DINNER/WEEKEND & HOLIDAYS</h2>
              <h4>90 Min.</h4>
              <p>
                <ul><br>
                  <li>Adults: 25.95</li>
                  <li>Kids (4-9): 13.50</li>
                  <li>Babies (0-3): FREE</li>
                </ul>
              </p>
              <p> Yellow Star/Name items are included for AYCE.</p>
              </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
p li {
  list-style-type: none;
}

.gradientBorder {
  height: 350px;
  margin: 10px;
  padding: 5px;
  border-top: 3px;
  border-left: 3px solid #2C429B;
  border-right: 3px solid #C92038;
  border-radius: 5px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 20px;
  -moz-background-size: 100% 20px;
  background-size: 100% 5px;
  background-image: linear-gradient(to right, #2C429B 0%, #C92038 100), linear-gradient(to right, #2C429B 0%, #C92038 100%);
}

.pricemargin {
  margin: 50px 20px 50px 20px;
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}



@media screen and (max-width: 960px) {
  
.centerTitle480 {
  text-align: center;
}

}
</style>