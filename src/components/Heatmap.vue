<template>
  <v-responsive class="align-center text-center fill-height ">

      <div class="container box shadow-2xl rounded mx-auto">
        <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Mentalome</span>
        </h1>
        <div class="w-5/6 mx-auto h-20">
          <!-- <Vueform>
      <TextElement  placeholder="Select Gene:" />
      </Vueform> -->
          <Multiselect v-model="gene" mode="tags" placeholder="Select Gene:" :close-on-select="false"
            :filter-results="false" :min-chars="0" :resolve-on-load="false" :infinite="true" :limit="10"
            :clear-on-search="true" :delay="0" :searchable="fasle" :options="async function (query) {
              if (gene.length < 0)
              {return;}
              return await axios.get('https://heatmap.ma3touch.tech/api/gene')
                .then(response => {
                  return response.data.sort();
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

        <div class="w-5/6 grid grid-cols-3 h-20 gap-2 mx-auto">
          <div>
            <Multiselect v-model="disease" placeholder="Select Disease:" :resolve-on-load="true" :searchable="true"
              :options="async function (query) {
                // if (disease.length < 0)
                //   {return;}
                return await axios.get('https://heatmap.ma3touch.tech/api/disease')
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
                  if (exp.length < 0)
                  {return;}
                return await axios.get('https://heatmap.ma3touch.tech/api/expriment')
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
                  if (sra.length < 0)
                  {return;}
                return await axios.get('https://heatmap.ma3touch.tech/api/sra')
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

      <div id ="container" class="container box shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded mx-auto px-4">

        <h1 class="mb-4 text-3xl  text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Heatmap</span>
        </h1>

          <div class="d-flex rounded-lg">
          </div>
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
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue';
import axios from 'axios';
import Chart from './Chart.vue';

const gene = ref([]);
const exp = ref('');
const sra = ref('');
const data = ref([]);
const reload = ref(0);

const getGene = async () => {
  try {
    gene = await axios.get('https://heatmap.ma3touch.tech/api/gene');
    return response.data.sort();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getCharts = async () => {
  try {
    const response = await axios.get('https://heatmap.ma3touch.tech/api/getCharts', {
      params: {
        gene: gene.value,
        exp: exp.value,
        sra: sra.value,
      },
    });
    data.value = response.data;
    reload.value += 1;
    console.log('here: ', data.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>
<style src="@vueform/multiselect/themes/default.css">
</style>


<!-- <script setup>
import { ref } from 'vue'
import Chart from './Chart.vue'
const dialog = ref(false)
</script>

<script>

import Multiselect from '@vueform/multiselect'
import axios from 'axios';


export default {
  components: {
    Multiselect,
    Chart
  },
  data() {
    return {
      data: [],
      reload: 0,
      
    }
  },
  methods: {
    async getCharts(gene, exp, sra) {
      axios.get('https://heatmap.ma3touch.tech/api/getCharts',
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
      console.log("here: ",this.reload)
    }
  }
};


</script> -->
