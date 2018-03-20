<template>
  <v-app>

    <!-- Toolbar -->
    <v-toolbar app clipped-left class="">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5"><router-link to="/">Path Finder</router-link></span>
      <v-spacer></v-spacer>
      <dropbtn/>
    </v-toolbar>
    <v-content>

      <!-- Upper Card -->
      <v-card dark color="black" class="upper">
        <bread class="mt-2"/>
        <v-flex xs4>
          <v-text-field class="mt-3 mb-3"
            solo-inverted
            flat
            label="Look for Hospitals"
            prepend-icon="search">
          </v-text-field>
        </v-flex>
      </v-card>

      <!-- Grid -->
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 v-for="i in 2" :key="`6${i}`">
            <v-card dark color="secondary">
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4 v-for="i in 3" :key="`4${i}`">
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 v-for="i in 4" :key="`3${i}`">
            <v-card dark color="secondary">
              <v-card-text class="px-0">3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs2 v-for="i in 6" :key="`2${i}`">
            <v-card dark color="primary">
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1 v-for="i in 12" :key="`1${i}`">
            <v-card dark color="secondary">
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <div style="position:relative;">
        <google-maps />
        <div style="position:absolute; bottom: 0; left: 0; width:100%; background: linear-gradient(0deg, rgba(0,0,0,0.7) 56%, rgba(0,0,0,0) 56%); color: white;" >
          <div class="avatar">
            <v-avatar
              :tile="tile"
              :size="170"
              class="grey lighten-4 ml-5 mb-2"
              >
              <img src="@/assets/hospital.svg" alt="avatar">
            </v-avatar>
            <div class="bt mr-3 mb-4">
            <div class="text-xs-center">
              <v-btn round color="orange darken-1" dark><v-icon left >book</v-icon>Book Appointment</v-btn>
            </div>
            <div class="text-xs-center">
              <v-btn round color="purple accent-4" dark><v-icon left >comment</v-icon>Submit Review</v-btn>
            </div>
            <div class="text-xs-center">
              
              <v-btn round color="red accent-3" dark><v-icon left >favorite</v-icon>Favorite</v-btn>
            </div>      
            </div>
          </div>
        </div>
      </div> -->
    </v-content>
  </v-app>
</template>

<style>
.avatar {
  display: flex;
  justify-content: space-between;


}

.bt {
  display: flex;
  flex-direction:row;
  align-self:flex-end;
  flex-wrap: wrap
}

 .upper {
    display: flex;
    justify-content: space-around;
  }


</style>

