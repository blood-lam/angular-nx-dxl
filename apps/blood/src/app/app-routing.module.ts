import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  {
    path: 'xlsx',
    pathMatch: 'full',
    loadChildren: () => import('@dxl-angsp/xlsx-temp/shell').then(module => module.XlsxTempShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
