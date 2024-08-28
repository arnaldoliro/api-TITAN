import { Injectable } from '@nestjs/common';
import { CreateSimtechDto } from './dto/create-simtech.dto';
import { UpdateSimtechDto } from './dto/update-simtech.dto';

@Injectable()
export class SimtechService {
  create(createSimtechDto: CreateSimtechDto) {
    return 'This action adds a new simtech';
  }

  findAll() {
    return `This action returns all simtech`;
  }

  findOne(id: number) {
    return `This action returns a #${id} simtech`;
  }

  update(id: number, updateSimtechDto: UpdateSimtechDto) {
    return `This action updates a #${id} simtech`;
  }

  remove(id: number) {
    return `This action removes a #${id} simtech`;
  }
}
