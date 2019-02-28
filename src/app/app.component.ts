import { Component, OnInit } from '@angular/core';
import { JsonService } from './json-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'newsfeed';
  todos = [];

  constructor(private jsonService: JsonService){ }

  ngOnInit(){
    this.jsonService.getData()
    .subscribe(data => this.todos = data);
    console.log(this.todos);
  }
}