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
          class="grey lighten-4 ml-5 "
        >
          <img src="@/assets/hospital.svg" alt="avatar">
        </v-avatar>
      </v-flex>
      <div class="bt mb-5 mr-3">
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
</template>

<style>
.bt {
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: flex-end;

}
</style>

