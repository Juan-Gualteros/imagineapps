import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearLocationComponent } from './near-location.component';

describe('NearLocationComponent', () => {
  let component: NearLocationComponent;
  let fixture: ComponentFixture<NearLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
