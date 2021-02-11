import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolByStateComponent } from './school-by-state.component';

const routes: Routes = [{ path: '', component: SchoolByStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolByStateRoutingModule { }
