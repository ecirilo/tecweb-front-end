import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesListComponent } from "./components/bikes/list/bikes-list.component";
import { BikesAddComponent } from "./components/bikes/add/bikes-add.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bikes', component: BikesListComponent },
  { path: 'bikes/new', component: BikesAddComponent },
  { path: 'bikes/:id/edit', component: BikesAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
