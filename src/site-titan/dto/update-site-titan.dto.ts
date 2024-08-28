import { PartialType } from '@nestjs/mapped-types';
import { CreateSiteTitanDto } from './create-site-titan.dto';

export class UpdateSiteTitanDto extends PartialType(CreateSiteTitanDto) {}
