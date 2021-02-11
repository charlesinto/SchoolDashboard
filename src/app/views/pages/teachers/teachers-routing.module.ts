import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  {
    path: 'teachers-by-qualification',
    loadChildren: () =>
      import('./teacher-by-qualification/teacher-by-qualification.module').then(
        (m) => m.TeacherByQualificationModule
      ),
  },
  { path: 'attendance-report', loadChildren: () => import('./teacher-attendance/teacher-attendance.module').then(m => m.TeacherAttendanceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
