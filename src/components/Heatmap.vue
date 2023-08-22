<template>
  <v-responsive class="align-center text-center fill-height ">

      <div class="container box shadow-2xl rounded mx-auto">
        <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mentalome</span>
        </h1>
        <div class="w-5/6 mx-auto h-20">

          <Multiselect v-model="gene" mode="tags" placeholder="Select Gene:" :close-on-select="false"
            :filter-results="false" :min-chars="0" :resolve-on-load="false" :infinite="true" :limit="10"
            :clear-on-search="true" :delay="0" :searchable="true" :options="async function (query) {
              return await axios.get('http://localhost:3000/gene')
                .then(response => {
                  return response.data;
                })
                .catch(error => {
                  console.error('Error fetching data:', error);
                });
            }" @open="(select$) => {
  if (select$.noOptions) {
    select$.resolveOptions()
  }
}" />

        </div>

        <div class="grid grid-cols-3 h-20 gap-2 mx-auto">
          <div>
            <Multiselect v-model="disease" placeholder="Select Disease:" :resolve-on-load="true" :searchable="true"
              :options="async function (query) {
                return await axios.get('http://localhost:3000/disease')
                  .then(response => {
                    return response.data;
                  })
                  .catch(error => {
                    console.error('Error fetching data:', error);
                  });
              }" />
          </div>
          <div>
            <Multiselect v-model="exp" placeholder="Select Expriment:" :filter-results="false" :min-chars="1"
              :resolve-on-load="true" :delay="0" :searchable="true" :options="async function (query) {
                return await axios.get('http://localhost:3000/expriment')
                  .then(response => {
                    return response.data;
                  })
                  .catch(error => {
                    console.error('Error fetching data:', error);
                  });
              }" />
          </div>
          <div>
            <Multiselect v-model="sra" placeholder="Select SRA:" :filter-results="false" :min-chars="1"
              :resolve-on-load="true" :delay="0" :searchable="true" :options="async function () {
                return await axios.get('http://localhost:3000/sra')
                  .then(response => {
                    return response.data;

                  })
                  .catch(error => {
                    console.error('Error fetching data:', error);
                  });
              }" />
          </div>
          <div>
          </div>

        </div>

        <div class="h-20">
          <v-btn class="w-50" slot="activator" v-on:click="getCharts(gene, exp, sra)" >
            Visualize
          </v-btn>

          
        </div>

      </div>
      <v-divider :thickness="100" class="border-opacity-0"></v-divider>

      <div class="container box shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded mx-auto px-4">

        <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Heatmap</span>
        </h1>
        <chart :key="reload" :data="data" />
        </div>

    <div class="py-7" />
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
      
    <img class="rounded-full w-40 h-40" src="https://bioinformatics.um6p.ma/Mentalome/assets/agc_logo_big.70826d43.png" alt="image description">

    </v-col>
      <v-col cols="auto">
      
    <img class="full w-40 h-40" src="https://bioinformatics.um6p.ma/Mentalome/assets/um6p_logo_big.b3440e5e.png" alt="image description">

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

// var data

export default {
  components: {
    Multiselect,
    Chart
  },
  data() {
    return {
      data: ["hello world"],
      reload: 0,
      // dialog: false,
      // value:,
      // gene: 'Value',
      // disease: '',
      // exp: '',
      // sra: '',
      // options: data,
      //   options: [
      //     'Batman',
      //     'Robin',
      //     'Joker',
      //     'Alfred',
      //     'Catwoman',
      //     'Bane',
      //   ]
    }
  },
  mounted() {
      // this.gene = ;
    },
  methods: {

    async getCharts(gene, exp, sra) {
      axios.get('http://localhost:3000/getCharts',
        {
          params: {
            gene: gene,
            exp: exp,
            sra: sra
          }
        })
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      this.reload += 1;
    },
  }

}


</script>
<style src="@vueform/multiselect/themes/default.css"></style>