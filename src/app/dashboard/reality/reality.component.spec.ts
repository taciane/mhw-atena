import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealityComponent } from './reality.component';

describe('RealityComponent', () => {
  let component: RealityComponent;
  let fixture: ComponentFixture<RealityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
