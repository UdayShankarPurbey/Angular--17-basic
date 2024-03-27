import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedforComponent } from './nestedfor.component';

describe('NestedforComponent', () => {
  let component: NestedforComponent;
  let fixture: ComponentFixture<NestedforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedforComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
