import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: 
    `
      <h1><ng-content select = "em"></ng-content></h1>
      <div><ng-content select = "p"></ng-content></div>
    `,
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

 // @Input() message: String;
  constructor() { }

  ngOnInit() {
  }

}