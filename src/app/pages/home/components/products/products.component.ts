import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   @Output()columnsCountChange=new EventEmitter<number>()
   @Output()itemsCountChange=new EventEmitter<number>()
   @Output()sortChange=new EventEmitter<string>()

  sort='desc'
   itemsShowCount=12

  constructor() { }
 
  ngOnInit(): void {
  }

 onSortUpdated(newSort:string):void{
  this.sortChange.emit(newSort)
  this.sort=newSort
 }
 
 onItemsUpdated(count:number):void{
  this.itemsCountChange.emit(count)
 }

 onColumnsUpdated(colsNum:number):void{
this.columnsCountChange.emit(colsNum)
}


}
