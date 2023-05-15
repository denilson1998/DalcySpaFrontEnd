import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeauticiansByAdmComponent } from './register-beauticians-by-adm.component';

describe('RegisterBeauticiansByAdmComponent', () => {
  let component: RegisterBeauticiansByAdmComponent;
  let fixture: ComponentFixture<RegisterBeauticiansByAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterBeauticiansByAdmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterBeauticiansByAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
