import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import{ DishdetailsComponent } from './dishdetails/dishdetails.component';

const routes: Routes = [
  { path: 'home', component:DishdetailsComponent },
  { path: 'search', component: SearchComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
