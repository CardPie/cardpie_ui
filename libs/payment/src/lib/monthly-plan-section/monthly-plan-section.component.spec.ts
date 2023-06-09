import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MonthlyPlanSectionComponent} from './monthly-plan-section.component';

describe('MonthlyPlanSectionComponent', () => {
  let component: MonthlyPlanSectionComponent;
  let fixture: ComponentFixture<MonthlyPlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyPlanSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyPlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
