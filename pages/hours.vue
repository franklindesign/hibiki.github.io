<template>
  <v-layout align-center justify-center column fill-height>
    <div class="ma-5">
      <h1 class="ma-2">Business Hours</h1>

      <v-simple-table light>
        <thead>
          <tr>
            <th class="text-left">Day</th>
            <th class="text-left">Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in hours" :key="item.day">
            <td>{{ item.day }}</td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      hours: [
        {
          day: "Monday",
          time: "11:30 AM to 10 PM"
        },
        {
          day: "Tuesday",
          time: "11:30 AM to 10 PM"
        },
        {
          day: "Wednesday",
          time: "11:30 AM to 10 PM"
        },
        {
          day: "Thursday",
          time: "11:30 AM to 10 PM"
        },
        {
          day: "Friday",
          time: "11:30 AM to 11 PM"
        },
        {
          day: "Saturday",
          time: "11:30 AM to 11 PM"
        },
        {
          day: "Sunday",
          time: "11:30 AM to 10 PM"
        }
      ]
    };
  }
};
</script>
 