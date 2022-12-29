import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll() {
    return 'This returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This returns the ${id} from the Parameter`;
  }
}
