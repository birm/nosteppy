import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // demo for visual design
  // TODO replace when binding data
  filtered_count = 538
  total_count = 1000

}
