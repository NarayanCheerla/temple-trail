import { TestBed, inject } from '@angular/core/testing';

import { RouteActivatorService } from './route-activator.service';

describe('RouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteActivatorService]
    });
  });

  it('should be created', inject([RouteActivatorService], (service: RouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
