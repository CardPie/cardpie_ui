import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MomoDialogComponent} from './momo-dialog.component';

describe('MomoDialogComponent', () => {
  let component: MomoDialogComponent;
  let fixture: ComponentFixture<MomoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomoDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MomoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
