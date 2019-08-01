<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md12>
        <!-- <div class="mb-5">
          <v-alert outline dismissible :value="true" type="info">We are open today! :)</v-alert>
        </div>-->
        <hr />
        <div class="background">
          <v-layout align-center justify-center column fill-height>
            <v-flex xs12 md8 align-self-center>
              <div class="ma-2 pl-5">
                <p>Subscribe to Hibiki Emails & get 10% Off Coupons.</p>
              </div>
            </v-flex>
            <v-flex xs6 md2 align-self-center>
              <div class="ma-2 pa-2">
                <v-btn
                  large
                  target="_blank"
                  href="https://gallery.mailchimp.com/b7da092add9faced53d200a00/files/e10c0b3e-c50d-44bb-9120-0b432842f713/AUG_COUPON.pdf"
                  color="#fff"
                  light
                  aria-label="Get Coupon"
                  alt="10% off coupon"
                  rel="noopener"
                >Get Coupon</v-btn>
              </div>
            </v-flex>
            <v-flex xs6 md2 align-self-center>
              <div class="pa-2 ma-2">
                <v-btn large to="/emails" color="#C62828" aria-label="Sign up" alt="sign up">Sign Up</v-btn>
              </div>
            </v-flex>
          </v-layout>
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