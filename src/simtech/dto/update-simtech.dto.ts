import { PartialType } from '@nestjs/mapped-types';
import { CreateSimtechDto } from './create-simtech.dto';

export class UpdateSimtechDto extends PartialType(CreateSimtechDto) {}
