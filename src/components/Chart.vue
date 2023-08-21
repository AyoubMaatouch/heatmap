
<template>

<!-- 
        <p class="text-center">Loading chart... </p>

        <div ref="chart"></div> -->

        <!-- <template> -->
  <div class=" mx-auto justify-center">
    <div class="mx-auto" ref="chart"></div>
  </div>
</template>

    <!-- </template> -->
  
  <script>
  import vegaEmbed from 'vega-embed';
  var DATA = [
    {
        "id": 13390732,
        "gene_id": "A2ML1",
        "value": 3,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923991,
        "gene_id": "A2ML1",
        "value": 2,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575757,
        "gene_id": "AA06",
        "value": 1,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805489,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923998,
        "gene_id": "AACS",
        "value": 277,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575755,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627736,
        "gene_id": "A2ML1",
        "value": 2,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568485,
        "gene_id": "A2ML1",
        "value": 10,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635006,
        "gene_id": "A4GALT",
        "value": 3,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449983,
        "gene_id": "A2ML1",
        "value": 3,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805496,
        "gene_id": "AACS",
        "value": 209,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694257,
        "gene_id": "A4GALT",
        "value": 1,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753508,
        "gene_id": "A4GALT",
        "value": 4,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220253,
        "gene_id": "AACS",
        "value": 222,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812759,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338755,
        "gene_id": "AACS",
        "value": 179,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346014,
        "gene_id": "A2M-AS1",
        "value": 66,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398006,
        "gene_id": "AACS",
        "value": 169,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457257,
        "gene_id": "AACS",
        "value": 114,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338751,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390739,
        "gene_id": "AACS",
        "value": 288,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990509,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931258,
        "gene_id": "A2ML1",
        "value": 3,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449990,
        "gene_id": "AACS",
        "value": 191,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812756,
        "gene_id": "A2ML1",
        "value": 2,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753505,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694254,
        "gene_id": "A2ML1",
        "value": 6,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635003,
        "gene_id": "A2ML1",
        "value": 1,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575752,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168261,
        "gene_id": "A2M-AS1",
        "value": 95,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457250,
        "gene_id": "A2ML1",
        "value": 16,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397999,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338748,
        "gene_id": "A2ML1",
        "value": 1,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568492,
        "gene_id": "AACS",
        "value": 222,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220246,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627743,
        "gene_id": "AACS",
        "value": 218,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398002,
        "gene_id": "A4GALT",
        "value": 2,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457253,
        "gene_id": "A4GALT",
        "value": 4,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449982,
        "gene_id": "A2M-AS1",
        "value": 49,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990516,
        "gene_id": "AACS",
        "value": 284,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923990,
        "gene_id": "A2M-AS1",
        "value": 42,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990512,
        "gene_id": "A4GALT",
        "value": 3,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805488,
        "gene_id": "A2M-AS1",
        "value": 34,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457255,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168269,
        "gene_id": "AACS",
        "value": 247,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627735,
        "gene_id": "A2M-AS1",
        "value": 54,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568484,
        "gene_id": "A2M-AS1",
        "value": 46,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398004,
        "gene_id": "AA06",
        "value": 3,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931265,
        "gene_id": "AACS",
        "value": 186,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390731,
        "gene_id": "A2M-AS1",
        "value": 64,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168265,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346022,
        "gene_id": "AACS",
        "value": 274,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338753,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346018,
        "gene_id": "A4GALT",
        "value": 6,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346013,
        "gene_id": "A2M",
        "value": 224,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220251,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168260,
        "gene_id": "A2M",
        "value": 91,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575751,
        "gene_id": "A2M-AS1",
        "value": 29,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575759,
        "gene_id": "AACS",
        "value": 196,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990508,
        "gene_id": "A2M-AS1",
        "value": 34,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931257,
        "gene_id": "A2M-AS1",
        "value": 31,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635010,
        "gene_id": "AACS",
        "value": 175,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812755,
        "gene_id": "A2M-AS1",
        "value": 37,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753504,
        "gene_id": "A2M-AS1",
        "value": 51,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694253,
        "gene_id": "A2M-AS1",
        "value": 44,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635002,
        "gene_id": "A2M-AS1",
        "value": 22,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635008,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694261,
        "gene_id": "AACS",
        "value": 290,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457249,
        "gene_id": "A2M-AS1",
        "value": 49,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397998,
        "gene_id": "A2M-AS1",
        "value": 26,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338747,
        "gene_id": "A2M-AS1",
        "value": 33,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753512,
        "gene_id": "AACS",
        "value": 174,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220245,
        "gene_id": "A2M-AS1",
        "value": 48,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812763,
        "gene_id": "AACS",
        "value": 138,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931261,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390734,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923993,
        "gene_id": "A3GALT2",
        "value": 4,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805495,
        "gene_id": "AAAS",
        "value": 31,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805491,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168267,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923997,
        "gene_id": "AAAS",
        "value": 57,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627738,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568487,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390735,
        "gene_id": "A4GALT",
        "value": 9,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449985,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627742,
        "gene_id": "AAAS",
        "value": 58,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449986,
        "gene_id": "A4GALT",
        "value": 1,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568488,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220252,
        "gene_id": "AAAS",
        "value": 69,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627739,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346016,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338754,
        "gene_id": "AAAS",
        "value": 58,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398005,
        "gene_id": "AAAS",
        "value": 73,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168263,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635005,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168264,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346017,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990511,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931260,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390738,
        "gene_id": "AAAS",
        "value": 110,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812758,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753507,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694256,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457256,
        "gene_id": "AAAS",
        "value": 32,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575754,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449989,
        "gene_id": "AAAS",
        "value": 82,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457252,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398001,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338750,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346020,
        "gene_id": "AA06",
        "value": 1,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220248,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568491,
        "gene_id": "AAAS",
        "value": 60,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390733,
        "gene_id": "A2MP1",
        "value": 1,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923992,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990515,
        "gene_id": "AAAS",
        "value": 106,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805490,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805492,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931263,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627737,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568486,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168268,
        "gene_id": "AAAS",
        "value": 84,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449984,
        "gene_id": "A2MP1",
        "value": 7,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931264,
        "gene_id": "AAAS",
        "value": 30,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923994,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346021,
        "gene_id": "AAAS",
        "value": 64,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812761,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753510,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346015,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694259,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220249,
        "gene_id": "A4GALT",
        "value": 7,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168262,
        "gene_id": "A2ML1",
        "value": 6,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635009,
        "gene_id": "AAAS",
        "value": 60,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990510,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931259,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575758,
        "gene_id": "AAAS",
        "value": 88,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812757,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753506,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694255,
        "gene_id": "A2MP1",
        "value": 11,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635004,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575753,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346019,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457251,
        "gene_id": "A2MP1",
        "value": 2,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398000,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338749,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694260,
        "gene_id": "AAAS",
        "value": 48,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220247,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753511,
        "gene_id": "AAAS",
        "value": 43,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812762,
        "gene_id": "AAAS",
        "value": 71,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990514,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923987,
        "gene_id": "A1BG-AS1",
        "value": 8,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457246,
        "gene_id": "A1BG-AS1",
        "value": 4,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397995,
        "gene_id": "A1BG-AS1",
        "value": 6,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338744,
        "gene_id": "A1BG-AS1",
        "value": 2,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457254,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220242,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390737,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805498,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575756,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13924000,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627745,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635007,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805485,
        "gene_id": "A1BG-AS1",
        "value": 2,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694258,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753509,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627732,
        "gene_id": "A1BG-AS1",
        "value": 23,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568481,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812760,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449979,
        "gene_id": "A1BG-AS1",
        "value": 12,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398003,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568490,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220250,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449988,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346011,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338752,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390741,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168258,
        "gene_id": "A1BG-AS1",
        "value": 5,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449992,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390728,
        "gene_id": "A1BG-AS1",
        "value": 8,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990505,
        "gene_id": "A1BG-AS1",
        "value": 12,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931254,
        "gene_id": "A1BG-AS1",
        "value": 6,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568494,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812752,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753501,
        "gene_id": "A1BG-AS1",
        "value": 12,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694250,
        "gene_id": "A1BG-AS1",
        "value": 21,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14634999,
        "gene_id": "A1BG-AS1",
        "value": 13,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575748,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923986,
        "gene_id": "A1BG",
        "value": 7,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812765,
        "gene_id": "AADAC",
        "value": 1,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457245,
        "gene_id": "A1BG",
        "value": 6,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397994,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338743,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990513,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220241,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931267,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990518,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575747,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168271,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805484,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168266,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627731,
        "gene_id": "A1BG",
        "value": 8,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568480,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346024,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449978,
        "gene_id": "A1BG",
        "value": 2,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390727,
        "gene_id": "A1BG",
        "value": 11,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635012,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220255,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338757,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398008,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457259,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346010,
        "gene_id": "A1BG",
        "value": 4,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931262,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575761,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168257,
        "gene_id": "A1BG",
        "value": 3,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449991,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694263,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990504,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931253,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753514,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812751,
        "gene_id": "A1BG",
        "value": 2,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753500,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694249,
        "gene_id": "A1BG",
        "value": 7,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14634998,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346023,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449987,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923996,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627734,
        "gene_id": "A2M",
        "value": 152,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568483,
        "gene_id": "A2M",
        "value": 284,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568489,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449981,
        "gene_id": "A2M",
        "value": 500,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390730,
        "gene_id": "A2M",
        "value": 281,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627740,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931256,
        "gene_id": "A2M",
        "value": 185,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220254,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990507,
        "gene_id": "A2M",
        "value": 217,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338756,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14398007,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15346012,
        "gene_id": "A1CF",
        "value": 6,
        "SRA": "SRR21029680",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390740,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805494,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338746,
        "gene_id": "A2M",
        "value": 230,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694252,
        "gene_id": "A2M",
        "value": 194,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753503,
        "gene_id": "A2M",
        "value": 105,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635001,
        "gene_id": "A2M",
        "value": 140,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575750,
        "gene_id": "A2M",
        "value": 189,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568493,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457248,
        "gene_id": "A2M",
        "value": 345,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812754,
        "gene_id": "A2M",
        "value": 56,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397997,
        "gene_id": "A2M",
        "value": 206,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457258,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627744,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220244,
        "gene_id": "A2M",
        "value": 184,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805497,
        "gene_id": "AACSP1",
        "value": 1,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390736,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923989,
        "gene_id": "A2M",
        "value": 317,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923999,
        "gene_id": "AACSP1",
        "value": 6,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805487,
        "gene_id": "A2M",
        "value": 69,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575760,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13390729,
        "gene_id": "A1CF",
        "value": 1,
        "SRA": "SRR21029647",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13449980,
        "gene_id": "A1CF",
        "value": 6,
        "SRA": "SRR21029648",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627741,
        "gene_id": "AA06",
        "value": 3,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13568482,
        "gene_id": "A1CF",
        "value": 4,
        "SRA": "SRR21029650",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13627733,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029651",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168270,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805486,
        "gene_id": "A1CF",
        "value": 2,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923995,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13923988,
        "gene_id": "A1CF",
        "value": 1,
        "SRA": "SRR21029656",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990517,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931266,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13805493,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029654",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14220243,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029661",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812764,
        "gene_id": "AACSP1",
        "value": 1,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14338745,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029663",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14457247,
        "gene_id": "A1CF",
        "value": 17,
        "SRA": "SRR21029665",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15168259,
        "gene_id": "A1CF",
        "value": 2,
        "SRA": "SRR21029677",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635011,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14990506,
        "gene_id": "A1CF",
        "value": 4,
        "SRA": "SRR21029674",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14931255,
        "gene_id": "A1CF",
        "value": 2,
        "SRA": "SRR21029673",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694262,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14812753,
        "gene_id": "A1CF",
        "value": 2,
        "SRA": "SRR21029671",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753502,
        "gene_id": "A1CF",
        "value": 4,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14694251,
        "gene_id": "A1CF",
        "value": 20,
        "SRA": "SRR21029669",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14635000,
        "gene_id": "A1CF",
        "value": 6,
        "SRA": "SRR21029668",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14575749,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029667",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14753513,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029670",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14397996,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029664",
        "abbreviation": "CT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101749,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464521,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405270,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405271,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14161000,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279502,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279504,
        "gene_id": "AACS",
        "value": 198,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049765,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464522,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212984,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272235,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286769,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227518,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042498,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983247,
        "gene_id": "AA06",
        "value": 2,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109016,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864745,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331486,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516506,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872012,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746243,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686992,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509239,
        "gene_id": "AA06",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14161003,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464525,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405274,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286772,
        "gene_id": "AACSP1",
        "value": 4,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227521,
        "gene_id": "AACSP1",
        "value": 1,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109019,
        "gene_id": "AACSP1",
        "value": 1,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049768,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872015,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516509,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279505,
        "gene_id": "AACSP1",
        "value": 2,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212988,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101752,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042501,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983250,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864748,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746246,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686995,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509242,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331489,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272238,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14161004,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212974,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405275,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286773,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227522,
        "gene_id": "AADAC",
        "value": 1,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109020,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049769,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872016,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516510,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279506,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212987,
        "gene_id": "AACSP1",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101753,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042502,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983251,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864749,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746247,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686996,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509243,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331490,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272239,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14161001,
        "gene_id": "AAAS",
        "value": 103,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464523,
        "gene_id": "AAAS",
        "value": 72,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405272,
        "gene_id": "AAAS",
        "value": 71,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286770,
        "gene_id": "AAAS",
        "value": 65,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227519,
        "gene_id": "AAAS",
        "value": 51,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109017,
        "gene_id": "AAAS",
        "value": 57,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049766,
        "gene_id": "AAAS",
        "value": 56,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872013,
        "gene_id": "AAAS",
        "value": 55,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516507,
        "gene_id": "AAAS",
        "value": 11,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279503,
        "gene_id": "AAAS",
        "value": 62,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212986,
        "gene_id": "AACS",
        "value": 240,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101750,
        "gene_id": "AAAS",
        "value": 85,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042499,
        "gene_id": "AAAS",
        "value": 25,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983248,
        "gene_id": "AAAS",
        "value": 73,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864746,
        "gene_id": "AAAS",
        "value": 94,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746244,
        "gene_id": "AAAS",
        "value": 64,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686993,
        "gene_id": "AAAS",
        "value": 76,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509240,
        "gene_id": "AAAS",
        "value": 63,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331487,
        "gene_id": "AAAS",
        "value": 86,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272236,
        "gene_id": "AAAS",
        "value": 71,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14161002,
        "gene_id": "AACS",
        "value": 175,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464524,
        "gene_id": "AACS",
        "value": 150,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405273,
        "gene_id": "AACS",
        "value": 131,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286771,
        "gene_id": "AACS",
        "value": 208,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227520,
        "gene_id": "AACS",
        "value": 221,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109018,
        "gene_id": "AACS",
        "value": 288,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049767,
        "gene_id": "AACS",
        "value": 240,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872014,
        "gene_id": "AACS",
        "value": 200,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516508,
        "gene_id": "AACS",
        "value": 197,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464526,
        "gene_id": "AADAC",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212985,
        "gene_id": "AAAS",
        "value": 57,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101751,
        "gene_id": "AACS",
        "value": 258,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042500,
        "gene_id": "AACS",
        "value": 105,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983249,
        "gene_id": "AACS",
        "value": 279,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864747,
        "gene_id": "AACS",
        "value": 244,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746245,
        "gene_id": "AACS",
        "value": 220,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686994,
        "gene_id": "AACS",
        "value": 240,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509241,
        "gene_id": "AACS",
        "value": 319,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331488,
        "gene_id": "AACS",
        "value": 295,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272237,
        "gene_id": "AACS",
        "value": 231,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272228,
        "gene_id": "A2M",
        "value": 84,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872005,
        "gene_id": "A2M",
        "value": 137,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516499,
        "gene_id": "A2M",
        "value": 58,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279495,
        "gene_id": "A2M",
        "value": 408,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160993,
        "gene_id": "A2M",
        "value": 304,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101742,
        "gene_id": "A2M",
        "value": 185,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042491,
        "gene_id": "A2M",
        "value": 90,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983240,
        "gene_id": "A2M",
        "value": 185,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864738,
        "gene_id": "A2M",
        "value": 196,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746236,
        "gene_id": "A2M",
        "value": 109,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686985,
        "gene_id": "A2M",
        "value": 180,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509232,
        "gene_id": "A2M",
        "value": 99,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331479,
        "gene_id": "A2M",
        "value": 97,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049758,
        "gene_id": "A2M",
        "value": 100,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212977,
        "gene_id": "A2M",
        "value": 157,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464514,
        "gene_id": "A1CF",
        "value": 1,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405263,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286761,
        "gene_id": "A1CF",
        "value": 4,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227510,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109008,
        "gene_id": "A1CF",
        "value": 3,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049757,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872004,
        "gene_id": "A1CF",
        "value": 2,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516498,
        "gene_id": "A1CF",
        "value": 28,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279494,
        "gene_id": "A1CF",
        "value": 7,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160992,
        "gene_id": "A1CF",
        "value": 1,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864739,
        "gene_id": "A2M-AS1",
        "value": 74,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405265,
        "gene_id": "A2M-AS1",
        "value": 31,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286763,
        "gene_id": "A2M-AS1",
        "value": 29,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227512,
        "gene_id": "A2M-AS1",
        "value": 48,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109010,
        "gene_id": "A2M-AS1",
        "value": 30,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049759,
        "gene_id": "A2M-AS1",
        "value": 27,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872006,
        "gene_id": "A2M-AS1",
        "value": 53,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516500,
        "gene_id": "A2M-AS1",
        "value": 37,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279496,
        "gene_id": "A2M-AS1",
        "value": 52,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160994,
        "gene_id": "A2M-AS1",
        "value": 42,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101743,
        "gene_id": "A2M-AS1",
        "value": 49,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042492,
        "gene_id": "A2M-AS1",
        "value": 14,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983241,
        "gene_id": "A2M-AS1",
        "value": 90,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101741,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746237,
        "gene_id": "A2M-AS1",
        "value": 72,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686986,
        "gene_id": "A2M-AS1",
        "value": 24,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509233,
        "gene_id": "A2M-AS1",
        "value": 78,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331480,
        "gene_id": "A2M-AS1",
        "value": 30,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272229,
        "gene_id": "A2M-AS1",
        "value": 28,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212978,
        "gene_id": "A2M-AS1",
        "value": 38,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464515,
        "gene_id": "A2M",
        "value": 205,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405264,
        "gene_id": "A2M",
        "value": 195,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286762,
        "gene_id": "A2M",
        "value": 53,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227511,
        "gene_id": "A2M",
        "value": 307,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109009,
        "gene_id": "A2M",
        "value": 61,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516496,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686983,
        "gene_id": "A1BG-AS1",
        "value": 6,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509230,
        "gene_id": "A1BG-AS1",
        "value": 2,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331477,
        "gene_id": "A1BG-AS1",
        "value": 13,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272226,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212975,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464512,
        "gene_id": "A1BG",
        "value": 5,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405261,
        "gene_id": "A1BG",
        "value": 18,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286759,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227508,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109006,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049755,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872002,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746234,
        "gene_id": "A1BG-AS1",
        "value": 13,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279492,
        "gene_id": "A1BG",
        "value": 4,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160990,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101739,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042488,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983237,
        "gene_id": "A1BG",
        "value": 14,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864735,
        "gene_id": "A1BG",
        "value": 13,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746233,
        "gene_id": "A1BG",
        "value": 5,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686982,
        "gene_id": "A1BG",
        "value": 1,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509229,
        "gene_id": "A1BG",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331476,
        "gene_id": "A1BG",
        "value": 4,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272225,
        "gene_id": "A1BG",
        "value": 5,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286760,
        "gene_id": "A1BG-AS1",
        "value": 7,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042490,
        "gene_id": "A1CF",
        "value": 1,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983239,
        "gene_id": "A1CF",
        "value": 10,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864737,
        "gene_id": "A1CF",
        "value": 7,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746235,
        "gene_id": "A1CF",
        "value": 13,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686984,
        "gene_id": "A1CF",
        "value": 10,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509231,
        "gene_id": "A1CF",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331478,
        "gene_id": "A1CF",
        "value": 9,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272227,
        "gene_id": "A1CF",
        "value": 4,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212976,
        "gene_id": "A1CF",
        "value": 14,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464513,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405262,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464516,
        "gene_id": "A2M-AS1",
        "value": 41,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227509,
        "gene_id": "A1BG-AS1",
        "value": 5,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109007,
        "gene_id": "A1BG-AS1",
        "value": 4,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049756,
        "gene_id": "A1BG-AS1",
        "value": 24,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872003,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516497,
        "gene_id": "A1BG-AS1",
        "value": 2,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279493,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160991,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101740,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042489,
        "gene_id": "A1BG-AS1",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983238,
        "gene_id": "A1BG-AS1",
        "value": 15,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864736,
        "gene_id": "A1BG-AS1",
        "value": 46,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212982,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516504,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279500,
        "gene_id": "A4GALT",
        "value": 8,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160998,
        "gene_id": "A4GALT",
        "value": 5,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101747,
        "gene_id": "A4GALT",
        "value": 12,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042496,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983245,
        "gene_id": "A4GALT",
        "value": 5,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864743,
        "gene_id": "A4GALT",
        "value": 4,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746241,
        "gene_id": "A4GALT",
        "value": 2,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686990,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509237,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331484,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272233,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872010,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464519,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405268,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286766,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227515,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109013,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049762,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872009,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516503,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279499,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160997,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101746,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746242,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227517,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109015,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049764,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872011,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516505,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279501,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160999,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101748,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042497,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983246,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864744,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042495,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686991,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509238,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331485,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272234,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212983,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464520,
        "gene_id": "A4GALT",
        "value": 9,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405269,
        "gene_id": "A4GALT",
        "value": 10,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286767,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227516,
        "gene_id": "A4GALT",
        "value": 2,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109014,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049763,
        "gene_id": "A4GALT",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279497,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509235,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331482,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272231,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212980,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464517,
        "gene_id": "A2ML1",
        "value": 3,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405266,
        "gene_id": "A2ML1",
        "value": 6,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286764,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227513,
        "gene_id": "A2ML1",
        "value": 15,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109011,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049760,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872007,
        "gene_id": "A2ML1",
        "value": 9,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516501,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686988,
        "gene_id": "A2MP1",
        "value": 2,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160995,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101744,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042493,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983242,
        "gene_id": "A2ML1",
        "value": 25,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864740,
        "gene_id": "A2ML1",
        "value": 11,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746238,
        "gene_id": "A2ML1",
        "value": 1,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686987,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509234,
        "gene_id": "A2ML1",
        "value": 5,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331481,
        "gene_id": "A2ML1",
        "value": 1,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272230,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212979,
        "gene_id": "A2ML1",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15227514,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029678",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983244,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864742,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746240,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13686989,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029652",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13509236,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029649",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13331483,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029646",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13272232,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029645",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13212981,
        "gene_id": "A3GALT2",
        "value": 0,
        "SRA": "SRR21029644",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15464518,
        "gene_id": "A2MP1",
        "value": 1,
        "SRA": "SRR21029682",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15405267,
        "gene_id": "A2MP1",
        "value": 2,
        "SRA": "SRR21029681",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286765,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15286768,
        "gene_id": "A4GNT",
        "value": 0,
        "SRA": "SRR21029679",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15109012,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029676",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 15049761,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029675",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14872008,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029672",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14516502,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029666",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14279498,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029662",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14160996,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029660",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14101745,
        "gene_id": "A2MP1",
        "value": 1,
        "SRA": "SRR21029659",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 14042494,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029658",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13983243,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029657",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13864741,
        "gene_id": "A2MP1",
        "value": 2,
        "SRA": "SRR21029655",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    },
    {
        "id": 13746239,
        "gene_id": "A2MP1",
        "value": 0,
        "SRA": "SRR21029653",
        "abbreviation": "PT",
        "Expriment": "PRJNA869106",
        "Stress": "Autism"
    }
]

  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      async renderChart() {
        const spec = {
            "title": "Visualization of Gene Expression data",
          "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
          "width": 1200,
            "height": {"step": 40},
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
            "x": {"field": "SRA", "type": "ordinal", "title": "SRA"},
            "y": {"field": "gene_id", "type": "ordinal", "title": "Gene ID"},
            "color": {"field": "value","aggregate": "mean", "title": "Value"},

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