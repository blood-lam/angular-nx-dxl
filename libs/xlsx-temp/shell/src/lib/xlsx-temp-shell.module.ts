import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { XlsxTempDataAccessModule } from '@dxl-angsp/xlsx-temp/data-access';
import { XlsxTempFeatureModule } from '@dxl-angsp/xlsx-temp/feature';
import { XlsxTempShellComponent } from './components/xlsx-temp-shell/xlsx-temp-shell.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    XlsxTempDataAccessModule,
    XlsxTempFeatureModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: XlsxTempShellComponent },
    ]),
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
  ],
  declarations: [XlsxTempShellComponent],
})
export class XlsxTempShellModule {}
