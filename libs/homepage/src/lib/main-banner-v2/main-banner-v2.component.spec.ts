import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MainBannerV2Component} from './main-banner-v2.component';

describe('MainBannerV2Component', () => {
  let component: MainBannerV2Component;
  let fixture: ComponentFixture<MainBannerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainBannerV2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MainBannerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
