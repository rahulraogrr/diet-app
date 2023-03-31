import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDietStatsComponent } from './member-diet-stats.component';

describe('MemberDietStatsComponent', () => {
  let component: MemberDietStatsComponent;
  let fixture: ComponentFixture<MemberDietStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDietStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDietStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
