import { Module } from '@nestjs/common';
import { TaskSchedulingService } from './services/task-scheduling.service';
import { PrismaService } from 'src/earth/prisma.service';
import { TaskSchedulingController } from './controller/task-scheduling.controller';

@Module({
  providers: [TaskSchedulingService, PrismaService],
  //controllers: [TaskSchedulingController]
})
export class TaskSchedulingModule { }
