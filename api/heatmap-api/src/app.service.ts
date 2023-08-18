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
    
    var gene = await prisma.myht.findMany(
      {
        select: {
          gene : true
        }
      }
    )
    return this.removeDuplicatesByProperty(gene, "gene");
  }

  async getDisease() {
    
    var disease = await prisma.myht.findMany(
      {
        select: {
          disease : true
        }
      }
    )
   return this.removeDuplicatesByProperty(disease, "disease");
  }

  async getExpriment(disease : string) {
    
    var expriment = disease ? await prisma.myht.findMany(
      {
        where:
        {
          disease: disease
        },
        select: {
          expriment : true
        }
      }
    ) :
    await prisma.myht.findMany(
      {
        select: {
          expriment : true
        }
      }
    )
    return this.removeDuplicatesByProperty(expriment, "expriment");
  }

  async getSRA(exp : string) {
    
    var sra = exp ? await prisma.myht.findMany(
      {
        where:
        {
          expriment: exp
        }
        ,
        select: {
          sra : true
        }
      }
      ) 
      : await prisma.myht.findMany(
        {
          select: {
            sra : true
          }
        }
        )  
        
    return this.removeDuplicatesByProperty(sra, "sra");
  }
}
