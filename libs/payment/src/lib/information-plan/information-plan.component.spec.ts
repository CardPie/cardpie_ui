import {ComponentFixture, TestBed} from '@angular/core/testing';
import {InformationPlanComponent} from './information-plan.component';

describe('InformationPlanComponent', () => {
  let component: InformationPlanComponent;
  let fixture: ComponentFixture<InformationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationPlanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
