<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="background">
          <p class="text">
            Sign up for Hibiki Emails, get 10% Off Coupons. 
          </p>
          <div class="button">
            <v-btn large outline color="white" to="/emails">
              Sign Up
            </v-btn>
          </div>
        </div>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
 .background {
   background: orangered;
   padding-left: 10px;
   padding-right: 10px;
 }
 .text {
   font-size: 20px;
   padding-top: 10px;
 }

 .button {
   padding-bottom: 10px;
 }
</style>