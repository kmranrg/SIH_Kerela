<template>
<v-form v-model="valid">
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="" :complete="e1 > 1"><h2>Hi, tell me about yourself</h2></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="" :complete="e1 > 2"><h2>Please give your feedback</h2></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step=""><h2>Give Ratings</h2></v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
       <v-card color="grey lighten-5" class="mb-5" height="380px">
     <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-subheader><h3>Full Name</h3></v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          v-model="name"
          name="input-1"
          label="eg. abc xyz"
          id="testing"
          :rules="nameRules"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader><h3>Email Address</h3></v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="eg. abc@xyz.com"
          id="testing"
          v-model="email"
      :rules="emailRules"
      required
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader><h3>Contact No.</h3></v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="eg. 1234567890"
          id="testing"
          :counter="10"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4>
        <v-subheader><h3>User ID</h3></v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-3"
          label=""
          value="USR001"
          disabled
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
             </v-card>
        <v-btn round color="grey lighten-1" @click.native="e1 = 2">Next</v-btn>
        <v-btn round flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="grey lighten-5" class="mb-5" height="380px">
          <v-form v-model="valid">
    <v-text-field
      label="write here..."
      v-model="name"
      :rules="nameRules"
      :counter="100"
      required
    ></v-text-field>
          </v-form>
        </v-card>
        <v-btn round color="grey lighten-1" @click.native="e1 = 3">Continue</v-btn>
        <v-btn round flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-5" class="mb-5" height="380px">
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