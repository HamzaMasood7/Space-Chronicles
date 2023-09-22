import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarthModule } from './earth/earth.module';
import { TaskSchedulingModule } from './task-scheduling/task-scheduling.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [EarthModule, TaskSchedulingModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
