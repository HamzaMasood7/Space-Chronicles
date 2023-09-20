import { Controller, Get } from '@nestjs/common';
import { EarthService } from '../services/earth.service';

@Controller('earth')
export class EarthController {

  constructor(
    private apiService: EarthService
  ) {

  }

  @Get('today')
  async getPicOfDay() {

    const res = await this.apiService.fetchPictureOfTheDay();
    return res;
  }
}
