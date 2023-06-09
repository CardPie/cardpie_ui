import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChoosePlanPremiumComponent} from './choose-plan-premium.component';

describe('ChoosePlanPremiumComponent', () => {
  let component: ChoosePlanPremiumComponent;
  let fixture: ComponentFixture<ChoosePlanPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlanPremiumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosePlanPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
