import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNowtimeComponent } from './get-nowtime.component';

describe('GetNowtimeComponent', () => {
  let component: GetNowtimeComponent;
  let fixture: ComponentFixture<GetNowtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNowtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
