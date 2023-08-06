import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterPreviewComponent } from './gridster-preview.component';

describe('GridsterPreviewComponent', () => {
  let component: GridsterPreviewComponent;
  let fixture: ComponentFixture<GridsterPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsterPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsterPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
