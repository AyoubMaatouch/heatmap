<template>
  <v-responsive class="align-center text-center fill-height ">   
  <v-container>
          <div class="container box shadow-lg rounded">
            
            <div class="text-center h-10"><h1 class="font-weight-bold">Mentalome</h1></div>
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
          label="Select Disease:"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo">
          
        </v-select> 
      </div>
        
</div>

<div class="h-20"> 
  <v-dialog max-width="100px">
  <v-btn class="w-50"
  slot="activator"
  >
  Visualize
</v-btn>
  <v-card>
    <v-card-title> heatmap visualization</v-card-title>
  </v-card>
</v-dialog>
  
</div>

</div>


</v-container>

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

<script >
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
