
<template>
    <div class="mx-auto justify-center">
        
        <div class="w-4/6 mx-auto">
            <div class="bg-blue-200 h-3.5 dark:bg-blue-400">

                <div class="bg-green-400 h-3.5 " :style="{width: ptPer+'%'}"></div>
            </div>
        </div>
        <div class="max-w-2/3 mx-auto" :key="DATA" ref="chart"></div>
        <v-divider :thickness="10"></v-divider>
        
        <div class="flex justify-begin">
            <strong>Abbreviation:</strong>    
        </div>
        <div class="flex justify-begin" v-if="ptPer > 0">
            <div class="square bg-green-400" style="; width: 1%; padding-bottom: 1%;" ></div>
            <div>PT</div> 
        </div>
        
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
        <div class="flex justify-begin" v-if="ptPer < 99">
            <div class="square dark:bg-blue-400" style="width: 1%; padding-bottom: 1%; " ></div> 
            <div class="mx-50">CT</div>
        </div>
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    
    </div>
</template>





<script>
import vegaEmbed from 'vega-embed';
var DATA =[
    {
        "id": "0",
        "gids": "RNU6-524P",
        "value": "0",
        "SRA": "SRR21029663",
        "Abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Disease": "Autism"
    },
    {
        "id": "0",
        "gids": "TRBV25-1",
        "value": "0",
        "SRA": "SRR21029663",
        "Abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Disease": "Autism"
    },
    {
        "id": "0",
        "gids": "TRBV26",
        "value": "0",
        "SRA": "SRR21029663",
        "Abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Disease": "Autism"
    },
    {
        "id": "0",
        "gids": "TRBV26OR9-2",
        "value": "0",
        "SRA": "SRR21029663",
        "Abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Disease": "Autism"
    }
]

var abbreviation = []
var ptPer = 0;
export default {
    data()
    {
        return {
        graphWidth: 400, // Default width
        graphHeight: 300, 
        ptPer: 0, 
        DATA : []
    }
    },

    props: ['data'],
    setup(props) {
        
        
        if (props.data !== undefined && props.data.length > 0)
        {
            DATA = props.data
        }


    },
    mounted() {
        this.renderChart();
        this.get_value();
    },
    methods: {
        get_value() {
            const table = []
            abbreviation = (DATA.map((item) => {table.push( item['Abbreviation'])}))
            if (table.length > 0) {

                var total = table.length;
                var ptCount = 0;
                var stCount = 0;
                for (let i = 0; i < total; i++) {
                    
                   if (table[i] === 'PT') {
                        ptCount++;
                     } else {
                     stCount++;
                    }
    }
                const ptPercentage = Math.round((ptCount / total) * 100);
                this.ptPer = ptPercentage;
                console.log("Pt percentage:", this.ptPer)
                return ptPercentage;
            }
        },
        async renderChart() {
            let width = document.getElementById('container')?.offsetWidth
            const spec = {
                "title": "Visualization of Gene Expression data",
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": width * 0.9,
                "height": window.innerHeight * 0.6,
                "data": {
                    "values": DATA
                },
                "autosize": {
                    "type": "fit",
                    "contains": "padding"
                },
                 "layer" : [
                 {   "mark": "rect",
                "hover": true,

                "encoding": {
                    "x": { "field": "SRA", "type": "ordinal", "title": "SRA" },
                    "y": { "field": "gids", "type": "ordinal", "title": "Gene ID" , "sort": "descending"},
                    "color": { "field": "value", "aggregate": "mean", "title": "Value" },
                    
                    // "tooltip": {"signal": "{'Abbreviation': datum.Abbreviation, 'SRA': datum.SRA, 'Gene ID': datum.gids, 'Value': datum.value}"}

                }
            },
           {
            // "mark": "bar",
            // "encoding": {
                // "x": { "field": "SRA", "type": "ordinal", "title": "SRA" },
                // "y": { "field": "Abbreviation", "type": "ordinal", "title": "Abbreviation" },
                // "color": { "field": "Abbreviation", "type": "nominal", "title": "Abbreviation" },
            // }

           }

                 ],
           
            
                "config": {
                    "view": {
                        "stroke": "transparent"
                    }
                }
            };
            const el = this.$refs.chart;
            await vegaEmbed(el, spec);
        },
    },
    created() {
    this.renderChart();
    window.addEventListener('resize', this.renderChart);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.renderChart);
  },
    
};
</script>