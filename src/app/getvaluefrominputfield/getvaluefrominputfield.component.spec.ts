import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvaluefrominputfieldComponent } from './getvaluefrominputfield.component';

describe('GetvaluefrominputfieldComponent', () => {
  let component: GetvaluefrominputfieldComponent;
  let fixture: ComponentFixture<GetvaluefrominputfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetvaluefrominputfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetvaluefrominputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
