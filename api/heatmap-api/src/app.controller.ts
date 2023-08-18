import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("gene")
  async Gene() {
    return this.appService.getGene();
  }
  @Get("disease")
  async Disease() {
    return this.appService.getDisease()
  }
  @Get("expriment/:disease")
  async Expriment(@Param() disease: string) {
    return this.appService.getExpriment(disease[0]);
  }
  @Get("expriment")
  async AllExpriment() {
    return this.appService.getExpriment(undefined);
  }
  @Get("sra/:params")
  async SRA(@Param() exp: string) {

    return this.appService.getSRA(exp[0]);
  }
  @Get("sra")
  async AllSRA() {
    return this.appService.getSRA(undefined);
  }
}
