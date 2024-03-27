import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCTPComponent } from './child-c-t-p.component';

describe('ChildCTPComponent', () => {
  let component: ChildCTPComponent;
  let fixture: ComponentFixture<ChildCTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCTPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
