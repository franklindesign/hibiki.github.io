<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 lg6 xl6>
          <div>
            <h1 class="cursive mb-5">Frequently asked questions (FAQ)</h1>
            <v-expansion-panel>
              <v-expansion-panel-content v-for="question in questions" :key="question.question">
                <div slot="header">{{question.question}}</div>
                <v-card light>
                  <v-card-text>{{question.answer}}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "What are the hours of operation for Hibiki Sushi & Bar?",
          answer:
            "Lunch is served Monday through Friday until 4pm. Dinner is served all day on Saturdays, Sundays, and holidays. Open hours are from 11:30 AM to 10 PM And open untill 11pm on Fridays & Saturdays."
        },
        {
          question: "Holiday Hours",
          answer:
            "We are closed on Thanksgiving Day and Christmas Day to allow our staff to spend time with their family and friends. Depending on the amount of business on the day before these holidays, we may close early. We leave this decision to the discretion of the staff. Please contact the restaurant directly for the scheduled closing time the day before Holidays"
        },
        {
          question: "Where can I get a coupon?",
          answer:
            "Sign up for Hibiki Emails to receive info about any specials and coupons. Don't forget to check out local coupon magazines (ie., SCV Smart Shopper, LocalFlavor )."
        },
        {
          question: "How do you accept coupons?",
          answer:
            "We only accept printed coupons. Any coupons shown via mobile devices will not be accepted. Present your printed coupon to our servers to receive discount on your bill. Expired coupons will not be accepted."
        },
        {
          question: "Is there a free birthday offer in the restaurant?",
          answer:
            "Hibiki Sushi guests can receive a complimentary dessert on their birthday when they dine with us. Show us a proof of birth date or ID."
        },
        {
          question: "What happened to your Happy Hour specials?",
          answer:
            "We no longer have Happy Hour specials. 90% of our customers prefer All-You-Can-Eat options."
        },
        {
          question: "Will servers sing Happy Birthday?",
          answer:
            "Thank you for considering us for your celebrations! Our servers would be happy to join your group in singing Happy Birthday to the guest of honor."
        },
        {
          question:
            "Do you have any current promotion? Are there any specials?",
          answer:
            "Sign up for Hibiki Emails to be the first to find out about our specials."
        },
        {
          question: "How do I purchase gift cards/certificates?",
          answer:
            "Gift cards/certificates can be purchased in any dollar denomination at the checkout counter."
        },
        {
          question: "Do you take reservations?",
          answer:
            "We recommend calling for reservations, as our staff can work with you on available date and seating arrangements."
        },
        {
          question: "Gratuity",
          answer: "18% gratuity may be included for parties of six or more."
        },
        {
          question: "Does Hibiki Sushi & Bar offer take out service?",
          answer: "We're always available to take phone orders for pick-up."
        },
        {
          question: "Does Hibiki Sushi & Bar deliver orders?",
          answer:
            "For online orders, download GrubHub / EAT24, UberEATS, and PostMates App to place your order online."
        },
        {
          question:
            "Where is my online order? It's been more than an hour since I ordered.",
          answer:
            "If your order has not been confirmed for delivery/pick-up, please give us a call to confirm if your food is ready for delivery/pick-up."
        },
        {
          question: "Does Hibiki Sushi & Bar offer catering?",
          answer:
            "Please give us a call for catering prices and additional information. Additionally if you spend $200 or more on party catering, you will be given a $25 Hibiki Sushi & Bar gift card. "
        },
        {
          question: "How do I apply for a job?",
          answer:
            "We are always looking for new employees to join our staff. Experience in the food industry is always a plus. Please give us a call or visit us during the weekend to talk about employment opportunity."
        },
        {
          question: "How can I contact Hibiki Sushi & Bar?",
          answer:
            "You can contact us through email: hibikisushibar@gmail.com or through phone call: (661) 298-0273."
        },
        {
          question:
            "I've signed up for Hibiki Emails, is my personal info safe?",
          answer:
            "Your contact info is stored safe by MailChimp. Also we do not share your personal info with any other parties."
        },
        {
          question: "Can I unsubscribe from Hibiki Emails?",
          answer:
            "If you would like to be removed from the email list, click on the 'Unsubscribe' link provided on the email."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>