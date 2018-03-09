<template>
  <v-footer height="auto" class="indigo darken-4 hidden-lg-and-up">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>HospSpot</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    })
  }
</script>