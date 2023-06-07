import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogupComponent } from './logup.component';

describe('LoginComponent', () => {
  let component: LogupComponent;
  let fixture: ComponentFixture<LogupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogupComponent]
    });
    fixture = TestBed.createComponent(LogupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
