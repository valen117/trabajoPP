import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

const routes: Routes = [
  {
    path:'',
    component:ItemsComponent
  },
  {
    path:'add',
    component:AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
