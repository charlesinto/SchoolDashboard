import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolLgaComponent } from './school-lga.component';

const routes: Routes = [{ path: '', component: SchoolLgaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolLgaRoutingModule { }
