import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesPractiseComponent } from './custom-directives-practise.component';

describe('CustomDirectivesPractiseComponent', () => {
  let component: CustomDirectivesPractiseComponent;
  let fixture: ComponentFixture<CustomDirectivesPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectivesPractiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDirectivesPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
