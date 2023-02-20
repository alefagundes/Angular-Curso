import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumbersComponent } from './change-numbers.component';

describe('ChangeNumbersComponent', () => {
  let component: ChangeNumbersComponent;
  let fixture: ComponentFixture<ChangeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
