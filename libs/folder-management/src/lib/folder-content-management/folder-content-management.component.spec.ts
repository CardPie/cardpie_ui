import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FolderContentManagementComponent} from './folder-content-management.component';

describe('FolderContentManagementComponent', () => {
  let component: FolderContentManagementComponent;
  let fixture: ComponentFixture<FolderContentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderContentManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FolderContentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
