import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SeenRecentlyComponent} from './seen-recently.component';

describe('SeenRecentlyComponent', () => {
  let component: SeenRecentlyComponent;
  let fixture: ComponentFixture<SeenRecentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeenRecentlyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeenRecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
