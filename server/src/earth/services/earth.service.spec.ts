import { Test, TestingModule } from '@nestjs/testing';
import { EarthService } from './earth.service';

describe('EarthService', () => {
  let service: EarthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EarthService],
    }).compile();

    service = module.get<EarthService>(EarthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
