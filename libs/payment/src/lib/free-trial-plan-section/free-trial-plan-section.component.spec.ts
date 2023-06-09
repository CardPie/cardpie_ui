import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FreeTrialPlanSectionComponent} from './free-trial-plan-section.component';

describe('FreeTrialPlanSectionComponent', () => {
  let component: FreeTrialPlanSectionComponent;
  let fixture: ComponentFixture<FreeTrialPlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeTrialPlanSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeTrialPlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
