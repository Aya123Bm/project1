import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fsl1Component } from './fsl1.component';

describe('Fsl1Component', () => {
  let component: Fsl1Component;
  let fixture: ComponentFixture<Fsl1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fsl1Component]
    });
    fixture = TestBed.createComponent(Fsl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
