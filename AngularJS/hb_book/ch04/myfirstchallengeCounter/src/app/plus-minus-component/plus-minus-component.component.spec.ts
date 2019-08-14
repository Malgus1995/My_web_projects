import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusComponentComponent } from './plus-minus-component.component';

describe('PlusMinusComponentComponent', () => {
  let component: PlusMinusComponentComponent;
  let fixture: ComponentFixture<PlusMinusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
