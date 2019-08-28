import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManegementComponent } from './category-manegement.component';

describe('CategoryManegementComponent', () => {
  let component: CategoryManegementComponent;
  let fixture: ComponentFixture<CategoryManegementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManegementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
