import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const supabaseUrl = 'https://sqwwccqungrhzsmemgzd.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable()
export class AppService {
  removeDuplicatesByProperty(arr, propName: string) {
    const uniqueValues = new Set<string>();
    const uniqueArray = [];

    for (const obj of arr) {
      const value = obj[propName];
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        uniqueArray.push(obj);
      }
    }

    const valuesArray: string[] = uniqueArray.map((obj) => obj[propName]);

    return valuesArray;
  }
  async getCharts(exp, sra, gene?) {
    if (gene) {
      console.log('the values: ', exp, sra, gene);
      const { data: charts, error } = await supabase
        .from('data')
        .select('*')
        .eq('SRA', sra);

      // .in('SRA', sra)
      // .in('Expriment', exp)

      console.log(charts);

      // var charts = await prisma.heatdata.findMany(
      //   {
      //     where:
      //     {
      //       experiment: exp,
      //       sra: sra,
      //     }
      //   }
      // )
      const validCharts = [];
      for (const chart of charts) {
        if (gene.includes(chart.gids)) {
          validCharts.push(chart);
        }
      }
      return validCharts;
    }
    return null;
  }

  async getGene() {
    // var gene = await prisma.heatdata.findMany(
    //   {
    //     select: {
    //       gene : true
    //     }
    //   }
    // )

    const { data: data, error } = await supabase.from('data').select('gids');

    // return data;
    return this.removeDuplicatesByProperty(data, 'gids');
  }

  async getDisease() {
    const { data: data, error } = await supabase.from('data').select('Disease');

    return this.removeDuplicatesByProperty(data, 'Disease');
  }

  async getExpriment(disease: string) {
    // var expriment = disease ? await prisma.heatdata.findMany(
    //   {
    //     where:
    //     {
    //       disease: disease
    //     },
    //     select: {
    //       experiment : true
    //     }
    //   }
    // ) :
    // await prisma.heatdata.findMany(
    //   {
    //     select: {
    //       experiment : true
    //     }
    //   }
    // )

    const { data: data, error } = await supabase
      .from('data')
      .select('Expriment');

    return this.removeDuplicatesByProperty(data, 'Expriment');
  }

  async getSRA(exp: string) {
    // var sra = exp ? await prisma.heatdata.findMany(
    //   {
    //     where:
    //     {
    //       experiment: exp
    //     }
    //     ,
    //     select: {
    //       sra : true
    //     }
    //   }
    //   )
    //   : await prisma.heatdata.findMany(
    //     {
    //       select: {
    //         sra : true
    //       }
    //     }
    //     )

    const { data: data, error } = await supabase.from('data').select('SRA');

    const value = this.removeDuplicatesByProperty(data, 'SRA');
    return value;
  }
}
