import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { XlsxTempDataAccessModule } from '@dxl-angsp/xlsx-temp/data-access';
import { XlsxTempFeatureModule } from '@dxl-angsp/xlsx-temp/feature';

import { XlsxTempShellComponent } from './xlsx-temp-shell.component';

describe('XlsxTempShellComponent', () => {
  let component: XlsxTempShellComponent;
  let fixture: ComponentFixture<XlsxTempShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        XlsxTempDataAccessModule,
        XlsxTempFeatureModule,
        HttpClientModule,
        NoopAnimationsModule,
      ],
      declarations: [XlsxTempShellComponent],
    }).compileComponents();
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
