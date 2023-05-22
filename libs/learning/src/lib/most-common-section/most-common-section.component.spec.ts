import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MostCommonSectionComponent} from './most-common-section.component';

describe('MostCommonSectionComponent', () => {
  let component: MostCommonSectionComponent;
  let fixture: ComponentFixture<MostCommonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostCommonSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostCommonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
