import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowerComponent } from './empower.component';

describe('EmpowerComponent', () => {
  let component: EmpowerComponent;
  let fixture: ComponentFixture<EmpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
