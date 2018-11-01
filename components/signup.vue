<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <p class="text">
            Sign up for Hibiki Emails, get 10% Off Coupons.
          </p>
          <div class="button">
            <v-btn large to="/emails" color="orange">
              Sign Up
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped>
.text {
  color: #ffffff;
  font-size: 2em;
  padding-top: 10px;
}

@media only screen and (max-width: 480px) {
  .background {
    width: 90vw;
  }
}
</style>