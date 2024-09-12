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

  @IsString()
  course: string;

  @IsString()
  registration_number: string;

  @IsString()
  phone: string;

  @IsInt()
  @Min(16)
  @Max(100)
  age: number;
}
