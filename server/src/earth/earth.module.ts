import { Module } from '@nestjs/common';
import { EarthController } from './controller/earth.controller';
import { EarthService } from './services/earth.service';
import { PrismaService } from './prisma.service';


@Module({
  controllers: [EarthController],
  providers: [EarthService, PrismaService]
})
export class EarthModule { }
