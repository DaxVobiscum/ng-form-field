import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBuddyComponent } from './field-buddy.component';

describe('FieldBuddyComponent', () => {
  let component: FieldBuddyComponent;
  let fixture: ComponentFixture<FieldBuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
