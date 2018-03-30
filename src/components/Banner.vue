<template>
 <v-card flat color="grey lighten-5" class="mb-5" height="420px" 
       img="http://backgroundcheckall.com/wp-content/uploads/2017/12/hospital-background-images-hd-9.jpg">
       <v-card-text>
            <div class="display-3 feedback mt-5 pt-5" style="color:black; height:140px">Look for Hospitals</div>
        </v-card-text>
        <div class="searchbar" style="color:black; height:400px">
          <v-flex xs6>
              <v-select
                solo-inverted
                light
                placeholder="Search Services, Hospitals, Blogs, Specialities, Treatments, Events"
                flat
                prepend-icon="search"
                autocomplete
                class="ml-4"
              ></v-select>
              <div class="mt-4">
              <v-btn round flarge color="indigo darken-4"> <span style="color:white" > Search</span></v-btn>
              </div>
          </v-flex></div>
 </v-card>
</template>

<style>
.searchbar{
  display: flex;
  justify-content: center;
}
</style>