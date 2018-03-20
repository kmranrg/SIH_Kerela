<template>
  <div style="position:relative;">
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

  </div>
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
</style>

