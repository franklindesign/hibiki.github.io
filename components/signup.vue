<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg12>
        <!-- <div class="mb-5">
          <v-alert outline dismissible :value="true" type="info">We are open today! :)</v-alert>
        </div>-->
        <hr />
        <div class="background">
          <p class="headline">Subscribe to Hibiki Emails & get 10% Off Coupons.</p>
          <v-layout row wrap>
            <v-flex xs6 lg6>
              <div>
                <v-btn
                  large
                  target="_blank"
                  href="https://gallery.mailchimp.com/b7da092add9faced53d200a00/files/461967cd-c790-41f9-a873-0eb04f9739f9/JULY_COUPON.pdf"
                  color="#fff"
                  light
                  aria-label="Get Coupon"
                  alt="10% off coupon"
                  rel="noopener"
                >Get Coupon</v-btn>
              </div>
            </v-flex>
            <v-flex xs6 lg6>
              <div>
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