import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  headerPos:number = 0;
  ngOnInit() {
  }

  setName(Mobile){

  }

  setPosition(position){
    this.headerPos = position;
  }

}
