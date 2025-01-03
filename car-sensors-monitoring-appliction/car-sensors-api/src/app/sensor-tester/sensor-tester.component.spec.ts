import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTesterComponent } from './sensor-tester.component';

describe('SensorTesterComponent', () => {
  let component: SensorTesterComponent;
  let fixture: ComponentFixture<SensorTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
