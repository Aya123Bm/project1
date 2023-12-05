import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facesnapsg1Component } from './facesnapsg1.component';

describe('Facesnapsg1Component', () => {
  let component: Facesnapsg1Component;
  let fixture: ComponentFixture<Facesnapsg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Facesnapsg1Component]
    });
    fixture = TestBed.createComponent(Facesnapsg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
