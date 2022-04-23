import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerAddComponent } from './organizer-add.component';

describe('OrganizerAddComponent', () => {
  let component: OrganizerAddComponent;
  let fixture: ComponentFixture<OrganizerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
