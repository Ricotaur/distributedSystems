import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-frontend';
  todos : string[] = ['water plants','read the news','cook something new','work','work harder','','','','','','','','']
}
