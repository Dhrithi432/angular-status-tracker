import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDescriptionComponent } from './task-description/task-description/task-description.component';

const routes: Routes = [
  {
    path:'taskdescription',
    component: TaskDescriptionComponent
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
