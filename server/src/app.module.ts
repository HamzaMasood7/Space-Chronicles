import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EarthModule } from './earth/earth.module';

@Module({
  imports: [EarthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
