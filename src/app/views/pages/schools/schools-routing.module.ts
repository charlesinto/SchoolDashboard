import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsComponent } from './schools.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SchoolsComponent },
  { path: 'schools-by-state', loadChildren: () => import('./school-by-state/school-by-state.module').then(m => m.SchoolByStateModule) },
  { path: 'schools-by-lga', loadChildren: () => import('./school-lga/school-lga.module').then(m => m.SchoolLgaModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsRoutingModule {}
