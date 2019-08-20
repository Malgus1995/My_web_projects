import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChkboxnumComponent } from './show-chkboxnum.component';

describe('ShowChkboxnumComponent', () => {
  let component: ShowChkboxnumComponent;
  let fixture: ComponentFixture<ShowChkboxnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChkboxnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChkboxnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
