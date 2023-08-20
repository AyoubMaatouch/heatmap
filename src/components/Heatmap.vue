<template>
  <v-responsive class="align-center text-center fill-height ">   
      <VRow>
      

      
      
        <div class="container box shadow-2xl rounded mx-auto">
            
    

    
            <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mentalome</span> </h1>

    
            
              
    
              <div class="w-5/6 mx-auto h-20">

                <Multiselect
  v-model="value"
  mode="tags"
  placeholder="Select Expriment:"
  :close-on-select="false"
  :filter-results="false"
  :min-chars="1"
  :resolve-on-load="false"
  :delay="0"
  :searchable="true"
  :options="async function(query) {
    return await (axios.get('https://vueform.com/async-items.json')).data // check JS block for implementation
  }"
/>
              <!-- <Multiselect
              label="Select Expriment:"
              title="Select Expriment:"
              :options="async function(query, input){
                return await (axios.get('https://vueform.com/async-items.json')).data
                  }"
                mode="tags"
                :close-on-select="false"
                :searchable="true"
                :create-option="true"
                
              /> -->
              </div>
            
      <div class="grid grid-cols-3 gap-2 mx-auto">
        <div class="">
          <v-select
          label="Select Expriment:"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo"
          >
        </v-select> 
      </div>
      <div>
        <v-select
        label="Select SRA:"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        variant="solo">
      </v-select> 
    </div>
    <div>
          <v-select
          label="Select Disease:"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo">
          
        </v-select> 
      </div>
      <div>
  </div> 
        
</div>

 <div class="h-20"> 
    <v-btn class="w-50"
  slot="activator"
  @click="dialog = true"
  >
  Visualize
</v-btn>
    <!-- <v-dialog
      v-model="dialog"
    >
      <v-card >
        <v-card-text>
          
        </v-card-text>
        <Chart />
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
  
</div>
<v-divider :thickness="100"  class="border-opacity-0"></v-divider>

<div class="container box shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded mx-auto px-4">
  
  <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Heatmap</span> </h1>
  <Chart />

</div>
</VRow>
  <div class="py-14" />
      <v-row class="d-flex align-center justify-center">

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

      </v-row>
    </v-responsive>
     
</template>

<script setup>
  import { ref } from 'vue'
  import Chart from './Chart.vue'
  const dialog = ref(false)
</script>

<script>


import Multiselect from '@vueform/multiselect'
import axios from 'axios';

var data = null 

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      dialog: false,
      value: null,
      // options: this.fetchData(),
      options: [
        'Batman',
        'Robin',
        'Joker',
        'Alfred',
        'Catwoman',
        'Bane',
      ]
    }
  },
    methods: {
    fetchData() {
      axios.get('http://localhost:3000/gene')
        .then(response => {
          this.options = response.data;
          console.log(this.options)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  }

}

</script>
<style src="@vueform/multiselect/themes/default.css"></style>