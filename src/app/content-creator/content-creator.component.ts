import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-content-creator',
  templateUrl: './content-creator.component.html',
  styleUrls: ['./content-creator.component.scss']
})
export class ContentCreatorComponent implements OnInit {
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }
  @Input('getContent') getContent;

  divUnhide(){
    this.isHidden = false;
  }
  save(){
    this.isHidden = true;
  }
}
