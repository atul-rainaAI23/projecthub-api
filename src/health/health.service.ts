import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private prisma: PrismaService) {}

  async create(createHealthDto: CreateHealthDto) {
    return this.prisma.health.create({ data: createHealthDto as any });
  }

  async findAll() {
    return this.prisma.health.findMany();
  }

  async findOne(id: number) {
    return this.prisma.health.findUnique({ where: { id } });
  }

  async update(id: number, updateHealthDto: UpdateHealthDto) {
    return this.prisma.health.update({
      where: { id },
      data: updateHealthDto as any,
    });
  }

  async remove(id: number) {
    return this.prisma.health.delete({ where: { id } });
  }
}
