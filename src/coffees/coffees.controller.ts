import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This returns the ${id} from the Parameter`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
