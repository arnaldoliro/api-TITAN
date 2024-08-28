import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteTitanService } from './site-titan.service';
import { CreateSiteTitanDto } from './dto/create-site-titan.dto';
import { UpdateSiteTitanDto } from './dto/update-site-titan.dto';

@Controller('site-titan')
export class SiteTitanController {
  constructor(private readonly siteTitanService: SiteTitanService) {}

  @Post()
  create(@Body() createSiteTitanDto: CreateSiteTitanDto) {
    return this.siteTitanService.create(createSiteTitanDto);
  }

  @Get()
  findAll() {
    return this.siteTitanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteTitanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteTitanDto: UpdateSiteTitanDto) {
    return this.siteTitanService.update(+id, updateSiteTitanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteTitanService.remove(+id);
  }
}
