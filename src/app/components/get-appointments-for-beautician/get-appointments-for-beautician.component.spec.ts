import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAppointmentsForBeauticianComponent } from './get-appointments-for-beautician.component';

describe('GetAppointmentsForBeauticianComponent', () => {
  let component: GetAppointmentsForBeauticianComponent;
  let fixture: ComponentFixture<GetAppointmentsForBeauticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAppointmentsForBeauticianComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAppointmentsForBeauticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
