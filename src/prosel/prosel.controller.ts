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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProselService } from './prosel.service';
import { CreateProselDto } from './dto/create-prosel.dto';
import { UpdateProselDto } from './dto/update-prosel.dto';

@Controller('prosel')
export class ProselController {
  constructor(private readonly proselService: ProselService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProselDto: CreateProselDto) {
    try {
      const candidate = await this.proselService.create(createProselDto);
      return { message: 'Candidato criado com sucesso!', candidate };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new InternalServerErrorException('Algum erro inesperado aconteceu');
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return this.proselService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    const candidate = await this.proselService.findOne(String(id));
    if (!candidate) {
      throw new NotFoundException('Candidato não encontrado');
    } else {
      return { message: 'Candidato encontrado!', candidate };
    }
  }

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id') id: string,
    @Body() updateProselDto: UpdateProselDto,
  ) {
    try {
      const candidate = await this.proselService.update(id, updateProselDto);
      return { message: 'Candidato atualizado!', candidate };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException('Algum erro inesperado aconteceu');
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    try {
      const candidate = await this.proselService.remove(id);
      return { message: 'Candidato deletado!', candidate };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException('Algum erro inesperado aconteceu');
    }
  }
}
