import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/earth/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskSchedulingService {


  constructor(private prisma: PrismaService) { }

  @Cron(CronExpression.EVERY_SECOND)
  async getPictureOfDay() {
    //  console.log("1");
  }


}
