import { TestBed, async, inject } from '@angular/core/testing';

import { TableRowGuard } from './table-row.guard';

describe('TableRowGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableRowGuard]
    });
  });

  it('should ...', inject([TableRowGuard], (guard: TableRowGuard) => {
    expect(guard).toBeTruthy();
  }));
});
