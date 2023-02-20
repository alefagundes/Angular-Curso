import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDindsComponent } from './two-way-dinds.component';

describe('TwoWayDindsComponent', () => {
  let component: TwoWayDindsComponent;
  let fixture: ComponentFixture<TwoWayDindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDindsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
