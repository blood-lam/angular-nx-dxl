import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Created NGRX
 */
import * as fromXlsxTemps from './+state/xlsx-temps/xlsx-temps.reducer';
import { XlsxTempsEffects } from './+state/xlsx-temps/xlsx-temps.effects';
import { XlsxTempsFacade } from './+state/xlsx-temps/xlsx-temps.facade';

/**
 * Created Modules
 */
import { XlsxTempDataAccessModule } from '@dxl-angsp/xlsx-temp/data-access';

/**
 * Components
 */
import { ExceljsTempComponent } from './components/exceljs-temp/exceljs-temp.component';
import { XlsxTempComponent } from './components/xlsx-temp/xlsx-temp.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromXlsxTemps.XLSX_TEMPS_FEATURE_KEY,
      fromXlsxTemps.reducer
    ),
    EffectsModule.forFeature([XlsxTempsEffects]),
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    XlsxTempDataAccessModule,
  ],
  providers: [XlsxTempsFacade],
  declarations: [ExceljsTempComponent, XlsxTempComponent],
  exports: [ExceljsTempComponent, XlsxTempComponent],
})
export class XlsxTempFeatureModule {}
