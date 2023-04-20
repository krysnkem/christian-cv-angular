import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyexperienceComponent } from './myexperience/myexperience.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'myexperience', component: MyexperienceComponent},
  {path: 'myprojects', component: MyprojectsComponent}
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
