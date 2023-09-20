import { Prisma } from "@prisma/client";

export class PictureOfDay implements Prisma.PictureOfDayCreateInput {
  id: number;
  title: string;
  url: string;
  explanation: string;
  hdUrl: string;
  date: string;
}
