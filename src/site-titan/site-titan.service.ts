import { Injectable } from '@nestjs/common';
import { CreateSiteTitanDto } from './dto/create-site-titan.dto';
import { UpdateSiteTitanDto } from './dto/update-site-titan.dto';

@Injectable()
export class SiteTitanService {
  create(createSiteTitanDto: CreateSiteTitanDto) {
    return 'This action adds a new siteTitan';
  }

  findAll() {
    return `This action returns all siteTitan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} siteTitan`;
  }

  update(id: number, updateSiteTitanDto: UpdateSiteTitanDto) {
    return `This action updates a #${id} siteTitan`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteTitan`;
  }
}
