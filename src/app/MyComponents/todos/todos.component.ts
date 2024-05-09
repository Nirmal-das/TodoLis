import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos?:Todo[];
  constructor() {
    this.todos=[{
      sno:1,
      title:"Hero",
      desc:"Good Series",
      active:true
    },
    {
      sno:2,
      title:"Jhonny test",
      desc:"Average Series",
      active:true
    },
    {
      sno:3,
      title:"shinchan",
      desc:"Bad Series",
      active:false
    },
  
  ]
  }

  ngOnInit(): void {

  }

}
export interface Todo{
  sno?:number
  title?:string
  desc?:string
  active?:boolean
}