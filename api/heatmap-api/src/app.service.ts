import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



@Injectable()
export class AppService {


  removeDuplicatesByProperty(arr , propName: string) {
    const uniqueValues = new Set<string>();
    const uniqueArray  = [];
  
    for (const obj of arr) {
      const value = obj[propName];
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        uniqueArray.push(obj);
      }
    }

    const valuesArray: string[] = uniqueArray.map(obj => obj[propName])
    
    return valuesArray;
  }
  
  async getGene() {
    
    var gene = await prisma.heatdata.findMany(
      {
        select: {
          gene : true
        }
      }
    )
    return this.removeDuplicatesByProperty(gene, "gene");
  }

  async getDisease() {
    
    var disease = await prisma.heatdata.findMany(
      {
        select: {
          disease : true
        }
      }
    )
   return this.removeDuplicatesByProperty(disease, "disease");
  }

  async getExpriment(disease : string) {
    
    var expriment = disease ? await prisma.heatdata.findMany(
      {
        where:
        {
          disease: disease
        },
        select: {
          experiment : true
        }
      }
    ) :
    await prisma.heatdata.findMany(
      {
        select: {
          experiment : true
        }
      }
    )
    return this.removeDuplicatesByProperty(expriment, "experiment");
  }

  async getSRA(exp : string) {
    
    var sra = exp ? await prisma.heatdata.findMany(
      {
        where:
        {
          experiment: exp
        }
        ,
        select: {
          sra : true
        }
      }
      ) 
      : await prisma.heatdata.findMany(
        {
          select: {
            sra : true
          }
        }
        )     
    return this.removeDuplicatesByProperty(sra, "sra");
  }
}
