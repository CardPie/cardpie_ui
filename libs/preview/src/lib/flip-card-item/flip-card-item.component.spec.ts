import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FlipCardItemComponent} from './flip-card-item.component';

describe('FlipCardItemComponent', () => {
  let component: FlipCardItemComponent;
  let fixture: ComponentFixture<FlipCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlipCardItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlipCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
