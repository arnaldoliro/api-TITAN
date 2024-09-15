import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  // NotFoundException,
} from '@nestjs/common';
// import { UpdateProselDto } from './dto/update-prosel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CandidateProsel } from '@prisma/client';
import { MessageHelper } from 'src/helpers/messages.helpers';
import { CreateProselDto } from './dto/create-prosel.dto';

@Injectable()
export class ProselService {
  constructor(private database: PrismaService) {}

  async candidateExists(email: string): Promise<boolean> {
    const candidate = await this.database.candidateProsel.findUnique({
      where: { email: email },
    });
    return !!candidate;
  }

  async create(createProselDto: CreateProselDto) {
    const { others, other_course, courseId } = createProselDto;

    if (others && !other_course) {
      throw new BadRequestException(
        'O campo "other_course" é obrigatório quando "others" é verdadeiro.',
      );
    }

    if (!others && courseId) {
      const courseExists = await this.database.courses.findUnique({
        where: { id: courseId },
      });

      if (!courseExists) {
        throw new BadRequestException(
          `Curso com id ${courseId} não encontrado.`,
        );
      }
    }

    if (await this.candidateExists(createProselDto.email)) {
      throw new ConflictException(MessageHelper.USER_ALREADY_EXISTS);
    }

    try {
      if (others) {
        return this.database.candidateProsel.create({
          data: {
            name: createProselDto.name,
            email: createProselDto.email,
            pronouns: createProselDto.pronouns,
            diversity_group: createProselDto.diversity_group,
            special_condition_needed: createProselDto.special_condition_needed,
            technology_affinity: createProselDto.technology_affinity,
            stack: createProselDto.stack,
            courseId: null,
            other_course,
            registration_number: createProselDto.registration_number,
            phone: createProselDto.phone,
            referral_source: createProselDto.referral_source,
            birth_date: createProselDto.birth_date,
            age: createProselDto.age,
          },
        });
      } else {
        return this.database.candidateProsel.create({
          data: {
            name: createProselDto.name,
            email: createProselDto.email,
            pronouns: createProselDto.pronouns,
            diversity_group: createProselDto.diversity_group,
            special_condition_needed: createProselDto.special_condition_needed,
            technology_affinity: createProselDto.technology_affinity,
            stack: createProselDto.stack,
            course: { connect: { id: courseId } },
            registration_number: createProselDto.registration_number,
            phone: createProselDto.phone,
            referral_source: createProselDto.referral_source,
            birth_date: createProselDto.birth_date,
            age: createProselDto.age,
          },
        });
      }
    } catch (error) {
      console.error('Erro ao criar usuário', error);
      throw new InternalServerErrorException('Erro ao criar usuário');
    }
  }

  async findAll(): Promise<CandidateProsel[]> {
    return this.database.candidateProsel.findMany({
      include: {
        course: true,
      },
    });
  }

  async findOne(id: string): Promise<CandidateProsel> {
    return this.database.candidateProsel.findUnique({
      where: {
        id,
      },
      include: {
        course: true,
      },
    });
  }

  // Função de atualizar desativada pois aparentemente é desnecessária (Está incompleta, rever a lógica, atualização do other_courses está bugada)

  // async update(id: string, updateProselDto: UpdateProselDto) {
  //   const { others, other_course, courseId } = updateProselDto;

  //   const candidate = await this.database.candidateProsel.findUnique({
  //     where: { id },
  //   });
  //   if (!candidate) {
  //     throw new NotFoundException(MessageHelper.USER_NOT_FOUND);
  //   }

  //   if (others && !other_course) {
  //     throw new BadRequestException(
  //       'O campo "other_course" é obrigatório quando "others" é verdadeiro.',
  //     );
  //   }

  //   if (!others && courseId) {
  //     const courseExists = await this.database.courses.findUnique({
  //       where: { id: courseId },
  //     });

  //     if (!courseExists) {
  //       throw new BadRequestException(
  //         `Curso com id ${courseId} não encontrado.`,
  //       );
  //     }
  //   }

  //   try {
  //     if (others) {
  //       return this.database.candidateProsel.update({
  //         where: { id },
  //         data: {
  //           name: updateProselDto.name,
  //           email: updateProselDto.email,
  //           pronouns: updateProselDto.pronouns,
  //           diversity_group: updateProselDto.diversity_group,
  //           special_condition_needed: updateProselDto.special_condition_needed,
  //           technology_affinity: updateProselDto.technology_affinity,
  //           stack: updateProselDto.stack,
  //           course: null,
  //           other_course,
  //           registration_number: updateProselDto.registration_number,
  //           phone: updateProselDto.phone,
  //           referral_source: updateProselDto.referral_source,
  //           birth_date: updateProselDto.birth_date,
  //           age: updateProselDto.age,
  //         },
  //       });
  //     } else {
  //       return this.database.candidateProsel.update({
  //         where: { id },
  //         data: {
  //           name: updateProselDto.name,
  //           email: updateProselDto.email,
  //           pronouns: updateProselDto.pronouns,
  //           diversity_group: updateProselDto.diversity_group,
  //           special_condition_needed: updateProselDto.special_condition_needed,
  //           technology_affinity: updateProselDto.technology_affinity,
  //           stack: updateProselDto.stack,
  //           course: { connect: { id: courseId } },
  //           other_course: null,
  //           registration_number: updateProselDto.registration_number,
  //           phone: updateProselDto.phone,
  //           referral_source: updateProselDto.referral_source,
  //           birth_date: updateProselDto.birth_date,
  //           age: updateProselDto.age,
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     throw new InternalServerErrorException('Erro ao atualizar usuário');
  //   }
  // }

  // Função de deletar desabilitada até ter um middleware de aunteticação do usuário

  // async remove(id: string) {
  //   const candidate = await this.database.candidateProsel.findUnique({
  //     where: { id },
  //   });
  //   if (!candidate) {
  //     throw new NotFoundException(`Usuário do id; ${id} não encontrado`);
  //   }

  //   return this.database.candidateProsel.delete({
  //     where: { id },
  //   });
  // }
}
