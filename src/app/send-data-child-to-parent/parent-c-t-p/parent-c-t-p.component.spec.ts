import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCTPComponent } from './parent-c-t-p.component';

describe('ParentCTPComponent', () => {
  let component: ParentCTPComponent;
  let fixture: ComponentFixture<ParentCTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCTPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentCTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
