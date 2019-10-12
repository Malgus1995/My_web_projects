import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNoticeComponent } from './confirm-notice.component';

describe('ConfirmNoticeComponent', () => {
  let component: ConfirmNoticeComponent;
  let fixture: ComponentFixture<ConfirmNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
