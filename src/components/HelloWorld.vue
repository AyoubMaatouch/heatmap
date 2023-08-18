<template>
  <!-- <v-container class="fill-height"> -->
    <v-responsive class="align-center text-center fill-height ">
     
  <v-container>
          <div class="container box shadow-lg rounded">
            
            <div class="text-center mb-5 mt-4" style="color: rgb(74, 88, 239);"><h1 class="h5 color1 font-weight-bold">Mentalome</h1></div>
            <div class="h-20 gap-10 justify-items-center">  
              <v-select
              label="Select gene ids:"
              chips
              multiple
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              variant="solo"
              >
            </v-select> 
      </div>

      <div class="grid grid-cols-3 gap-5 justify-center">
        <div>
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

          bg-color="green"
          label="Select Disease:"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo">
          
        </v-select> 
      </div>
        
</div>

<div class="h-20"> 
  
  <v-btn class="w-50"
       @click="overlay = true">
    Visualize
  </v-btn>
  
</div>


     <v-overlay v-model="overlay" >

      <!-- <v-container class="text-center pa-2 justify-center d-flex "> -->
        <v-container class="align-center" style="left: 100%; width: 500px; height: 500px;">

        <div class="container shadow-lg rounded justify-center " style="left: 100%; width: 500px; height: 500px;">
          <v-card class="justify-center" style="left: 100%; width: 500px; height: 500px;">
            Hello!
            
            <!-- <v-select
            
            bg-color="green"
            
            label="Select Disease:"
            
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            variant="solo">
            
          </v-select>  -->

          <!-- <div class="d-flex align-center" style="padding: 10%; left: 59%; width: 500px; height: 500px;"></div> -->
        </v-card>
      </div>
    </v-container>

</v-overlay> 


</div>


</v-container>

  <div class="py-14" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

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

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  <!-- </v-container> -->
</template>


<!-- heatmap -->
<!-- <script src='https://www.gstatic.com/charts/loader.js'></script> -->
<!-- <script>
</script> -->


<script >
  //
  // google.charts.load('upcoming', {'packages': ['vegachart']}).then(drawChart);
  
  // function drawChart() {
  //   // A DataTable is required, but it can be empty.
  //   const dataTable = new google.visualization.DataTable();
  
  //   const options = {
  //     'vega': {
  //       "$schema": "https://vega.github.io/schema/vega/v5.json",
  //       "width": 500,
  //       "height": 500,
  //       "padding": 5,
  
  //       "title": {
  //         "text": "Seattle Annual Temperatures",
  //         "anchor": "middle",
  //         "fontSize": 16,
  //         "frame": "group",
  //         "offset": 4
  //       },
  
  //       "data": [
  //         {
  //           "name": "temperature",
  //           "url": "https://vega.github.io/vega/data/seattle-weather-hourly-normals.csv",
  //           "format": {"type": "csv", "parse": {"temperature": "number", "date": "date"}},
  //           "transform": [
  //             {
  //               "type": "formula", "as": "hour",
  //               "expr": "hours(datum.date)"
  //             },
  //             {
  //               "type": "formula", "as": "day",
  //               "expr": "datetime(year(datum.date), month(datum.date), date(datum.date))"
  //             }
  //           ]
  //         }
  //       ],
  
  //       "scales": [
  //         {
  //           "name": "x",
  //           "type": "time",
  //           "domain": {"data": "temperature", "field": "day"},
  //           "range": "width"
  //         },
  //         {
  //           "name": "y",
  //           "type": "band",
  //           "domain": [
  //             6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  //             0, 1, 2, 3, 4, 5
  //           ],
  //           "range": "height"
  //         },
  //         {
  //           "name": "color",
  //           "type": "linear",
  //           "range": {"scheme": "redyellowblue"},
  //           "domain": {"data": "temperature", "field": "temperature"},
  //           "reverse": true,
  //           "zero": false, "nice": true
  //         }
  //       ],
  
  //       "axes": [
  //         {"orient": "bottom", "scale": "x", "domain": false, "title": "Month", "format": "%b"},
  //         {
  //           "orient": "left", "scale": "y", "domain": false, "title": "Hour",
  //           "encode": {
  //             "labels": {
  //               "update": {
  //                 "text": {
  //                   "signal": "datum.value === 0 ? 'Midnight' : datum.value === 12 ? 'Noon' : datum.value < 12 ? datum.value + ':00 am' : (datum.value - 12) + ':00 pm'"
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       ],
  
  //       "legends": [
  //         {
  //           "fill": "color",
  //           "type": "gradient",
  //           "title": "Avg. Temp (°F)",
  //           "titleFontSize": 12,
  //           "titlePadding": 4,
  //           "gradientLength": {"signal": "height - 16"}
  //         }
  //       ],
  
  //       "marks": [
  //         {
  //           "type": "rect",
  //           "from": {"data": "temperature"},
  //           "encode": {
  //             "enter": {
  //               "x": {"scale": "x", "field": "day"},
  //               "y": {"scale": "y", "field": "hour"},
  //               "width": {"value": 5},
  //               "height": {"scale": "y", "band": 1},
  //               "tooltip": {
  //                 "signal":
  //                   "timeFormat(datum.date, '%b %d %I:00 %p') + ': ' + datum.temperature + '°'"
  //               }
  //             },
  //             "update": {
  //               "fill": {"scale": "color", "field": "temperature"}
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   };
  
  //   const chart = new google.visualization.VegaChart(document.getElementById('chart-div'));
  //   chart.draw(dataTable, options);
  // }
  // export default {
  //   data: () => ({
  //     elevations: [0, 4, 8,],
  //   }),
  // }
    export default {
    data: () => ({
      overlay: false,
    }),

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = true
        }, 2000)
      },
    },
  }
</script>
