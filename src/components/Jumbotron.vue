<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <h3 class="display-3">Look for Hospitals</h3>
          <v-divider class="my-3"></v-divider>
          <div class="searchbar">
          <v-flex xs6>
              <v-text-field class="mt-3 mb-3"
                solo-inverted
                flat
                label="Search"
                prepend-icon="search"
              ></v-text-field>
          </v-flex>
        </div>
          <v-btn round flarge color="primary" class="mx-0">Search</v-btn>
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
