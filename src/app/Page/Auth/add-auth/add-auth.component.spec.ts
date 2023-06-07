import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthComponent } from './add-auth.component';

describe('AddAuthComponent', () => {
  let component: AddAuthComponent;
  let fixture: ComponentFixture<AddAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAuthComponent]
    });
    fixture = TestBed.createComponent(AddAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
