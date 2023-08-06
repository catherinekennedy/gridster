import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcase1Component } from './testcase1.component';

describe('Testcase1Component', () => {
  let component: Testcase1Component;
  let fixture: ComponentFixture<Testcase1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcase1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
