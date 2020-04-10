import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPerformanceMapComponent } from './world-performance-map.component';

describe('WorldPerformanceMapComponent', () => {
  let component: WorldPerformanceMapComponent;
  let fixture: ComponentFixture<WorldPerformanceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldPerformanceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPerformanceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
