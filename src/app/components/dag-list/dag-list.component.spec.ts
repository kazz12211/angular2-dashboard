import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagListComponent } from './dag-list.component';

describe('DagListComponent', () => {
  let component: DagListComponent;
  let fixture: ComponentFixture<DagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
