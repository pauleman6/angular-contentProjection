import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <app-greeting>
      <em>{{greeting}}</em>
      <p>lorem ipsum</p>
    </app-greeting>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  greeting = "Hello Angular!"
}
