
<template>
    <div class="mx-auto justify-center">
    

        <h1> {{ptPer}} </h1>
        <div class="w-4/6 mx-auto">
            <div class="bg-blue-200 h-3.5 dark:bg-blue-400">

                <div class="bg-green-400 h-3.5 " :style="{width: ptPer + '%'}"></div>
            </div>
        </div>
        <div class="mx-auto" ref="chart"></div>
        <v-divider :thickness="10"></v-divider>
        
        
        <!-- print a green square with the text me next to it-->
        <div class="flex justify-begin">
            <strong>Abbreviation:</strong>    
        </div>
        <div class="flex justify-begin">
            <div class="square bg-green-400" style="; width: 1%; padding-bottom: 1%;"></div>
            <div> PT </div> 
        </div>
        
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
        <div class="flex justify-begin">
            <div class="square dark:bg-blue-400" style="width: 1%; padding-bottom: 1%;"></div> 
            <div class="mx-50">CT</div>
        </div>
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    
        
    </div>
</template>

<script>
import vegaEmbed from 'vega-embed';
var DATA = []
var abbreviation = []
var ptPer = 0;
export default {

    props: ['data'],
    setup(props) {
        DATA = props.data


    },
    mounted() {
        this.renderChart();
        this.get_value();
    },
    methods: {
        get_value() {
            abbreviation = [...new Array(DATA.map((item) => item.abbreviation))]
            console.log(abbreviation)
            console.log(abbreviation.length)

            if (abbreviation[0].length > 0) {

                var total = abbreviation[0].length;
                var ptCount = 0;
                var stCount = 0;
                for (let i = 0; i < total; i++) {
                   if (abbreviation[0][i] === 'PT') {
                        ptCount++;
                     } else {
                     stCount++;
                    }
    }
    
                const ptPercentage = Math.round((ptCount / total) * 100);
                this.ptPer = ptPercentage;

                return ptPercentage;
            }
            

        },
        async renderChart() {
            console.log("prps data ", DATA)
            console.log("ptPer ", ptPer)
            const spec = {
                "title": "Visualization of Gene Expression data",
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 1200,
                "height": 700,
                "data": {
                    "values": DATA
                },
                "autosize": {
                    "type": "fit",
                    "contains": "padding"
                },
                "mark": "rect",
                "hover": true,

                "encoding": {
                    "x": { "field": "sra", "type": "ordinal", "title": "SRA" },
                    "y": { "field": "gene", "type": "ordinal", "title": "Gene ID" },
                    "color": { "field": "ids", "aggregate": "mean", "title": "Value" },

                },
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
};
</script>