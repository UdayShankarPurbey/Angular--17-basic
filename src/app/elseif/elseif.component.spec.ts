import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseifComponent } from './elseif.component';

describe('ElseifComponent', () => {
  let component: ElseifComponent;
  let fixture: ComponentFixture<ElseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
