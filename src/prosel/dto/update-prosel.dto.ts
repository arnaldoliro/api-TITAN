import { PartialType } from '@nestjs/mapped-types';
import { CreateProselDto } from './create-prosel.dto';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProselDto extends PartialType(CreateProselDto) {
  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsInt()
  courseId?: number;

  @IsOptional()
  @IsBoolean()
  others?: boolean;

  @IsOptional()
  @IsString()
  other_course?: string;
}
