<template>
  <div>
    <div class="centerTitle480">
    <h1 class="cursive ma-2">10 Year Anniversary:</h1>
    </div>
    <div>
      <v-layout row wrap mt-2>
        <v-flex xs12 sm6 md4 lg4 ma-2>
          <div class="gradientBorder">
            <div class="pricemargin">
              <h2 class="ayce">Limited AYCE Menu</h2>
              <h4>Dine-in only. 60 Min.</h4>
    
              <p>
                <ul class="mt-3">
                  <li>Lunch: $17 (11:30 AM - 4 PM)</li>
                  <li>Dinner: $21</li>

                
                </ul>
              </p>
              <p> All Items listed on the order sheet are included.</p>
            </div>
          </div>
        </v-flex>
      </v-layout>
        </div>


    <div class="centerTitle480 mt-5">
    <h1 class="cursive ma-2">All You Can Eat: Pricing</h1>
    </div>

    <div>
      <v-layout row wrap mt-2>
        <v-flex xs12 sm6 md4 lg4 ma-2>
          <div class="gradientBorder">
            <div class="pricemargin">
              <h2 class="ayce">ALL YOU CAN EAT: LUNCH</h2>
              <h4>75 Min.</h4>
              <p>Monday through Friday (11:30 AM - 4 PM)</p>
              <p>
                <ul>
                  <li>Adults: 24.95</li>
                  <li>Kids (4-9): 12.95</li>
                  <li>Babies (0-3): FREE</li>
                </ul>
              </p>
              <p> Yellow Star/Name items are included for AYCE.</p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4 ma-2>
          <div class="gradientBorder">
            <div class="pricemargin">
              <h2 class="ayce">ALL YOU CAN EAT:<br>
              DINNER/WEEKEND & HOLIDAYS</h2>
              <h4>90 Min.</h4>
              <p>
                <ul><br>
                  <li>Adults: 27.95</li>
                  <li>Kids (4-9): 14.95</li>
                  <li>Babies (0-3): FREE</li>
                </ul>
              </p>
              <p> Yellow Star/Name items are included for AYCE.</p>
              </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4 ma-2>
          <div class="gradientBorder" >
            <div class="pricemargin">
              <h2 class="ayce-sashimi">ALL YOU CAN EAT: SUSHI & SASHIMI (ONLY)</h2>
              <h4>75 Min.</h4>
              <br>
              <p>
                <ul>
                  <li>Adults: 31.95</li>
                </ul>
              </p>
              <p> Order from 23 options of Sushi/Sashimi.</p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4 lg4 ma-2>
          <div class="gradientBorder" >
            <div class="pricemargin">
              <h2 class="aycd">+ ALL YOU CAN DRINK: SAPPORO</h2>
              <h4>75 Min.</h4>
              <br>
              <p>
                <ul>
                  <li>Additional per AYCE customer: +6.95</li>
                  <li>ONE (.01) CENT REFILLS</li>
                  <li>For drinking age only+ </li>
                </ul>
              </p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true
};
</script>

<style scoped>
.ayce {
  color: #ffd700;
}
.ayce-sashimi {
  color: #ff4500;
}

.aycd {
  color: #ff8400;
}

p li {
  list-style-type: none;
}

.gradientBorder {
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(53, 53, 53);
  background-color: rgb(12, 12, 12);
}

.pricemargin {
  margin: 20px;
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