import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items :Item[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items=[
    {
      id:0,
      title:'porron',
      price:250,
      quantity:10,
      completed:true
    },
    {
      id:1,
      title:'tinto',
      price:250,
      quantity:10,
      completed:false
    },
    {
      id:2,
      title:'blanco',
      price:250,
      quantity:10,
      completed:false
    }
  ]
}

}


