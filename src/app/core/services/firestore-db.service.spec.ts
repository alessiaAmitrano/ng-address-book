import { TestBed } from '@angular/core/testing';

import { FireStoreDbService } from './firestore-db.service';

describe('FireStoreDbService', () => {
  let service: FireStoreDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStoreDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
