import {
  ConsoleLogger,
  Controller,
  Get,
  Param,
  Body,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'http';
import { Request } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async helloWorld() {
    console.log('hello');
    return 'Hiloaaaw';
  }

  @Get('gene')
  async Gene() {
    return this.appService.getGene();
  }
  @Get('getCharts')
  async getCharts(@Req() request: Request) {
    return this.appService.getCharts(
      request.query['exp'],
      request.query['sra'],
      request.query['gene'],
    );
  }
  @Get('disease')
  async Disease() {
    return this.appService.getDisease();
  }
  @Get('expriment/:disease')
  async Expriment(@Param() disease: string) {
    return this.appService.getExpriment(disease[0]);
  }
  @Get('expriment')
  async AllExpriment() {
    return this.appService.getExpriment(undefined);
  }
  @Get('sra/:params')
  async SRA(@Param() exp: string) {
    return this.appService.getSRA(exp[0]);
  }
  @Get('sra')
  async AllSRA() {
    return this.appService.getSRA(undefined);
  }
}
