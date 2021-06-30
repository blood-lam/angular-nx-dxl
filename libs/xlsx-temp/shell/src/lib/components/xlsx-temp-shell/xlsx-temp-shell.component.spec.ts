import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxTempShellComponent } from './xlsx-temp-shell.component';

describe('XlsxTempShellComponent', () => {
  let component: XlsxTempShellComponent;
  let fixture: ComponentFixture<XlsxTempShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XlsxTempShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XlsxTempShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
