import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsByGenderComponent } from './students-by-gender.component';

const routes: Routes = [{ path: '', component: StudentsByGenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsByGenderRoutingModule { }
