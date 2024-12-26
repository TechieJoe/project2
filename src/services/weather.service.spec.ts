import { Test, TestingModule } from '@nestjs/testing';
import { Services'Service } from './services'.service';

describe('Services'Service', () => {
  let service: Services'Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Services'Service],
    }).compile();

    service = module.get<Services'Service>(Services'Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
