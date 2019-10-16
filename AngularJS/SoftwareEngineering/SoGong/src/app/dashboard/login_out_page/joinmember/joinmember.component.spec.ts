import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinmemberComponent } from './joinmember.component';

describe('JoinmemberComponent', () => {
  let component: JoinmemberComponent;
  let fixture: ComponentFixture<JoinmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
