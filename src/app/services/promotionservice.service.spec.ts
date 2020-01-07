import { TestBed } from '@angular/core/testing';

import { PromotionserviceService } from './promotionservice.service';

describe('PromotionserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionserviceService = TestBed.get(PromotionserviceService);
    expect(service).toBeTruthy();
  });
});
