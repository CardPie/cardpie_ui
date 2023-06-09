import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TeamInfomationComponent} from './team-infomation.component';

describe('TeamInfomationComponent', () => {
  let component: TeamInfomationComponent;
  let fixture: ComponentFixture<TeamInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamInfomationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
