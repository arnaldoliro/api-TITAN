import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // Delete,
  NotFoundException,
  InternalServerErrorException,
  HttpCode,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { ProselService } from './prosel.service';
import { CreateProselDto } from './dto/create-prosel.dto';
import { UpdateProselDto } from './dto/update-prosel.dto';
import { MessageHelper } from 'src/helpers/messages.helpers';

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
      if (error instanceof ConflictException) {
        throw new ConflictException(error.message);
      }
      throw new InternalServerErrorException(
        MessageHelper.INTERNAL_SERVER_ERROR,
      );
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
      throw new NotFoundException(MessageHelper.USER_NOT_FOUND);
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
      throw new InternalServerErrorException(
        MessageHelper.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Função de deletar desabilitada até a criação de um middleware para autenticação

  // @Delete(':id')
  // @HttpCode(HttpStatus.OK)
  // async remove(@Param('id') id: string) {
  //   try {
  //     const candidate = await this.proselService.remove(id);
  //     return { message: 'Candidato deletado!', candidate };
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw new NotFoundException(error.message);
  //     }
  //     throw new InternalServerErrorException('Algum erro inesperado aconteceu');
  //   }
  // }
}
