import { Controller, Get, Query } from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  @Get('fuga')
  getHello(@Query() query: { text: string }): string {
    return query.text;
  }
}
