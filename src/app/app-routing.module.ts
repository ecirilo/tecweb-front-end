import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesListComponent } from "./components/bikes/list/bikes-list.component";
import { BikesAddComponent } from "./components/bikes/add/bikes-add.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "@auth0/auth0-angular";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bikes', component: BikesListComponent, canActivate: [AuthGuard] },
  { path: 'bikes/new', component: BikesAddComponent, canActivate: [AuthGuard] },
  { path: 'bikes/:id/edit', component: BikesAddComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
