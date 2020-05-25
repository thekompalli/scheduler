import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-creator',
  templateUrl: './day-creator.component.html',
  styleUrls: ['./day-creator.component.scss']
})
export class DayCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('getDay') getDay;

  
}
