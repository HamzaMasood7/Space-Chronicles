import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EarthService {


  constructor(private prisma: PrismaService) { }

  getFormattedDate(): string {
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async fetchPictureOfTheDay() {

    try {

      const todayDate = this.getFormattedDate();

      const alreadyExist = await this.prisma.pictureOfDay.findUnique({
        where: {
          date: todayDate
        },
      })


      if (alreadyExist) {
        return alreadyExist;
      }


      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;

      const response = await axios.get(url);





      const data = await this.prisma.pictureOfDay.create({
        data: {
          title: String(response.data.title),  // Coerce to String
          explanation: String(response.data.explanation),  // Coerce to String
          date: String(response.data.date),  // Coerce to String
          url: String(response.data.url),  // Coerce to String
          hdUrl: String(response.data.hdurl),  // Coerce to String
        }
      });




      return data;

    } catch (err) {

      throw new HttpException(err, HttpStatus.SERVICE_UNAVAILABLE);
    }


  }

}
