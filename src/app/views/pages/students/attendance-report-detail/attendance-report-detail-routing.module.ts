import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceReportDetailComponent } from './attendance-report-detail.component';

const routes: Routes = [{ path: '', component: AttendanceReportDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceReportDetailRoutingModule { }
