import { TestBed } from '@angular/core/testing';

import { NewTransactionService } from './new-transaction.service';

describe('NewTransactionService', () => {
  let service: NewTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
