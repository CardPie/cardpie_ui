import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BottomBannerCardpieComponent} from './bottom-banner-cardpie.component';

describe('BottomBannerCardpieComponent', () => {
  let component: BottomBannerCardpieComponent;
  let fixture: ComponentFixture<BottomBannerCardpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomBannerCardpieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomBannerCardpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
