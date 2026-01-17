import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prismaClient = new PrismaClient({
    // Prisma 7 requires explicit connection config
  });

  async onModuleInit() {
    await this.prismaClient.$connect();
  }

  async onModuleDestroy() {
    await this.prismaClient.$disconnect();
  }

  get health() {
    return this.prismaClient.health;
  }
}
