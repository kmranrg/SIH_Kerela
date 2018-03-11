<template>
  <div style="position:relative;">
    <google-maps />
    <div style="position:absolute; bottom: 0; left: 0; width:100%; background: linear-gradient(0deg, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 50%); color: white;" >
      <v-flex
        xs12
        sm6
        md8
        text-xs-center
        layout
        align-center
      >
        <v-avatar
          :tile="tile"
          :size="175"
          class="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
    </div>
    <mobile-footer />
  </div>
</template>
