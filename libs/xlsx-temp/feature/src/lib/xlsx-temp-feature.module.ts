import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromXlsxTemps from './+state/xlsx-temps/xlsx-temps.reducer';
import { XlsxTempsEffects } from './+state/xlsx-temps/xlsx-temps.effects';
import { XlsxTempsFacade } from './+state/xlsx-temps/xlsx-temps.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromXlsxTemps.XLSX_TEMPS_FEATURE_KEY,
      fromXlsxTemps.reducer
    ),
    EffectsModule.forFeature([XlsxTempsEffects]),
  ],
  providers: [XlsxTempsFacade],
})
export class XlsxTempFeatureModule {}
