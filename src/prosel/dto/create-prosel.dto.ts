import {
  Stack,
  DiversityGroup,
  ReferalSource,
  TechnologyAffinity,
} from '@prisma/client';

import {
  IsBoolean,
  IsString,
  IsEmail,
  MinLength,
  IsInt,
  Min,
  Max,
  IsOptional,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';

export class CreateProselDto {
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  pronouns: string;

  diversity_group: DiversityGroup;
  technology_affinity: TechnologyAffinity;
  referral_source: ReferalSource;
  stack: Stack;
  birth_date: Date;

  @IsBoolean()
  special_condition_needed: boolean;

  @IsOptional()
  @IsInt()
  @ValidateIf((o) => !o.others)
  courseId?: number;

  @IsOptional()
  @IsBoolean()
  others?: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'O nome do curso deve ser preenchido.' })
  @ValidateIf((o) => o.others)
  other_course?: string;

  @IsString()
  registration_number: string;

  @IsString()
  phone: string;

  @IsInt()
  @Min(16)
  @Max(100)
  age: number;
}
