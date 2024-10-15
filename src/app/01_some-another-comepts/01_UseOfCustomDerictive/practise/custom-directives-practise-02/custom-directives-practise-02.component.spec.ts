import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesPractise02Component } from './custom-directives-practise-02.component';

describe('CustomDirectivesPractise02Component', () => {
  let component: CustomDirectivesPractise02Component;
  let fixture: ComponentFixture<CustomDirectivesPractise02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectivesPractise02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDirectivesPractise02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
