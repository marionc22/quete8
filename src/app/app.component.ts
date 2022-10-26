import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onomatopoiaList: Array<String> = ['bouh', 'prout', 'wahouuuuu'];
  onReceiveNewOnomatopia(event: string): void {
this.onomatopoiaList.push(event)
  }
}
