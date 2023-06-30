import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent{

items:Item[]=[];

ngOnInit():void{
  this.items=[
    {
      id: 0,
      title:'manzana',
      price:10.5,
      quantity:4,
      completed:false,

    },
    {
      id: 0,
      title:'papa',
      price:7,
      quantity:3,
      completed:true,

    },
  ]
}
}
