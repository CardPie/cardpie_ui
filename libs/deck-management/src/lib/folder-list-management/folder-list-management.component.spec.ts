import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FolderListManagementComponent} from './folder-list-management.component';

describe('FolderListManagementComponent', () => {
  let component: FolderListManagementComponent;
  let fixture: ComponentFixture<FolderListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderListManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FolderListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
