import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxTempComponent } from './xlsx-temp.component';

describe('XlsxTempComponent', () => {
  let component: XlsxTempComponent;
  let fixture: ComponentFixture<XlsxTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XlsxTempComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XlsxTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
