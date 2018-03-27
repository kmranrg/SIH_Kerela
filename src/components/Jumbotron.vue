<template>
  <v-jumbotron color="grey lighten-4">
    <v-container fill-height>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <h3 class="display-3">Look for Hospitals</h3>
          <v-divider class="my-3"></v-divider>
          <div class="searchbar">
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
          </v-flex>
        </div>
          <v-btn round flarge color="indigo darken-4"> <span style="color:white" > Search</span></v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<style>
.searchbar{
  display: flex;
  justify-content: center;
}
</style>
