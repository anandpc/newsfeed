import { Component, OnInit } from '@angular/core';
import { JsonService } from './json-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'newsfeed';
  data1 = [];
  todos = [];

  constructor(private jsonService: JsonService){ }

  ngOnInit(){
    this.jsonService.getData()
    .subscribe(data => this.data1 = data);
    localStorage.setItem('data',JSON.stringify(this.data1));
    this.getDataFromStorage();
  }

  getDataFromStorage(){
    this.todos = JSON.parse(localStorage.getItem('data'));
  }
}