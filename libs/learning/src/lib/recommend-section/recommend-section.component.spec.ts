import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RecommendSectionComponent} from './recommend-section.component';

describe('RecommendSectionComponent', () => {
  let component: RecommendSectionComponent;
  let fixture: ComponentFixture<RecommendSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
