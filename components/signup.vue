<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="background">
          <p class="text">
            Sign up for Hibiki Emails, get 10% Off Coupons.
          </p>
          <div class="button">
            <v-btn large color="black" to="/emails">
              Sign Up
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped>
.background {
  margin: auto;
  width: 60vw;
  background: rgb(255, 215, 0);
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}

.text {
  color: #000000;
  font-size: 2em;
  padding-top: 10px;
}

.button {
  padding-bottom: 10px;
}
</style>