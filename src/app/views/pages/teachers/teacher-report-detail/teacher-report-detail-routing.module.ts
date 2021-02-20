import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherReportDetailComponent } from './teacher-report-detail.component';

const routes: Routes = [{ path: '', component: TeacherReportDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherReportDetailRoutingModule { }
