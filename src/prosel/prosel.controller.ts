import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProselService } from './prosel.service';
import { CreateProselDto } from './dto/create-prosel.dto';
import { UpdateProselDto } from './dto/update-prosel.dto';

@Controller('prosel')
export class ProselController {
  constructor(private readonly proselService: ProselService) {}

  @Post()
  async create(@Body() createProselDto: CreateProselDto) {
    try {
      return this.proselService.create(createProselDto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new InternalServerErrorException('Algum erro inesperado aconteceu');
    }
  }

  @Get()
  findAll() {
    return this.proselService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const candidate = await this.proselService.findOne(String(id));
    if (!candidate) {
      throw new NotFoundException('Candidato não encontrado');
    }
    return candidate;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProselDto: UpdateProselDto) {
    return this.proselService.update(id, updateProselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proselService.remove(id);
  }
}
