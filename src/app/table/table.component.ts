import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // demo for visual design
  // TODO replace when binding data
  fields = ["First Name", "Last Name"]
  rows = [["Alice", "Application"], ["Bob", "Bson"], ["Charlie", "Configurable"]]
}
