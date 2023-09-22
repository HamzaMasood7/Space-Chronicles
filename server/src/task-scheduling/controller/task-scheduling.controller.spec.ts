import { Test, TestingModule } from '@nestjs/testing';
import { TaskSchedulingController } from './task-scheduling.controller';

describe('TaskSchedulingController', () => {
  let controller: TaskSchedulingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskSchedulingController],
    }).compile();

    controller = module.get<TaskSchedulingController>(TaskSchedulingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
