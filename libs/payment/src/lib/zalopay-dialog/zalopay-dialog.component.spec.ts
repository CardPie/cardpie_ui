import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ZalopayDialogComponent} from './zalopay-dialog.component';

describe('ZalopayDialogComponent', () => {
  let component: ZalopayDialogComponent;
  let fixture: ComponentFixture<ZalopayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZalopayDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZalopayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
