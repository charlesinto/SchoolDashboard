import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersQualificationBySchoolComponent } from './teachers-qualification-by-school.component';

const routes: Routes = [{ path: '', component: TeachersQualificationBySchoolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersQualificationBySchoolRoutingModule { }
