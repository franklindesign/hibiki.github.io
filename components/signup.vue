<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg12>
        <div class="background">
          <p class="text">Sign up for Hibiki Emails, get 10% Off Coupons.</p>
          <div>
            <v-btn large to="/emails" color="#C62828" aria-label="Sign up button">Sign Up</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped>
.background {
  background-color: #171717;
  padding-top: 10px;
  padding-bottom: 10px;
}

.text {
  color: #ffffff;
  font-size: 1em;
  padding-top: 5px;
  margin: 10px;
}

@media only screen and (max-width: 480px) {
  .background {
    width: 90vw;
  }
}
</style>