import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

 @Input() item:Item= new Item();
 @Output() deleteItem: EventEmitter<Item> =new EventEmitter();
 @Output() toggleItem: EventEmitter<Item> =new EventEmitter();



 ngOnInit():void{
 }

 onDelete(item:Item){
  this.deleteItem.emit(item);
 }

 onToggle(item:Item){
  item.completed= !item.completed
  this.toggleItem.emit(item);

 }
}
