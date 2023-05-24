import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MemorizeSectionComponent} from './memorize-section.component';

describe('MemorizeSectionComponent', () => {
  let component: MemorizeSectionComponent;
  let fixture: ComponentFixture<MemorizeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorizeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemorizeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
