import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowSettingComponent } from './workflow-setting.component';

describe('WorkflowSettingComponent', () => {
  let component: WorkflowSettingComponent;
  let fixture: ComponentFixture<WorkflowSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
