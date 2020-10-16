import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

 import{SigninComponent} from './components/signin/signin.component';
 import{TasksComponent} from './components/tasks/tasks.component';
 import {AuthGuard} from './auth.guard'

const routes: Routes = [

  {
    //5   ruta inicial 
    path:'',
    redirectTo:'/signin',
    pathMatch: 'full'
  },
  {
    //6
    path:'signin',
    component:SigninComponent
  },
  {
    //6
    path:'tasks',
    component:TasksComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
