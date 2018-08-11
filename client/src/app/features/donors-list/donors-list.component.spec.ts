import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsListComponent } from './donors-list.component';

describe('DonorsListComponent', () => {
  let component: DonorsListComponent;
  let fixture: ComponentFixture<DonorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
