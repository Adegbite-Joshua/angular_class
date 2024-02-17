import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSignUpComponent } from './behavior-sign-up.component';

describe('BehaviorSignUpComponent', () => {
  let component: BehaviorSignUpComponent;
  let fixture: ComponentFixture<BehaviorSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviorSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
