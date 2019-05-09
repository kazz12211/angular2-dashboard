import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDocumentListComponent } from './recent-document-list.component';

describe('RecentDocumentListComponent', () => {
  let component: RecentDocumentListComponent;
  let fixture: ComponentFixture<RecentDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
