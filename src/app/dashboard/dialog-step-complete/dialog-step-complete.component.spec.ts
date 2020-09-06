import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStepCompleteComponent } from './dialog-step-complete.component';

describe('DialogStepCompleteComponent', () => {
  let component: DialogStepCompleteComponent;
  let fixture: ComponentFixture<DialogStepCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStepCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStepCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
