import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseOneComponent, ExerciseTwoComponent, WelcomePageComponent } from './components';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: ExerciseOneComponent },
  { path: 'exercise-2', component: ExerciseTwoComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'welcome', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
