import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMasterComponent } from './member-master.component';

describe('MemberMasterComponent', () => {
  let component: MemberMasterComponent;
  let fixture: ComponentFixture<MemberMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
