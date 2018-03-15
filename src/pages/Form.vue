<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1">Hi, tell me your name</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2">Tell me your problem </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">In which area, do you live?</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
             <v-card  class="mb-5" height="450px" img="http://im.haberturk.com/2015/05/06/ver1430906544/1074420_940x531.jpg">
             </v-card>
        <v-btn color="grey lighten-1" @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="grey lighten-4" class="mb-5" height="450px" img="https://sacredstructures.org/wp-content/uploads/2016/06/1927-101413-gs1927.jpg"></v-card>
        <v-btn color="grey lighten-1" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-4" class="mb-5" height="450px" img="http://wakonyu.org/wp-content/uploads/2017/02/Jalaram-Hospital-Kisumu-Jalaram-Maternity-and-Nursing-Home.jpg"></v-card>
        <v-btn color="grey lighten-1" @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>