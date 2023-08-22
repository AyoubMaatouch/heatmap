
<template>
    <div class=" mx-auto justify-center">
        <div class="mx-auto" ref="chart"></div>
    </div>
</template>

<script>
import vegaEmbed from 'vega-embed';
var DATA = []
export default {

    props: ['data'],
    setup(props) {
        DATA = props.data

    },
    mounted() {
        this.renderChart();
    },
    methods: {
        async renderChart() {
            console.log("prps data ", DATA)
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