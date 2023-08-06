import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighttabComponent } from './righttab.component';

describe('RighttabComponent', () => {
  let component: RighttabComponent;
  let fixture: ComponentFixture<RighttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
