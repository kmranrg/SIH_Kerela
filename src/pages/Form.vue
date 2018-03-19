<template>
<v-form v-model="valid">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="" :complete="e1 > 1"><h2>Step 1</h2></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="" :complete="e1 > 2"><h2>Step 2</h2></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step=""><h2>Step 3</h2></v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
       <v-card flat color="grey lighten-5" class="mb-5" height="460px" 
       img="https://www.medimobile.com/wp-content/uploads/hospital-hall-background-light.jpg">
       <v-card-text>
            <div class="display-3 feedback">Hi, tell us about yourself !</div>
          </v-card-text>
     <v-container fluid>
    <v-layout row>
      <v-flex xs10>
        <v-text-field
          class="mx-5 mr-5 mt-4"
          v-model="name"
          name="input-1"
          label="Full Name"
          id="testing"
          :rules="nameRules"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10>
        <v-text-field
          class="mx-5 mr-5"
          name="input-1"
          label="Email Address"
          id="testing"
          v-model="email"
      :rules="emailRules"
      required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs10>
        <v-text-field
          class="ml-5 mr-5"
          name="input-1"
          label="Contact No."
          id="testing"
          :counter="10"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
             </v-card>
        <v-btn round color="grey lighten-1" @click.native="e1 = 2">Next</v-btn>
        <v-btn round flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card tile flat height="510px" class="black text-xs-center" img="https://www.medimobile.com/wp-content/uploads/hospital-hall-background-light.jpg" >
          <v-card-text>
            <div class="display-3 feedback">Give the Feedback</div>
          </v-card-text>
          <v-card-text class="pa-5 my-5">
            <v-text-field 
            label="eg. Hi, I am abc..."
            :counter="20"></v-text-field>
          </v-card-text>
        </v-card>
        <v-btn round color="grey lighten-1" @click.native="e1 = 3">Continue</v-btn>
        <v-btn round flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card flat
        color="grey lighten-5" 
        class="mb-5" 
        height="460px" 
        img="https://www.medimobile.com/wp-content/uploads/hospital-hall-background-light.jpg">
        <v-card-text>
            <div class="display-3 feedback">Give Ratings</div>
          </v-card-text>
        <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm4 md4>
            <v-checkbox
              label="1"
              append-icon="star"
              v-model="ex4"
              color="black"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="2"
              append-icon="star"
              v-model="ex4"
              color="black"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="3"
              append-icon="star"
              v-model="ex4"
              color="black"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="4"
              append-icon="star"
              v-model="ex4"
              color="black"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              label="5"
              append-icon="star"
              v-model="ex4"
              color="black"
              value="red darken-3"
              hide-details
            ></v-checkbox>
          </v-flex>
        </v-layout>      
</v-container>

    </v-card-text></v-card>
        </v-card>
        <v-btn round color="grey lighten-1" @click.native="e1 = 1">Submit</v-btn>
        <v-btn round flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-form>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0,
        valid: false,
      name: '',
      nameRules: [
        v => !!v || 'This is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      ex4: ['red']
      }
    }
  }
</script>