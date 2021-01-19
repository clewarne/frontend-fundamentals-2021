import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseOneComponent, ExerciseTwoComponent } from './components';

const routes: Routes = [
  { path: '', component: ExerciseOneComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
