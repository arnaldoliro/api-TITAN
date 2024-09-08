import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateProselDto } from './dto/update-prosel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CandidateProsel,
  Course,
  DiversityGroup,
  ReferalSource,
  TechnologyAffinity,
} from '@prisma/client';

@Injectable()
export class ProselService {
  constructor(private database: PrismaService) {}

  async candidateExists(email: string): Promise<boolean> {
    const candidate = await this.database.candidateProsel.findUnique({
      where: { email: email },
    });
    return !!candidate;
  }

  async create(data: {
    name: string;
    email: string;
    pronouns: string;
    special_condition_needed: boolean;
    phone: string;
    registration_number: string;
    age: number;
    diversity_group: DiversityGroup;
    course: Course;
    technology_affinity: TechnologyAffinity;
    referral_source: ReferalSource;
    birth_date: Date;
  }) {
    if (await this.candidateExists(data.email)) {
      throw new BadRequestException(
        'O candidato já possui um email cadastrado',
      );
    }

    return this.database.candidateProsel.create({
      data: {
        name: data.name,
        email: data.email,
        pronouns: data.pronouns,
        diversity_group: data.diversity_group,
        special_condition_needed: data.special_condition_needed,
        technology_affinity: data.technology_affinity,
        course: data.course,
        registration_number: data.registration_number,
        phone: data.phone,
        referral_source: data.referral_source,
        birth_date: data.birth_date,
        age: data.age,
      },
    });
  }

  async findAll(): Promise<CandidateProsel[]> {
    return this.database.candidateProsel.findMany();
  }

  async findOne(id: string): Promise<CandidateProsel> {
    return this.database.candidateProsel.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateProselDto: UpdateProselDto) {
    const candidate = await this.database.candidateProsel.findUnique({
      where: { id },
    });
    if (!candidate) {
      throw new NotFoundException(`Usuário do id; ${id} não encontrado`);
    }
    return this.database.candidateProsel.update({
      where: { id },
      data: updateProselDto,
    });
  }

  async remove(id: string) {
    const candidate = await this.database.candidateProsel.findUnique({
      where: { id },
    });
    if (!candidate) {
      throw new NotFoundException(`Usuário do id; ${id} não encontrado`);
    }

    return this.database.candidateProsel.delete({
      where: { id },
    });
  }
}
