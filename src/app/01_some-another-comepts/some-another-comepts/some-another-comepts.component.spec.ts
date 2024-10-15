import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAnotherComeptsComponent } from './some-another-comepts.component';

describe('SomeAnotherComeptsComponent', () => {
  let component: SomeAnotherComeptsComponent;
  let fixture: ComponentFixture<SomeAnotherComeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeAnotherComeptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeAnotherComeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
