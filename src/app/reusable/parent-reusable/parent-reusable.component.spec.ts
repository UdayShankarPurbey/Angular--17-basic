import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReusableComponent } from './parent-reusable.component';

describe('ParentReusableComponent', () => {
  let component: ParentReusableComponent;
  let fixture: ComponentFixture<ParentReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
