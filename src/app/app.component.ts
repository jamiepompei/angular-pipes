import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;

  onDateChange(value: string){
    this.date = value;
  }

  onNameChange(value: string){
    this.name = value;
  }
}
