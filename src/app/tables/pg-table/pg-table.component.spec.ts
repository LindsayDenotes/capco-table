import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTableComponent } from './pg-table.component';

describe('PgTableComponent', () => {
  let component: PgTableComponent;
  let fixture: ComponentFixture<PgTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
