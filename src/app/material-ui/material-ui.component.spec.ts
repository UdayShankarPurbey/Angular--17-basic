import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiComponent } from './material-ui.component';

describe('MaterialUiComponent', () => {
  let component: MaterialUiComponent;
  let fixture: ComponentFixture<MaterialUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
