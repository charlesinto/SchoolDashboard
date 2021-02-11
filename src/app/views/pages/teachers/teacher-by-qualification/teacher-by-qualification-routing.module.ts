import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherByQualificationComponent } from './teacher-by-qualification.component';

const routes: Routes = [{ path: '', component: TeacherByQualificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherByQualificationRoutingModule { }
