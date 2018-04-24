import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPortalComponent } from './cms-portal.component';

describe('CmsPortalComponent', () => {
  let component: CmsPortalComponent;
  let fixture: ComponentFixture<CmsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
