import { PartialType } from '@nestjs/mapped-types';
import { CreateProselDto } from './create-prosel.dto';

export class UpdateProselDto extends PartialType(CreateProselDto) {}
