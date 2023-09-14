import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AAI';
  links = [
    {path:'/home', label:'home', active:'button-active'},
    {path:'/chat', label:'chat', active:'button-active'},
    {path:'/SignIn', label:'SignIn', active:'button-active'}
  ]
}
