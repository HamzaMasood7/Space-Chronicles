import { Test, TestingModule } from '@nestjs/testing';
import { EarthController } from './earth.controller';

describe('EarthController', () => {
  let controller: EarthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EarthController],
    }).compile();

    controller = module.get<EarthController>(EarthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
