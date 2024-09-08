import {
  Course,
  DiversityGroup,
  ReferalSource,
  TechnologyAffinity,
} from '@prisma/client';

export class CreateProselDto {
  id: string;
  email: string;
  name: string;
  pronouns: string;
  diversity_group: DiversityGroup;
  special_condition_needed: boolean;
  technology_affinity: TechnologyAffinity;
  referral_source: ReferalSource;
  course: Course;
  registration_number: string;
  phone: string;
  age: number;
  birth_date: Date;
}
