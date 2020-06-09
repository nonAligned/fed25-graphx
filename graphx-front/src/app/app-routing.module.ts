import { CardsListComponent } from './graphic-cards/cards-list/cards-list.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "cards", component: CardsListComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
