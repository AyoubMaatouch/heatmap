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

  clean_chart(charts,sra: string, exp: string)
  {
    const matchingObjects = [];
    if (sra !== undefined && exp !== undefined)
    {
      for (let i = 0; i < charts.length; i++) {
        if (charts[i].SRA === sra && charts[i].Expriment === exp) {
          matchingObjects.push(charts[i]);
        }
      }

      console.log("matching both", matchingObjects)
      return matchingObjects
    }
    else if (sra === undefined)
    {
      for (let i = 0; i < charts.length; i++) {
        if (charts[i].Expriment === exp) {
          matchingObjects.push(charts[i]);
        }
      }
      console.log("matching exp")
      return matchingObjects
      
    }
    else if (exp === undefined)
    {
      for (let i = 0; i < charts.length; i++) {
        if (charts[i].SRA === sra) {
          matchingObjects.push(charts[i]);
        }
      }
      console.log("matching sra")
      return matchingObjects
    }
    return charts
  }
  
  async  getCharts(exp, sra, gene?) {
    if (gene) {
      // console.log("===========")
      // console.log(exp, sra, gene)
      // console.log("===========")
      const { data: charts, error } = await supabase
        .from('data')
        .select('*')
        .in('gids', gene);

      return this.clean_chart(charts, sra, exp) ;
    }
    return [];
  }

  async getGene() {
    const { data: data, error } = await supabase.from('data').select('gids');

    return this.removeDuplicatesByProperty(data, 'gids');
  }

  async getDisease() {
    const { data: data, error } = await supabase.from('data').select('Disease');

    return this.removeDuplicatesByProperty(data, 'Disease');
  }

  async getExpriment(disease: string) {

    const { data: data, error } = await supabase
      .from('data')
      .select('Expriment');

    return this.removeDuplicatesByProperty(data, 'Expriment');
  }

  async getSRA(exp: string) {

    const { data: data, error } = await supabase.from('data').select('SRA');
    const value = this.removeDuplicatesByProperty(data, 'SRA');
    return value;
  }
}
