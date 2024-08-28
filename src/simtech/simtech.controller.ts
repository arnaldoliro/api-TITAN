import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SimtechService } from './simtech.service';
import { CreateSimtechDto } from './dto/create-simtech.dto';
import { UpdateSimtechDto } from './dto/update-simtech.dto';

@Controller('simtech')
export class SimtechController {
  constructor(private readonly simtechService: SimtechService) {}

  @Post()
  create(@Body() createSimtechDto: CreateSimtechDto) {
    return this.simtechService.create(createSimtechDto);
  }

  @Get()
  findAll() {
    return this.simtechService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simtechService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSimtechDto: UpdateSimtechDto) {
    return this.simtechService.update(+id, updateSimtechDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simtechService.remove(+id);
  }
}
