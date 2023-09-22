import { Test, TestingModule } from '@nestjs/testing';
import { TaskSchedulingService } from './task-scheduling.service';

describe('TaskSchedulingService', () => {
  let service: TaskSchedulingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskSchedulingService],
    }).compile();

    service = module.get<TaskSchedulingService>(TaskSchedulingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
