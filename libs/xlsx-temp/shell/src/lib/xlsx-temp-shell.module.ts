import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { XlsxTempDataAccessModule } from '@dxl-angsp/xlsx-temp/data-access';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { XlsxTempShellComponent } from './components/xlsx-temp-shell/xlsx-temp-shell.component';

@NgModule({
  imports: [
    CommonModule,
    XlsxTempDataAccessModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: XlsxTempShellComponent },
    ]),
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [XlsxTempShellComponent],
})
export class XlsxTempShellModule {}
