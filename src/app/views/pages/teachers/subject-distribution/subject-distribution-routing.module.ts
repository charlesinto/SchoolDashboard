import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectDistributionComponent } from './subject-distribution.component';

const routes: Routes = [{ path: '', component: SubjectDistributionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectDistributionRoutingModule { }
