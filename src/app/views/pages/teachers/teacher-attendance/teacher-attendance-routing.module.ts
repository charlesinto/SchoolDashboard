import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherAttendanceComponent } from './teacher-attendance.component';

const routes: Routes = [{ path: '', component: TeacherAttendanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherAttendanceRoutingModule { }
