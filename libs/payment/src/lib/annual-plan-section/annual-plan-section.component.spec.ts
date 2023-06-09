import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AnnualPlanSectionComponent} from './annual-plan-section.component';

describe('AnnualPlanSectionComponent', () => {
  let component: AnnualPlanSectionComponent;
  let fixture: ComponentFixture<AnnualPlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnualPlanSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnualPlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
